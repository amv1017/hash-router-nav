import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesOptions from '../data/particles.json'

export default () => {
  const particlesInit = useCallback(main => {
    loadFull(main)
  }, [])

  return (
    <Particles options={particlesOptions} init={particlesInit}/>
  )
}
