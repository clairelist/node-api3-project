const express = require('express');
const {validateUserId,
       validateUser,
       validatePost,
      } = require('../middleware/middleware');
const User = require('./users-model');
const Posts = require('../posts/posts-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  User.get()
  .then(users=>{
    res.status(200).json(users);
  })
  .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
  res.json(req.user); //easy as pie p-i-y !
});

router.post('/', validateUser, (req, res, next) => {
       User.insert(req.body)
       .then(newUser => {
        res.status(201).json(newUser);
       })
       .catch(next)
});

router.put('/:id', validateUserId, validateUser, (req, res, next) => {
  User.update(req.params.id, req.body)
          .then(updatedUser=>{
            res.status(201).json(updatedUser);
          })
          .catch(next)
});

router.delete('/:id', validateUserId, (req, res, next) => {
  User.remove(req.params.id)
    .then(()=>{
      res.status(200).json({message: 'Successful strike on target id !'})
    })
    .catch(next)
});

router.get('/:id/posts', validateUserId, (req, res) => {
  res.json(req.post);
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  console.log(req.user); //log for testing !
  // and another middleware to check that the request body is valid
});

//catchall error handler ::
router.use((err,req,res,next)=>{ //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

// do not forget to export the router
module.exports = router;