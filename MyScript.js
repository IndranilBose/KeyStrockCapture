
var keys = [];

window.addEventListener('keydown',(event)=>{
  keys.push(event.key);
   console.log(keys);
   printKeystroke();
});

function printKeystroke(){
  var temp = "";
  if (keys.length >0) {
     for(var v=0 ; v < keys.length ; v++ )
    {
       temp += keys[v];
    }
  }
 
  document.getElementById("printarray").innerHTML = temp;
}
