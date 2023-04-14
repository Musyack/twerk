import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cards from '../assets/img/cards.png'
import {Link} from "react-router-dom";
const Footer = () => {
  return (

        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:pt-16">
            <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-6 gap-x-6">
                <div className="hidden sm:block col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8"><img
                    className="w-auto h-6 mt-3" src={cards} alt=""/>
                    <p className="text-xs leading-relaxed text-neutral-500 mt-8"> ООО "Модерн", ОГРН: 1037821055876
                        <br/> 196084, город Казань, Киевская улица, дом 3</p>
                </div>
                <div>
                    <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase"> Информация </p>
                    <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-neutral-900">
                        <li><Link to={'/ship'}
                               className="router-link-active router-link-exact-active text-sm transition-all duration-200 hover:opacity-75"
                               aria-current="page"> Доставка и оплата </Link></li>
                        <li>
                            <a href={'https://api.whatsapp.com/send?phone=79097020873'}>
                                <button type="button"
                                        className="text-sm transition-all duration-200 hover:opacity-75"> Отслеживание
                                    заказа
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase"> Поддержка </p>
                    <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-neutral-900">
                        <li><a href="https://api.whatsapp.com/send?phone=79097020873" target="_blank"
                               className="text-sm transition-all duration-200 hover:opacity-75"> Связаться с нами </a>
                        </li>
                        <li>
                            <Link to={'/back'}>
                                <button className="text-sm transition-all duration-200 hover:opacity-75"> Оформить возврат
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase"> Адреса офисов </p>
                    <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-5 text-neutral-900">
                        <li><a href="https://yandex.ru/maps/-/CCUVz6EC0A" target="_blank"
                               className="text-sm transition-all duration-200 hover:opacity-75"> Санкт-Петербург,
                            Киевская улица, дом 3 </a></li>
                        <li>
                            <p className="text-sm text-neutral-500"> Режим работы – с 10:00 до 20:00, ежедневно </p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

  )
}

export default Footer
