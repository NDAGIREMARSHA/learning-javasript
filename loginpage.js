function phone(){
   var t = document.getElementById("name").value
   console.log(t)
   var cat = document.getElementById("passcode").value
   console.log(cat)
   document.getElementById("water").innerHTML= t + "" + cat
   if ( t=="Marsha" && cat=="123456"){
      localStorage.setItem("username","Marsha")
      localStorage.setItem("phoneNumber","0701267392")
      window.location.href ="complaints.html"
   }
   else if(t=="admin" && cat=="admin123"){
      window.location.href="login.html"
   }
}
var cats=[]
function cloth(){
   var complaints=document.getElementById("space").value
   console.log(complaints)
   var t={sender:"Marsha",complaint:complaints,statuss:"new"}
   cats.push(t)
   console.log(cats)
   localStorage.setItem("white",JSON.stringify(cats))
}
function flower(){
   var t= localStorage.getItem("phone")
   console.log(t)
}
function myFunction() {
   var t = document.getElementById("remote").innerHTML="roses are red and violets are blue"
   var TableBody = document.getElementById("remote")
   var row = TableBody.insertRow()
   var TableData = row.insertCell()
   TableData.innerHTML="this the new cell"
}
