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
import promo from '../assets/img/promo.jpg'

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
      <Meta />
      {!keyword ? (
        <>
          <div className="flex sm:py-4">
            <div className="flex-1 max-w-sm sm:max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 sm:text-5xl sm:leading-tight"> Обновите
                интерьер <br/>в своей квартире</h2>
              <p className="py-4 sm:py-10 text-base sm:text-2xl leading-relaxed text-gray-800"> С бесплатной доставкой в
                пункты выдачи </p>
            </div>
            <div className="max-w-lg hidden lg:block"><img src={promo}/></div>
          </div>
          <img className={'w-full max-w-7xl mx-auto mt-3 mb-8 rounded-3xl shadow-md'} src={sale} alt={'sale'}/>

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
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
