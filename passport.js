const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const User=require('./db').User
const facebook=require('./db').facebook
var FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user,done){
    done(null,user.username)
})
passport.deserializeUser(function(username,done){
    User.findOne({
        username:username})
    .then((user)=>{
        if(!user)return done(new error("no such user"))
        return done(null,user)
        
     })
     .catch((err)=>{done(err)})
    })
passport.use(new LocalStrategy(function(username,password,done){
    User.findOne({
        where:{username:username}
    })
    .then((user)=>{
        if(!user) {return done(null,false,{message:"No such user"})
    }
    if(user.password!==password){
        return done(null, false, {message: "Wrong password"})
}
return done(null, user)
}).catch((err) => {
    return done(err)
})
}))
passport.use(new FacebookStrategy({
    clientID:'489607711623210',
    clientSecret: '3783eb711dcfe58b3a8487db8ec3bf3a',
    callbackURL: "https://localhost:1234/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("here")  
    facebook.findOne({
        where:{id:profile.id}
    })
   .then((user)=>{
       if(user){
           return done(null,user)}
      if(!user){
          facebook.create({
              id:  profile.id,
              token: accessToken,
              name:profile.name.givenName,
              email:profile.emails[0].value
          })
          .then((user)=>{
            console.log("here")  
            return done(null,user)})
          .catch((err)=>{console.log(err)})
      }
       })
       .catch((err)=>{console.log(err)})
    
   }));
exports=module.exports=passport