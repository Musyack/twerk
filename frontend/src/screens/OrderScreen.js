import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from '../actions/orderActions'
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants'

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()



  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay



  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  const uuid = localStorage.getItem('uuid')
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  useEffect(() => {






    dispatch(getOrderDetails(uuid))
    console.log(order)
  }, [dispatch, orderId, successPay, successDeliver])


  console.log(orderDetails)


  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }


  }

  const successPaymentHandler = (paymentResult) => {

    dispatch(payOrder(orderId, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }


  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>

      <section className="py-4 sm:py-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-8">
          <main className="lg:flex lg:flex-row-reverse">
            <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden rounded-3xl">
              <div data-headlessui-state="" className="max-w-lg mx-auto">
                <div className="flex items-center justify-between">
                  <h2 id="order-heading" className="text-md font-medium text-gray-900"> Итого: ${order[0].itemsPrice} ₽ </h2>
                  <button id="headlessui-disclosure-button-3" type="button" aria-expanded="false"
                          data-headlessui-state="" className="font-medium text-md text-gray-700 hover:text-gray-500"><span>Показать товары</span></button>
                </div>

              </div>
            </section>
            <div style={{paddingLeft: "5%"}} className="mt-10 lg:mt-0 hidden w-full max-w-lg flex-col lg:flex">
              <div className="mt-4 bg-white border border-gray-200 rounded-3xl shadow-sm">
                <ul role="list" className="divide-y divide-gray-200">
                  {order[0].orderItems.map(item => {
                    return (
                        <li className="flex py-6 px-4 sm:px-6">
                          <div className="flex-shrink-0">
                            <img
                                src={item.images[0]}
                                className="w-56 rounded-xl"
                            />
                          </div>
                          <div className="ml-6 flex-1 flex flex-col">
                            <div className="flex">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm"><Link to={`/product/${item.product}`}
                                                           className="font-medium text-gray-700 hover:text-gray-800">{item.name}</Link></h4>

                                <p className="mt-2 text-sm text-gray-500"> С ближайшего склада </p>
                              </div>
                            </div>
                            <div className="flex-1 pt-2 flex items-end justify-between">
                              <p className="mt-1 text-sm font-medium text-gray-700"> Стоимость: {item.price} ₽ </p>
                            </div>
                          </div>
                        </li>
                    )
                  })}
                </ul>
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Всего</dt>
                    <dd className="text-sm font-medium text-gray-900">{order[0].totalPrice} ₽</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Доставка</dt>
                    <dd className="text-sm font-medium text-gray-900"> 0 ₽ <span className="line-through text-gray-500">1499 ₽</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="text-base font-medium">К оплате</dt>
                    <dd className="text-base font-medium text-gray-900">{order[0].totalPrice} ₽</dd>
                  </div>
                </dl>
              </div>
            </div>
            <section aria-labelledby="payment-heading" className="flex-auto overflow-y-auto px-1 py-4 sm:py-0">
              <div className="max-w-xl">
                <div className="max-w-2xl">
                  <p className="mt-2 text-gray-800 text-xl sm:text-4xl font-bold tracking-tight"> Ваш заказ {order[0]._id}</p>
                  <p className="mt-4 text-sm sm:text-base text-gray-500"> С вами свяжется менеджер для уточнения деталей
                    доставки. </p>
                </div>
                <div className="sm:col-span-12 md:col-span-7">
                  <dl className="grid grid-cols-1 gap-y-8 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                    <div>
                      <dt className="font-medium text-gray-900">Адрес доставки</dt>
                      <dd className="text-sm mt-3 text-gray-500 space-y-3"><span
                          className="block">Адрес доставки: {order.city} {order.street}</span><span
                          className="block">Метод доставки: {order.deliveryType}</span></dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900">Данные получателя</dt>
                      <dd className="text-sm mt-3 text-gray-500 space-y-3"><span className="block">Имя и Фамилия: {order.surname}</span><span
                          className="block">Номер телефона: вывывы</span></dd>
                    </div>
                  </dl>
                  <p className="font-medium text-gray-900 mt-6 md:mt-10"> Заказ ожидает подтверждения </p>
                  <div className="mt-6">
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-2 bg-gray-600 rounded-full" style={{width:'calc((1 * 2 + 1) / 8 * 100%)'}}></div>
                    </div>
                    <div className="hidden sm:grid grid-cols-4 font-medium text-gray-600 mt-6">
                      <div className="text-gray-600">Оформлен</div>
                      <div className="text-center text-gray-600">В обработке</div>
                      <div className="text-center">Отгружен</div>
                      <div className="text-right">Доставлен</div>
                    </div>
                  </div>
                </div>
                <div className="my-6 sm:my-12 col-span-2 p-5 border rounded-xl">
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
                  <p className="text-xs sm:text-sm font-normal text-stone-600"> В случае, если вам не подойдет товар -
                    денежные средства вернутся вам в полном обьёме на банковскую карту, с которой вы производили
                    оплату. </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  )
}

export default OrderScreen
