import React, { useState } from 'react'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../_actions/user_action';

function LoginPage(props) {
   
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
<<<<<<< HEAD
            , width: '100%', height: '100vh', flexDirection:'column'
        }}>
            <h1 style ={{ fontSize: '50px'}}><a href="/">Triplus</a></h1>
            <form style={{ display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <input type="email" value={Email} placeholder="이메일 주소 혹은 ID" title="이메일 주소 혹은 ID 입력"  onChange={onEmailHandler} />
                <input type="password" value={Password} placeholder="비밀번호" title="비밀번호" onChange={onPasswordHandler} />
=======
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display:'flex', flexDirection:'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
                <br />
                <button type="submit">
                    Login
                </button>
<<<<<<< HEAD
                <ul>
                    <li style ={{ textAlign: 'center', margin: '10px 0' }}><a href='/'>아이디/비밀번호 찾기</a></li>
                </ul>
=======
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
