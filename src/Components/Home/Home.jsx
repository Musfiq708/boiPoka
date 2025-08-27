import React from 'react'
import Banner from '../Banner/Banner'
import Books from '../Books/Books'

export default function Home() {
  return (
    <div className='w-11/12 mx-auto'>
      <Banner></Banner>
      <Books></Books>
    </div>
  )
}
