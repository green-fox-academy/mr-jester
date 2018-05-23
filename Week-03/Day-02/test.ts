'use strict';
class Student {
    name: string;
    grade: number[] = [];
}

let ehsan = new Student();
ehsan.name = "Ehsan";
ehsan.grade.push (5);
console.log(ehsan.grade);