import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/CartSlice';
import { Link } from 'react-router-dom'; // Import Link if you haven't already
import toast from 'react-hot-toast';

const AddToCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handleRemove = (id) => {
        dispatch(remove(id));
           toast.success('item Remove Successful');  
    }

    const handleClearCart = () => {
        cartItems.forEach(item => dispatch(remove(item.id)));
    }

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            {
                cartItems.length === 0 ? (
                    <div className='text-center'>
                        <h1>Your Cart is Empty</h1>
                        <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
                    </div>
                ) : (
                    <div>
                        <div className='grid gap-7'>
                            {cartItems.map((item) => (
                                <div key={item.id} className='flex items-center bg-gray-100 p-7 rounded-lg '>
                                    <img src={item.image} alt={item.title} className='w-28 h-28 object-cover rounded-md mx-5' />
                                    <div className="">
                                        <h5 className='text-lg font-semibold'>{item.title}</h5>
                                        <h5 className='text-red-500 my-2'>Price: ₹{item.price}</h5>
                                        <button className="btn btn-warning btn-sm" onClick={() => handleRemove(item.id)}>remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="container text-center my-5" style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <button className='btn btn-warning mx-5'>CheckOut</button>
                            <button onClick={handleClearCart} className='btn btn-danger'>Clear Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AddToCart;