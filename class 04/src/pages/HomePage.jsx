import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from '../components/Appbar'
import ResponsiveDrawer from '../components/Layout'

const HomePage = () => {
    return (
        <Box>
            {/* <ResponsiveAppBar /> */}

            <ResponsiveDrawer />

            {/* <TextField label="Outlined" variant='filled' />
            <Button variant="contained">Contained</Button> */}

            {/* <Stack flexDirection={"row"} bgcolor={"red"} col gap={"10px"} > */}
            {/* <p>HELLO 1</p>
                <p>HELLO 2</p> */}

            {/* <Typography variant='span'
                    sx={{
                        color: "blue",
                        fontSize: "32px"
                    }}  >HELLO MUI</Typography> */}

            {/* </Stack> */}

            {/* <Box component={"p"} >

                PARA
            </Box> */}

            {/* <Box id="outlined-basic">
                <p></p>
            </Box>

            <Box component={"img"} /> */}


        </Box>
    )
}

export default HomePage