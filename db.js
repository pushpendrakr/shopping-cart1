const mysql2=require('mysql2')
const Sequelize=require('sequelize')

// let databasename='shopdb'
// let user='root'
// let password='Indra@2000'
// let server='localhost'



let databasename='sql12302745'
let user='sql12302745'
let password='cxPyF4CgJS'
let server='sql12.freemysqlhosting.net'

const db=new Sequelize(databasename,user,password,
{
host:server,
dialect:'mysql',
pool: {
    min: 0, max: 5,

}})
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
                .catch((err)=>{console.log(err)})

                exports=module.exports={User,Product,cart}  
                
