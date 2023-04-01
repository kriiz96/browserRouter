import React from 'react'
import posts from '../data/posts'
import styled from 'styled-components';
import { Navigate, useParams } from 'react-router-dom'

const Post = () => {
    const {id} = useParams()

    console.log("El id es.... " + id);

    return (
      <div>
        {posts[id-1]?
            <div>
                <Titulo>{posts[id-1].title}</Titulo>
                <p>{posts[id-1].content}</p>
            </div>
            :
            <div>
                <Navigate to="/Error404"/>
            </div>
        }
        
      </div>
  )
}

const Titulo= styled.h1`
font-color: #0830B1;
padding:20px;
background-color:#fff;
`
export default Post
