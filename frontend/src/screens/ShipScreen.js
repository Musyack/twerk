import React from 'react';
import promo from '../assets/img/promo.jpg'
const ShipScreen = () => {
    return (
        <div>
            <section className="py-4 sm:py-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-8">
                    <div className="flex sm:py-4">
                        <div className="flex-1 max-w-sm sm:max-w-3xl"><h2
                            className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 sm:text-5xl sm:leading-tight"> Доставка
                            и оплата<br/> в интернет-магазине</h2><p
                            className="py-4 sm:py-10 text-base sm:text-2xl leading-relaxed text-gray-800"> Условия
                            оплаты и доставки по России </p></div>
                        <div className="max-w-lg hidden lg:block"><img className="rounded-3xl" src={promo} alt=""/>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 mx-auto my-4 sm:my-12 md:grid-cols-2 md:gap-x-16 gap-y-6 md:gap-y-12">
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Как и каким образом производится оплата заказа?
                        </p><p
                            className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> Оплата заказа производится напрямую на сайте выбранного при заказе маркетплейса. Денежные средства за Ваш заказ мы получаем по истечению 14 дней с момента получения Вами товара в пункте выдачи заказов маркетплейса.

                            На самих маркетплейсах доступны все виды электронной оплаты банковской картой. </p></div>
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Какие способы доставки
                            возможны? </p><p
                            className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> Доставка Ваших заказов осуществляется через наших партнёров - крупнейшие маркетплейсы OZON, Yandex Market.</p></div>
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Когда будет отправлен мой
                            заказ? </p><p className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> Ваш заказ будет отправлен в течение 2-х дней с момента оформления и подтверждения заказа.

                            Сроки доставки товара по всей России - от 2-х до 7 дней.

                            Срок доставки зависит от региона проживания покупателя.</p></div>
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Как отследить свой заказ? </p>
                            <p className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm">После отправки Вашего товара со склада маркетплейса, Вы получите уведомление и заказ будет отображаться в Вашем личном кабинете. </p>
                        </div>
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Гарантия на товар?
                        </p><p
                            className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> На весь перечень продукции, представленной в нашем интернет магазине, предоставляется гарантия от 12 до 36 месяцев, в зависимости от производителя.

                            В рамках гарантийного срока Вы можете связаться с менеджером и вернуть товар или обменять его на новый.</p></div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShipScreen;