///<reference path = "Student.ts" />
///<reference path = "Teacher.ts" />


    let stu1:  StudentNS.StudentInt = new StudentNS.Student("Yogita Singh",23222);
    stu1.dispDetails();
    
    
    let t1 = new TeacherNS.Teacher("sachin",["flutter","react","nodejs"])
    console.log(`Teacher Name: ${t1.fullname}  | Subject Teach:  ${t1.subjects}`)



    export{}