import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import {USER_DETAILS_RESET} from "../constants/userConstants";
import {ORDER_CREATE_RESET} from "../constants/orderConstants";
import {createOrder} from "../actions/orderActions";
import { v4 as uuidv4 } from 'uuid';
import Loader from "../components/Loader";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cart)

  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [surname, setSurname] = useState('')
  const [comment, setComment] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [deliveryType, setDeliveryType] = useState('Ozon')
  const unique = uuidv4()
  localStorage.setItem('uuid', unique)
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }



  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
      cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.20 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice =  Number(cart.itemsPrice)


  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate



  let totalPrice = 0

  const placeOrderHandler = (e) => {
    e.preventDefault()

    dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: totalPrice,
          email,
          deliveryType,
          comment,
          phone,
          city,
          street,
          surname,
          uuid: unique
        })
    )

      history.push(`/order/${unique}`)

  }
  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      {/*<Col md={8}>*/}
      {/*  <h1>Shopping Cart</h1>*/}
      {/*  {cartItems.length === 0 ? (*/}
      {/*    <Message>*/}
      {/*      Ваша корзина пуста <Link to='/'>Назад</Link>*/}
      {/*    </Message>*/}
      {/*  ) : (*/}
      {/*    <ListGroup variant='flush'>*/}
      {/*      {cartItems.map((item) => (*/}
      {/*        <ListGroup.Item key={item.product}>*/}
      {/*          <Row>*/}
      {/*            <Col md={2}>*/}
      {/*              <Image src={item.image} alt={item.name} fluid rounded />*/}
      {/*            </Col>*/}
      {/*            <Col md={3}>*/}
      {/*              <Link to={`/product/${item.product}`}>{item.name}</Link>*/}
      {/*            </Col>*/}
      {/*            <Col md={2}>${item.price}</Col>*/}
      {/*            <Col md={2}>*/}
      {/*              <Form.Control*/}
      {/*                as='select'*/}
      {/*                value={item.qty}*/}
      {/*                onChange={(e) =>*/}
      {/*                  dispatch(*/}
      {/*                    addToCart(item.product, Number(e.target.value))*/}
      {/*                  )*/}
      {/*                }*/}
      {/*              >*/}
      {/*                {[...Array(item.countInStock).keys()].map((x) => (*/}
      {/*                  <option key={x + 1} value={x + 1}>*/}
      {/*                    {x + 1}*/}
      {/*                  </option>*/}
      {/*                ))}*/}
      {/*              </Form.Control>*/}
      {/*            </Col>*/}
      {/*            <Col md={2}>*/}
      {/*              <Button*/}
      {/*                type='button'*/}
      {/*                variant='light'*/}
      {/*                onClick={() => removeFromCartHandler(item.product)}*/}
      {/*              >*/}
      {/*                <i className='fas fa-trash'></i>*/}
      {/*              </Button>*/}
      {/*            </Col>*/}
      {/*          </Row>*/}
      {/*        </ListGroup.Item>*/}
      {/*      ))}*/}
      {/*    </ListGroup>*/}
      {/*  )}*/}
      {/*</Col>*/}
      {/*<Col md={4}>*/}
      {/*  <Card>*/}
      {/*    <ListGroup variant='flush'>*/}
      {/*      <ListGroup.Item>*/}
      {/*        <h2>*/}
      {/*          Всего ({cartItems.reduce((acc, item) => acc + item.qty, 0)})*/}
      {/*          товаров*/}
      {/*        </h2>*/}
      {/*        $*/}
      {/*        {cartItems*/}
      {/*          .reduce((acc, item) => acc + item.qty * item.price, 0)*/}
      {/*          .toFixed(2)}*/}
      {/*      </ListGroup.Item>*/}
      {/*      <ListGroup.Item>*/}
      {/*        <Button*/}
      {/*          type='button'*/}
      {/*          className='btn-block'*/}
      {/*          disabled={cartItems.length === 0}*/}
      {/*          onClick={checkoutHandler}*/}
      {/*        >*/}
      {/*          Перейти к оплате*/}
      {/*        </Button>*/}
      {/*      </ListGroup.Item>*/}
      {/*    </ListGroup>*/}
      {/*  </Card>*/}
      {/*</Col>*/}
      <main>
        <div className="">
          <section className="py-4 sm:py-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-8">
              <main className="lg:flex lg:flex-row-reverse">
                <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden rounded-3xl">
                  <div data-headlessui-state="" className="max-w-lg mx-auto">
                    <div className="flex items-center justify-between">
                      <h2 id="order-heading" className="text-md font-medium text-gray-900"> К оплате: 15999 ₽ </h2>
                      <button id="headlessui-disclosure-button-3" type="button" aria-expanded="false"
                              data-headlessui-state=""
                              className="font-medium text-md text-gray-700 hover:text-gray-500">
                        <span>Показать товары</span></button>
                    </div>
                  </div>
                </section>
                <div style={{paddingLeft: '10%'}} className="mt-10 lg:mt-0 hidden w-full max-w-xl flex-col lg:flex">
                  <h2 className="text-lg font-medium text-gray-900">Информация о заказе</h2>
                  <div className="mt-4 bg-white border border-gray-200 rounded-3xl shadow-sm">
                    <ul role="list" className="divide-y divide-gray-200">
                      {cartItems ? cartItems.map((item, i) => {
                        totalPrice = parseInt(item.price) + totalPrice
                         return (
                             <li className="flex py-6 px-4 sm:px-6">
                               <div className="flex-shrink-0"><img
                                   src={`https://myprivetemessage.ru${item.images[0]}`}
                                   className="w-56 rounded-xl"/></div>
                               <div className="ml-6 flex-1 flex flex-col">
                                 <div className="flex">
                                   <div className="min-w-0 flex-1">
                                     <h4 className="text-sm"><Link to={`/product/${item.product}`}
                                                                className="font-medium text-gray-700 hover:text-gray-800">{item.name}</Link></h4>

                                     <p className="mt-2 text-sm text-gray-500"> С ближайшего склада </p>
                                   </div>
                                   <div className="ml-4 flex-shrink-0 flow-root">
                                     <button onClick={() => removeFromCartHandler(item.product)}
                                         className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                         <path strokeLinecap="round" strokeLinejoin="round"
                                               d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                       </svg>
                                     </button>
                                   </div>
                                 </div>
                                 <div className="flex-1 pt-2 flex items-end justify-between">
                                   <p className="mt-1 text-sm font-medium text-gray-700"> Стоимость: {item.price} ₽ </p>
                                 </div>
                               </div>
                             </li>
                         )
                      }) : <Loader/>}
                    </ul>
                    <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Всего</dt>
                        <dd className="text-sm font-medium text-gray-900">{totalPrice} ₽</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Доставка</dt>
                        <dd className="text-sm font-medium text-gray-900"> 0 ₽ <span
                            className="line-through text-gray-500">1499 ₽</span></dd>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <dt className="text-base font-medium">К оплате</dt>
                        <dd className="text-base font-medium text-gray-900">{totalPrice} ₽</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <section aria-labelledby="payment-heading" className="flex-auto overflow-y-auto px-1 py-4 sm:py-0">
                  <div className="max-w-xl">
                    <form onSubmit={placeOrderHandler}>
                      <div className="bg-white space-y-5">
                        <h3 className="text-lg font-medium text-gray-900"> Информация для доставки </h3>
                        <h4 className="text-md font-normal text-stone-800"> Адрес доставки </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2 sm:col-span-1">
                            <input type="text" required="" placeholder="Город" value={city} onChange={(e) => setCity(e.target.value)}
                                   className="transition duration-200 block w-full border border-stone-200 rounded-xl p-3.5 focus:outline-none focus:border-amber-300 focus:ring-amber-300 text-sm"/>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <input type="text" required="" placeholder="Улица, дом" value={street} onChange={(e) => setStreet(e.target.value)}
                                   className="transition duration-200 block w-full border border-stone-200 rounded-xl p-3.5 focus:outline-none focus:border-amber-300 focus:ring-amber-300 text-sm"/>
                          </div>
                        </div>
                        <h4 className="text-md font-normal text-stone-800"> Данные получателя </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2 sm:col-span-1">
                            <input type="text" required="" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Имя и Фамилия"
                                   className="transition duration-200 block w-full border border-stone-200 rounded-xl p-3.5 focus:outline-none focus:border-amber-300 focus:ring-amber-300 text-sm"/>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <input type="number" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)}
                                   className="transition duration-200 block w-full border border-stone-200 rounded-xl p-3.5 focus:outline-none focus:border-amber-300 focus:ring-amber-300 text-sm"
                                   minLength="9" maxLength="14" required=""/>
                          </div>
                        </div>
                        <h4 className="text-md font-normal text-stone-800"> Необязательные данные </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2 sm:col-span-1">
                            <input type="email" placeholder="Ваш email" value={email} onChange={(e) => setEmail(e.target.value)}
                                   className="transition duration-200 block w-full border border-stone-200 rounded-xl p-3.5 focus:outline-none focus:border-amber-300 focus:ring-amber-300 text-sm"/>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <input type="text" placeholder="Комментарий к заказу" value={comment} onChange={(e) => setComment(e.target.value)}
                                   className="transition duration-200 block w-full border border-stone-200 rounded-xl p-3.5 focus:outline-none focus:border-amber-300 focus:ring-amber-300 text-sm"/>
                          </div>
                        </div>
                        <div  id="headlessui-radiogroup-5" role="radiogroup"
                             aria-labelledby="headlessui-label-6">
                          <label id="headlessui-label-6" className="text-lg font-medium text-gray-900"
                                 role="none"> Варианты доставки </label>
                          <p className="my-4 text-xs text-gray-500 font-medium" role="none"> Бесплатная доставка до 16
                            февраля </p>
                          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4" role="none">

                            <div onClick={() => setDeliveryType('Ozon')}
                                 style={deliveryType === "Ozon" ? {border: '1px solid rgb(156 163 175)'}: {borderColor: 'black'}}
                                className="relative rounded-xl shadow-sm p-4 flex cursor-pointer focus:outline-none transition duration-200"
                                id="headlessui-radiogroup-option-10" role="radio" aria-checked="false" tabIndex="-1"
                                data-headlessui-state="" aria-labelledby="headlessui-label-11"
                                aria-describedby="headlessui-description-12">
                              <div className="flex-1 flex">
                                <div className="flex flex-col"><span id="headlessui-label-11"
                                                                     className="block text-sm font-medium text-gray-900">Ozon</span><span
                                    id="headlessui-description-12"
                                    className="mt-1 flex items-center text-sm text-gray-500">Доставка от 4 дней</span>
                                </div>
                              </div>
                            </div>
                            <div onClick={() => setDeliveryType('Yandex')}
                                 style={deliveryType === "Yandex" ? {border: '1px solid rgb(156 163 175)'}: {borderColor: 'black'}}
                                className="relative rounded-xl shadow-sm p-4 flex cursor-pointer focus:outline-none transition duration-200"

                                id="headlessui-radiogroup-option-13" role="radio" aria-checked="false" tabIndex="-1"
                                data-headlessui-state="" aria-labelledby="headlessui-label-14"
                                aria-describedby="headlessui-description-15">
                              <div className="flex-1 flex">
                                <div className="flex flex-col"><span id="headlessui-label-14"
                                                                     className="block text-sm font-medium text-gray-900">Yandex</span><span
                                    id="headlessui-description-15"
                                    className="mt-1 flex items-center text-sm text-gray-500">Доставка от 6 дней</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                              type={'submit'}
                          className="my-8 sm:my-12 w-full bg-gray-800 border border-transparent rounded-full shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-900"> Подтвердить
                        заказ

                      </button>
                    </form>
                    <div className="col-span-2 p-5 border rounded-xl">
                      <div className="flex mb-2">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="mt-0 sm:mt-1 mr-2" stroke=""
                             strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                               style={{width: '18px', height: '18px', stroke: 'rgb(33, 33, 33)'}}>
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <h3 className="text-sm sm:text-base font-medium text-stone-800 font-pj"> Товар с возможностью
                          возврата </h3></div>
                      <p className="text-xs sm:text-sm font-normal text-stone-600 font-pj"> В случае, если вам не
                        подойдет товар - денежные средства вернутся вам в полном обьёме на банковскую карту, с которой
                        вы производили оплату. </p>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </section>
        </div>
      </main>
    </Row>
  )
}

export default CartScreen
