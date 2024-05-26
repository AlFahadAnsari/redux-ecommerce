import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


const Navbar = () => {

    const item = useSelector((state) => state.cart)

    return (
        <div className=''>
            <div className="navbar bg-slate-500 rounded-lg p-4 text-white md:px-28">
                <div className="flex-1">
                <Link to={'/'} className="fa-solid fa-house hover:bg-slate-700 p-4 rounded-lg"></Link>
                 {
                    window.innerWidth >=607 ? <h1 className=" mx-8 disabled text-xl">Alfahad Ansari</h1>:
                    <h1 className=" mx-8 disabled text-xl">Alfahad </h1>
                 }
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                               
                               <Link to={'/cart'} className='text-[20px]'>Cart</Link>

                                <span className="badge badge-sm indicator-item">{item.length}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        </div>

                        <div>
                            
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
    
    )
}

export default Navbar