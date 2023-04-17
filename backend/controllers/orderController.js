import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import TelegramApi from "node-telegram-bot-api"
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const token = '5035718315:AAF68MaBy7EPhIW1l7_22ZnjxSfzyahg6-k'
//1815070047//
// const bot = new TelegramApi(token, {polling: true})
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
      email,
      city,
      deliveryType,
      street,
      phone,
      comment,
      surname,
      uuid


  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    console.log('eee')
    throw new Error('No order items')

  } else {
    const order = new Order({
      orderItems,
      user: '6431c3e977f74535104f33aa',
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      city,
      email,
      phone,
      deliveryType,
      surname,
      street,
      comment,
      uuid
    })



    const createdOrder = await order.save()

    let message = `ID Пользователя: ${uuid}\nИмя: ${surname}\nАдрес: ${city} ${street}\nEmail: ${email}\nКомментарий: ${comment}\nТип доставки: ${deliveryType}\nНомер телефона: ${phone}\nОбщая цена: ${totalPrice}`

    // await bot.sendMessage('1815070047', message)

    res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.find({uuid: req.params.id})
  console.log(req.params.id)

  if (order) {
    console.log(order)
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')
  res.json(orders)
})

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
}
