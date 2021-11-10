function process () {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var salary = document.getElementById("salary").value;
    var yearlySalary = salary*12;

    if (age>25 && yearlySalary >= 100000) {
        monthlyBonus = salary*0.2;
    }
    else if 
        (age>30 && yearlySalary >= 200000) {
        monthlyBonus = salary*0.3;
    }
    else if (age>35 && yearlySalary >= 300000) {
        monthlyBonus = salary*0.4;
    }
    else {
        monthlyBonus = salary*0.1;
    }
    
    var totalMonthlyBonus = monthlyBonus*12;

    var show = "Hello "+ name + " your total yearly bonus is: " + totalMonthlyBonus;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";

    para1.innerText = show;
}