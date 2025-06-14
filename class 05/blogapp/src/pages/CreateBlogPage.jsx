import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Stack, TextField } from '@mui/material'

const CreateBlogPage = () => {
  const [] = useState()

  return (
    <>
      <Navbar />

      <Stack sx={{ mt: 5 }} gap={3} >
        <TextField label='Blog Title' />
        <TextField label='Blog Subject' />
        <TextField label='Blog Desc' multiline rows={5} />

        <Button variant='contained' >Create Blog</Button>
      </Stack>





    </>
  )
}

export default CreateBlogPage