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
                categories.map(category => <p key={category.category_id}>
                    <Link>{}</Link>
                </p>
                    // <NavLink key={category.category_id} to={`/categories/`}>
                    //     <ol className='font-semibold'>
                    //         <li>{category.name}</li>
                    //     </ol>
                    // </NavLink>
                    ) 
            }
         
        </div>
    );
};

export default Categories;