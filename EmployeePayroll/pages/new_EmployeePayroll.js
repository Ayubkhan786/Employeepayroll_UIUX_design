window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = " ";
      return;
    }
    try {
      new EmployeeePayrollData().name = name.value;
      textError.textContent = " ";
    } catch (e) {
      textError.textContent = e;
    }
  });
});
const save = () => {
try{
    let EmployeeePayrollData=createEmployeePayroll();
}catch(e){
    return;
}
}
const createEmployeePayroll=()=>{
    let EmployeeePayrollData =new EmployeeePayrollData();
    try{
        EmployeeePayrollData.name = getinputvalueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    EmployeeePayrollData.ProfileImage =getSelectedValues('[name=profile]').pop();
    EmployeeePayrollData.gender =getSelectedValues('[name=grnder]').pop();
    EmployeeePayrollData.salary =getinputvalueById('#salary');
    EmployeeePayrollData.note =getinputvalueById('#notes');
    let date=getinputvalueById('#day')+" "+getinputvalueById('#month')+" "+getinputvalueById('#year');
    EmployeeePayrollData.date=Date.parse(date);
    alert(EmployeeePayrollData.tostring());
    return EmployeeePayrollData;
}

const getSelectedValues=(propertyValue)=>{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item =>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}
const getinputvalueById=(id)=>{
    let value=document.querySelector(id).value;
    return value;
}