import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

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
    this.addedEmp=emp; 
    form.reset();
  }

}
