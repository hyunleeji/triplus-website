const express = require('express');
const router = express();
// const config = require('./config/key');
// const { User } = require("./models/User");
// const { auth } = require('./middleware/auth')
const multer = require("multer")
const { Image } =require('../models/Image')

//=================================
//             Images
//=================================

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null,`${Date.now()}_${file.originalname}`)
  }
})
  
var upload = multer({ storage: storage }).single("file")


router.post('/uploadfiles', (req, res) => {

    //사진 서버에 저장
    upload(req, res, err => {
      if(err) {
          return req.json({ success: false, err })
      }
      return res.json ({ success: true, filePath: res.req.file.path, fileName:res.req.filename })
  })
})

router.post('/', (req, res) => {

    const image = new Image(req.body)

    image.save((err) => {
      if(err) return res.status(400).json({ success: false, err })
      return res.status(200).json({ success: true })
    })
})

router.post('/viewimages', (req, res) => {

     let term = req.body.searchTerm

  let findArgs = {};

  for (let key in req.body.filters) {
    if(req.body.filters[key].length > 0) {
      if(key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        }
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }
  console.log('findArgs', findArgs)


  if(term) {
    Image.find(findArgs)
    .find({ $text: {$search: term} })
    .populate("writer")
    .exec((err, viewimg) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, viewimg })
    })
  } else {
    Image.find(findArgs)
    .populate("writer")
    .exec((err, viewimg) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, viewimg })
  })
}

})


// router.post("/getImageDetail", (req, res) => {

//   Image.findOne({ "_id": req.body.imagesId })
//     .populate('writer')
//     .exec((err, imagesid) => {
//       if(err) return res.status(400).send(err);
//       return res.status(200).json({ success: true, imagesid})
//     })
// })

router.get('/images_by_id', (req, res) => {

    let type = req.query.type
    let imagesIds = req.query.id

    if(type === "array") {
      //ex) id=123123123,32423241254,..  type=array 이거를
      //productIds = ['123123132', '32423241254', '..'] 이런식으로 바꿔주기
     let ids = req.query.id.split(',')
     imagesIds = ids.map(item => {
         return item
     })
  }

  Image.find({ _id: { $in: imagesIds } })
        .populate('writer')
        .exec((err, imageid) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(imageid)
            // return res.status(200).send({imageid})
        })

})

module.exports = router;