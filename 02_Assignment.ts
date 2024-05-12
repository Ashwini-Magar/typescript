console.log(`========================class constructor example===========================`);

class Employees{
    //properties
 emp_id:number;
 emp_name:string;
 emp_dept:string;
 //constructor
    constructor(emp_id:number,emp_name:string,emp_dept:string){
       this.emp_id =emp_id;
        this.emp_name=emp_name;
        this.emp_dept=   emp_dept;
     }
     //method
     display():void{
        console.log(`emp id:${this.emp_id},emp name: ${this.emp_name},emp_dept:${this.emp_dept}`);
     }
}
const empobject=new Employees(100,"Magar","IT");
empobject.display();

console.log(`========================removing duplicate elements from array==============`);
const arrayNumbers:number[]=[10,10,20,20,30,30,40,40,50,50];
console.log(`array before removing duplicate elements`);
console.log(arrayNumbers);

const removeDuplicates:number[]=[];
for (let i=0;i<arrayNumbers.length;i++) {
   for(let j=i+1;j<arrayNumbers.length;j++){
if(arrayNumbers[i]===arrayNumbers[j]){
   if (!removeDuplicates.includes(arrayNumbers[i])) {
      removeDuplicates.push(arrayNumbers[i]);
   }
}

   }
}
console.log(`array after removing duplicate elements`);

console.log(removeDuplicates);







