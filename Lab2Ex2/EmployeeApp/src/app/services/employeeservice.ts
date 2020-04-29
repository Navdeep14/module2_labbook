import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(1005,'Amol',7000,".NET"),
   new Employee(1009,'Daya',1000,"TESTING"),
   new Employee(1008,'Neelima',81000,"TESTING"),
   new Employee(1001,'Rahul',9000,"JAVA"),
   new Employee(1007,'Rajita',21000,"BI"),
   new Employee(1004,'Sachin',11500,"ORAAPS"),
   new Employee(1003,'Uma',12000,"JAVA")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}