import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import toast from 'react-hot-toast'

export default function CheckOut() {
    const [isLoading, setIsLoading] = useState(false)

    async function callCheckOut(reqBody) {
        setIsLoading(true)
        try {
            const res = await axios.post('https://de20c983-e204-41ff-8ac8-ff32b1e8b12f-00-3anh942776nda.picard.replit.dev/orders', reqBody)
        
            toast.success('Order has been placed')
            await clearCart()
            setIsLoading(false)
        } catch (error) {
         
            toast.error('Your Order could not be created')
            setIsLoading(false)
        }
    }

    async function clearCart() {
        try {
            const cartItems = await axios.get('http://localhost:3000/cart')
            const deleteRequests = cartItems.data.map(item => axios.delete(`http://localhost:3000/cart/${item.id}`))
            await Promise.all(deleteRequests)
        } catch (error) {
          
        }
    }

    const validationSchema = yup.object({
        userName: yup.string().required('Name is required'),
        Addres: yup.string().required('Address is required'),
        Details: yup.string().required('Details are required'),
        Phone: yup.string().matches(/^01[0125][0-9]{8}$/, 'Invalid number').required('Phone is required')
    })

    const checkOutForm = useFormik({
        initialValues: {
            userName: '',
            Addres: '',
            Details: '',
            Phone: ''
        },
        validationSchema,
        onSubmit: callCheckOut
    })

    return (
        <>
            <div className="w-100 bg-main-light mx-auto p-5">
                <form onSubmit={checkOutForm.handleSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="userName" className='mb-1 fw-bolder text-success'>User Name</label>
                        <input
                            type="text"
                            id='userName'
                            name='userName'
                            value={checkOutForm.values.userName}
                            onBlur={checkOutForm.handleBlur}
                            onChange={checkOutForm.handleChange}
                            className='form-control'
                            placeholder="Enter your full name"
                        />
                        {checkOutForm.errors.userName && checkOutForm.touched.userName ? (
                            <div className='alert alert-danger'>{checkOutForm.errors.userName}</div>
                        ) : ''}
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="Addres" className='mb-1 fw-bolder text-success'>Address</label>
                        <input
                            type="text"
                            id='Addres'
                            name='Addres'
                            value={checkOutForm.values.Addres}
                            onBlur={checkOutForm.handleBlur}
                            onChange={checkOutForm.handleChange}
                            className='form-control'
                            placeholder="Enter your address"
                        />
                        {checkOutForm.errors.Addres && checkOutForm.touched.Addres ? (
                            <div className='alert alert-danger'>{checkOutForm.errors.Addres}</div>
                        ) : ''}
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="Details" className='mb-1 fw-bolder text-success'>Details</label>
                        <input
                            type="text"
                            id='Details'
                            name='Details'
                            value={checkOutForm.values.Details}
                            onBlur={checkOutForm.handleBlur}
                            onChange={checkOutForm.handleChange}
                            className='form-control'
                            placeholder="Additional order details"
                        />
                        {checkOutForm.errors.Details && checkOutForm.touched.Details ? (
                            <div className='alert alert-danger'>{checkOutForm.errors.Details}</div>
                        ) : ''}
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="Phone" className='mb-1 fw-bolder text-success'>Phone</label>
                        <input
                            type="tel"
                            id='Phone'
                            name='Phone'
                            value={checkOutForm.values.Phone}
                            onBlur={checkOutForm.handleBlur}
                            onChange={checkOutForm.handleChange}
                            className='form-control'
                            placeholder="Enter your phone number"
                        />
                        {checkOutForm.errors.Phone && checkOutForm.touched.Phone ? (
                            <div className='alert alert-danger'>{checkOutForm.errors.Phone}</div>
                        ) : ''}
                    </div>

                    <button
                        type='submit'
                        className='btn btn-outline-danger d-block rounded rounded-2 mx-auto'
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <i className="fa-solid fa-spinner fa-spin"></i>
                        ) : (
                            'Pay Now'
                        )}
                    </button>
                </form>
            </div>
        </>
    )
}
