import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    try {
      if (!req.headers.authorization)
        throw Error("You are not authorized to see the requested data.");
  
      const data = jwt.verify(req.headers.authorization, process.env.jwtsecret);
      if(!data)
        throw Error("You are not authorized to see the requested data.");

      req.userId = data.userId;
      next();
    } 
    catch (error) {
        return res.status(400).json({ message : error.message });
    }
  };