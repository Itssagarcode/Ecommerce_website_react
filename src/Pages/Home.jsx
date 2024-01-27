import React from 'react'
import Slider from '../Components/Slider/Slider'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollection/Newcollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


const Home = () => {
  return (
    <div>
    <Slider/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
    </div>
  )
}

export default Home