import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../actions/productActions";

const Categories = ({categoryList}) => {
    const [active, setActive] = useState(10)
    const dispatch = useDispatch()
    const onCategory = (category, i) =>{
        dispatch(setCategory(category))
        setActive(i)

    }

    let classes = 'text-black font-semibold underline underline-offset-8 font-medium text-gray-600 hover:text-gray-800'

    console.log(categoryList)
    return (
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 pt-1">
            <ol role="list"
                className="px-2 pt-2 sm:pt-0 sm:pb-2 flex whitespace-nowrap items-center space-x-3 overflow-x-auto rounded-3xl max-w-max">
                <p onClick={() => onCategory('all', 111)} className="text-sm font-medium text-gray-50 px-4 py-1.5 bg-black rounded-full mr-2">Категории</p>
                {categoryList.categories.map((item, i) => {

                    return (
                        <li className="text-sm" style={{cursor: 'pointer'}}>
                            <div className="flex items-center">
                                <a onClick={() => onCategory(item.name, i)}
                                                                  className={active === i ? classes : "font-medium text-gray-600 hover:text-gray-800"}> {item.name} </a>
                            </div>
                        </li>
                    )
                })}

            </ol>
        </nav>
    );
};

export default Categories;