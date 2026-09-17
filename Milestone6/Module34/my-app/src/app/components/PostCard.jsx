import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className='border border-green-400 rounded m-4 p-4'>
        <h3 className='text-xl font-bold text-purple-400'>{post.title}</h3>
        <p >{post.body}</p>
        <button className='border rounded-full border-amber-300 bg-blue-400 p-4 m-4'>View More</button>
    </div>
  )
}

export default PostCard