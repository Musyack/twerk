import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  useEffect(() => {
    console.log(product.offer)
  })
  return (
    <Card className='my-3 p-3 rounded'>
      {/*<Link to={`/product/${product._id}`}>*/}
      {/*  <Card.Img src={product.image} variant='top' />*/}
      {/*</Link>*/}
      {/*  <div className={'line'}></div>*/}
      {/*<Card.Body>*/}
      {/*  <Link to={`/product/${product._id}`}>*/}
      {/*    <Card.Title as='div'>*/}
      {/*      <strong>{product.name}</strong>*/}
      {/*    </Card.Title>*/}
      {/*  </Link>*/}
      {/*    <div className={'line'}></div>*/}
      {/*  <Card.Text as='div'>*/}
      {/*    <Rating*/}
      {/*      value={product.rating}*/}
      {/*      text={`${product.numReviews} отзывов`}*/}
      {/*    />*/}
      {/*  </Card.Text>*/}
      {/*    <div className={'line'}></div>*/}

      {/*  <Card.Text as='h3'>{product.price}₽</Card.Text>*/}
      {/*</Card.Body>*/}

      <div className="relative group">
        <div className="rounded-3xl transition-all duration-300 group-hover:opacity-75"><img
            src={`https://myprivetemessage.ru${product.images[0]}`}
            className="h-full w-full rounded-3xl"/></div>
        <div className="absolute left-3 top-12">
          <p className="sm:px-3 sm:py-1.5 px-2 py-1 text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full inline-flex">{product.offer} </p>
        </div>
        <div className="absolute left-3 top-3">
          <p className="sm:px-3 sm:py-1.5 px-2 py-1 text-xs font-bold tracking-wide text-gray-50 uppercase bg-black rounded-full inline-flex"> В
            наличии </p>
        </div>

        <div className="mt-4 px-2 flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-700">
              <Link to={`/product/${product._id}`}>
              {product.name}<span className="absolute inset-0" aria-hidden="true"></span>

              </Link>
            </h3>
            </div>
          <p className="text-sm font-semibold text-gray-900">{product.price} ₽ </p>
        </div>
      </div>
    </Card>
  )
}

export default Product
