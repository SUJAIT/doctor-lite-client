import React from 'react';
import Banner from '../Pages/Banner';
import Doctors from '../Pages/Doctors';
import Footer from '../Pages/Footer';
import LastBanner from '../Pages/LastBanner';
import NavBar from '../Pages/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Doctors></Doctors>
            <LastBanner></LastBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;