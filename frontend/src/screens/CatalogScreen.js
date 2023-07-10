import React, {useEffect} from 'react';
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";
import {Link} from "react-router-dom";
import Categories from "../components/Categories";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {Col, Row} from "react-bootstrap";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, listProducts} from "../actions/productActions";


const CatalogScreen = ({match}) => {
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

                    <Categories categoryList={categoryList}/>

                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <Message variant='danger'>{error}</Message>
                    ) : (
                        <>
                            <section className={'py-4'}>
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

        </>
    );
};

export default CatalogScreen;