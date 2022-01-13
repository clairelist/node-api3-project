function logger(req, res, next) {
  // DO YOUR MAGIC

  const timestamp = new Date().toLocaleString();
  const methodr = req.method;
  const url = req.originalUrl;

  console.log(`Method ${methodr} made to ${url} at local time: ${timestamp}`);
  next(); //call next so we havae barebones middleware !
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log('validateId middleware !');
  next(); //call next so we havae barebones middleware !
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('validateUser middleware !');
  next(); //call next so we havae barebones middleware !
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('validatePost middleware !');
  next(); //call next so we havae barebones middleware !
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}