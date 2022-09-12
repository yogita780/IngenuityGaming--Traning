var TeacherNS;
(function (TeacherNS) {
    var Teacher = /** @class */ (function () {
        function Teacher(fn, sub) {
            this.fn = fn;
            this.sub = sub;
            this.fullname = fn;
            this.subjects = sub;
        }
        return Teacher;
    }());
    TeacherNS.Teacher = Teacher;
})(TeacherNS || (TeacherNS = {}));
