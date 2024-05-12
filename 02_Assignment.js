var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("========================class constructor example===========================");
var Employees = /** @class */ (function () {
    //constructor
    function Employees(emp_id, emp_name, emp_dept) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
    }
    //method
    Employees.prototype.display = function () {
        console.log("emp id:".concat(this.emp_id, ",emp name: ").concat(this.emp_name, ",emp_dept:").concat(this.emp_dept));
    };
    return Employees;
}());
var empobject = new Employees(100, "Magar", "IT");
empobject.display();
console.log("========================removing duplicate elements from array==============");
var arrayNumbers = [10, 10, 20, 20, 30, 30, 40, 40, 50, 50];
console.log("array before removing duplicate elements");
console.log(arrayNumbers);
var removeDuplicates = [];
for (var i = 0; i < arrayNumbers.length; i++) {
    for (var j = i + 1; j < arrayNumbers.length; j++) {
        if (arrayNumbers[i] === arrayNumbers[j]) {
            if (!removeDuplicates.includes(arrayNumbers[i])) {
                removeDuplicates.push(arrayNumbers[i]);
            }
        }
    }
}
console.log("array after removing duplicate elements");
console.log(removeDuplicates);
var array = [10, 10];
var newArray = __spreadArray([], new Set(array), true);
console.log(newArray);
