import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../redux/CartSlice';
import toast from 'react-hot-toast';

const Product = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products');
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAdd = (item) => {
        dispatch(add(item));
        toast.success('item added');  
    };

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 p-5">
                {products.map((product) => (
                    <div key={product.id} className="card bg-base-100 shadow-xl mx-4 my-4 rounded-md overflow-hidden">
                        <figure className="relative">
                            <img src={product.image} alt={product.title} className="h-48 w-full object-center p-4" />
                            <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2 rounded-bl">
                                <span>NEW</span>
                            </div>
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-sm mb-4">{product.description ? product.description.slice(0, 90) : 'The description is not available'}</p>
                            <p className="text-lg font-bold mb-2">Price: ₹{product.price}</p>
                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => handleAdd(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
