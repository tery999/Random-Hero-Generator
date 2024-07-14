import React, { useEffect, useState } from "react";
import { PhysicalSpecialtiesEnum, PhysicalSpecialtiesInt } from "../../Interfaces/specialties";


export function PhysicalSpecialtiesFunc(props: any) {
    //minimize it, only used for reset
    const initialState: PhysicalSpecialtiesInt = {
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
    console.log("Specialities check");
    const reroll = props.reroll;
    const abilityProp = props.abilityProp;
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

    useEffect(() => {
        setSpecialties(initialState);
        setTotalPoints(0);
    }, [reroll, abilityProp])

    const changeStatFunc = (key: keyof typeof specialties, direction: "inc" | "dec") => {
        //does deep copy
        const newValues = structuredClone(specialties);
        if (direction === "inc") {
            if (abilityProp <= totalPoints) {
                return;
            }
            newValues[key].points += 1;
            setTotalPoints((prev) => prev + 1)
        } else if (direction === "dec") {
            if (newValues[key].points == 0) {
                return
            }
            newValues[key].points -= 1;
            setTotalPoints((prev) => prev - 1)
        }

        setSpecialties((prev) => ({ ...prev, [key]: newValues[key] }))
    }

    console.log("SPEC ARE", specialties)
    return (
        <div className="PhysicalSpecialtiesStatHolder">
            <h2>Физически Специалности</h2>
            <h4 className="specialtyPoints">{totalPoints} / {abilityProp}</h4>
            <div className="singleSpecHolder">
                <p>{specialties.Акробатика.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Акробатика", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Акробатика.points}</p>
                    <img onClick={() => changeStatFunc("Акробатика", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Бивакуване.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Бивакуване", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Бивакуване.points}</p>
                    <img onClick={() => changeStatFunc("Бивакуване", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Езда.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Езда", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Езда.points}</p>
                    <img onClick={() => changeStatFunc("Езда", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>Едноръчни Ръкопашни Оръжия</p>
                <div>
                    <img onClick={() => changeStatFunc("ЕдноръчниРъкопашниОръжия", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.ЕдноръчниРъкопашниОръжия.points}</p>
                    <img onClick={() => changeStatFunc("ЕдноръчниРъкопашниОръжия", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Каленост.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Каленост", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Каленост.points}</p>
                    <img onClick={() => changeStatFunc("Каленост", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Кесиджийство.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Кесиджийство", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Кесиджийство.points}</p>
                    <img onClick={() => changeStatFunc("Кесиджийство", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Ковачество.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Ковачество", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Ковачество.points}</p>
                    <img onClick={() => changeStatFunc("Ковачество", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Лечителство.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Лечителство", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Лечителство.points}</p>
                    <img onClick={() => changeStatFunc("Лечителство", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Промъкване.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Промъкване", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Промъкване.points}</p>
                    <img onClick={() => changeStatFunc("Промъкване", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Пъргавина.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Пъргавина", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Пъргавина.points}</p>
                    <img onClick={() => changeStatFunc("Пъргавина", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Рисуване.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Рисуване", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Рисуване.points}</p>
                    <img onClick={() => changeStatFunc("Рисуване", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>Двуръчни Ръкопашни Оръжия</p>
                <div>
                    <img onClick={() => changeStatFunc("ДвуръчниРъкопашниОръжия", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.ДвуръчниРъкопашниОръжия.points}</p>
                    <img onClick={() => changeStatFunc("ДвуръчниРъкопашниОръжия", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>Селско Стопанство</p>
                <div>
                    <img onClick={() => changeStatFunc("СелскоСтопанство", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.СелскоСтопанство.points}</p>
                    <img onClick={() => changeStatFunc("СелскоСтопанство", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Музика.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Музика", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Музика.points}</p>
                    <img onClick={() => changeStatFunc("Музика", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Танци.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Танци", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Танци.points}</p>
                    <img onClick={() => changeStatFunc("Танци", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Точност.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Точност", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Точност.points}</p>
                    <img onClick={() => changeStatFunc("Точност", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Фокусничество.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Фокусничество", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Фокусничество.points}</p>
                    <img onClick={() => changeStatFunc("Фокусничество", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
            <div className="singleSpecHolder">
                <p>{specialties.Шивачество.name}</p>
                <div>
                    <img onClick={() => changeStatFunc("Шивачество", "dec")} src="/arrowLeft.png" alt="" />
                    <p className="points">{specialties.Шивачество.points}</p>
                    <img onClick={() => changeStatFunc("Шивачество", "inc")} src="/arrowRight.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export const PhysicalSpecialtiesComp = React.memo(PhysicalSpecialtiesFunc);