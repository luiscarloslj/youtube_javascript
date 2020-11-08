//
//
// let numero = 23;
// let texto = "23";
// let numero1 = 24;
// let texto1 = 24;
// document.write( numero *= numero1)
// document.write("<br>")
//
// let number = 10, number2 = 2;
// number++;
// document.write(number)
// document.write("<br>")
//
// statement = true
// document.write(!statement)

// money = prompt("please enter the amount");
// name = prompt("please enter your first name");
//
// if (name == "peter"){
//   moneyPeter = money
//   document.write("peter has "+ moneyPeter + " $")
// }
// else if (name == "robert"){
//   moneyRobert = money
//   document.write("robert has "+ moneyRobert + " $")
// }
// else if (name == "cofla"){
//   moneyCofla = money
//   document.write("cofla has "+ moneyCofla + " $")
// }else {
//   document.write("please enter your name with lowercase")
// };

let regularArrayArbol = ["raiz", "hojas", "fruto", 175, 1.5, true]
document.write(regularArrayArbol[3]+"<br>");
let arrayAsociativo = {
  nombre: "arbol",
  contenido: "hojas",
  produce: "frutos"
};
document.write(arrayAsociativo["produce"]+"<br>");

let nombre = arrayAsociativo["nombre"];
let contenido = arrayAsociativo["contenido"]
let produce = arrayAsociativo["produce"]

sentence = `el nombre del objeto es: ${nombre} <br>
            el contenido del ${nombre} es: ${contenido}<br>
            lo que produce el ${nombre} es: ${produce}
`;
document.write(sentence);
let num = 0;
do {
  num++;
  document.write(num+"<br>")
}
while (num <= 6)

let i = 6;
for(i; i > 0; i--){
  document.write(i +"<br>")
}
document.write("<br>")
let cellphone = ["screen", "keys", "speakers"]
document.write(cellphone + "<br>")

for (parts in cellphone){
  document.write(parts)
}
document.write("<br>")
for (parts of cellphone){
  document.write(parts ," ")
}
document.write("<br>")
for (parts in cellphone){
  document.write(cellphone[parts]," ")
}
