import { useEffect, useState } from "react"
import "./index.scss"
import axios from "axios"

const BicycleTable = ({getAllBicycles,bicycles}) => {

    useEffect(() => {
        getAllBicycles()
    }, [])
    
    const deleteBicycle = async (id)=>{
        await axios.delete(`http://localhost:5234/bicycle/${id}`)
        getAllBicycles()
    }

  return (
    <table className="table table-dark bicycle-table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>    
                <th>Discount</th>    
                <th></th>
            </tr>
        </thead>
        <tbody>
            {bicycles && bicycles.map(item=>(
                <tr key={item._id}>
                    <td>{item.image}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td><button onClick={()=>deleteBicycle(item._id)} className="btn btn-danger">Delete</button></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default BicycleTable