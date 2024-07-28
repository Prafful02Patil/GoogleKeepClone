import React, { useState } from 'react'

const Footer = () => {
    const[year,setyear]=useState(new Date().getFullYear());

    const fullyear=()=>{
        return( 
            setyear(new Date().getFullYear())
        )
        
    }
    setInterval(fullyear,1000000000000);
  return (
    <>
    <footer>
        <p>Copyright © {year}</p>
    </footer>
    </>
  )
}

export default Footer;