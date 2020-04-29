import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employeeservice';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  service:EmployeeService;
  
  constructor(service:EmployeeService) {
    this.service=service;
   }

  ngOnInit(): void {
  }

   updatedEmp:Employee=null;
     
  updateEmployee(form:any){
    let details=form.value;
    let id=details.id;
    let name=details.name;
    let salary=details.salary;
    let department = details.department;
    let emp=new Employee(id,name,salary,department);
    this.service.updateEmployee(emp);
    this.updatedEmp=emp; 
    form.reset();
  }

}
