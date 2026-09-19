import React from 'react'

// System 2 fetch data (best)
const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }

    // another verient of try catch
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // if(!res.ok) {
    //     throw new Error("Failed to fetch data");
    // }
    // return await res.json();
}

const PostPage = async () => {

    // System 1 to fetch data 
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();

    const posts = await getPosts();


    return (
        <div>
            <h2 className='text-3xl text-green-400'>All Posts: {posts.length}</h2>

        </div>
    )
}

export default PostPage