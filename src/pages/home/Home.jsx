import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import slides from "../../utils/carousel/Carousel.json"
import { useState , useEffect } from 'react'

const Home = () => {
   //taking the screen size
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
        <div className=''>
          {
            screenSize < "500" ? (
            <div>
              <Carousel data={slides}/>
              <div className='mt-14'>
                <img src="https://cdn.dribbble.com/userupload/5423910/file/original-acbbd637a5c433d9feb35c02190b38d8.jpg?resize=1200x750" alt="" />
              </div>
            </div>
            ):(
              <div>here goes all the styles for the laptop</div>
            )
          }
          
          home
        </div>
    </>
  )
}

export default Home