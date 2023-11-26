import React from 'react';
import Home from './components/Home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Copyright from '../src/components/Copyright/copyright';


function App() {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
            <Copyright />
        </div>
    );
}

export default App;
