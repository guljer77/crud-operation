import { toast } from "react-hot-toast";

export const AddChocolate = data =>{
  fetch(`https://chocolate-server-guljer77.vercel.app/chocolate`, {
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
  fetch(`https://chocolate-server-guljer77.vercel.app/chocolate/${id}`, {
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
  fetch(`https://chocolate-server-guljer77.vercel.app/chocolate/${id}`, {
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