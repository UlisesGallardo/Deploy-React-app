
import  mongoose  from "mongoose";
import Todo from "../models/Todo.js";

//crenado API, conectar base de datos con backend

export const getTodos = async(req,res)=>{
    try{
        const Todos = await Todo.find();
        return res.status(200).json(Todos);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

export const createTodo = async(req,res)=>{
    
    const todo = new Todo(req.body);
    try{
        await todo.save();  //Nos va a regresar el to do que vamos a crear
        res.status(200).json(todo);
    }   
    catch(error){
        res.status(400).json({message: error.message});
    }
};


export const deleteTodo = async(req,res)=>{
    const {id} = req.params;
    console.log("éste es el id del usuario:",id);
    
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No existe!");
    }

    await Todo.findOneAndRemove(id);
    return res.status(200).json("eliminado con exito");
};


