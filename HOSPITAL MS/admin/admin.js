document.getElementById("firstName").innerHTML=localStorage.getItem("aValue");
document.getElementById("lastName").innerHTML=localStorage.getItem("bValue");
document.getElementById("emailName").innerHTML=localStorage.getItem("cValue");
document.getElementById("mobileName").innerHTML=localStorage.getItem("dValue");
document.getElementById("pageName").innerHTML=localStorage.getItem("fValue");
document.getElementById("treatmentName").innerHTML=localStorage.getItem("eValue");
document.getElementById("dateName").innerHTML=localStorage.getItem("gValue");
document.getElementById("timeName").innerHTML=localStorage.getItem("hValue");
document.getElementById("bloodName").innerHTML=localStorage.getItem("iValue");
document.getElementById("genderName").innerHTML=localStorage.getItem("jValue");


function logout() {
    alert("Admin do u want to logout..");
    window.location.href = '/index.html'
}

let data = [
    {
      id: 1,
      name: "Pradyumna",
      age: 25,
      mobile: 9021093921,
      date: "2023-14-10"
    },
  ];
  
  function readAll() {
    var tableData = document.querySelector(".tb");
    var elements = '';
    data.map(obj => {
      elements += `<tr>
             <td>${obj.name}</td>
             <td>${obj.age}</td>
             <td>${obj.mobile}</td>
             <td>${obj.date}</td>
      </tr>`
    })
    tableData.innerHTML = elements;
  }
  
  function addData() {
    var name = document.querySelector(".name").value ;
    var age = document.querySelector(".age").value; 
    var mob = document.querySelector(".mob").value;
    var dt = document.querySelector(".dt").value;
    var obj = { id: 2, name: name, age: age, mobile: mob, date: dt }; 
    data.push(obj);
    readAll();
    document.querySelector(".name").value="" ;
    document.querySelector(".age").value=""; 
    document.querySelector(".mob").value="" ;
    document.querySelector(".dt").value="";
  }
  


