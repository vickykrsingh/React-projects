import React, { useActionState, useEffect } from 'react'
import { addToCartHandler } from '../actions'

function UseActionStateHooks() {
    const [formState,formAction,isLoading] = useActionState(addToCartHandler,[])
  return (
    <div className='parent'>
    <form action={formAction} className='inputs-parent'>
        <input name="product_name" placeholder='Enter product name' className='input' />
        <input name='product_description' placeholder='Enter product description' className='input' />
        <button disabled={isLoading} className='button' type='submit'>Add</button>
    </form>
    {isLoading?<div className='loading-parent'>
        <img  src='/loading.svg' className='loading'/>
    </div>:<div className='result-parent overflow-scroll'>
        {
            formState.map((p,i)=>(
                <div key={i} className='result'>
                    <p>{p.productName}</p>
                    <p>{p.productDescription}</p>
                </div>
            ))
        }
    </div>}
    </div>
  )
}

export default UseActionStateHooks