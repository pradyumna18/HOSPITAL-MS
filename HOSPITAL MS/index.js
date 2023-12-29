var a = "admin";
var b = "admin150";
      window.localStorage.setItem('name', a);
      window.localStorage.setItem('passs', b);
      function Admin() {
        var username = document.getElementById("username");
        var pass = document.getElementById("passs");
        var adminpage = window.localStorage.getItem('name');
        var myadminpage = window.localStorage.getItem('passs');
        console.log(adminpage);
        console.log(myadminpage);
          if (username.value === adminpage && pass.value === myadminpage) {
              window.location.href = "admin/admin.html";
              alert("Successful");
          } else {
             alert("Invalid information");  
  }
}


// var c = "david";
// var d = "david123";
// window.localStorage.setItem('csk',c);
// window.localStorage.setItem('mi',d);
//  function myDoctor() {
//      var csk = document.getElementById("csk");
//      var mii = document.getElementById("mi");
//      var doctorpage = window.localStorage.getItem('csk');
//      var mydoctorpage = window.localStorage.getItem('mi');
//        console.log(doctorpage);
//        console.log(mydoctorpage);
//             if (csk.value ===doctorpage && mii.value ===mydoctorpage) {
//           window.location.href="doctor/doctor.html";
//           alert("Successful");
//      } else {
//          alert("Invalid information");
//      }
// }


function myDoctor(){
    var user =  document.getElementById("user").value;
    var pass = document.getElementById("pas").value;
    if(user=="david"&&pass=="david200"){
      window.location.href="doctor/doctor.html";
           alert("Successful");
    }else if(user=="marsh"&&pass=="marsh123"){
      window.location.href="doctor/doctor.html";
           alert("Successful");
    }else if(user=="smith"&&pass=="smith123"){
      window.location.href="doctor/doctor.html";
           alert("Successful");
    }else{
      alert("Invalid information");
    }
  }





let connectBtn = document.getElementById("connectBtn");  
connectBtn.addEventListener("click", function(){
    let emails = document.getElementById("emails");
    let pass = document.getElementById("pass");

    if(emails.value == "" && pass.value ==  ""){
        alert("Please Enter Detail")
    }else{
        alert("You Logged In")
        emails.value="";
        pass.value="";

    }

})