// selections
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// toggle sidebar event
toggleBtn.addEventListener('click', function(){
   sidebar.classList.toggle('show-sidebar');
});

// close sidebar event
closeBtn.addEventListener('click', function(){
   sidebar.classList.remove('show-sidebar')
});