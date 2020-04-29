import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employeeservice';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  service:EmployeeService;
  
  constructor(service:EmployeeService) {
    this.service=service;
   }

  ngOnInit(): void {
  }

   addedEmp:Employee=null;
     
  addEmployee(form:any){
    let details=form.value;
    let id=details.id;
    let name=details.name;
    let salary=details.salary;
    let department = details.department;
    let emp=new Employee(id,name,salary,department);
    this.service.addEmployee(emp); // adding to the store
    this.addedEmp=emp; 
    form.reset();
  }
 
}
