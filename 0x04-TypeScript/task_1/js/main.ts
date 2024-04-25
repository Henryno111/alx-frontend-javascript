interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: boolean | number | boolean;
}

interface Director extends Teacher {
    numberOfReports: number;
}

type PrintTeacherFunction = (firstName: string, lastName: string) => string;

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const fullName = `${firstInitial}. ${lastName}`;
    return fullName;
}

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}
