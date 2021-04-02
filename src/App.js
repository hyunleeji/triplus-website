import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import LandingPage from './layouts/LandingPage/LandingPage';
import LoginPage from './layouts/LoginPage/LoginPage';
import RegisterPage from './layouts/RegisterPage/RegisterPage';

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
