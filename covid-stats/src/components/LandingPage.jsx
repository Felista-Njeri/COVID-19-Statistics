import React from 'react'
import corona from "./assets/corona.png"

export default function LandingPage () {
  return (
    <div className="landingpagediv">
        <div className='lpdiv1'>
            <h1>COVID 19 STATISTICS</h1>
            <p>Select a country from the dropdown to view its COVID-19 statistics, or choose "All" to see global data</p>
        </div>
        <div className='lpdiv2'><img src={corona} alt='corona pic' /> </div>
    </div>
  )
}
