/*7.1 Написать, функцию, которая принимает в качестве
 аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/
const objCity = {  
    city: "Moscow"
    city: "Valetta"
    city: "London"
   }
   let isHere = function (objCity) {
       for (let key in objCity) {
   
       if (objCity.hasOwnProperty(key)) {
   
           console.log(key, ':', objCity[key]);
       }   
   }
   }
       isHere()