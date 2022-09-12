"use strict";
///<reference path = "Student.ts" />
///<reference path = "Teacher.ts" />
exports.__esModule = true;
var stu1 = new StudentNS.Student("Yogita Singh", 23222);
stu1.dispDetails();
var t1 = new TeacherNS.Teacher("sachin", ["flutter", "react", "nodejs"]);
console.log("Teacher Name: ".concat(t1.fullname, "  | Subject Teach:  ").concat(t1.subjects));
