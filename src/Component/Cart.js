import { Component } from "react";

const Cart=(props)=>{
    return (
        <div className="container  ">
            <h1 className="text-white">My Cart Details</h1>
            <table className="table bg-light">
            <thead>
             <th>Product ID</th>
             <th>Product Name</th>
             <th>Product Price</th>        
            </thead>
            <tbody>
             {props.proData.map(pro =>
              <tr>
                <td>{pro.pid}</td>
                <td>{pro.pname}</td>
                <td>{pro.price}</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
    )
  }
  export default Cart;