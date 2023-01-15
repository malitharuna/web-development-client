import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
        {
            categories.map(category =>
                <NavLink key={category.category_id} to={`/category/${category.category_id}`} className={({ isActive }) =>
                    isActive
                        ? "text-1xl text-gray-100 block text-start mx-auto mt-2 font-bold border p-3 rounded-lg bg-slate-500"
                        : "text-1xl text-gray-900 block font-bold text-start mx-auto mt-2 border p-3 rounded-lg bg-slate-300 hover:bg-slate-400"
                }>
                    {category.name}
                </NavLink>
            )
        }
    </div>
    );
};

export default Categories;