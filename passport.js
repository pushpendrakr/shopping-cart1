const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const User=require('./db').User

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
exports=module.exports=passport