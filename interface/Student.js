var StudentNS;
(function (StudentNS) {
    var Student = /** @class */ (function () {
        function Student(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
        }
        Student.prototype.dispDetails = function () {
            console.log("Name :".concat(this.fullname, " | Passport:").concat(this.passport));
        };
        return Student;
    }());
    StudentNS.Student = Student;
})(StudentNS || (StudentNS = {}));
