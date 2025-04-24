"use server";

import toast from "react-hot-toast";

export const addToCartHandler = async (prevState,formData) => {
    console.log(prevState);
    const newData = {productName:formData.get('product_name'),productDescription:formData.get('product_description')};
    const newState = [...prevState,newData]
    try {
        await new Promise((resolve,reject)=>{
            if(formData.get('product_name').length<3 || formData.get('product_description').length<3){
                setTimeout(reject,2000);
            }else{
                setTimeout(resolve,2000)
            }
        })
        toast.success(`${newState.length} items added to your cart`)
        return newState;
        
    } catch (error) {
        toast.error('failed to add')
        return [...prevState];
    }
}