import React, { useEffect, useState } from "react";
import { MentalSpecialtiesEnum, MentalpecialtiesInt } from "../../Interfaces/specialties";


export function MentalSpecialtiesFunc(props: any) {
    //minimize it, only used for reset
    const initialState: MentalpecialtiesInt = {
        АктьорскоМайсторство: {
            name: "АктьорскоМайсторство",
            information: MentalSpecialtiesEnum.АктьорскоМайсторство,
            points: 0
        },
        Алхимия: {
            name: "Алхимия",
            information: MentalSpecialtiesEnum.Алхимия,
            points: 0
        },
        Билкарство: {
            name: "Билкарство",
            information: MentalSpecialtiesEnum.Билкарство,
            points: 0
        },
        Врачуване: {
            name: "Врачуване",
            information: MentalSpecialtiesEnum.Врачуване,
            points: 0
        },
        Вяра: {
            name: "Вяра",
            information: MentalSpecialtiesEnum.Вяра,
            points: 0
        },
        Готвене: {
            name: "Готвене",
            information: MentalSpecialtiesEnum.Готвене,
            points: 0
        },
        Грамотност: {
            name: "Грамотност",
            information: MentalSpecialtiesEnum.Грамотност,
            points: 0
        },
        ДворянскиЕтикет: {
            name: "ДворянскиЕтикет",
            information: MentalSpecialtiesEnum.ДворянскиЕтикет,
            points: 0
        },
        Заклинателство: {
            name: "Заклинателство",
            information: MentalSpecialtiesEnum.Заклинателство,
            points: 0
        },
        ЗаконътНаУлицата: {
            name: "ЗаконътНаУлицата",
            information: MentalSpecialtiesEnum.ЗаконътНаУлицата,
            points: 0
        },
        Измама: {
            name: "Измама",
            information: MentalSpecialtiesEnum.Измама,
            points: 0
        },
        Инженерство: {
            name: "Инженерство",
            information: MentalSpecialtiesEnum.Инженерство,
            points: 0
        },
        Опитомяване: {
            name: "Опитомяване",
            information: MentalSpecialtiesEnum.Опитомяване,
            points: 0
        },
        Култура: {
            name: "Култура",
            information: MentalSpecialtiesEnum.Култура,
            points: 0
        },
        Медицина: {
            name: "Медицина",
            information: MentalSpecialtiesEnum.Медицина,
            points: 0
        },
        Наблюдателност: {
            name: "Наблюдателност",
            information: MentalSpecialtiesEnum.Наблюдателност,
            points: 0
        },
        Навигация: {
            name: "Навигация",
            information: MentalSpecialtiesEnum.Навигация,
            points: 0
        },
        Ориентация: {
            name: "Ориентация",
            information: MentalSpecialtiesEnum.Ориентация,
            points: 0
        },
        Ослушване: {
            name: "Ослушване",
            information: MentalSpecialtiesEnum.Ослушване,
            points: 0
        },
        Пазарлък: {
            name: "Пазарлък",
            information: MentalSpecialtiesEnum.Пазарлък,
            points: 0
        },
        Пеене: {
            name: "Пеене",
            information: MentalSpecialtiesEnum.Пеене,
            points: 0
        },
        Право: {
            name: "Право",
            information: MentalSpecialtiesEnum.Право,
            points: 0
        },
        Проповедничество: {
            name: "Проповедничество",
            information: MentalSpecialtiesEnum.Проповедничество,
            points: 0
        },
        Пълководство: {
            name: "Пълководство",
            information: MentalSpecialtiesEnum.Пълководство,
            points: 0
        },
        Ритуали: {
            name: "Ритуали",
            information: MentalSpecialtiesEnum.Ритуали,
            points: 0
        },
        Самообладание: {
            name: "Самообладание",
            information: MentalSpecialtiesEnum.Самообладание,
            points: 0
        },
        Строителство: {
            name: "Строителство",
            information: MentalSpecialtiesEnum.Строителство,
            points: 0
        },
        ШестоЧувство: {
            name: "ШестоЧувство",
            information: MentalSpecialtiesEnum.ШестоЧувство,
            points: 0
        }
    };
    console.log("Specialities check");
    const reroll = props.reroll;
    const perceptionProp = props.perceptionProp;
    const [totalPoints, setTotalPoints] = useState(0);
    const [specialties, setSpecialties] = useState<MentalpecialtiesInt>({
        АктьорскоМайсторство: {
            name: "АктьорскоМайсторство",
            information: MentalSpecialtiesEnum.АктьорскоМайсторство,
            points: 0
        },
        Алхимия: {
            name: "Алхимия",
            information: MentalSpecialtiesEnum.Алхимия,
            points: 0
        },
        Билкарство: {
            name: "Билкарство",
            information: MentalSpecialtiesEnum.Билкарство,
            points: 0
        },
        Врачуване: {
            name: "Врачуване",
            information: MentalSpecialtiesEnum.Врачуване,
            points: 0
        },
        Вяра: {
            name: "Вяра",
            information: MentalSpecialtiesEnum.Вяра,
            points: 0
        },
        Готвене: {
            name: "Готвене",
            information: MentalSpecialtiesEnum.Готвене,
            points: 0
        },
        Грамотност: {
            name: "Грамотност",
            information: MentalSpecialtiesEnum.Грамотност,
            points: 0
        },
        ДворянскиЕтикет: {
            name: "ДворянскиЕтикет",
            information: MentalSpecialtiesEnum.ДворянскиЕтикет,
            points: 0
        },
        Заклинателство: {
            name: "Заклинателство",
            information: MentalSpecialtiesEnum.Заклинателство,
            points: 0
        },
        ЗаконътНаУлицата: {
            name: "ЗаконътНаУлицата",
            information: MentalSpecialtiesEnum.ЗаконътНаУлицата,
            points: 0
        },
        Измама: {
            name: "Измама",
            information: MentalSpecialtiesEnum.Измама,
            points: 0
        },
        Инженерство: {
            name: "Инженерство",
            information: MentalSpecialtiesEnum.Инженерство,
            points: 0
        },
        Опитомяване: {
            name: "Опитомяване",
            information: MentalSpecialtiesEnum.Опитомяване,
            points: 0
        },
        Култура: {
            name: "Култура",
            information: MentalSpecialtiesEnum.Култура,
            points: 0
        },
        Медицина: {
            name: "Медицина",
            information: MentalSpecialtiesEnum.Медицина,
            points: 0
        },
        Наблюдателност: {
            name: "Наблюдателност",
            information: MentalSpecialtiesEnum.Наблюдателност,
            points: 0
        },
        Навигация: {
            name: "Навигация",
            information: MentalSpecialtiesEnum.Навигация,
            points: 0
        },
        Ориентация: {
            name: "Ориентация",
            information: MentalSpecialtiesEnum.Ориентация,
            points: 0
        },
        Ослушване: {
            name: "Ослушване",
            information: MentalSpecialtiesEnum.Ослушване,
            points: 0
        },
        Пазарлък: {
            name: "Пазарлък",
            information: MentalSpecialtiesEnum.Пазарлък,
            points: 0
        },
        Пеене: {
            name: "Пеене",
            information: MentalSpecialtiesEnum.Пеене,
            points: 0
        },
        Право: {
            name: "Право",
            information: MentalSpecialtiesEnum.Право,
            points: 0
        },
        Проповедничество: {
            name: "Проповедничество",
            information: MentalSpecialtiesEnum.Проповедничество,
            points: 0
        },
        Пълководство: {
            name: "Пълководство",
            information: MentalSpecialtiesEnum.Пълководство,
            points: 0
        },
        Ритуали: {
            name: "Ритуали",
            information: MentalSpecialtiesEnum.Ритуали,
            points: 0
        },
        Самообладание: {
            name: "Самообладание",
            information: MentalSpecialtiesEnum.Самообладание,
            points: 0
        },
        Строителство: {
            name: "Строителство",
            information: MentalSpecialtiesEnum.Строителство,
            points: 0
        },
        ШестоЧувство: {
            name: "ШестоЧувство",
            information: MentalSpecialtiesEnum.ШестоЧувство,
            points: 0
        }
    })

    useEffect(() => {
        setSpecialties(initialState);
        setTotalPoints(0);
    }, [reroll, perceptionProp])

    const changeStatFunc = (key: keyof typeof specialties, direction: "inc" | "dec") => {
        //does deep copy
        const newValues = structuredClone(specialties);
        if (direction === "inc") {
            if (perceptionProp <= totalPoints) {
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
        <div className="MentalSpecialtiesStatHolder">
            <h2>Теоритични специалности</h2>
            <h4 className="specialtyPoints">{totalPoints} / {perceptionProp}</h4>
            <div className="MentalBothRows">
                <div className="MentalFirstRow">
                    <div className="singleSpecHolder">
                        <p>Актьорско майсторство</p>
                        <div>
                            <img onClick={() => changeStatFunc("АктьорскоМайсторство", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.АктьорскоМайсторство.points}</p>
                            <img onClick={() => changeStatFunc("АктьорскоМайсторство", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Алхимия.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Алхимия", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Алхимия.points}</p>
                            <img onClick={() => changeStatFunc("Алхимия", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Билкарство.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Билкарство", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Билкарство.points}</p>
                            <img onClick={() => changeStatFunc("Билкарство", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Врачуване.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Врачуване", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Врачуване.points}</p>
                            <img onClick={() => changeStatFunc("Врачуване", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Вяра.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Вяра", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Вяра.points}</p>
                            <img onClick={() => changeStatFunc("Вяра", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Готвене.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Готвене", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Готвене.points}</p>
                            <img onClick={() => changeStatFunc("Готвене", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Грамотност.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Грамотност", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Грамотност.points}</p>
                            <img onClick={() => changeStatFunc("Грамотност", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>Дворянски етикет</p>
                        <div>
                            <img onClick={() => changeStatFunc("ДворянскиЕтикет", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.ДворянскиЕтикет.points}</p>
                            <img onClick={() => changeStatFunc("ДворянскиЕтикет", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Заклинателство.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Заклинателство", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Заклинателство.points}</p>
                            <img onClick={() => changeStatFunc("Заклинателство", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>Законът на улицата</p>
                        <div>
                            <img onClick={() => changeStatFunc("ЗаконътНаУлицата", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.ЗаконътНаУлицата.points}</p>
                            <img onClick={() => changeStatFunc("ЗаконътНаУлицата", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Измама.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Измама", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Измама.points}</p>
                            <img onClick={() => changeStatFunc("Измама", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Инженерство.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Инженерство", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Инженерство.points}</p>
                            <img onClick={() => changeStatFunc("Инженерство", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Опитомяване.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Опитомяване", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Опитомяване.points}</p>
                            <img onClick={() => changeStatFunc("Опитомяване", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>
                    <div className="singleSpecHolder">
                        <p>{specialties.Култура.name}</p>
                        <div>
                            <img onClick={() => changeStatFunc("Култура", "dec")} src="/arrowLeft.png" alt="" />
                            <p className="points">{specialties.Култура.points}</p>
                            <img onClick={() => changeStatFunc("Култура", "inc")} src="/arrowRight.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="MentalSecondRow">
                <div className="singleSpecHolder">
                    <p>{specialties.Медицина.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Медицина", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Медицина.points}</p>
                        <img onClick={() => changeStatFunc("Медицина", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Наблюдателност.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Наблюдателност", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Наблюдателност.points}</p>
                        <img onClick={() => changeStatFunc("Наблюдателност", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Навигация.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Навигация", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Навигация.points}</p>
                        <img onClick={() => changeStatFunc("Навигация", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Ориентация.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Ориентация", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Ориентация.points}</p>
                        <img onClick={() => changeStatFunc("Ориентация", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Ослушване.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Ослушване", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Ослушване.points}</p>
                        <img onClick={() => changeStatFunc("Ослушване", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Пазарлък.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Пазарлък", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Пазарлък.points}</p>
                        <img onClick={() => changeStatFunc("Пазарлък", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Пеене.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Пеене", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Пеене.points}</p>
                        <img onClick={() => changeStatFunc("Пеене", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Право.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Право", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Право.points}</p>
                        <img onClick={() => changeStatFunc("Право", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Проповедничество.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Проповедничество", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Проповедничество.points}</p>
                        <img onClick={() => changeStatFunc("Проповедничество", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Пълководство.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Пълководство", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Пълководство.points}</p>
                        <img onClick={() => changeStatFunc("Пълководство", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Ритуали.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Ритуали", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Ритуали.points}</p>
                        <img onClick={() => changeStatFunc("Ритуали", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Самообладание.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Самообладание", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Самообладание.points}</p>
                        <img onClick={() => changeStatFunc("Самообладание", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>{specialties.Строителство.name}</p>
                    <div>
                        <img onClick={() => changeStatFunc("Строителство", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.Строителство.points}</p>
                        <img onClick={() => changeStatFunc("Строителство", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                <div className="singleSpecHolder">
                    <p>Шесто чувство</p>
                    <div>
                        <img onClick={() => changeStatFunc("ШестоЧувство", "dec")} src="/arrowLeft.png" alt="" />
                        <p className="points">{specialties.ШестоЧувство.points}</p>
                        <img onClick={() => changeStatFunc("ШестоЧувство", "inc")} src="/arrowRight.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export const MentalSpecialtiesComp = React.memo(MentalSpecialtiesFunc);