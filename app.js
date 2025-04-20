var Form = document.getElementById('Form');
var SelectCountry = document.getElementById('SelectCountry')
var SelectCity = document.getElementById('SelectCity')
var SelectEvent = document.getElementById('SelectEvent')
var SelectComputer = document.getElementById('SelectComputer')
var FullName = document.getElementById('FullName')
var FatherName = document.getElementById('FatherName')
var Phone = document.getElementById('Phone')
var cnic = document.getElementById('cnic')
var FatherCNIC = document.getElementById('FatherCNIC')
var DateBirth = document.getElementById('DateBirth');
var SelectGender = document.getElementById('SelectGender')
var Address = document.getElementById('Address')
var LastQualification = document.getElementById('LastQualification')
var Laptop = document.getElementById('Laptop')




function NameValidation(e){
    
    var    itsName = document.getElementsById("name")
    
    if(e.target.value.length > 3){
        itsName.innerText = "invalid Name"
        itsName.style.color="red"
    }
    
}

// onBlur event function. empty input per red border karta hai

function formAlert(e) {
    if (e.target.value === "") {
        e.target.style.border = "1px solid red"
    }
    else {
        e.target.style.border = "1px solid  #8dc63f";
    }

};



// phone number Check Function. ye phone number check karta hai

function phoneAlert(e){

var phoneNum = document.getElementById("phoneNum")

    if (e.target.value.length < 11){
        e.target.style.border = "1px solid red"
        phoneNum.innerText = "Number is incomplete"
        phoneNum.style.color="red"
    }
    else if(e.target.value === ""){
        e.target.style.border = "1px solid red"
         phoneNum.innerText = "Please Enter Number"
         phoneNum.style.color="red"
    }
    else if(e.target.value.length > 11){
         e.target.style.border = "1px solid red"
         phoneNum.innerText = "Number is wrong"
         phoneNum.style.color="red"
    }


    else if(e.target.value.length = 11){ 
        e.target.style.border = "1px solid  #8dc63f";
         phoneNum.innerText = ""
        
    }
}

// CNIC Number check Function. ye CNIC number ki length check karta hai

function  CnicCheck(e){

 var   CnicCall = document.getElementsByClassName('CnicCall')

    if (e.target.value.length < 13){
        e.target.style.border = "1px solid red"
    }

    else if(e.target.value === ""){
        e.target.style.border = "1px solid red"
    }

    else if(e.target.value.length > 13){
        e.target.style.border = "1px solid red"
   }

   else if(e.target.value.length = 13){ 
    e.target.style.border = "1px solid  #8dc63f";

    
}
}