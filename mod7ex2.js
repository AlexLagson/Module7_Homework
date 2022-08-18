/*7.2Написать функцию, которая принимает в качестве аргументов строку и объект,
            а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
           */
            function checkProperty(propertyName, obj) {

                if (obj.hasOwnProperty(propertyName)===true)
                {
                    return true;
                }
                else {
                    return false;
                }
            }
    