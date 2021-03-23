import { lazy, Suspense } from 'react';
import './App.css';

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
