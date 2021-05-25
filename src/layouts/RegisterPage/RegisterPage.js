import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../_actions/user_action';
<<<<<<< HEAD
import '../../../src/App.css'
=======
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774

function RegisterPage(props){

    const dispatch = useDispatch();

<<<<<<< HEAD

=======
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        
        setEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    
    
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body))
            .then(response => {
               if(response.payload.success) {
                   props.history.push("/login")
               } else {
                   alert("Failed to sign up")
               }
            })
    }
<<<<<<< HEAD
    
    //1
    return (
        <div className='register' style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh', flexDirection:'column'
        }}>
            <h1 style ={{ fontSize: '50px'}}><a href="/">Triplus</a></h1>
            <form style={{ display:'flex', flexDirection:'column' }}
                onSubmit={onSubmitHandler}
            >
                <input name="email" type="email" placeholder="이메일 주소 혹은 아이디" title="이메일 주소 혹은 ID 입력" value={Email} onChange={onEmailHandler} />
                {/* <button type="submit">
                    중복체크
                </button> */}
                <input type="text" placeholder="이름" title="이름" value={Name} onChange={onNameHandler} />
                <input type="password" placeholder="비밀번호" title="비밀번호" value={Password} onChange={onPasswordHandler} />
                <input type="password" placeholder="비밀번호 확인" title="비밀번호 확인" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
=======

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display:'flex', flexDirection:'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
                <br />
                <button type="submit">
                    회원 가입
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
