import react from "react";
import { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import {registerUser, getCurrentUser} from "../services/auth.services.js"
import { useNavigate } from "react-router-dom";
import {Button} from "../layouts/button.jsx"
import {Input} from "../layouts/input.jsx"
import {useDispatch} from "react-redux"
import login from "../Store/authSlice.js"

export default function SignUpForm () {

    const [error, setError] = useState();
    const [register, handleSubmit] = useForm();
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    

    const handleSignUp = async (data) => {

        setError('')

        try {

            const userData = await registerUser(data)

            if (userData) {
                const currentUser = await getCurrentUser()

                if (currentUser) {
            dispatch(login({userData: currentUser}))
            Navigate('/')
            }
         }

        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong during signup.');
        }
}

return (
    <form onSubmit={handleSubmit(handleSignUp)}>
        <Input
        {...register('name', {required: true})}
        placeholder = "Enter your name"
        label = "username" />
        <Input
        {...register('email', {required: true, 
                 validate: {
                            matchPattern: (value) => 
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                "Email address must be a valid address",
                            
                        }
            })}
        placeholder = "Enter your email"
        label = "email" />
        <Input
        {...register('password', {required: true})}
        placeholder = "Enter your password"
        label = "password" />

        <Button type = 'submit'>Sign Up</Button>

    </form>
)
}
        