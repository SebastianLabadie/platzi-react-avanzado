import React from 'react'
import styled from 'styled-components'
import Category from './components/Category/Category'
import ListOfCategories from './components/ListOfCategories/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'

const AppStyled=styled.div`

`
function App() {
    return (
        <AppStyled>
            <GlobalStyles />
            <ListOfCategories/>
        </AppStyled>
    )
}

export default App