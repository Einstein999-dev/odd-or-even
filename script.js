function result(){

    let num = document.getElementById("number").value;
    let result = document.getElementById("out-result").value;
    let remainder = (num % 2);
    if(num == ""){
        alert("Please enter valid number");
    }else if(remainder == 0){
        document.getElementById('out-result').innerHTML = num + "<br> this number is even";
    }
    else{
        document.getElementById('out-result').innerHTML = num + "<br> this number is odd";
    } 
}

function reset(){
    location.reload();
}