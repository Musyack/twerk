import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {getCategories, listProductDetails, updateProduct} from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(1)
  const [image, setImage] = useState('')

  const [brand, setBrand] = useState('')
  const [imagesArr, setImagesArr] = useState([])
  const [percent, setPercent] = useState('')
  const [size, setSize] = useState('')

  const onImages = (elem) => {
    let copy = Object.assign([], imagesArr)
    copy.push(elem)
    setImagesArr(copy)

    console.log(imagesArr)
  }

  const [countInStock, setCountInStock] = useState(0)
  const [chars, setChars] = useState([])
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [offer, setOffer] = useState('Новинка')
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const [successChar, setSuccessChar] = useState('')


  const onChars = (e) => {
    e.preventDefault()
    let copy = Object.assign([], chars)
    let obj = {key, value}
    copy.push(obj)
    setChars(copy)
    setSuccessChar('Характеристика успешно добавлена')
  }



  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate
  const [category, setCategory] = useState('')
  useEffect(() => {
    dispatch(getCategories())

    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('http://localhost:5001/api/upload', formData, config)

      setImage(data)
      setUploading(false)
      onImages(data)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        images: imagesArr,
        brand,
        category,
        description,
        countInStock,
        offer,
        chars,
        percent,
        size


      })
    )
  }






  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Изменить Товар</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Введите цену'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>


                  <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder={`Загрузите фото товара`}

                        onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                    <Form.File
                        id='image-file'
                        label='Choose File'
                        custom
                        onChange={uploadFileHandler}
                    ></Form.File>
                    {uploading && <Loader />}
                    <Col>
                      {imagesArr ? imagesArr.map(item => {

                        return (
                            <img style={{width: '100px'}} src={`http://localhost:5001${item}`}/>
                        )
                      }): <div></div>}
                    </Col>
                  </Form.Group>

            <Form.Group controlId='chars'>
              <Form.Label>Характеристики</Form.Label>
            <Row>
              <Col>
                <Form.Control onChange={(e) => setKey(e.target.value)} value={key} type="text" placeholder="Ключ" />
              </Col>
              <Col>
                <Form.Control onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="Значение" />
              </Col>
              <Col>
                <Button onClick={onChars} variant="primary" type="submit">
                  Добавить
                </Button>
              </Col>
              <Col>
                <ol>
                  {chars ? chars.map(item => {
                    return (
                        <li>
                          <p>
                            {item.key}
                          </p>
                          <p>
                            {item.value}
                          </p>
                        </li>
                    )
                  }): <div>

                  </div>}

                </ol>
              </Col>
            </Row>
          </Form.Group>



            <Form.Group controlId='brand'>
              <Form.Label>Бренд</Form.Label>
              <Form.Control
                type='text'
                placeholder='Бренд'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Количество в наличии</Form.Label>
              <Form.Control
                type='number'
                placeholder='Количество в наличии'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <select onChange={(e) => setCategory(e.target.value)}>
              <option selected value={''}>{'Выберите категорию'}</option>
              {categoryList.categories.map((item) => {

                return <option value={item.name}>{item.name}</option>
              })}
            </select>

            <select onChange={(e) => setOffer(e.target.value)}>
              <option value={'Новинка'}>Новинка</option>
              <option value={'Хит Продаж'}>Хит Продаж</option>
              <option value={'Скидка'}>Скидка</option>
            </select>
            <Form.Group controlId='description'>
              <Form.Label>Процент скидки</Form.Label>
              <textarea
                  placeholder='Процент при скидке'
                  value={percent}
                  onChange={(e) => setPercent(e.target.value)}
              ></textarea>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label> Размер</Form.Label>
              <textarea
                  placeholder='Размер'
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
              ></textarea>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Описание</Form.Label>
              <textarea
                placeholder='Описание'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Обновить
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
