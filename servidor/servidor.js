import  express  from "express";
import  mongoose  from "mongoose";
import cors from "cors";
import TodoRoutes from "./routes/Todo.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dbUser:UP.2021@cluster0.ytdh1.mongodb.net/NoTasks?retryWrites=true&w=majority',
    //No me funcionó con la promesas
    async(err)=>{
        if(err) throw err;
        console.log("conectado a la base de datos")
    }
)

app.listen(8000,()=>{
    console.log("corriendo en puerto 3000");
})

app.use("/todos", TodoRoutes);  //Agregando enrutamiento

app.get('/',(req, res)=>{       //Solo para verificar que tengo acceso a la página
    res.send("hola mundo");
})

