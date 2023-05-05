//1
const list = document.getElementById('list');
alert(list.firstElementChild.textContent);
alert(list.lastElementChild.textContent);
alert(list.children[1].textContent);
alert(list.children[3].textContent);
alert(list.children[2].textContent);
//2
const title = document.querySelector('h1');
title.style.backgroundColor = 'lightgreen';
title.style.fontSize = '50px';
const myDiv = document.querySelector('#myDiv');
myDiv.firstElementChild.style.fontWeight = 'bolder';
myDiv.children[1].style.color = 'red';
myDiv.children[2].style.textDecoration = 'underline';
myDiv.lastElementChild.style.fontStyle = 'italic';
const myList = document.querySelector('#myList');
myList.style.listStyle = 'none';
myList.style.display = 'flex';
const text = document.querySelector('span');
text.style.opacity = 0;
//3
const body = document.body;
body.innerHTML +=
    `<main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> `;
