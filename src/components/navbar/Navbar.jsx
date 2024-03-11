import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    //getting the screen size
    const [screenSize , setScreenSize] = useState(window.innerWidth)

    
    useEffect(() => {
        const handleResize = () => {
          setScreenSize(prevSize => {
            const newSize = window.innerWidth;
            // Perform additional actions if needed
            console.log(newSize);
            return newSize;
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

  
    
  return (
    <>
        <div className='sticky top-0 bg-gray-400'>
            <div>
                hi
            </div>

        </div>
    </>
  )
}

export default Navbar