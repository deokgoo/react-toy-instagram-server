import passport from 'passport';
import JwtStrategy from 'passport-jwt';

const jwtOptions = {
  jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secret: process.env.JWT_SECRET
};

const verifyUser = (payload, done) => {
  
};

passport.use(new JwtStrategy(jwtOptions, ));