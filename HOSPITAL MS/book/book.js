let Back = document.getElementById('btn');
Back.addEventListener('click',()=>{
  window.location.href="http://127.0.0.1:5500/index.html";
});



function save(){
    var firstnameValue =document.getElementById("fname").value;
    var lastnameValue = document.getElementById("lname").value;
    var emailValue = document.getElementById("email").value ;
    var mobileValue = document.getElementById("mobile").value;
    var treatmentValue = document.getElementById("treat").value;
    var pageValue = document.getElementById("age").value;
    var dateValue = document.getElementById("date").value;
    var timeValue = document.getElementById("time").value;
    var bloodValue = document.getElementById("blood").value;
    var genderValue = document.getElementById("gender").value;
  
  
    localStorage.setItem("aValue",firstnameValue);
    localStorage.setItem("bValue",lastnameValue);
    localStorage.setItem("cValue",emailValue);
    localStorage.setItem("dValue",mobileValue);
    localStorage.setItem("eValue",treatmentValue);
    localStorage.setItem("fValue",pageValue);
    localStorage.setItem("gValue",dateValue);
    localStorage.setItem("hValue",timeValue);
    localStorage.setItem("iValue",bloodValue);
    localStorage.setItem("jValue",genderValue);

    window.location.href="patient.html";
    window.location.href="doctor.html";
    window.location.href="admin.html";
  }