class Device {
    constructor(powerConsumption) {
        this.powerConsumption = powerConsumption;
        this.deviceOn = function () {
            console.log("Прибор включен")
        };
        this.deviceOff = function () {
            console.log("Прибор выключен")
        }
    }
}
class Computer extends Device {
    constructor(brand, powerConsumption) {
        super(powerConsumption);
        this.brand = brand;
        this.programStart = function () {
            console.log("Программа запущена")

        };
        this.programStop = function () {
            console.log("Программа остановлена")

        }
    }
}
class TableLamp extends Device {
    constructor(luminance, powerConsumption) {
        super(powerConsumption);
        this.luminance = luminance;
        this.amplifyLuminance = function () {
            console.log("Увеличение яркости")
        };
        this.attenuationLuminance = function () {
            console.log("Уменьшение яркости")
        }
    }
}

const Toshiba = new Computer('Toshiba', 70);
console.log(Toshiba);
Toshiba.deviceOn();
const lamp = new TableLamp(500, 60);
console.log(lamp);
lamp.deviceOn();