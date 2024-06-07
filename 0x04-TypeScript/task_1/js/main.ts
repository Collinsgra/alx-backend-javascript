interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

const teacher_one: Teacher = {
    firstName: 'William',
    fullTimeEmployee: true,
    lastName: 'Ruto',
    location: 'Kenya'
};

const teacher_two: Teacher = {
    firstName: 'Jane',
    fullTimeEmployee: false,
    lastName: 'Vicky',
    location: 'USA',
    yearsOfExperience: 10
};

const teacher3: Teacher = {
    firstName: 'Jack',
    fullTimeEmployee: false,
    lastName: 'Smith',
    location: 'Canada',
    contract: false
};

const director_one: Directors = {
    firstName: 'John',
    lastName: 'Mudryk',
    location: 'Ukraine',
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(teacher_one);
console.log(teacher_two);
console.log(teacher3);
console.log(director_one);

console.log(printTeacher("William", "Ruto"));  // Output: W. Ruto


interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}


const student = new StudentClass('William', 'Ruto');
console.log(student.displayName()); // Output: William
console.log(student.workOnHomework()); // Output: Currently working
