// import { Button } from 'bootstrap'
import React from 'react'
import {useState} from 'react'
function OneMillion() {
    let [item,setItem]=useState([{
        name:"Abc",
        id:123,
        pwd:"sdfjsgjf"
    },
    {
        name:"Bac",
        id:345,
        pwd:"sdfjsgjf"
    }])
    setItem=(obj)=>{
        item.push(obj)
    }
    const AddItem=()=>
    {
        const obj={
            name:"bfxb",
            id:123,
            pwd:"23"
        }
        // item.push(obj)
        setItem(obj)
        console.log(item)
    }
    
  return (
    <div className="container">
                {/* <table className="table shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Id</th>
                    <th scope="col">P</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                </tbody>
            </table> */}
            <button className="btn btn-lg btn-primary" onClick={AddItem}>Add</button>
            <table className='table'>
                <thead>
                <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Password</th>
                </tr>
                </thead>
                <tbody>
                {item.map(( listValue ) => {
          return (
            <div>
              <td className='w-100'>{listValue.name}</td>
              <td className='w-100'>{listValue.id}</td>
              <td className='w-100'>{listValue.pwd}</td>
         </div>
          );
        })}
        </tbody>
            </table>
        
    </div>
  )
}

export default OneMillion