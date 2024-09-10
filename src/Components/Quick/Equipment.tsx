import React, { useEffect, useState } from "react";
import { diceRollFunction, diceRollFunctionZero } from "../../functions/utils";
import { CrimClother, DuhClothes, DvoryanClothes, Equipment, EquipmentInt, IntClothes, ProstClothes } from "../../InformationObjects/Equipment";
import { SubEquipment } from "./SubEquipment";
import { surrounding } from "../../Interfaces/QuickHero";

export function EquipmentComponentFunc(props: any) {
    const reroll = props.reroll;
    const surrounding: surrounding = props.surrounding;
    const [currentEquipment, setCurrentEquipment] = useState<EquipmentInt[]>();

    console.log("EQUIPMENT COMP GENERATED")
    console.log("PROPS ARE", reroll , surrounding)


    useEffect(() => {
        console.log("EQUIPMENT COMP IN USE EFFECT")
        const equipmentNumber = diceRollFunction(9);
        const allEquipment = Equipment;
        let equipmentArr = [];

        for (let i = 0; i <= equipmentNumber; i++) {
            let diceRollIndex = diceRollFunctionZero(allEquipment.length);
            equipmentArr.push(allEquipment[diceRollIndex])
        }

        if (surrounding === "дворянство") {
            let curClothe: DvoryanClothes = {
                Name: "Дворянско облекло",
                Price: "50Ж",
                Information: "Изящни одежди от фини платове и аксесоари от скъпи кожи."
            }
            equipmentArr.push(curClothe);
        } else if (surrounding === "духовенство") {
            let curClothe: DuhClothes = {
                Name: "Духовническо облекло",
                Price: "50С",
                Information: "Скромни дрехи, подходящи за свещенослужения и отшелнически живот."
            }
            equipmentArr.push(curClothe);
        } else if (surrounding === "интелигенция") {
            let curClothe: IntClothes = {
                Name: "Ексцентрично облекло",
                Price: "10Ж",
                Information: "Разноцветни одежди, типично носени от артисти и изследователи на естествения свят."
            }
            equipmentArr.push(curClothe);
        } else if (surrounding === "подземен свят") {
            let curClothe: CrimClother = {
                Name: "Неугледно облекло",
                Price: "10К",
                Information: "Тъмни, дрипави дрехи, присъщи за членовете на подземния свят."
            }
            equipmentArr.push(curClothe);
        } else {
            let curClothe: ProstClothes = {
                Name: "Просто облекло" ,
                Price: "10С",
                Information: "Обикновени и практични дрехи, носени предимно от земледелци, занаятчии и други представители на простолюдието."
            }
            equipmentArr.push(curClothe)
        }
        setCurrentEquipment(equipmentArr);
    }, [reroll])

    return (
        <div className="equipmentDiv">
            <h2>Принадлежности</h2>
            <div className="allEquipment">
                {currentEquipment?.map((eq) => {
                    return <SubEquipment eq={eq} />
                })}
            </div>
        </div>
    )
}

export const EquipmentComponent = React.memo(EquipmentComponentFunc);