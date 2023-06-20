import { toast } from "react-hot-toast";

export const AddChocolate = data =>{
  fetch(`http://localhost:5000/chocolate`, {
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      toast.success("Chocolate Add Success")
    }
  })
}

export const UpdateChocolate = (id, data) =>{
  fetch(`http://localhost:5000/chocolate/${id}`, {
    method: "PUT",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
    if(data.modifiedCount>0){
      toast.success("Chocolate Update")
    }
  })
}

export const DeleteChocolate = (id) =>{
  fetch(`http://localhost:5000/chocolate/${id}`, {
    method: "DELETE"
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
    if(data.deletedCount>0){
      toast.error("Chocolate Deleted")
    }
  })
}