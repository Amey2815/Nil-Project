import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets.js'

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
      image: assets.eight
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

      <div className='h-full md:min-h-screen overflow-hidden' >
        <Navbar />
        <img className=' h-full md:min-h-screen object-cover' src={assets.homePoster} alt="" />
      </div>

      <div className="h-full  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-1 mx-2 my-5">
  {image.map((image, index) => (
    <div key={index} className="min-w-75 min-h-75 flex justify-center">
      <img
        src={image.image}
        alt=""
        className=" object-cover object-center w-full h-full"
      />
    </div>
  ))}
</div>




    </div>
  )
}

export default Home
