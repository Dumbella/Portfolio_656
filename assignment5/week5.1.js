window.onload = Pageload

function Pageload(){
    alert("Hello!")
}
let topic1 = document.getElementById("topic1");
let comment1 = document.getElementById("comment1");
let comment2 = document.getElementById("comment2");
let a = 1;



function postFunction(){
    if(a==1){
        let text1 = document.getElementById("text1").value;
        console.log(text1);
        document.getElementById("topic1").innerHTML = text1;
        a++;
        console.log(a);
        document.getElementById("text1").value = " ";
    }
    else if(a==2){
        let text1 = document.getElementById("text1").value;
        console.log(text1)
        document.getElementById("comment1").innerHTML = text1;
        a++;
        console.log(a);
        document.getElementById("text1").value = " ";
    }
    else if(a==3){
        let text1 = document.getElementById("text1").value;
        console.log(text1);
        document.getElementById("comment2").innerHTML = text1;
        a++
        console.log(a)
        document.getElementById("text1").value = " ";
    }
    else{
        alert("พิมไม่ได้แล้วค่า กด Clear สิ!");
    }
}


    function clearFunction(){
        if(a==4){
        document.getElementById("topic1").innerHTML=" ";
        document.getElementById("comment1").innerHTML = " ";
        document.getElementById("comment2").innerHTML = " ";
        document.getElementById("text1").value = " ";
        
        }
        a = 1; 
        console.log(a)
    }
