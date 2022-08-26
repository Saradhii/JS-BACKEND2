const Patients = require("../models/PatientSchema");
const Router = require("express");


const PatientsRoute = Router();

// add new todo
// TodoRoute.post("/newtodo",(req,res)=>{
//     const {id,todoTask,todoStatus,todoTag}=req.body;
//     const todo = new Todo({id,todoTask,todoStatus,todoTag});
//     todo.save().then(()=>{
//         res.status(200).send({message:"Todo created successfully"});
//     });
// })

// get all todos respective to userid
PatientsRoute.get("/all", async(req,res)=>{
    const patients = await Patients.find();
    res.status(200).send(patients);
});

// TodoRoute.get("/allpending/:id", async(req,res)=>{
//     const todos = await Todo.find({$and: [{"id": req.params.id},
//     {"todoStatus": "Pending"}]});
//     res.status(200).send(todos);
// });

// //delete patient
PatientsRoute.delete("/delete/:id", async(req,res)=>{
    const data = await Patients.deleteOne({ _id: req.params.id });
    return res.status(200).send({message: "Patient deleted Succsessfully"});
})

// //get single todo by id
// TodoRoute.get("/singletodo/:id",async(req,res)=>{
//     const bestProduct = await Todo.find(req.params);
//     res.status(200).send(bestProduct);
// })

// //update todo by id 
// TodoRoute.patch("/edit/:_id",async (req,res) => {
//     const updated = await Todo.updateOne({"_id":req.params},{$set:{"todoTask":req.body.todoTask , "todoStatus":req.body.todoStatus, "todoTag":req.body.todoTag }});
//     res.status(200).send(updated);
//   }
// );

module.exports=PatientsRoute;