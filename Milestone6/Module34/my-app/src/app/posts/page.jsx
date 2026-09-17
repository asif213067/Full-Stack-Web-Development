import React from 'react'
import PostCard from '../components/PostCard';

const PostPage = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

  return (
    <div>
        <h2 className="text-3xl text-green-500">Post: {posts.length}</h2>

        <div className='grid grid-cols-3 gap-4 border border-amber-200'>
            {
                posts.map(post => <PostCard key={post.id} post={post} />)
            }
        </div>
    </div>
  )
}

export default PostPage