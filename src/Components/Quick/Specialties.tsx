import { useEffect, useState } from "react";
import { PhysicalSpecialtiesEnum, PhysicalSpecialtiesInt } from "../../Interfaces/specialties";


export function PhysicalSpecialtiesComp(props:any) {
    //minimize it, only used for reset
    const initialState:PhysicalSpecialtiesInt = {
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
    };

    const reroll = props.reroll;
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

    useEffect( ()=> {
        setSpecialties(initialState);
    },[reroll])

    const changeStatFunc = (key:keyof typeof specialties) => {
        //does deep copy
        const newValues = structuredClone(specialties);
        newValues[key].points += 1;
        setSpecialties ( (prev) => ({...prev, [key]:newValues[key]}))
    }

    console.log("SPEC ARE", specialties)
    return (
        <div>
            <h2>Физически Специалности</h2>
            <div className="singleSpecHolder">
                <p>{specialties.Акробатика.name}</p>
                <div>
                    <p>{specialties.Акробатика.points}</p>
                    <div onClick={()=>changeStatFunc("Акробатика")}>+</div>
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Бивакуване.name}</p>
                <div>
                    <p>{specialties.Бивакуване.points}</p>
                    <div onClick={()=>changeStatFunc("Бивакуване")}>+</div>
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Езда.name}</p>
                <div>
                    <p>{specialties.Езда.points}</p>
                    <div onClick={()=>changeStatFunc("Езда")}>+</div>
                </div>
            </div>
        </div>
    )
}