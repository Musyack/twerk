import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cards from '../assets/img/cards.png'
import {Link} from "react-router-dom";
import {Modal} from "@mui/material";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";

import {useSpring, animated} from "@react-spring/web";

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

const Footer = () => {
    const history = useHistory()
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [call, setCall] = useState('')
    const [status, setStatus] = useState('')
    const onStatus = (e) => {
        e.preventDefault()
        history.push('/status')
        setOpen3(false)
    }

    const onCall= (e) => {
        e.preventDefault()
        history.push('/call')
        setOpen2(false)
    }

    return (

        <>
            <Modal
                open={open2}
                onClose={() => setOpen2(false)}
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
                <Fade in={open2}>

                <div style={{margin: '15%'}}  className="flex min-h-full items-center justify-center p-4 text-center">
                    <div id="headlessui-dialog-panel-90" data-headlessui-state="open"
                         className="w-full max-w-xs transform overflow-hidden rounded-3xl bg-white p-6 py-5 text-left align-middle shadow-xl transition-all">
                        <h3 id="headlessui-dialog-title-91" data-headlessui-state="open"
                            className="text-lg font-medium leading-6 text-gray-900 pb-2 relative"> Заказать обратный
                            звонок <button onClick={() => setOpen2(false)} className="absolute top-0 right-0" tabIndex="0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button></h3>
                        <form onSubmit={onCall}>
                            <div className="overflow-y-auto">
                                <div className="grid gap-y-4">
                                    <div className="relative">
                                        <input type="tel" placeholder="Номер телефона для связи"
                                               onChange={(e) => setCall(e.target.value)}
                                               value={call}
                                               className="px-2 py-4 block w-full border-transparent rounded-md text-sm focus:border-transparent focus:ring-transparent"
                                               minength="9" maxLength="13" required="true"/>
                                    </div>
                                    <button type={'submit'}
                                        className="inline-flex items-center justify-center px-6 py-3 font-medium text-base text-white transition-all duration-200 bg-gray-800 rounded-full shadow hover:shadow-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                                        </svg>
                                        Свяжитесь со мной
                                    </button>
                                    <span className="py-1 text-center text-gray-800 text-xs"> Отправляя заявку, вы соглашаетесь с условиями обработки персональных данных </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </Fade>

            </Modal>
            <Modal
                open={open3}
                onClose={() => setOpen3(false)}
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
                <Fade in={open3}>

                <div style={{margin: '15%'}}  className="flex min-h-full items-center justify-center p-4 text-center">
                    <div id="headlessui-dialog-panel-46" data-headlessui-state="open"
                         className="w-full max-w-xs transform overflow-hidden rounded-3xl bg-white p-6 py-5 text-left align-middle shadow-xl transition-all">
                        <h3 id="headlessui-dialog-title-47" data-headlessui-state="open"
                            className="text-lg font-medium leading-6 text-gray-900 pb-2 relative"> Отслеживание заказа
                            <button
                                className="absolute top-0 right-0" onClick={() => setOpen3(false)} tabIndex="0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button></h3>
                        <form onSubmit={onStatus}>
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
                                        Посмотреть заказ </button><Link aria-current="page" href="/ship"
                                                                className="p-1 text-center text-gray-800 text-sm"> Где взять номер
                                    заказа? </Link></div>
                            </div>
                        </form>
                    </div>
                </div>
                </Fade>

            </Modal>
            <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:pt-16">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-6 gap-x-6">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img className="w-auto h-6 mt-3"src={cards} alt=""/>
                        <p
                            className="text-xs leading-relaxed text-neutral-500 mt-8"> ООО «Рич Фэмили», ОГРН:
                            1105476051196 <br/> Новосибирск, ул. Королёва, д. 40, к. 40</p></div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase"> Информация </p>
                        <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-neutral-900">
                            <li><Link to={'/ship'}
                                      className="router-link-active router-link-exact-active text-sm transition-all duration-200 hover:opacity-75"
                                      aria-current="page"> Доставка и оплата </Link></li>
                            <li>
                                <button type="button" onClick={() => setOpen3(true)}
                                        className="text-sm transition-all duration-200 hover:opacity-75"> Отслеживание
                                    заказа
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase"> Поддержка </p>
                        <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-neutral-900">
                            <li><a href="https://api.whatsapp.com/send?phone=79150635930" target="_blank"
                                   className="text-sm transition-all duration-200 hover:opacity-75"> Связаться с нами </a>
                            </li>
                            <li>

                                    <button onClick={() => setOpen2(true)} className="text-sm transition-all duration-200 hover:opacity-75"> Обратный звонок
                                    </button>

                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase"> Адреса офисов </p>
                        <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-5 text-neutral-900">
                            <li><a href="#"
                                   className="text-sm transition-all duration-200 hover:opacity-75"> г. Москва, Бизнес-Центр, ул. Бутлерова, 17 </a></li>
                            <li><p className="text-xs text-neutral-700 bg-gray-100 rounded-full inline-flex px-2 py-1">❗️
                                Самовывоз только для юридических лиц </p></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>

  )
}

export default Footer
