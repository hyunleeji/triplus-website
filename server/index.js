const express = require('express');
const app = express();
const port = 5000;
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const path = require("path");
const cors = require('cors')
const { User } = require("./models/User");
const { auth } = require('./middleware/auth')

 //application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.use('/api/users', require('./routes/user'));
app.use('/api/images', require('./routes/Images'));

app.use('/uploads', express.static('uploads'));

if(process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  });
}

app.get('/', (req, res) => 
  res.send('Hello World! 안녕하세요 헤이헤이! 편해다!!'))

app.get('/api/hello', (req, res) => 
  res.send("안녕하세요! ~"))

// //1. 회원가입을 위한 라우터
// //회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다. 
// app.post('/api/users/register', (req, res) => {

//     const user = new User(req.body) // req.body는 id,password가 값과 함께 들어있는것을 가리킴
    
//     user.save((err, userInfo) => {  // 정보들이 유저모델에 저장된것.
//       if(err) return res.json({ success: false, err}) // 에러났을때 json형식으로 전달해줄것.
//       return res.status(200).json({
//         success: true
//       }) //성공 했다는 표시
//     })
//   })

// //2. 로그인을 위한 라우터
// app.post('/api/users/login', (req, res) => {
//   //요청된 이메일을 데이터베이스에서 있는 찾는다.
//   User.findOne({ email: req.body.email }, (err, user) => {
//     if(!user) {
//       return res.json({
//         loginSuccess: false,
//         message: "제공된 이메일에 해당하는 유저가 없습니다."
//       })
//     }
//   //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인
//   user.comparePassword(req.body.password, (err, isMatch) => {
//       if(!isMatch) // 비밀번호가 같지 않을때
//       return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
//       //비밀번호까지 같다면 Token 생성
//       user.generateToken((err, user) => {
//       if(err) return res.status(400).send(err);

//       // 토근을 저장한다. 쿠키, 로컬스토리지 
//         res.cookie("x_auth", user.token)
//         .status(200)
//         .json({ loginSuccess: true, userId: user._id })
//       })
//     })
//   })
// })


// //3. auth 만들기 role 1 어드민 role 2 특정 부서 어드민 role 0 일반유저 
// app.get('/api/users/auth', auth, (req, res) => {

//     //여기 까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true 라는 말
//     res.status(200).json({
//       _id: req.user._id,
//       isAdmin: req.user.role === 0 ? false : true,
//       isAuth: true,
//       email: req.user.email,
//       name: req.user.name,
//       lastname: req.user.lastname,
//       role: req.user.role,
//       image: req.user.image
//     })
// })

// //4.로그아웃 route 만들기
// app.get('/api/users/logout', auth, (req, res) => {

//     User.findOneAndUpdate({ _id: req.user._id },
//       { token: "" }
//       , (err, user) => {
//         if(err) return res.json({ success: false, err });
//         return res.status(200).send({
//           success: true
//         })
//       })
// })


// app.post("/api/users/addToCart", auth, (req, res) => {

//   User.findOne({ _id: req.user._id }, (err, userInfo) => {

//      let duplicate = false;
//      userInfo.cart.forEach((item) => {
//        if(item.id === req.body.imagesId) {
//           duplicate = true; 
//         }
//      })

//      if(duplicate) {
//         User.findOneAndUpdate(
//           { _id : req.user._id, "cart.id" : req.body.imagesId },
//           { $inc : { "cart.$.quantity": 1 }},
//           { new: true },
//           (err, userInfo) => {
//             if(err) return res.status(400).json({ success: false, err })
//             res.status(200).send(userInfo.cart)
//           }
//         )
//      }
//      else {
//         User.findOneAndUpdate(
//           {_id: req.user._id },
//           {
//               $push: {
//                 cart: {
//                     id: req.body.imagesId,
//                     quantity: 1,
//                     date: Date.now()
//                 }
//               }
//           },
//           { new : true },
//           (err, userInfo) => {
//             if(err) return res.status(400).json({ success: false, err })
//             res.status(200).send(userInfo.cart)
//           }
//         )
//      }
//   })
// });
//1. 회원가입을 위한 라우터
//회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다. 
app.post('/api/users/register', (req, res) => {

    const user = new User(req.body) // req.body는 id,password가 값과 함께 들어있는것을 가리킴
    
    user.save((err, userInfo) => {  // 정보들이 유저모델에 저장된것.
      if(err) return res.json({ success: false, err}) // 에러났을때 json형식으로 전달해줄것.
      return res.status(200).json({
        success: true
      }) //성공 했다는 표시
    })
  })

//2. 로그인을 위한 라우터
app.post('/api/users/login', (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
  //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인
  user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) // 비밀번호가 같지 않을때
      return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      //비밀번호까지 같다면 Token 생성
      user.generateToken((err, user) => {
      if(err) return res.status(400).send(err);

      // 토근을 저장한다. 쿠키, 로컬스토리지 
        res.cookie("x_auth", user.token)
        .status(200)
        .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
})


//3. auth 만들기 role 1 어드민 role 2 특정 부서 어드민 role 0 일반유저 
app.get('/api/users/auth', auth, (req, res) => {

    //여기 까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true 라는 말
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      image: req.user.image
    })
})

//4.로그아웃 route 만들기
app.get('/api/users/logout', auth, (req, res) => {

    User.findOneAndUpdate({ _id: req.user._id },
      { token: "" }
      , (err, user) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true
        })
      })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})