import React from 'react';
import MainImages from '../MainImages/MainImages';
import MainVideo from '../../layouts/MainVideo'
import BestRegion from '../BestRegion/BestRegion'
import SubImages from '../../layouts/SubImages'
import SubVideo from '../../layouts/SubVideo'
import Reservation from '../../layouts/Reservation'


function LandingPage() {

    return (
      <main>
        <MainVideo />
        <MainImages />
        <BestRegion/>
        <SubImages />
        <SubVideo />
        <Reservation />
      </main>
    )
}

export default LandingPage