import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { ToastAlert } from '../../utils';


const CreateBlogPage = () => {
  const [title, setTitle] = useState("")
  const [subject, setsubject] = useState("")
  const [desc, setdesc] = useState("")
  const [file, setFile] = useState("")
  const [fileURL, setFileURL] = useState("")

  const inputRef = useRef()

  const blogHandler = async () => {
    console.log("title", title)
    console.log("subject", subject)
    console.log("desc", desc)


    // {
    //   title,
    //   subject,
    //   desc
    //   imageUrl,
    //   userUid,
    //   isPrivate
    // }

    try {

      const blogObj = {
        title,
        subject,
        desc,
        imageURL: fileURL,
        isPrivate: false,
        userUid: localStorage.getItem("userUid")
      }

      await addDoc(collection(db, "blog"), blogObj)
      ToastAlert({
        type: "success",
        message: "Blog created"
      })



    } catch (error) {
      ToastAlert({
        type: "error",
        message: error.code || error.message || "something went wrong"
      })

    }


  }


  const fileHandler = () => {
    console.log("fileHandler", inputRef.current)
    inputRef.current.click()
  }

  const uploadFile = async (file) => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "innoSMIT12")
      const response = await axios.post(`https://api.cloudinary.com/v1_1/dbync9n3e/image/upload`, formData)
      console.log("response", response.data.secure_url)
      setFileURL(response.data.secure_url)
    } catch (error) {
      console.log("Error", error.message)
    }

  }

  return (
    <>
      <Navbar />

      <Stack gap={3} sx={{ width: "50%", m: "0 auto", mt: 5 }} >
        <TextField label='Blog Title' onChange={(e) => setTitle(e.target.value)} />
        <TextField label='Blog Subject'
          onChange={(e) => setsubject(e.target.value)} />
        <TextField label='Blog Desc' multiline rows={5}
          onChange={(e) => setdesc(e.target.value)} />


        <Button variant='contained' onClick={fileHandler}  >
          <CloudUploadIcon />
          Upload File</Button>

        <input type="file" hidden ref={inputRef} accept='image/jpeg'
          onChange={e => {
            setFile(e.target.files[0])
            uploadFile(e.target.files[0])
          }}

        />

        <Typography> {file.name} </Typography>

        {/* <TextField type='file' slotProps={{
          input: {
            inputProps: {
              accept: "image/jpeg"
            }
          }
        }} /> */}

        <Button variant='contained' onClick={blogHandler} >Create Blog</Button>
      </Stack>





    </>
  )
}

export default CreateBlogPage