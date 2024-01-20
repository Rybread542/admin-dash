const menuButton = document.querySelector('.menu-button');
const sideBar = document.querySelector('.sidebar');
const topBar = document.querySelector('.top-bar');
const mainContent = document.querySelector('.main-content');

menuButton.addEventListener('click', (e) => {
    sideBar.classList.toggle('sidebar-open');
    e.stopPropagation();
})

mainContent.addEventListener('click', closeBar);
topBar.addEventListener('click', closeBar);

function closeBar () {
    if(sideBar.classList.contains('sidebar-open')){
        sideBar.classList.remove('sidebar-open')
    }
}