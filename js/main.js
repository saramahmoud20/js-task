
document.querySelector("#red").onclick = function(){
    document.querySelector("#result").style.color = "red";
}

document.querySelector("#green").onclick = function(){
    document.querySelector("#result").style.color = "green";
}

document.querySelector("#blue").onclick = function(){
    document.querySelector("#result").style.color = "blue";
}



document.querySelectorAll("button").forEach(function (item){
    item.onclick = function(){
        document.querySelector("#result").innerHTML = item.dataset.age;
        document.querySelector("#result").style.color = item.dataset.color;
    }
});