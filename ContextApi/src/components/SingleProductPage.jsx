import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../main';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { cartMethod } from '../redux/cartSlice';

function SingleProductPage() {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const dispatch = useDispatch()
    const fetchSingleProductDetail = async () => {
        try {
            const {data} = await axiosInstance.get(`/products/${id}`);
            console.log(data)
            setProduct((prev)=>prev=data)
        } catch (error) {
            alert("something went wrong")
        }
    }
    const handleAddToCart = ()=>{
        dispatch(cartMethod({product,type:'add'}));
        toast.success("Added to cart")
    }
    useEffect(()=>{
        fetchSingleProductDetail()
    },[])
  return (
    <main className='px-4 md:px-8 lg:px-20 bg-[#242424] w-full min-h-[92vh] flex flex-col md:flex-row gap-4 py-20'>
        <div className='md:w-[50%] w-full'>
            <img className='w-full object-cover bg-gray-500 rounded-md' src={product.thumbnail} alt='product_image'/>
        </div>
        <div className='md:w-[50%] w-full text-gray-200 flex flex-col gap-4'>
            <strong className='text-lg'>Name : {product.title}</strong>
            <p>Description : {product.description}</p>
            <p>Category : {product.category}</p>
            <p className='flex gap-4 text-green-400'>Price : <del className='text-red-400'>{((product.price*product.discountPercentage/100)+product.price).toFixed(2)} % </del> {product.price}</p>
            <p>Brand : {product.brand}</p>
            <p>Rating : {product.rating}</p>
        <button className='bg-green-800 text-gray-200 px-20 py-2 cursor-pointer ' onClick={()=>handleAddToCart()} >Add to cart</button>
        </div>
    </main>
  )
}

export default SingleProductPage