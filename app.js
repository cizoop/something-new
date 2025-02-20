let divs=document.querySelectorAll('.inner div');
function color(){ 
 //universal palette
 /* let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);
  
 // Set red and blue to higher values to generate a pink shade//pink palette
 let red = Math.floor(Math.random() * 100) + 155; // Red should be between 155 and 255
 let blue = Math.floor(Math.random() * 100) + 155; // Blue should be between 155 and 255
 let green = Math.floor(Math.random() * 100); // Green should be between 0 and 99
 *///blue palette
 let blue = Math.floor(Math.random() * 100) + 155; // Blue should be between 155 and 255
  let red = Math.floor(Math.random() * 100); // Red should be between 0 and 99
  let green = Math.floor(Math.random() * 100)
 console.log("you clicked me");
  let colur=`rgb(${red},${green},${blue})`
  return colur;
}

divs.forEach(div => {
  div.addEventListener('click', function() {
    let coral = color();  // Generate a random color
    div.style.backgroundColor = coral;  // Apply the color to the clicked div
  });
});
