//기본함수
function hello() {
    alert("Hello JS!!");

}
// 화살표 함수
const hello2 = () => {
    alert("Hello2 JS!!");
}

//매개변수
const myhello = (msg) => {
    //alert("Hello " + msg + "!!");

    document.getElementById("msg").innerHTML = "Hello <span> " + msg + "</span>!!" ;
}

