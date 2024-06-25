import { mentalNedostataci, physicalNedostataci } from "../Interfaces/nedostataci";
import { diceRollFunction } from "./utils"

export interface nedostataciInterface {
    name: string,
    information: physicalNedostataci | mentalNedostataci| "",
    level: number
}

export const nedostataciPhysicalFunc = () => {
    const nedostatak: nedostataciInterface = {
        name: "",
        information: "",
        level: 1
    }

    const diceRoll = diceRollFunction(100);
    switch (true) {
        case diceRoll <= 4:
            nedostatak.name = "Болнавост";
            nedostatak.information = physicalNedostataci.Болнавост;
            break;

        case diceRoll <= 9:
            nedostatak.name = "Гигантизъм";
            nedostatak.information = physicalNedostataci.Гигантизъм;
            break;

        case diceRoll <= 14:
            nedostatak.name = "Грозноватост";
            nedostatak.information = physicalNedostataci.Грозноватост;
            break;

        case diceRoll <= 19:
            nedostatak.name = "Далтонизъм";
            nedostatak.information = physicalNedostataci.Далтонизъм;
            break;

        case diceRoll <= 24:
            nedostatak.name = "Зависимост";
            nedostatak.information = physicalNedostataci.Зависимост;
            break;

        case diceRoll <= 29:
            nedostatak.name = "Задух";
            nedostatak.information = physicalNedostataci.Задух;
            break;

        case diceRoll <= 34:
            nedostatak.name = "Късогледство";
            nedostatak.information = physicalNedostataci.Късогледство;
            break;

        case diceRoll <= 39:
            nedostatak.name = "Накуцване";
            nedostatak.information = physicalNedostataci.Накуцване;
            break;

        case diceRoll <= 44:
            nedostatak.name = "Непохватност";
            nedostatak.information = physicalNedostataci.Непохватност;
            break;

        case diceRoll <= 49:
            nedostatak.name = "Непробуден Сън";
            nedostatak.information = physicalNedostataci.НепробуденСън;
            break;

        case diceRoll <= 54:
            nedostatak.name = "Полуръст";
            nedostatak.information = physicalNedostataci.Полуръст;
            break;

        case diceRoll <= 59:
            nedostatak.name = "Припадлива Болест";
            nedostatak.information = physicalNedostataci.ПрипадливаБолест;
            break;

        case diceRoll <= 64:
            nedostatak.name = "Лунно Чадо";
            nedostatak.information = physicalNedostataci.ЛунноЧадо;
            break;

        case diceRoll <= 69:
            nedostatak.name = "Сенна Хрема";
            nedostatak.information = physicalNedostataci.СеннаХрема;
            break;

        case diceRoll <= 74:
            nedostatak.name = "Слаб Пияч";
            nedostatak.information = physicalNedostataci.СлабПияч;
            break;

        case diceRoll <= 79:
            nedostatak.name = "Смрад";
            nedostatak.information = physicalNedostataci.Смрад;
            break;

        case diceRoll <= 84:
            nedostatak.name = "Тромавост";
            nedostatak.information = physicalNedostataci.Тромавост;
            break;

        case diceRoll <= 89:
            nedostatak.name = "Увреден Слух";
            nedostatak.information = physicalNedostataci.УвреденСлух;
            break;

        case diceRoll <= 94:
            nedostatak.name = "Хемофилия";
            nedostatak.information = physicalNedostataci.Хемофилия;
            break;

        case diceRoll <= 100:
            nedostatak.name = "Хърбел";
            nedostatak.information = physicalNedostataci.Хърбел;
            break;
    }

    return nedostatak;

}

export const nedostataciMentalFunc = () => {
    const nedostatak: nedostataciInterface = {
        name: "",
        information: "",
        level: 1
    }

    const diceRoll = diceRollFunction(100);
    switch (true) {
        case diceRoll <= 4:
            nedostatak.name = "Богобоязливост";
            nedostatak.information = mentalNedostataci.Богобоязливост;
            break;

        case diceRoll <= 9:
            nedostatak.name = "Гнусливост";
            nedostatak.information = mentalNedostataci.Гнусливост;
            break;

        case diceRoll <= 14:
            nedostatak.name = "Грубиянин";
            nedostatak.information = mentalNedostataci.Грубиянин;
            break;

        case diceRoll <= 19:
            nedostatak.name = "Дислексия";
            nedostatak.information = mentalNedostataci.Дислексия;
            break;

        case diceRoll <= 24:
            nedostatak.name = "Единак";
            nedostatak.information = mentalNedostataci.Единак;
            break;

        case diceRoll <= 29:
            nedostatak.name = "Заплес";
            nedostatak.information = mentalNedostataci.Заплес;
            break;

        case diceRoll <= 34:
            nedostatak.name = "Клептомания";
            nedostatak.information = mentalNedostataci.Клептомания;
            break;

        case diceRoll <= 39:
            nedostatak.name = "Комарджия";
            nedostatak.information = mentalNedostataci.Комарджия;
            break;

        case diceRoll <= 44:
            nedostatak.name = "Мегаломания";
            nedostatak.information = mentalNedostataci.Мегаломания;
            break;

        case diceRoll <= 49:
            nedostatak.name = "Мързел";
            nedostatak.information = mentalNedostataci.Мързел;
            break;

        case diceRoll <= 54:
            nedostatak.name = "Некадърен Лъжец";
            nedostatak.information = mentalNedostataci.НекадъренЛъжец;
            break;

        case diceRoll <= 59:
            nedostatak.name = "Параноя";
            nedostatak.information = mentalNedostataci.Параноя;
            break;

        case diceRoll <= 64:
            nedostatak.name = "Пияница";
            nedostatak.information = mentalNedostataci.Пияница;
            break;

        case diceRoll <= 69:
            nedostatak.name = "Шубе";
            nedostatak.information = mentalNedostataci.Шубе;
            break;

        case diceRoll <= 74:
            nedostatak.name = "Разглезеност";
            nedostatak.information = mentalNedostataci.Разглезеност;
            break;

        case diceRoll <= 79:
            nedostatak.name = "ДивотоЗове";
            nedostatak.information = mentalNedostataci.ДивотоЗове;
            break;

        case diceRoll <= 84:
            nedostatak.name = "Скъперничество";
            nedostatak.information = mentalNedostataci.Скъперничество;
            break;

        case diceRoll <= 89:
            nedostatak.name = "Суеверие";
            nedostatak.information = mentalNedostataci.Суеверие;
            break;

        case diceRoll <= 94:
            nedostatak.name = "Тъп Като Галош";
            nedostatak.information = mentalNedostataci.ТъпКатоГалош;
            break;

        case diceRoll <= 100:
            nedostatak.name = "Фобия";
            nedostatak.information = mentalNedostataci.Фобия;
            break;
    }

    return nedostatak;

}