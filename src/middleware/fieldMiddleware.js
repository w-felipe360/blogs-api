const fieldMiddleware = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
  };
  
  const emailRegexMiddleware = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
  };
  
  const passwordLengthMiddleware = (req, res, next) => {
    const { password } = req.body;
      if (password.length < 6) {
      return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    }
  
    next();
  };
  
  module.exports = { fieldMiddleware, emailRegexMiddleware, passwordLengthMiddleware };
