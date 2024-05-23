import { Box, Button, Card, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/IMG_6559.png'
const HomePage = () => {
  return (
    <div>
      <Container sx={{marginTop:'150px',display:'flex',justifyContent:'space-between'}}>
        <Box  >
          <Typography sx={{fontWeight:'bold',fontSize:'24px'}}align='left'>Hi,I am</Typography>
          <Typography sx={{fontWeight:'bold',fontSize:'32px' }}align='left' color={'#00FF00'}>K Naveen kumar</Typography>
          <Typography variant='h1' fontSize={'70px'} align='left'>FULL STACK</Typography>
          <Typography variant='h1' fontSize={'60px'} align='center'>Java Developer</Typography>
          <Typography align='left'>As a Java full-stack enthusiast, I'm diving into Spring Boot and React.js to craft innovative web solutions. Passionate and eager to learn, I'm dedicated to creating impactful projects.</Typography>
          <Button variant='contained' color="success" >Hire Me</Button>       
        </Box>
        <Box >
        <Card>
        <CardMedia
          
          component="img"
        alt='Error'
        image={img}
        sx={{height:'290px',width:'300px',marginTop:'5'}}
        />
        </Card>
          
        </Box>
      </Container>

    </div>
  )
}

export default HomePage