import React from 'react'
import Particles from "react-tsparticles";
import particleConfig from './config/particle-config';

// see https://www.skypack.dev/view/tsparticles for README
const HomeParticles = () => {


  return (
    <Particles param={particleConfig}></Particles>
  )
}

export default HomeParticles