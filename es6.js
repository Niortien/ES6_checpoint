/*
EXERCICE 1
function search(str){
    var som=0;
  for (let i = 0; i < str.length; i++) {
    if(str[i]=="a" || str[i]=="o" || str[i]=="i" ||str[i]=="u" || str[i]=="e"){
        som=som+1;
    }
    
   
  }
  return som;

}
console.log(search("ecole"))
*/
/*
EXERCICE 2
function oddEven(a){
  (a%2==0)?  console.log("odd"):console.log("Even")
}
console.log(oddEven(8))

*/

/*

EXERCICE 3
function getMiddle(mot){
    var middle=(mot.length)/2
      var  mid=mot.length
  
    for (let i = 0;  mot.length; i++) {
        if(mid%2==0){
          
          return mot.substr(middle-1,2)
        }
        else{
          return mot.substr(middle,1)
        }
        
    }
   
}

console.log( getMiddle("middle"))
console.log( getMiddle("testing"))
console.log( getMiddle("A"))
*/

/*
EERCICE 4
function oppositeNumber(a){
  return `l'opposé de ce nombre est ${-a}`
}
console.log(oppositeNumber(8))
console.log(oppositeNumber(-34))
*/

/*

EXERCICE 6
function iSquarre(a){
  let squarre=Math.sqrt(a)
  if(Number.isInteger(squarre)){
    return "true"
  }
  else{
    return "false"
  }
 
 
}

console.log(iSquarre(144))
console.log(iSquarre(-1))

*/
/*
EXERCICE 8
function replace(str){
  Array=[]
  Array1=[]
  for (let i = 0; i < str.length; i++) {
  
    if(str[i]=="a" || str[i]=="o" || str[i]=="i" ||str[i]=="u" || str[i]=="e"){
    
      Array.push(str[i])
    
}
  else{
   Array1.push(str[i])
}
  
}
console.log(...Array1)

}
console.log(replace("je suis issa"))

*/
/*
EXERCICE 9
function highAndLow(str){
  
  Array1=[]
  Array=[]

  for (let i = 0; i < str.length; i++) {
    if(str[i]==" "){
      Array.push(str[i])
  }
    else{
     Array1.push(parseInt(str[i]))
    }
 
  
}
console.log(`le maximum est ${Math.max(...Array1)}`)
console.log(`le minimum est ${Math.min(...Array1)}`)
}

console.log(highAndLow("1 2 3 4 5"))
*/

function XO(str){
  for (let i = 0; i < str.length; i++) {
    if(str[i]=="o")
    
  }

}







