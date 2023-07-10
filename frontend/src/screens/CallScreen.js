import React from 'react';
import {Link} from "react-router-dom";

const CallScreen = () => {
    return (
        <div className="">
            <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
                <main
                    className="flex-grow flex flex-col justify-center max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex-shrink-0 flex justify-center">
                        <a href="/" className="inline-flex"><img className="h-72 sm:h-80 w-auto"
                                                                 src="https://shuffle.dev/flaro-assets/images/http-codes/error-code.png"
                                                                 alt=""/></a>
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-2xl font-semibold text-gray-600 uppercase tracking-wide"> Успешно </p>
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-700 tracking-tight"> Заявка
                                оформлена </h1>
                            <p className="mt-6 text-base font-medium text-gray-500"> Ваша заявка принята. Мы свяжемся с
                                Вами в ближайшее время. </p>
                            <div className="mt-12"><Link to="/"
                                                      className="inline-flex items-center justify-center my-2 px-6 py-3 font-medium text-base text-white transition-all duration-200 bg-gray-800 rounded-full shadow hover:shadow-xl">Вернутся
                                на главную страницу</Link></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CallScreen;