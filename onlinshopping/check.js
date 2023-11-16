	
function check() {
 var fcheck = document.getElementById("fname");
 var lcheck = document.getElementById("lname");
  var ucheck = document.getElementById("uname");
 var echeck = document.getElementById("email");
 var cecheck = document.getElementById("cemail");
  var pcheck = document.getElementById("Password");
   var pcheck = document.getElementById("cPassword");
 if( fcheck.value === ""){
 	document.getElementById("fname").innerHTML= "Please Enter your First-name"
 	//alert("missing value.");
 	fcheck.focus();
 	return false; 
 }
  if( lcheck.value === ""){
 	document.getElementById("lname").innerHTML= "Please Enter your Last-name"
 	//alert("missing value.");
 	lcheck.focus();
 	return false; 
 }
  if( ucheck.value === ""){
 	document.getElementById("uname").innerHTML= "Please Enter your First-name"
 	//alert("missing value.");
 	ucheck.focus();
 	return false; 
 }
  if( echeck.value === ""){
 	document.getElementById("email").innerHTML= "Please Enter your Last-name"
 	//alert("missing value.");
 	echeck.focus();
 	return false; 
 }

 if( cecheck.value === ""){
 	document.getElementById("cemail").innerHTML= "Please Enter your First-name"
 	//alert("missing value.");
 	cecheck.focus();
 	return false; 
 }
  if( pcheck.value === ""){
 	document.getElementById("Password").innerHTML= "Please Enter your Last-name"
 	//alert("missing value.");
 	pcheck.focus();
 	return false; 
 }

 if( cpcheck.value === ""){
 	document.getElementById("cPassword").innerHTML= "Please Enter your First-name"
 	//alert("missing value.");
 	cpcheckid="lname".focus();
 	return false; 
 }
}

