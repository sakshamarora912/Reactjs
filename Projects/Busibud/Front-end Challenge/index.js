// We provided some simple JavaScript template code. Your goal is to modify the application so that you can properly toggle the button 
// to switch between an ON state and an OFF state. When the button is on and it is clicked, it turns off and the text within it change
// from ON to OFF and vice versa. Only replace the text within the DOM element, do not replace the entire DOM element. 
// You are free to add classes and styles, but make sure you leave the element ID's as they are.

import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button id="toggleButton">ON</button>';

let toggleButton = $("#toggleButton")
let initialState = true;

toggleButton.on("click",function(){
  if(initialState){
    $(this).text("OFF")
    initialState = false;
  }  
  else{
    $(this).text("ON")
    initialState = true;
  }
})