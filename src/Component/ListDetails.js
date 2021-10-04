const ListDetails=(props)=>{
  return (
      <div className="container  ">
          <h1 className="text-white">Employee Details</h1>
          <table className="table bg-light">
          <thead>
           <th>Employee ID</th>
           <th>Employee Name</th>
           <th>Employee Salary</th>
           <th>Employee Grade </th>
          </thead>
          <tbody>
           {props.emp.map(employee =>
            <tr>
              <td>{employee.eid}</td>
              <td>{employee.ename}</td>
              <td>{employee.salary}</td>
              <td>{employee.grade}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
  )
}
export default ListDetails;

{/* <table className="table">
                            <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            </tr>
                            <tr>
                                <td>{value.pname}</td>
                                <td>{value.price}</td>
                                <td>{value.quantity}</td>

                            </tr>



                        </table> */}