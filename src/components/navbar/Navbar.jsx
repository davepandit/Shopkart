import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
    //getting the screen size
    const [screenSize , setScreenSize] = useState(window.innerWidth)

    
    useEffect(() => {
        const handleResize = () => {
          setScreenSize(prevSize => {
            const newSize = window.innerWidth;
            // Perform additional actions if needed
            // console.log(newSize);
            return newSize;
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    //every time keeping the record of the screen size
    console.log(screenSize)

  
    
  return (
    <>
        {
          screenSize<"768" ? (
            <div className='flex justify-between items-center p-4 bg-gray-100 shadow-md sticky top-0'>
              {/* mobile view */}
              <div className='flex gap-x-4 items-center'>
                <GiHamburgerMenu className='text-2xl'/>
                <h2 className='font-bold text-2xl'>Shopkart🔥</h2>
              </div>

              <div className='flex gap-x-4 items-center'>
                <IoIosSearch className='text-2xl'/>
                <CiHeart className='text-2xl'/>
                <BsHandbag className='text-2xl'/>


              </div>


            </div>
          ):(
            <div>
              {/* laptop view */}
              laptop
            </div>
          )
        }
    </>
  )
}

export default Navbar