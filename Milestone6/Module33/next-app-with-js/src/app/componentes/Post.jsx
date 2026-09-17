import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({ blog }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            {/* <figure>
                <Image
                    src={blog.img}
                    alt={blog.title}
                    width={600}
                    height={400}
                />
            </figure> */}
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                {/* <h3>{blog.author}</h3>
                <p>{blog.description}</p>
                <p>{blog.time}</p> */}
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${blog.id}`}>
                        <button className="btn btn-primary">Show More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Post