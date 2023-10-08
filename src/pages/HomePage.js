import React from 'react'
import Home from '../components/Home'
import Search from '../components/Search';
import SecondaryNavbar from '../components/SecondryNavbar';

const HomePage =() => {
    return (
        <>
        <SecondaryNavbar currentPage="home"/>
        <Home/>
        <Search/>
        </>
    )
};
export default HomePage;