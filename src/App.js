<<<<<<< HEAD
import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
=======
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
import './App.css';
import LandingPage from './layouts/LandingPage/LandingPage';
import LoginPage from './layouts/LoginPage/LoginPage';
import RegisterPage from './layouts/RegisterPage/RegisterPage';
<<<<<<< HEAD
import Region from './layouts/BestRegion/Region';
import Okinawa from './layouts/MainImages/Okinawa';
import Auth from './hoc/auth';
import Navbar from './layouts/Navbar/navbar';
import Footer from './layouts/Footer';
import ImageUploadPage from './layouts/ImageUploadPage/ImageUploadPage';
import ImageDetailPage from './layouts/ImageDetailPage/ImageDetailPage'
import CartPage from './layouts/CartPage/CartPage'
import BestRegionPage from './layouts/BestRegionPage/BestRegionPage'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '60px' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null )} />
          <Route exact path="/login" component={Auth(LoginPage, false)} /> 
          <Route exact path="/register" component={Auth(RegisterPage, false)} /> 
          <Route exact path="/images/upload" component={Auth(ImageUploadPage, true)} /> 
          <Route exact path="/images/bestregion" component={Auth(BestRegionPage, null)} /> 
          <Route exact path="/images/:imagesId" component={Auth(ImageDetailPage, null)} /> 
          <Route exact path="/user/cart" component={Auth(CartPage, true)} /> 
          
          <Route exact path="/region" component={Auth(Region, null)}/> 
          <Route exact path="/okinawa" component={Auth(Okinawa, null)}/> 
        </Switch>
      </div>
    <Footer />  
</Suspense>
  );
}

export default App;
=======

const Header = lazy(() => import('./layouts/Header'));
const MainImages = lazy(() => import('./layouts/MainImages'));
const MainVideo = lazy(() => import('./layouts/MainVideo'));
const BestRegion = lazy(() => import('./layouts/BestRegion'));
const SubImages = lazy(() => import('./layouts/SubImages'));
const SubVideo = lazy(() => import('./layouts/SubVideo'));
const Reservation = lazy(() => import('./layouts/Reservation'));
const Footer = lazy(() => import('./layouts/Footer'));

function App() {
  return (
    <Suspense
    fallback={
      <div className='sk-folding-cube'>
        <div className='sk-cube1 sk-cube'></div>
        <div className='sk-cube2 sk-cube'></div>
        <div className='sk-cube4 sk-cube'></div>
        <div className='sk-cube3 sk-cube'></div>
      </div>
    }
  >
      <Router>
      <div>
        {}
        <Switch>
          <Route exact path="/">
            <LandingPage /> 
          </Route>
          <Route exact path="/login">
            <LoginPage /> 
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>  
      <div>
        <Header />
      <main>
        <MainVideo />
        <MainImages />
        <BestRegion />
        <SubImages />
        <SubVideo />
        <Reservation />
        <Footer />
      </main>
      </div>
    </Suspense>
  );
}

export default App;
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
