const navBtnHeader = document.querySelector('.scroll-btns');
const scroll_btns = document.getElementsByClassName('scroll-btn');



// scrolling from the nav / btn more
navBtnHeader.querySelectorAll('button').forEach(btn => {
    btn.classList.add('scroll-btn');
    console.log('hiii')
})

Array.from(scroll_btns).forEach(btn => {
  btn.addEventListener('click', (event) => {
    const btnID = event.target.id; // Get the button ID directly
    console.log(btnID);

    // Get the first class name of the clicked button
    const classBtn = event.target.className.split(' ')[0];
    
    // Call the scrolling function with the class name (if needed)
    scrolling(classBtn + '-div');
  });
});

document.querySelector('#more-btn').addEventListener('click', () => {
  scrolling('aboutUs-div');
})

function scrolling(btnClass){  
  const element = document.querySelector(`.${btnClass}`);
  console.log(element.offSetTop)

  window.scrollTo({ top: element.offsetTop - 10, behavior: "smooth"});
}