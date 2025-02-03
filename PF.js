window.onload=function(){
    let x=document.getElementById("intro1");
let y=x.textContent;
x.textContent='';
let z=y.split('');
for (let i = 0; i < z.length; i++) {
    let span = document.createElement('span');
    span.textContent = z[i];
    span.classList.add('letter'); // Add a class to each letter
    x.appendChild(span);  // Append each letter as a span to the h1
}
let letters = x.getElementsByClassName('letter');  

for( let i=0;i<letters.length;i++){
    setTimeout( function(){
        letters[i].style.visibility = 'visible';
        letters[i].style.color="blue";
},i*200,)
}}
