import React from 'react'
import NavBar from '../Components/NavBar'
import HomePage from '../Pages/HomePage'

const Mainlayout = () => {
  return (
    <div style={{width:'100%',height:'100vh',backgroundColor:'#000000',color:'white'}}>
      {/* Nav bar */}
        <NavBar/>
      {/* content of body */}
         <HomePage/>
      {/* footer */}


    </div>
  )
}

export default Mainlayout