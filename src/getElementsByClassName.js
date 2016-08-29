// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

 var result = [];

 function traverse(element, result) {

   var children = element.children, multiple = element.className.split(" ");

   if (multiple.indexOf(className) >= 0) {
     result.push(element); 
   }
  
   for (var i = 0; i < children.length; i++) {
     traverse(children[i], result);
   }
  
 }
 
 traverse(document.body, result); 
 return result; 

};
