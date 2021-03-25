const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("../models/User");

const config = require('../config/key');

 //application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 헤이헤이! 편해다!!')
})


app.post('/register', (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다. 회원가입을 위한 라우터

    const user = new User(req.body) // req.body는 id,password가 값과 함께 들어있는것을 가리킴
    
    user.save((err, userInfo) => {  // 정보들이 유저모델에 저장된것.
      if(err) return res.json({ success: false, err}) // 에러났을때 json형식으로 전달해줄것.
      return res.status(200).json({
        success: true
      }) //성공 했다는 표시
    })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})