//DATA :: the user object

const User = require('../users/users-model'); 
//getById, get, etc the user!

function logger(req, res, next) { //we do need res even if we don't use it here because next will break otherwise !
  // DO YOUR MAGIC

  const timestamp = new Date().toLocaleString();
  const methodr = req.method;
  const url = req.originalUrl;

  console.log(`Method ${methodr} made to "${url}" at local time: ${timestamp}`);
  next(); 
}

async function validateUserId(req, res, next) { //asyncronous bc we are calling database !
  // DO YOUR MAGIC
 try {
      const user = await User.getById(req.params.id);
      if (!user) {
          res.status(404).json({message: 'user not found'});
      } else {
        req.user = user; //this is how we store it ! Not the other way round claire ;-)
        next(); //THEN invoke next
      }
 } catch(err) {
  res.status(500).json({message: 'BAD REQUEST MADE! ', error: err});
 }
  // next(); 
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('validateUser middleware !');
  next(); 
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('validatePost middleware !');
  next();
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}