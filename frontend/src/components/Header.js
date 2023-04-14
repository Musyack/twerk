import React from 'react'
import {Link, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from "../assets/img/logo.png"

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <nav className="max-w-7xl mx-auto px-4 sm:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link to={'/'} className="cursor-pointer inline-flex">
              <img src={logo} className="w-auto h-9" alt=""/>
            </Link>

            <div className="hidden ml-16 space-x-12 md:block">
              <Link to={'/catalog'} className="cursor-pointer transition duration-300 text-base font-medium text-gray-700 hover:opacity-75">
                Каталог
              </Link>
              <Link to={'/ship'}
                 className="router-link-active router-link-exact-active cursor-pointer transition duration-300 text-base font-medium text-gray-700 hover:opacity-75"
                 aria-current="page">Доставка и оплата
              </Link>
              <Link to={'/back'}
                    className="router-link-active router-link-exact-active cursor-pointer transition duration-300 text-base font-medium text-gray-700 hover:opacity-75"
                    aria-current="page">Возврат товара
              </Link>
              <a href={'https://api.whatsapp.com/send?phone=79097020873'}

                      className="router-link-active router-link-exact-active cursor-pointer transition duration-300 text-base font-medium text-gray-700 hover:opacity-75"
                      aria-current="page">Отслеживание товара

              </a>
            </div>
          </div>
          <div className="space-x-4">
            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <div className="flex space-x-2">
                <a href={'https://api.whatsapp.com/send?phone=79097020873'}>
                  <button
                      className="transition duration-300 block py-3 px-3 rounded-full tracking-wide text-base font-medium text-gray-800 hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                         stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                    </svg>
                  </button>
                </a>
                <a href="/cart"
                   className="transition duration-300 hidden sm:block bg-black py-3 px-5 rounded-full tracking-wide text-base font-medium text-white hover:opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="flex-shrink-0 h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                  </svg>
                </a>
                <div data-headlessui-state="" className="block sm:hidden z-50">
                  <div>
                    <a href={'https://api.whatsapp.com/send?phone=79097020873'}>
                      <button id="headlessui-menu-button-1" type="button" aria-haspopup="menu" aria-expanded="false"
                              data-headlessui-state="" className="inline-flex text-gray-800 px-1 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                             stroke="currentColor" className="flex-shrink-0 h-6 w-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>*/}
      {/*  <Container>*/}
      {/*    <LinkContainer to='/'>*/}
      {/*      <Navbar.Brand>ProShop</Navbar.Brand>*/}
      {/*    </LinkContainer>*/}
      {/*    <Navbar.Toggle aria-controls='basic-navbar-nav' />*/}
      {/*    <Navbar.Collapse id='basic-navbar-nav'>*/}
      {/*      <Route render={({ history }) => <SearchBox history={history} />} />*/}
      {/*      <Nav className='ml-auto'>*/}
      {/*        <LinkContainer to='/cart'>*/}
      {/*          <Nav.Link>*/}
      {/*            <a*/}
      {/*               className="transition duration-300 hidden sm:block bg-black py-3 px-5 rounded-full tracking-wide text-base font-medium text-white hover:opacity-75">*/}
      {/*              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"*/}
      {/*                   stroke="currentColor" className="flex-shrink-0 h-5 w-5">*/}
      {/*                <path stroke-linecap="round" stroke-linejoin="round"*/}
      {/*                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>*/}
      {/*              </svg>*/}
      {/*            </a>*/}
      {/*          </Nav.Link>*/}
      {/*        </LinkContainer>*/}
      {/*        {userInfo ? (*/}
      {/*          <NavDropdown title={userInfo.name} id='username'>*/}
      {/*            <LinkContainer to='/profile'>*/}
      {/*              <NavDropdown.Item>Профиль</NavDropdown.Item>*/}
      {/*            </LinkContainer>*/}
      {/*            <NavDropdown.Item onClick={logoutHandler}>*/}
      {/*              Выйти*/}
      {/*            </NavDropdown.Item>*/}
      {/*          </NavDropdown>*/}
      {/*        ) : (*/}
      {/*          <LinkContainer to='/login'>*/}
      {/*            <Nav.Link>*/}
      {/*              <i style={{marginTop: 20}} className='fas fa-user'></i> Войти*/}
      {/*            </Nav.Link>*/}
      {/*          </LinkContainer>*/}
      {/*        )}*/}
      {/*        {userInfo && userInfo.isAdmin && (*/}
      {/*          <NavDropdown title='Admin' id='adminmenu'>*/}
      {/*            <LinkContainer to='/admin/userlist'>*/}
      {/*              <NavDropdown.Item>Пользователи</NavDropdown.Item>*/}
      {/*            </LinkContainer>*/}
      {/*            <LinkContainer to='/admin/productlist'>*/}
      {/*              <NavDropdown.Item>Товары</NavDropdown.Item>*/}
      {/*            </LinkContainer>*/}
      {/*            <LinkContainer to='/admin/orderlist'>*/}
      {/*              <NavDropdown.Item>Заказы</NavDropdown.Item>*/}
      {/*            </LinkContainer>*/}
      {/*          </NavDropdown>*/}
      {/*        )}*/}
      {/*      </Nav>*/}
      {/*    </Navbar.Collapse>*/}
      {/*  </Container>*/}
      {/*</Navbar>*/}
    </header>
  )
}

export default Header
