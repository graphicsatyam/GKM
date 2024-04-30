import React from 'react'
import Slider from './Slider/Slider';
import AboutPic from './AboutPic/AboutPic'
import Welcome from './Welcome/Welcome'
import Animation from '../component/Animation/Animation';
import Location from './Location/Location';
import AboutNew from './AboutNew/AboutNew';
import Gallery from '../component/Gallery/Gallery';
import Connect  from './Connect/Connect';
import Certificate from './Cerificate/Certificate';

export const Home = () => {
  return (
    <div>
      <Slider/>
      <AboutPic/>
      <Welcome/>
      <AboutNew/>
      <Certificate/>
      <Animation/>
      <Gallery/>
      <Connect/>
      <Location/>
    </div>
  )
}
