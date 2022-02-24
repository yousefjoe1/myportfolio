let header = document.getElementById('header')
let closeNav = document.getElementById('close-nav')
let openNav = document.getElementById('open-nav')
let meDiv = document.getElementById('anime-info')
let start = document.getElementById('start')
let container = document.getElementById('container')
let startContainer = document.getElementById('start-container')
let skillsDiv = document.getElementById('skills-div')

window.addEventListener('resize',()=>{
    header.style.display = 'none'
    openNav.style.display = 'block'
})

openNav.addEventListener('click',()=>{
    header.style.display = 'flex'
    header.className = 'header-on-resize';
    closeNav.style.display = 'block';
    openNav.style.display = 'none';
    setTimeout(()=>{
        header.classList.add('show-header')
    },300)
})

closeNav.addEventListener('click',()=>{
    closeNav.style.display = 'none';
    header.style.display = 'none'
    openNav.style.display = 'block';
})

start.onclick = ()=>{
    setTimeout(()=>{
        container.className = 'container-active'

    },300)
start.style.display = 'none';
setTimeout(()=>{
    meDiv.className = 'me-div'
},500)
startContainer.style.display = 'none'
}

window.onscroll = ()=>{
    if(window.pageYOffset > 1180){
        skillsDiv.classList.add('skills-div-active')
    }
}


$('.anchor-element').click(function(e){
    e.preventDefault();
  var jumpId = $(this).attr('href');
  $('body, html').animate({scrollTop: $(jumpId).offset().top}, 'slow');
});