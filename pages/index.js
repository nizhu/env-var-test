import React from 'react'
import getConfig from 'next/config'


const Home = () => (
  <div>
    {getConfig().publicRuntimeConfig.SOME_KEY}
  </div>
)

export default Home
