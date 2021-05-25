const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

//1 userSchema 만들기
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
<<<<<<< HEAD
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
=======
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

//2 비밀번호 암호화
userSchema.pre('save', function (next) {
    var user = this; // userSchema 전부를 가리킨다.
    if (user.isModified('password')) { // password가 변환 될때만 암호화 해준다.
        bcrypt.genSalt(saltRounds,function(err, salt){
            if(err) return next(err)
            bcrypt.hash(user.password ,salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash //hash는 암호화된 비밀번호
                next()
            })
        })
    } else { // 이게없으면 위에서 머물기만 한다.
        next() 
    }
})

//3.plainpassword를 암호화해서 DB에 있는 암호화된 비밀번호를 체크 index.js로 감
userSchema.methods.comparePassword = function(plainPassword, cb) {
    
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if(err) return cb(err); // cb는 콜백
            cb(null, isMatch); //에러는 없고 비밀번호는 같다 = true
    });
};

//4.jsonwebtoken을 이용해서 token을 생성하기 token을 가지고 누구인지 알수 있다.
// 토큰 생성해서 user에 넣어주었다. 
userSchema.methods.generateToken = function(cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    // user._id + 'secretToken' = token
    // ->
    // 'secretToken' -> user._id
    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    
    
    // 토큰을 decode 한다. 
    jwt.verify(token, 'secretToken', function(err, decoded) {
        //유저 아이디를 이용해서 유저를 찾은 다음에
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id": decoded, "token": token }, function(err, user){
            if(err) return cb(err);
            cb(null, user)
        })
    })

}

<<<<<<< HEAD
// userSchema.methods.checkEmail = function (email, callback) {
//     User.findOne({ email: email }, function (err, user) {
//         console.log(user);
//         callback(err,user);
//     })
// }

const User = mongoose.model('User', userSchema)

module.exports = { User };
=======
const User = mongoose.model('User', userSchema)

module.exports = { User };
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
