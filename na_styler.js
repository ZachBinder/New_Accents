"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Zachary Binder
   Date: 6/29/18  

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

addEventListener("load", setStyles);

function randInt(size) {
   return Math.floor(size*Math.random());
}

function setStyles() {
   var styleNum = randInt(5);

   var link = document.createElement("link");
   link.setAttribute("rel","stylesheet");
   link.setAttribute("id", "fancySheet");
   link.setAttribute("href","css/na_style_" + styleNum + ".css");

// append the link element to the document head

   document.head.appendChild(link);

   var figBox = document.createElement("figure");
   figBox.setAttribute("id", "styleThumbs");

// append the figBox to the 'box' div.

   document.getElementById("box").appendChild(figBox);

   for (var i = 0; i < 5; i++) {
      var sheetImg = document.createElement("img");

      sheetImg.setAttribute("src","images/na_small_" + [i] + ".png");
      sheetImg.setAttribute("alt", "css/na_style_" + [i] + ".css");

      sheetImg.onclick = function(e) {
            document.getElementById("fancySheet").href = e.target.alt;
         }

// append the sheet image to the link

      document.getElementById("styleThumbs").appendChild(sheetImg);
   }
   var thumbStyles = document.createElement("style");

//append an embedded style sheet to the document head

   document.head.appendChild(thumbStyles);

//add style rules to the embedded style sheet

   document.styleSheets[document.styleSheets.length -1].insertRule(
      "figure#styleThumbs { \
         position: absolute; \
         left: 0px; \
         bottom: 0px; \
      }", 0);

   document.styleSheets[document.styleSheets.length -1].insertRule(
      "figure#styleThumbs img { \
         outline: 1px solid black; \
         cursor: pointer; \
         opacity: 0.75; \
      }", 1);

   document.styleSheets[document.styleSheets.length -1].insertRule(
      "figure#styleThumbs img:hover { \
         outline: 1px solid red; \
         opacity: 1.0; \
      }", 2);


}