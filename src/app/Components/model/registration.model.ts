export class Student {
  constructor(public firstName: string, public middleName: string, public lastName: string, public dob: Date) {}
}
export class Registration {
  constructor(public firstName: string, public middleName: string, public lastName: string, public isParent: string,
  public dob: Date, public education: string, public email: string, public password: string, public student: Student) {}
}
