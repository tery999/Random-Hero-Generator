import React, { useEffect, useState } from "react";
import { diceRollFunction, diceRollFunctionZero } from "../../functions/utils";
import { Equipment, EquipmentInt } from "../../InformationObjects/Equipment";
import { SubEquipment } from "./SubEquipment";
import { surrounding } from "../../Interfaces/QuickHero";

export function EquipmentComponentFunc(props: any) {
    const reroll = props.reroll;
    const surrounding: surrounding = props.surrounding;
    const [currentEquipment, setCurrentEquipment] = useState<EquipmentInt[]>();


    useEffect(() => {
        const equipmentNumber = diceRollFunction(9);
        const allEquipment = Equipment;
        let equipmentArr = [];

        for (let i = 0; i <= equipmentNumber; i++) {
            let diceRollIndex = diceRollFunctionZero(allEquipment.length);
            equipmentArr.push(allEquipment[diceRollIndex])
        }

        if (surrounding === "дворянство") {
            equipmentArr.push("дворянско облекло");
        } else if (surrounding === "духовенство") {
            equipmentArr.push("духовническо облекло");
        } else if (surrounding === "интелигенция") {
            equipmentArr.push("ексцентрично облекло");
        } else if (surrounding === "подземен свят") {
            equipmentArr.push("неугледно облекло");
        } else {
            equipmentArr.push("просто облекло")
        }
        // WAITING FOR CLOTHES TO BE TRANSFORMED INTO OBJECTS
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