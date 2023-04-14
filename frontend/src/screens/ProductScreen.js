import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')



  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  // const newProduct = JSON.parse(JSON.stringify(product))
  // console.log(newProduct)
  const [currentImage, setCurrentImage] = useState('/images/sample.png')


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {

    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })

    }
  }, [dispatch, match, successProductReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  useEffect(() => {

    if (product.images){
      setCurrentImage(product.images[0])
    }
  }, [product])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  const setImageMain = (i) => {
    setCurrentImage(product.images[i])
  }

  return (
    <>
      {/*<Link className='btn btn-light my-3' to='/'>*/}
      {/*  Назад*/}
      {/*</Link>*/}
      {/*{loading ? (*/}
      {/*  <Loader />*/}
      {/*) : error ? (*/}
      {/*  <Message variant='danger'>{error}</Message>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <Meta title={product.name} />*/}
      {/*    <Row>*/}
      {/*      <Col md={6}>*/}
      {/*        <Image src={product.image} alt={product.name} fluid />*/}
      {/*      </Col>*/}
      {/*      <Col md={3}>*/}
      {/*        <ListGroup variant='flush'>*/}
      {/*          <ListGroup.Item>*/}
      {/*            <h3>{product.name}</h3>*/}
      {/*          </ListGroup.Item>*/}
      {/*          <ListGroup.Item>*/}
      {/*            <Rating*/}
      {/*              value={product.rating}*/}
      {/*              text={`${product.numReviews} отзывов`}*/}
      {/*            />*/}
      {/*          </ListGroup.Item>*/}
      {/*          <ListGroup.Item>Цена: ${product.price}</ListGroup.Item>*/}
      {/*          <ListGroup.Item>*/}
      {/*            Описание: {product.description}*/}
      {/*          </ListGroup.Item>*/}
      {/*        </ListGroup>*/}
      {/*      </Col>*/}
      {/*      <Col md={3}>*/}
      {/*        <Card>*/}
      {/*          <ListGroup variant='flush'>*/}
      {/*            <ListGroup.Item>*/}
      {/*              <Row>*/}
      {/*                <Col>Цена:</Col>*/}
      {/*                <Col>*/}
      {/*                  <strong>{product.price}₽</strong>*/}
      {/*                </Col>*/}
      {/*              </Row>*/}
      {/*            </ListGroup.Item>*/}

      {/*            <ListGroup.Item>*/}
      {/*              <Row>*/}
      {/*                <Col>Статус:</Col>*/}
      {/*                <Col>*/}
      {/*                  {product.countInStock > 0 ? 'В наличии' : 'Не в наличии'}*/}
      {/*                </Col>*/}
      {/*              </Row>*/}
      {/*            </ListGroup.Item>*/}

      {/*            {product.countInStock > 0 && (*/}
      {/*              <ListGroup.Item>*/}
      {/*                <Row>*/}
      {/*                  <Col>Количество</Col>*/}
      {/*                  <Col>*/}
      {/*                    <Form.Control*/}
      {/*                      as='select'*/}
      {/*                      value={qty}*/}
      {/*                      onChange={(e) => setQty(e.target.value)}*/}
      {/*                    >*/}
      {/*                      {[...Array(product.countInStock).keys()].map(*/}
      {/*                        (x) => (*/}
      {/*                          <option key={x + 1} value={x + 1}>*/}
      {/*                            {x + 1}*/}
      {/*                          </option>*/}
      {/*                        )*/}
      {/*                      )}*/}
      {/*                    </Form.Control>*/}
      {/*                  </Col>*/}
      {/*                </Row>*/}
      {/*              </ListGroup.Item>*/}
      {/*            )}*/}

      {/*            <ListGroup.Item>*/}
      {/*              <Button*/}
      {/*                onClick={addToCartHandler}*/}
      {/*                className='btn-block'*/}
      {/*                type='button'*/}
      {/*                disabled={product.countInStock === 0}*/}
      {/*              >*/}
      {/*                Добавить в корзину*/}
      {/*              </Button>*/}
      {/*            </ListGroup.Item>*/}
      {/*          </ListGroup>*/}
      {/*        </Card>*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*    <Row>*/}
      {/*      <Col md={6}>*/}
      {/*        <h2>Отзывы</h2>*/}
      {/*        {product.reviews.length === 0 && <Message>Нет отзывов</Message>}*/}
      {/*        <ListGroup variant='flush'>*/}
      {/*          {product.reviews.map((review) => (*/}
      {/*            <ListGroup.Item key={review._id}>*/}
      {/*              <strong>{review.name}</strong>*/}
      {/*              <Rating value={review.rating} />*/}
      {/*              <p>{review.createdAt.substring(0, 10)}</p>*/}
      {/*              <p>{review.comment}</p>*/}
      {/*            </ListGroup.Item>*/}
      {/*          ))}*/}
      {/*          <ListGroup.Item>*/}
      {/*            <h2>Написать отзыв</h2>*/}
      {/*            {successProductReview && (*/}
      {/*              <Message variant='success'>*/}
      {/*                Отзыв был подтверждён успешно*/}
      {/*              </Message>*/}
      {/*            )}*/}
      {/*            {loadingProductReview && <Loader />}*/}
      {/*            {errorProductReview && (*/}
      {/*              <Message variant='danger'>{errorProductReview}</Message>*/}
      {/*            )}*/}
      {/*            {userInfo ? (*/}
      {/*              <Form onSubmit={submitHandler}>*/}
      {/*                <Form.Group controlId='rating'>*/}
      {/*                  <Form.Label>Рейтинг</Form.Label>*/}
      {/*                  <Form.Control*/}
      {/*                    as='select'*/}
      {/*                    value={rating}*/}
      {/*                    onChange={(e) => setRating(e.target.value)}*/}
      {/*                  >*/}
      {/*                    <option value=''>Выберите...</option>*/}
      {/*                    <option value='1'>1 - Ужасно</option>*/}
      {/*                    <option value='2'>2 - Плохо</option>*/}
      {/*                    <option value='3'>3 - Хорошо</option>*/}
      {/*                    <option value='4'>4 - Очень хорошо</option>*/}
      {/*                    <option value='5'>5 - Отлично</option>*/}
      {/*                  </Form.Control>*/}
      {/*                </Form.Group>*/}
      {/*                <Form.Group controlId='comment'>*/}
      {/*                  <Form.Label>Комментарий</Form.Label>*/}
      {/*                  <Form.Control*/}
      {/*                    as='textarea'*/}
      {/*                    row='3'*/}
      {/*                    value={comment}*/}
      {/*                    onChange={(e) => setComment(e.target.value)}*/}
      {/*                  ></Form.Control>*/}
      {/*                </Form.Group>*/}
      {/*                <Button*/}
      {/*                  disabled={loadingProductReview}*/}
      {/*                  type='submit'*/}
      {/*                  variant='primary'*/}
      {/*                >*/}
      {/*                  Подтвердить*/}
      {/*                </Button>*/}
      {/*              </Form>*/}
      {/*            ) : (*/}
      {/*              <Message>*/}
      {/*                Пожалуйста <Link to='/login'>войдите</Link> чтобы написать отзыв{' '}*/}
      {/*              </Message>*/}
      {/*            )}*/}
      {/*          </ListGroup.Item>*/}
      {/*        </ListGroup>*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  </>*/}
      {/*)}*/}
      {loading ? (<Loader/>) :
          (
              <section className="py-4 sm:py-8">
                <Link className='btn btn-light my-3' to='/'>
                  Назад
                </Link>
                <div className="px-4 mx-auto max-w-7xl sm:px-8">
                  <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 lg:items-start">

                    <div className="flex flex-col-reverse col-span-3">
                      <div
                          className="my-4 center relative max-w-max bg-gray-50 border border-gray-200 opacity-90 px-4 py-2.5 rounded-3xl">
                        <div role="tablist" aria-orientation="horizontal" className="flex space-x-3">
                          {product.images ? product.images.map((image, i) => {
                            return (
                                <button id="headlessui-tabs-tab-99" role="tab" type="button" aria-selected="true" tabIndex="0"
                                        onClick={() => setImageMain(i)}
                                        data-headlessui-state="selected"
                                        className="relative h-6 w-6 sm:h-9 sm:w-9 bg-white rounded-3xl flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer"
                                        aria-controls="headlessui-tabs-panel-108"><span className="absolute inset-0"><img
                                    src={image}
                                    alt="" className="w-full h-full object-center object-cover rounded-full"/></span><span
                                    className="ring-gray-900 absolute inset-0 rounded-full ring-2 transition duration-300"
                                    aria-hidden="true"></span></button>
                            )
                          }) : <Loader/>}

                        </div>
                      </div>
                      <div className="w-full aspect-video">
                        {
                          product.images ? (
                              <div id="headlessui-tabs-panel-108" role="tabpanel" tabIndex="0" data-headlessui-state="selected"
                                   aria-labelledby="headlessui-tabs-tab-99">
                                <img
                                  src={currentImage}
                                  alt={'www'}
                                  className="w-full h-full object-center object-cover rounded-3xl"/></div>
                          ) : <Loader/>
                        }

                      </div>
                    </div>
                    <div className="px-2 col-span-2">
                      <div className="flex justify-between py-3">
                        <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                        <p className="text-xl font-medium text-gray-900">{product.price} ₽ </p>
                      </div>
                      <div className="py-2">
                        <h3 className="py-2 text-sm font-medium text-gray-800">Описание</h3>
                        <div className="text-base text-gray-600 space-y-1.5">
                          <p className="text-xs sm:text-sm"></p>
                        </div>
                        <p className="text-sm pt-4">{product.description}</p>
                      </div>
                      <div className="py-2">
                        <h3 className="py-2 text-sm font-medium text-gray-800"> Харестеристики </h3>
                        <div className="text-base text-gray-600 space-y-1.5">
                          {product.chars ? product.chars.map(item => {
                            return (
                                <div className="text-xs sm:text-sm flex justify-between">
                                  <dt className="font-medium">{item.key}</dt>
                                  <dd className="text-gray-800">{item.value}</dd>
                                </div>
                            )
                          }) : <Loader/>}


                        </div>
                      </div>

                      <div className="py-9">
                        <button onClick={addToCartHandler}
                                disabled={product.countInStock === 0}
                                className="w-full flex items-center transition duration-300 justify-center bg-gray-800 text-gray-50 rounded-2xl py-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="flex-shrink-0 h-5 w-5 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                          </svg>
                          Добавить в корзину
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
          )}
    </>
  )
}

export default ProductScreen
