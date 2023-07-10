import React, {useState} from 'react'
import {Link, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from "../assets/img/logo.png"
import {Box, Modal, Typography} from "@mui/material";
import { useHistory } from "react-router-dom";
import {useSpring, animated} from "@react-spring/web";
import PropTypes from "prop-types";
import Backdrop from '@mui/material/Backdrop';


const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
      <animated.div ref={ref} style={style} className={''} {...other}>
        {React.cloneElement(children, { onClick })}
      </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {

  transform: 'translate(-50%, -50%)',

};
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useHistory();

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = React.useState(false);
  const [status, setStatus] = useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logoutHandler = () => {
    dispatch(logout())
  }
  const onGood = (e) => {
    e.preventDefault()
    navigate.push('/status')
    setOpen1(false)
  }

  return (
    <header>
      <p className="p-2 bg-black text-center text-gray-50 font-medium text-sm">Бесплатная доставка до 17 июля!</p>
      <Modal
          open={open1}
          onClose={() => setOpen1(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition

          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              TransitionComponent: Fade,
            },
          }}

      >
        <Fade in={open1}>

        <div style={{margin: '20%'}} className="flex min-h-full items-center justify-center p-4 text-center">
          <div id="headlessui-dialog-panel-46" data-headlessui-state="open"
               className="w-full max-w-xs transform overflow-hidden rounded-3xl bg-white p-6 py-5 text-left align-middle shadow-xl transition-all">
            <h3 id="headlessui-dialog-title-47" data-headlessui-state="open"
                className="text-lg font-medium leading-6 text-gray-900 pb-2 relative"> Отслеживание заказа
              <button
                className="absolute top-0 right-0 " onClick={() => setOpen1(false)} tabIndex="0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button></h3>
            <form onSubmit={onGood}>
              <div className="overflow-y-auto">
                <div className="grid gap-y-4">
                  <div className="relative">
                    <input type="text" required="true" placeholder="Номер заказа"
                           onChange={(e) => setStatus(e.target.value)}
                           value={status}
                           className="px-2 py-3 block w-full border-transparent rounded-md text-sm focus:border-transparent focus:ring-transparent"/>
                  </div>
                  <button type={'submit'}
                     className="inline-flex items-center justify-center px-6 py-3 font-medium text-base text-white transition-all duration-200 bg-gray-800 rounded-full shadow hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                         stroke="currentColor" className="w-5 h-5 mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"></path>
                    </svg>
                    Посмотреть заказ </button><Link aria-current="page" to="/ship"
                                            className="p-1 text-center text-gray-800 text-sm"> Где взять номер
                  заказа? </Link></div>
              </div>
            </form>
          </div>
        </div>
      </Fade>

    </Modal>

      <nav className="max-w-7xl mx-auto px-4 sm:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link to={'/'} className="cursor-pointer inline-flex">
              <span class="uppercase font-bold text-gray-900 py-2 rounded-xl">roomshoper.com</span>
            </Link>

            <div className="hidden ml-16 space-x-12 md:block">
              <Link to={'/catalog'} className="cursor-pointer transition duration-300 text-base font-medium text-gray-700 hover:opacity-75">
                Каталог
              </Link>
              <Link to={'/ship'}
                 className="router-link-active router-link-exact-active cursor-pointer transition duration-300 text-base font-medium text-gray-700 hover:opacity-75"
                 aria-current="page">Доставка и оплата
              </Link>
              <a href={'#'} onClick={() => setOpen1(true)}
                    className="router-link-active router-link-exact-active cursor-pointer transition duration-300 text-base font-medium text-gray-700 hover:opacity-75"
                    aria-current="page">Отслеживание заказа
              </a>

            </div>
          </div>
          <div className="space-x-4">
            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <div className="flex space-x-2">
                <Link to="/cart"
                   className="transition duration-300 hidden sm:block bg-black py-3 px-5 rounded-full tracking-wide text-base font-medium text-white hover:opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="flex-shrink-0 h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                  </svg>
                </Link>
                <div data-headlessui-state="" className="block sm:hidden z-50">
                  <div onClick={() => setOpen(!open)}>
                    <button id="headlessui-menu-button-1" type="button" aria-haspopup="menu" aria-expanded="false"
                            data-headlessui-state="" className="inline-flex text-gray-800 px-1 py-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                           stroke="currentColor" className="flex-shrink-0 h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                      </svg>
                    </button>
                  </div>
                  <div style={{display: open ? 'block': 'none'}} aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-2" role="menu" tabIndex="0"
                       data-headlessui-state="open"
                       className="absolute right-0 my-2 w-60 origin-top-right divide-y divide-gray-100 rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1.5 px-3" role="none">
                      <Link to="/cart" className="text-gray-900 group flex w-full items-center p-3 text-sm"
                         disabled="false" id="headlessui-menu-item-3" role="menuitem" tabIndex="-1"
                         data-headlessui-state="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                             stroke="currentColor" className="w-5 h-5 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                        </svg>
                        Корзина </Link>
                      <Link to="/catalog"
                         className="text-gray-900 group flex w-full items-center p-3 text-sm" disabled="false"
                         id="headlessui-menu-item-4" role="menuitem" tabIndex="-1" data-headlessui-state="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                             stroke="currentColor" className="w-5 h-5 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"></path>
                        </svg>
                        Наш каталог </Link>
                      <Link to="/ship" className="text-gray-900 group flex w-full items-center p-3 text-sm"
                         disabled="false" id="headlessui-menu-item-5" role="menuitem" tabIndex="-1"
                         data-headlessui-state="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                             stroke="currentColor" className="w-5 h-5 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
                        </svg>
                        Доставка и оплата </Link>
                    </div>
                    <div className="py-1.5 px-3" role="none">
                      <Link to="/back" target="_blank"
                         className="text-gray-900 group flex w-full items-center p-3 text-sm" disabled="false"
                         id="headlessui-menu-item-6" role="menuitem" tabIndex="-1" data-headlessui-state="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                             stroke="currentColor" className="w-5 h-5 mr-2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path>
                        </svg>
                        Возврат средств </Link>



                    </div>
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
