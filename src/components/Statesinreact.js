import React, { Component } from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
const emp1 = {
  empId: 101,
  empName: "Sharad",
  designation: "Manager",
  salary: 100000,
  age: 48,
  achievements: "No Major achievements so far",
  image:image2
};
const emp2 = {
  empId: 102,
  empName: "Shreyas",
  designation: "CEO",
  salary: 10000000,
  age: 23,
  achievements: "HE is the master of achievements",
  image:image1
};

class Statesinreact extends Component {
  employees = [emp1, emp2];
  state = { selectedEmp: null };

  createCard(employee) {
    var note = null;
    var achievements = null;
    if (employee.age < 25) {
      note = <span className="text-info">Fresher</span>;
    }
    if (this.state.selectedEmp === employee.empId) {
      achievements = (
        <p>
          <i>{employee.achievements}</i>
        </p>
      );
    }
    return (
      <div>
        <div className="card"  style={{width:"300px"}}>
            <img className="card-img-top" src={employee.image}alt={employee.empName}/>
          <h1 className="card-title">{employee.empName}</h1>
          <p className="card-text">
            <span>Employee Id is {employee.empId}</span><br/>
            <span>Employee name is {employee.empName}</span><br/>
            <span>Employee Salary is {employee.salary}</span><br/>
            <span>Employee Designation is {employee.designation}</span><br/>
            <span>Employee Age is {employee.age} <br/> {note}</span><br/>
          </p>
          {achievements}
          <button className="btn btn-primary">Edit</button>
          <button
            className="btn btn-success m-1"
            onClick={() => {
              this.setState({ selectedEmp: employee.empId });
            }}
          >
            View
          </button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="text-center text-primary">Employee Details</div>
        <div className="row" >
          {this.employees.map((employee, index) => {
            return <div style={{marginLeft:"20px"}}>{this.createCard(employee)}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Statesinreact;
