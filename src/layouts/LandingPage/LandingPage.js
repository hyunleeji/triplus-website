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

// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';

// function LandingPage(props) {
    
//     useEffect(() => {
//         axios.get('/api/hello')
//         .then(response => { console.log(response)})
//     }, [])

//     const onClickHandler = () => {
//         axios.get('/api/users/logout')
//             .then(response => {
//                 if(response.data.success) {
//                 props.history.push("/login")
//             } else {
//                 alert('로그아웃 하는데 실패 했습니다.')
//             }
//         })
//     }

//     return (
//         <div style={{
//             display: 'flex', justifyContent: 'center', alignItems: 'center'
//             , width: '100%', height: '100vh'
//         }}>
//             <h2>시작페이지</h2>
//             <button onClick={onClickHandler}>
//                 로그아웃
//             </button>
//         </div>
//     )
// }

// export default withRouter(LandingPage)
