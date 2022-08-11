class EmployeeePayrollData {
  // Name;
  // ProfileImage
  // Gender;
  // Department;
  // Salary;
  // StartDate;

  constructor(...params) {
    this.name = params[0];
    this.ProfileImage = params[1];
    this.gender = params[2];
    this.Department = params[3];
    this.salary = params[4];
    this.startDate = params[5];
    this.note = params[6];
  }
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Name is incorrect";
  }
  get Department() {
    return this._Department;
  }
  set Department(Department) {
    this._Department = Department;
  }
  get ProfileImage() {
    return this._ProfileImage;
  }
  set ProfileImage(ProfileImage) {
    this._ProfileImage = ProfileImage;
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }
  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    this._startDate = startDate;
  }
  
  get note() {
    return this._note;
  }
  set note(note) {
    this._note = note;
  }

  toString() {
    const option = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : this._startDate.toLocaleDateString("en-US", option);
    return (
      ", Department= " +
      this.Department +
      ", name = " +
      this.name +
      ", ProfileImage" +
      this.ProfileImage +
      ", salary = " +
      this.salary +
      ", Gender = " +
      this.gender +
      " , StartDate = " +
      empDate +
      ", note = " +
      this.note
    );
  }
}
