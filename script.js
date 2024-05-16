function clearInput(){
    document.getElementById("name1").value = "";
    document.getElementById("add1").value = "";
    document.getElementById("num1").value = "";

    var checkbox = document.getElementById("check1")
    if(checkbox.checked){
        checkbox.checked = false;
    }

    var checkbox2 = document.getElementById("check2")
    if(checkbox2.checked){
        checkbox2.checked = false;
    }

    var radio1 = document.getElementById("radio1")
    radio1.checked = false;
    var radio2 = document.getElementById("radio2")
    radio2.checked = false;
    var radio3 = document.getElementById("radio3")
    radio3.checked = false;
    var radio4 = document.getElementById("radio4")
    radio4.checked = false;
    var radio5 = document.getElementById("radio5")
    radio5.checked = false;

    var radio6 = document.getElementById("radio6")
    radio6.checked = false;
    var radio7 = document.getElementById("radio7")
    radio7.checked = false;
    var radio8 = document.getElementById("radio8")
    radio8.checked = false;
    var radio9 = document.getElementById("radio9")
    radio9.checked = false;
}

function submit(){

    document.getElementById("name1").value = "";
    document.getElementById("add1").value = "";
    document.getElementById("num1").value = "";
    alert("Thank you for reservation!")

    var checkbox = document.getElementById("check1")
    if(checkbox.checked){
        checkbox.checked = false;
    }

    var checkbox2 = document.getElementById("check2")
    if(checkbox2.checked){
        checkbox2.checked = false;
    }

    var radio1 = document.getElementById("radio1")
    radio1.checked = false;
    var radio2 = document.getElementById("radio2")
    radio2.checked = false;
    var radio3 = document.getElementById("radio3")
    radio3.checked = false;
    var radio4 = document.getElementById("radio4")
    radio4.checked = false;
    var radio5 = document.getElementById("radio5")
    radio5.checked = false;
    var radio6 = document.getElementById("radio6")
    radio6.checked = false;
    
    var radio7 = document.getElementById("radio7")
    radio7.checked = false;
    var radio8 = document.getElementById("radio8")
    radio8.checked = false;
    var radio9 = document.getElementById("radio9")
    radio9.checked = false;
}

function validate(){
    var name = document.getElementById("name1")
    var address = document.getElementById("add1")
    var number = document.getElementById("num1")

    if(name.value == "" || address.value == "" || number.value == ""){
        alert("Name and Address  and Number are Required!")
    }
}
