import { useState } from "react";
import { PhysicalSpecialtiesEnum, PhysicalSpecialtiesInt } from "../../Interfaces/specialties";


export function PhysicalSpecialtiesComp() {
    const [totalPoints, setTotalPoints] = useState(0);
    const [specialties, setSpecialties] = useState<PhysicalSpecialtiesInt>({
        Акробатика: {
            name: "Акробатика",
            information: PhysicalSpecialtiesEnum.Акробатика,
            points: 0
        },
        Бивакуване: {
            name: "Бивакуване",
            information: PhysicalSpecialtiesEnum.Бивакуване,
            points: 0
        },
        Езда: {
            name: "Езда",
            information: PhysicalSpecialtiesEnum.Езда,
            points: 0
        },
        ЕдноръчниРъкопашниОръжия: {
            name: "ЕдноръчниРъкопашниОръжия",
            information: PhysicalSpecialtiesEnum.ЕдноръчниРъкопашниОръжия,
            points: 0
        },
        Каленост: {
            name: "Каленост",
            information: PhysicalSpecialtiesEnum.Каленост,
            points: 0
        },
        Кесиджийство: {
            name: "Кесиджийство",
            information: PhysicalSpecialtiesEnum.Кесиджийство,
            points: 0
        },
        Ковачество: {
            name: "Ковачество",
            information: PhysicalSpecialtiesEnum.Ковачество,
            points: 0
        },
        Лечителство: {
            name: "Лечителство",
            information: PhysicalSpecialtiesEnum.Лечителство,
            points: 0
        },
        Промъкване: {
            name: "Промъкване",
            information: PhysicalSpecialtiesEnum.Промъкване,
            points: 0
        },
        Пъргавина: {
            name: "Пъргавина",
            information: PhysicalSpecialtiesEnum.Пъргавина,
            points: 0
        },
        Рисуване: {
            name: "Рисуване",
            information: PhysicalSpecialtiesEnum.Рисуване,
            points: 0
        },
        ДвуръчниРъкопашниОръжия: {
            name: "ДвуръчниРъкопашниОръжия",
            information: PhysicalSpecialtiesEnum.ДвуръчниРъкопашниОръжия,
            points: 0
        },
        СелскоСтопанство: {
            name: "СелскоСтопанство",
            information: PhysicalSpecialtiesEnum.СелскоСтопанство,
            points: 0
        },
        Музика: {
            name: "Музика",
            information: PhysicalSpecialtiesEnum.Музика,
            points: 0
        },
        Танци: {
            name: "Танци",
            information: PhysicalSpecialtiesEnum.Танци,
            points: 0
        },
        Точност: {
            name: "Точност",
            information: PhysicalSpecialtiesEnum.Точност,
            points: 0
        },
        Фокусничество: {
            name: "Фокусничество",
            information: PhysicalSpecialtiesEnum.Фокусничество,
            points: 0
        },
        Шивачество: {
            name: "Шивачество",
            information: PhysicalSpecialtiesEnum.Шивачество,
            points: 0
        }
    })


    return (
        <div>
            specialties
        </div>
    )
}