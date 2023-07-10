import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import {getCategories, listProducts} from '../actions/productActions'
import Categories from "../components/Categories";
import sale from '../assets/img/sale.jpg'
import promo from '../assets/img/m_1.webp'

const   HomeScreen = ({ match }) => {
  const keyword = match.params.keyword


  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, categoryList.category))

  }, [dispatch, keyword, pageNumber, categoryList.category])

  return (
    <>
      <section className={'py-4'}>
        <div className={'px-4 mx-auto max-w-7xl sm:px-8'}>
      <Meta />
      {!keyword ? (
        <>
          <div className="flex sm:py-4">
            <div className="flex-1 max-w-sm sm:max-w-3xl">
              <h2 className="text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 sm:text-5xl sm:leading-tight"> Каркасные
                бассейны<br/>от поставщика с гарантией</h2>
              <p className="pt-3 pb-6 sm:py-10 text-sm sm:text-2xl leading-relaxed text-gray-800"> С бесплатной
                доставкой в пункты выдачи </p>
            </div>
            <div className="max-w-xs hidden lg:block scale-150"><img src={promo} className="rounded-full"/></div>
          </div>

        </>
      ) : (
        <Link to='/' className='btn btn-light'>
          Назад
        </Link>
      )}
      <Categories categoryList={categoryList}/>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <section className="py-4 sm:py-8">
            <div className={'px-4 mx-auto max-w-7xl sm:px-8'}>

              <div className={'grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8'}>


            {products.map((product) => (
                <div className={'relative group'}>
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
                </div>
            ))}

              </div>

              </div>
          </section>


          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
        </div>
      </section>
    </>
  )
}

export default HomeScreen
