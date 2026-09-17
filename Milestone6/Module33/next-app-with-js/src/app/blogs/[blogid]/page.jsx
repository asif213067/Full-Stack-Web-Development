import React from 'react'

const blogsData = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        description:
            "Learn the basics of Next.js and how to build modern, fast, and scalable web applications.",
        author: "Asif Hosen",
        date: "September 10, 2026",
        category: "Next.js",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
        id: 2,
        title: "Understanding React Components",
        description:
            "A practical guide to creating reusable React components and organizing your application efficiently.",
        author: "John Doe",
        date: "September 8, 2026",
        category: "React",
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
        id: 3,
        title: "Tailwind CSS for Beginners",
        description:
            "Discover how Tailwind CSS helps you create beautiful responsive interfaces quickly using utility classes.",
        author: "Sarah Smith",
        date: "September 5, 2026",
        category: "Tailwind CSS",
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    },
    {
        id: 4,
        title: "JavaScript Array Methods You Should Know",
        description:
            "Explore important JavaScript array methods like map, filter, find, reduce, and some with practical examples.",
        author: "Michael Brown",
        date: "September 2, 2026",
        category: "JavaScript",
        img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    },
    {
        id: 5,
        title: "Building Responsive Websites",
        description:
            "Learn the essential techniques for creating websites that look great on mobile, tablet, and desktop devices.",
        author: "Emily Wilson",
        date: "August 30, 2026",
        category: "Web Development",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
];

const BlogDetails = async ({params}) => {

    const {blogid} = await params;

    const post = blogsData.find(post => post.id === parseInt(blogid));

    if(!post) {
        return (
            <h1 className='text-3xl text-pink-400'>There is no data.</h1>
        );
    }


    return (
        <div>
            <h2 className='text-4xl text-red-400'>BlogDetails of {post.id}</h2>

            {
                post && <div>
                    <h3>{post.title}</h3>
                    <p>By {post.author}</p>
                    <p>{post.description}</p>
                </div>
            }

        </div>
    )
}

export default BlogDetails