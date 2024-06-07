interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
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
    lastName: 'vicky',
    location: 'USA',
    yearsOfExperience: 10
};

const teacher_3: Teacher = {
    firstName: 'Jack',
    fullTimeEmployee: false,
    lastName: 'Mudryk',
    location: 'Ukraine',
    contract: false
};

console.log(teacher_one);
console.log(teacher_two);
console.log(teacher_3);
