import React from "react";
import "./Blog.css";
import BlogItem from "./BlogItem/BlogItem";

function Blog (props) {

    let blogElements =
        props.blogData.map((blog, index) =>
            <li key={index} className="blog-list__li">
                <BlogItem text={blog.text}
                    title={blog.title}
                    date={blog.date}
                    defaultOpen = {index === 0} />
            </li>
        );

    return (

        <ul>
            {blogElements}
        </ul>
    );
}

export default Blog;