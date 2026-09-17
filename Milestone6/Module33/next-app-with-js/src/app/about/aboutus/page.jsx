import Image from 'next/image'
import React from 'react'

const aboutus = () => {
  return (
    <div>
        <h2 className='text-3xl text-orange-400'>About Us</h2>
        <Image src="/images/duniya.png" alt="Duniya Image" width={400} height={350} />
        <Image src="/images/github_banner.png" alt="Github banner" width={400} height={350} />
        <Image src="https://images.unsplash.com/photo-1788270083262-55c5df22ed45" alt="Unsplash Photo" width={400} height={350} />
    </div>
  )
}

export default aboutus