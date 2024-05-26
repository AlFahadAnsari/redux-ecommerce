import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setDetails(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAdd = (product) => {
        console.log('Adding to cart:', product);
    
    };

    return (
        <div className="container mx-auto p-4">
            {details ? (
                <div className="product-details bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4 text-center">{details.title}</h1>
                    <div className="flex justify-center mb-4">
                        <img className="w-auto h-52 rounded" src={details.image} alt={details.title} />
                    </div>
                    <p className="mb-4">{details.description}</p>
                    <p className="text-lg font-semibold mb-2 text-red-700">Price: ₹{details.price}</p>
                    <p className="text-sm text-gray-600">Category: {details.category}</p>
                    <button
                        className="btn btn-secondary btn-sm my-5"
                        onClick={() => handleAdd(details)}
                    >
                        Add to Cart
                    </button>
                </div>
            ) : (
                <p className="text-center text-lg">Loading...</p>
            )}
        </div>
    );
}

export default ProductDetails;
