import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.map(category => <p className='font-bold' key={category.category_id}>
                    <Link to={`category/${category.category_id}`}>
                        {category.name}
                    </Link>
                </p>)   
            }
         
        </div>
    );
};

export default Categories;