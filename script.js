// lets make to-do-list \u00d7

const display = document.getElementById('display');
const lists = document.querySelector('.lists');

lists.addEventListener('click', (event) => {
  const target = event.target;

  if(target.tagName === 'LI'){
    target.classList.toggle('active');
    saveData();
  }else if(target.tagName === 'SPAN'){
    const dadElement = target.parentElement;

    dadElement.remove();
    saveData()
  }

})


















// lists.addEventListener('click', (event) => {
//   const target = event.target;
//   if (target.tagName === 'LI') {
//     target.classList.toggle("active");
//     saveData();
//   } else if (target.tagName === 'SPAN') {
//     const parent = target.parentElement;
//     parent.remove();
//     saveData();
//   }
// });

function addTask(){
  let li = document.createElement('li');
  lists.appendChild(li);
  li.innerHTML = display.value;

  let span = document.createElement('span');
  li.appendChild(span);
  span.textContent = '\u00d7'

  
  saveData();


  display.value = '';
}

function saveData(){
  localStorage.setItem('data', lists.innerHTML);
}
function showData(){
  lists.innerHTML = localStorage.getItem('data');
}

showData();
document.addEventListener('DOMContentLoaded', function() {
  const  button = document.getElementById('myButton');

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
      button.click();
    }
  });
});



