//nested if statement
let age=15;
let nationality="kenyan";
if(age>=18){
    if(nationality=="Rwandan"){
        console.log("you are eligible to vote in Rwanda");
    }else{
        console.log("you are not Rwandan citizen.");
    }
}else{
    console.log("you are minor. and can not vote");
}