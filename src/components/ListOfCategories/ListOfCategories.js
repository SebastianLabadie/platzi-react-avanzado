import React from "react";
import styled from "styled-components";
import Category from "../Category/Category";
const ListOfCategoriesStyled = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function ListOfCategories() {
  return (
    <ListOfCategoriesStyled>
      {[1, 2, 4, 5,5,5,5,5,5,5,5].map((category,i) => (
        <li key={i} >
          <Category />
        </li>
      ))}
    </ListOfCategoriesStyled>
  );
}

export default ListOfCategories;
