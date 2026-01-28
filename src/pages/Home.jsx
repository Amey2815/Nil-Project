import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'

const Home = () => {

  const image = [
    {
      image: assets.one
    },
    {
      image: assets.two
    },
    {
      image: assets.three
    },
    {
      image: assets.four
    },
    {
      image: assets.five
    },
    {
      image: assets.six
    },
    {
      image: assets.seven
    },
    {
      image: assets.text
    },
    {
      image: assets.nine
    },
    {
      image: assets.one
    },
    {
      image: assets.two
    },
    {
      image: assets.three
    },
    {
      image: assets.four
    },
    {
      image: assets.five
    },
    {
      image: assets.seven
    },
  ]


  return (
    <div className='min-h-screen' >

      <div className='min-h-screen overflow-hidden' >
        <Navbar />
        <img className='min-h-screen' src={assets.homePoster} alt="" />
      </div>

      <div className='grid grid-cols-5 gap-1 mx-2 my-5'>
        {image.map((image, index) => (
          <div className=' overflow-hidden' key={index}>
            <img className='w-75.25 h-75.25 object-cover object-center' src={image.image} alt="" srcset="" />
          </div>
        ))}
      </div>


    </div>
  )
}

export default Home
