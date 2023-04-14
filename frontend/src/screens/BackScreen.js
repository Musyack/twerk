import React from 'react';
import promo from "../assets/img/promo.jpg";

const BackScreen = () => {
    return (
        <div>
            <section className="py-4 sm:py-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-8">
                    <div className="flex sm:py-4">
                        <div className="flex-1 max-w-sm sm:max-w-3xl"><h2
                            className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 sm:text-5xl sm:leading-tight"> Возврат средств<br/> в интернет-магазине</h2></div>
                        <div className="max-w-lg hidden lg:block"><img className="rounded-3xl" src={promo} alt=""/>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 mx-auto my-4 sm:my-12 md:grid-cols-2 md:gap-x-16 gap-y-6 md:gap-y-12">
                        <div><p className="text-lg font-medium text-gray-800 sm:text-xl"> Возврат товара </p><p
                            className="mt-1 text-xs font-normal text-gray-600 sm:mt-2 sm:text-sm">

                            Если по каким-то причинам вам не подошел приобретенный товар, вы можете его вернуть в течение 14 календарных дней связавшись с нами в WhatsApp, указав ID заказа. Также в случае, если вам не подошли характеристики товара, вы можете обменять товар на подходящий из наличия.



                        </p></div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BackScreen;