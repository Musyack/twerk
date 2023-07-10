import React from 'react';
import {Link} from "react-router-dom";

const StatusScreen = () => {
    return (
        <div className="">
            <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
                <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex-shrink-0 flex justify-center"><img className="h-36 sm:h-72 w-auto"
                                                                            src="https://shuffle.dev/flaro-assets/images/http-codes/illustration.png"
                                                                            alt=""/></div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-2xl font-semibold text-gray-600 uppercase tracking-wide"> Ошибка </p>
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-700 tracking-tight"> Заказ еще не
                                подтверждён. </h1>
                            <p className="mt-6 text-base font-medium text-gray-500"> Пожалуйста ожидайте звонка от
                                менеджера Whatsapp. </p>
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

export default StatusScreen;