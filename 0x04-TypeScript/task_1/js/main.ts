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
    lastName: 'Mudryk',
    location: 'Ukraine',
    contract: false
};

const director_one: Directors = {
    firstName: 'John',
    lastName: 'Smith',
    location: 'Canada',
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(teacher_one);
console.log(teacher_two);
console.log(teacher3);
console.log(director_one);
