let navbar = document.getElementById('navbar')
let span1 = document.getElementById('span1')
let linki = document.querySelector('#linki')
let rightButn = document.getElementById('rightButn')


//navBar sticky
window.onscroll = function() {

function scrollfunc(){
   if(document.body.scrollTop>60 || document.documentElement.scrollTop >60){
    navbar.classList.remove('navBar')
    navbar.classList.add('navBar1')
    span1.classList.add('spanStyle');
   linki.classList.add('linkh');
   rightButn.style.opacity = "1";



   }
 

  
   else{
      linki.classList.remove('linkh')
      navbar.classList.add('navBar')
      navbar.classList.remove('navBar1')
   rightButn.style.opacity = "0";
      
   

    
    

   }
}

scrollfunc();
};



//right butn
 rightButn.addEventListener('click',()=>{
 window.scrollTo({
    top:0,
    behavior:"smooth"

 })
 });



 //animation typing
 let type = document.getElementById('typing');
 let type1 = document.getElementById('typing2')
let textLaod = ()=>{
   setTimeout(() => {
      type.textContent = 'Freelancer'
     

   }, 0);
   setTimeout(() => {
      type.textContent = 'Youtuber'
       
   }, 4000);
   setTimeout(() => {
      type.textContent = 'BackBencher'
      
   }, 8000);
   setTimeout(() => {
      type.textContent = 'Designer'
     
   }, 12000);
   setTimeout(() => {
      type.textContent = 'IITian'
       
   }, 16000);

}

textLaod();
setInterval(textLaod,20000)

let textLaod1 = ()=>{
   setTimeout(() => {
     
      type1.textContent = 'Freelancer'

   }, 0);
   setTimeout(() => {
       
      type1.textContent = 'Youtuber'
   }, 4000);
   setTimeout(() => {
   
      type1.textContent = 'BackBencher'
   }, 8000);
   setTimeout(() => {
       
      type1.textContent = 'Designer'
   }, 12000);
   setTimeout(() => {
   
      type1.textContent = 'IITian'
   }, 16000);

}

textLaod1();
setInterval(textLaod1,20000)

//toggle bar..
let toggle = document.getElementById('toggleid')
let bars = document.getElementById('bar')
bars.addEventListener('click',()=>{

   if( toggle.style.transform != "translate(0%)" && bars.classList.contains('fa-bars')){
   toggle.style.transform = "translate(0%)";
   bars.classList.replace('fa-bars','fa-arrow-left')

}
else{
   toggle.style.transform = "translate(-100%)";
   bars.classList.replace('fa-arrow-left','fa-bars')
}
});





