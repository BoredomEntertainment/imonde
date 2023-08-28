let hero = document.querySelector('.hero')
let titre = document.querySelector('.titre')
let fumeur = document.querySelector('.fumeur')
let fumeurImg = document.querySelector('.fumeur img')

window.addEventListener('scroll', () => {
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let newSize = 2 - scrollTop / 500; 
    titre.style.fontSize = newSize + 'rem';
  
    let scale = 1 + scrollTop / 1000; 
    fumeur.style.transform = 'scale(' + scale + ')';

    let maxScroll = 1500; 
    let minOpacity = 1;   
    let maxOpacity = 0;   
  
    let opacity = 1 - (scrollTop / maxScroll); 

    opacity = Math.max(opacity, maxOpacity);
    opacity = Math.min(opacity, minOpacity);
  
    fumeurImg.style.opacity = opacity.toString(); 
  });

