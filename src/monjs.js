 


let design = {
              fatec: {
                     name: 'AYA',
                     annee: 2018,
                     designer: 'cyril - cecile',
                     codeur: 'florent',
                     client: 'Fatec'
                     },
              partnaire: {
                     name: 'ZENIKA Paris',
                     annee: 2018,
                     designer: 'cyril',
                     codeur: 'damien',
                     client: 'Partnaire'
                     },
            zenikalabs: {
                     name: 'ZENIKA labs',
                     annee: 2018,
                     designer: 'andres',
                     codeur: 'romain',
                     client: 'BNP'
                     }
}
                     
 
 console.log(design.fatec.name);
 
       
let button = document.querySeletion('button');
let nbLike=0;
button.addListener(click,()=> 
{  
  button.style.animation = 'blink 0.2s linear 5 alternate';  
  ndLike++;
  if(nbLike>1){
    button.innerHTML=nbLike + 'likes';
  }else {
    button.innerHTML=nbLike + ' do you like?';
  }
});

console.log(UUUUU);
button.addListener('animationned',() => {
 button.style.animation = 'none';
         });
