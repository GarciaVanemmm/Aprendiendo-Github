// Rutas
const app = require("../../config/server");
const bcryptjs = require('bcryptjs');
const connection = require('../../config/db');

module.exports = app => {
   
    
    app.get('/register',(req,res) => {
        res.render('../views/register.ejs');
    })
    

    app.post('/register', async (req,res) => {
        /* Registro de usuario */
        const {Nombre,Correo,Tema,Mensaje} = req.body;
        let passwordHaash = await bcryptjs.hash(pass,8);
        connection.query("INSERT INTO Mensajeusuario SET ?",{
            Nombre:Nombre,
            Correo:Correo,
            Tema:Tema,
            Mensaje:Mensaje 
        }, async(error,results) =>{
            if(error){
                console.log(error);
            } else {
                /* Registro de usuario correcto */
                res.render('../views/Alerta.ejs',{
                    alert: true,
                    alertTitle: "Registro",
                    alertMessage: "Se registro exitosamente",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer: 15000,
                    ruta: '/login'
                });
            }
        })
    })

}