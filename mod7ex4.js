  /*7.4 Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). */
           
function Device(powerConsumption) {
    this.powerConsumption = powerConsumption,
        this.deviceOn = function () {
            console.log("Прибор включен")
        },
        this.deviceOff = function () {
            console.log("Прибор выключен")
        }
}
function Computer(brand) {
    this.brand = brand,
        this.programStart = function () {
            console.log("Программа запущена")

        },
        this.programStop = function () {
            console.log("Программа остановлена")

        }
}
function TableLamp(luminance) {
    this.luminance = luminance,
        this.amplifyLuminance = function () {
            console.log("Увеличение яркости")
        },
        this.attenuationLuminance = function () {
            console.log("Уменьшение яркости")
        }
}
Computer.prototype = new Device(70);
const Toshiba = new Computer('Toshiba');
console.log(Toshiba);
Toshiba.deviceOn();
TableLamp.prototype = new Device(60);
const lamp = new TableLamp(500);
console.log(lamp);
lamp.deviceOn();