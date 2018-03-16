require('./common/scss/manifest.scss')
require('font-awesome-webpack')
require('particles.js')

import React from 'react'
import { render } from 'react-dom'

import particleConfig from './common/particlesjs-config.json'

import Home from 'features/home/components/home'

setTimeout(() => {
  render(
    <Home />,
    document.getElementById('root')
  )

  particlesJS('particles-js', particleConfig)
}, 0)
