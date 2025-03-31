// not good, it's for all buttons on the page
const navBtnHeader = document.querySelector('.scroll-btns');
navBtnHeader.addEventListener('click', () => {
  navBtnHeader.querySelectorAll('.button').forEach(btn => {
    btn.classList.add('scroll-btn');
    console.log('hiii')
  })
})

const scroll_btns = document.getElementsByClassName('scroll-btn');
Array.from(scroll_btns).forEach(btn => {
  btn.addEventListener('click', (btn) => {
    const btnID = btn.target.id;
    scrolling(btnID)
  })
})

function scrolling(btnID){
  const scrollTo = btnID.offsetTop;
  
  window.scrollTo({ top: document.scrollTo, behavior: "smooth"});
    
}