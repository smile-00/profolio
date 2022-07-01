// window.onload = function(){
//     document.onclick = function(e){
//     alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
//     }
// };

// let confirmAnswer = confirm("你真的確定你想要取消這個服務嗎?");
// let thisH1 = document.getElementsByTagName("h1")[0];

// confirmAnswer ? thisH1.innerHTML = "服務已取消" : thisH1.innerHTML = "繼續使用本服務";

// let promtAnswer = prompt("小明家裡有三個小孩，他兩個哥哥叫張一、張二，請問第三個小孩叫什麼 ? ","張三");
// let thisH1 = document.getElementById("Response");
// switch (promtAnswer) {
//     case "張三":
//         thisH1.innerHTML =
//             "那小明是誰?";
//         break;
//     case "小明":
//         thisH1.innerHTML =
//             "聰明";
//         break;
//     default:
//         thisH1.innerHTML =
//             "你想多了";
// }

// function showAlert() {
//     thisH1.innerHTML = "Hello!";
// }

// let thisButton = document.getElementsByTagName("Button")[0];
// let thisH1 = document.getElementsByTagName("h1")[0];

// thisButton.onclick = function () {
//     showAlert();
// };

let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];
function mouseIn(){
thisH1.innerHTML="你進來了";
}
function mouseOut(){
thisH1.innerHTML="你出去了";
thisP.innerHTML="";
}
function mouseMove(e){
thisP.innerHTML="你在裡面走來走去。位置 : "+e.clientX+","+e.clientY;
}
thisDiv.addEventListener("mouseover", mouseIn);
thisDiv.addEventListener("mouseout", mouseOut);
thisDiv.addEventListener("mousemove", mouseMove);