class Student{
    constructor(ID,firstname,lastname,age,English,Maths,Science,History){
        this.ID = ID;
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.English=English;
        this.Maths=Maths;
        this.Science=Science;
        this.History=History;
    };
};

module.exports ={
    Student:Student
};