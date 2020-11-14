import React from 'react'
import styled from 'styled-components'
const CategoryStyled=styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 75px;
    text-decoration: none;
    img {
        border: 1px solid #ddd;
        box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        height: 75px;
        width: 75px;
        overflow: hidden;
        object-fit: cover;
    }
`
const image="https://i.imgur.com/dJa0Hpl.jpg"

function Category({cover=image,path,emoji="?"}) {
    return (
        <CategoryStyled  href={path}  >
            <img src={cover} alt="imagen"/>
            {emoji}
        </CategoryStyled>
    )
}

export default Category