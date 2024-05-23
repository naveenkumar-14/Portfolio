import { Button,Container,ListItem, Typography,Stack } from '@mui/material'
import React from 'react'
// import Stack from '@mui/material/Stack';


const NavBar = () => {
  return (
    <div>
    <Container sx={{paddingTop:'30px',display:'flex',alignItems:'center' }}>
      <Typography>K Naveen kumar</Typography>
      <Stack direction={'row'}ml={40}mr={5}>
        <ListItem> Home</ListItem>
        <ListItem> About</ListItem>
        <ListItem> Services</ListItem>
        <ListItem> Testomonials</ListItem>
        <ListItem> Contact</ListItem>
      </Stack>
      <Button variant="contained" color="success" >Download CV</Button>
    </Container>
    </div>
  )
}

export default NavBar