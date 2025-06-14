import { Box, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { ToastAlert } from '../utils'

const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const loginHandler = async () => {
        try {
            setIsLoading(true)
            const response = await signInWithEmailAndPassword(auth, email, password)
            setIsLoading(false)
            console.log("response", response.user.uid)
            localStorage.setItem("userUid", response.user.uid)
            ToastAlert({
                type: "success",
                message: "User Successfully Login!"
            })
            navigate("/blog")

        } catch (error) {
            setIsLoading(false)
            ToastAlert({
                type: "error",
                message: error.code || "something went wrong"
            })

        }
    }

    return (

        <Stack justifyContent={"center"} alignItems={"center"} sx={{ border: "1px solid red", minHeight: "100vh" }} >
            <Stack colo gap={5} sx={{ border: "1px solid black", width: "50%", p: 5 }} >
                <Typography variant='h3' >Login</Typography>

                <TextField label="Email Address" variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextField label="Password" type='password' variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}

                />

                <Typography>Don't have an account? <Link to={"/signup"} >Join Now</Link> </Typography>
                <Button variant='contained' onClick={loginHandler} >
                    {
                        isLoading && <CircularProgress color='white' size={"16px"} />
                    }
                    Login
                </Button>
            </Stack>
        </Stack>

    )
}

export default Login