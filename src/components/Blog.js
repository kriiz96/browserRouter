import React from 'react'
import posts from './../data/posts'
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Blog = () => {
  console.log(posts)

  return (
    <div>
      <h3>Página de blog</h3>
      <p>Esta es la pagina de blog de Deportes</p>
      <ul>
        {
        posts.map((post)=>(
          <li key={post.id}>
            <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog