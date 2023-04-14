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
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Какие способы оплаты
                            возможны? </p><p
                            className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> Оплату заказа в
                            Интернет-магазине принимаем банковскими картами систем Visa (включая Electron), MasterCard,
                            Maestro, МИР. </p></div>
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Какие способы доставки
                            возможны? </p><p
                            className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> Доставка заказов
                            осуществляется в пункты выдачи наших партнёров<br/> Ozon, Yandex, Wildberries</p></div>
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Когда будет отправлен мой
                            заказ? </p><p className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> Срок
                            обработки и отправки заказа, как правило, составляет от одного до двух дней, не считая дня
                            поступления заказа. </p></div>
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Как отследить свой заказ? </p>
                            <p className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm"> После фактической
                                отправки заказа мы отправим вам уведомления в виде SMS с указанием трекинг-номера. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShipScreen;