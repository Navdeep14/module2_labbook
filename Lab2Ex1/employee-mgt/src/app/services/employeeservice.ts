import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(1,'Shivam',10000,"Java"),
   new Employee(2,'Lucky',20000,"Sql")
];   
 
  addEmployee(emp:Employee):void{
   this.store.push(emp);
  }
  updateEmployee(employee:Employee):string{
    let foundIndex=-1;
    for(let i=0;i<this.store.length;i++){
      let emp=this.store[i];
      if(emp.empId===employee.empId){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0){
      return "Invalid Id";
    }
    this.store[foundIndex].empDepartment=employee.empDepartment;
    this.store[foundIndex].empName=employee.empName;
    this.store[foundIndex].empSalary=employee.empSalary;
    return "Data Updated"
  }

  removeEmployeeById(id:number){
    let foundIndex=-1;
    for(let i=0;i<this.store.length;i++){
      let emp=this.store[i];
      if(emp.empId===id){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0){
      return;
    }
    this.store.splice(foundIndex,1);

  }

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}