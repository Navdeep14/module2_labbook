import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employeeservice';

@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[]=[];

  updatedResult="";
  
  service:EmployeeService;

  orderByField:string=null;

  constructor(service:EmployeeService) {
  this.service=service;
  this.employees=this.service.fetchAllEmployees();
  }

  ngOnInit(): void {
  }
 
  orderBy(field:string){
    this.orderByField=field;     
  }

  removeEmployeeById(id:number){
   this.service.removeEmployeeById(id);
  }
  updateEmployee(employee:Employee){
    this.updatedResult = this.service.updateEmployee(employee);
   }
 
}
