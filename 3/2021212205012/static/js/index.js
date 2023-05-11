let list = document.querySelectorAll('.m-item');
let box = document.querySelector('.m-box');
var div = document.getElementById("div1")
var width = window.innerWidth

box.addEventListener("click", e => {
    if (e.target && e.target.nodeName == "li") {
        for (let i = 0, len = list.length; i < len; i++){
            if (e.target === list[i])
                alert(i);
        }
    }
});

window.onload = function() {
    list[0].onclick = function() {
        this.style.color = "red";
        alert('This is p1');
    }
    list[1].onclick = function() {
        var date = new Date();
        var datestr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        box.childNodes[1].innerHTML = datestr;
        alert('This is p2');
    }
    list[2].onclick = function() {
        list[2].classList.add("fn-active");
        alert('This is p3');
    }
    list[3].onclick = function() {
        list[3].parentNode.removeChild(list[7]);
        alert('This is p4');
    }
    list[4].onclick = function() {
        window.open("https://www.taobao.com");
        alert('This is p5');
    }
    list[5].onclick = function() {
        var newlist = document.createElement('li');
        var node = document.createTextNode('p9');
        newlist.appendChild(node);
        list[5].parentNode.appendChild(newlist);
        alert('This is p6');
    }

    list[6].onclick = function() {
        console.log(screen.availWidth);
        div.style.width = width + 'px';
        alert('This is p7');
    }
    list[7].onclick = function() {
        alert('This is p8');
    }
}