import { Box, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { Bounce, toast } from 'react-toastify'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const signupHandler = async () => {
        try {
            setIsLoading(true)
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log("response", response)
            setIsLoading(false)

            // success popup
            toast.success("User Successfully Signup!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            
            navigate("/")


        } catch (error) {
            console.log("error", error.message)
            setIsLoading(false)

            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }


    return (

        <Stack justifyContent={"center"} alignItems={"center"} sx={{ border: "1px solid red", minHeight: "100vh" }} >
            <Stack colo gap={5} sx={{ border: "1px solid black", width: "50%", p: 5 }} >
                <Typography variant='h3' >Signup</Typography>

                <TextField label="Full Name" variant="outlined"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <TextField label="Email Address" variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField label="Password" type='password' variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Typography>Already account? <Link to={"/"} >Login</Link> </Typography>
                <Button variant='contained' onClick={signupHandler} >
                    {
                        isLoading &&
                        <CircularProgress color='white' size={"16px"} />
                    }
                    Signup
                </Button>
            </Stack>
        </Stack>

    )
}

export default Signup