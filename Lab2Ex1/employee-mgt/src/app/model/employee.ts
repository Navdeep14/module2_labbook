export class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    constructor(id:number, name:string, salary:number, department:string){
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
        this.empDepartment=department;
    }

}