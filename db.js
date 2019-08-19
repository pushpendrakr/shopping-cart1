const Sequelize=require('sequelize')
const db=new Sequelize('shopdb','root','Indra@2000',
{
host:'localhost',
dialect:'mysql',
pool: {
    min: 0, max: 5,
}

})

    const User=db.define('users2',
   { id:{type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true},

    name:{type:Sequelize.STRING,
          allowNull:false}})
    
    const Product=db.define('products3',{
        id:{ type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            
        },
        name:{ type:Sequelize.STRING,
               allowNull:false},
        manufacturer:{ type:Sequelize.STRING,
            allowNull:false},
        price:{type:Sequelize.FLOAT,
            allowNull:false,
            defaultValue:0.0}})
        const cart=db.define('cart',{
            id:{ type:Sequelize.INTEGER,
                
                primaryKey:true,
                
            },
            name:{ type:Sequelize.STRING,
                   allowNull:false},
            manufacturer:{ type:Sequelize.STRING,
                allowNull:false},
            price:{type:Sequelize.FLOAT,
                allowNull:false,
                defaultValue:0.0}
        })
            
            db.sync()
            .then(()=>{
                console.log("database synced")})
                .catch((err)=>{console.log("error in syncing db")})

                exports=module.exports={User,Product,cart}  
                
00