import React, { useEffect, useState } from "react";
import { diceRollFunction, diceRollFunctionZero } from "../../functions/utils";
import { Equipment, EquipmentInt } from "../../InformationObjects/Equipment";
import { SubEquipment } from "./SubEquipment";

export function EquipmentComponentFunc (props:any) {
    const reroll = props.reroll;
    const [currentEquipment, setCurrentEquipment] = useState<EquipmentInt[]>();
    

    useEffect( ()=> {
        const equipmentNumber = diceRollFunction(9);
        const allEquipment = Equipment;
        let equipmentArr = [];

        for ( let i = 0 ; i <= equipmentNumber ; i++) {
            let diceRollIndex = diceRollFunctionZero(allEquipment.length);
            equipmentArr.push(allEquipment[diceRollIndex])
        }

        setCurrentEquipment(equipmentArr);
    },[reroll])

    return (
        <div className="equipmentDiv">
            <h2>Предмети</h2>
            { currentEquipment?.map( (eq) => {
               return <SubEquipment eq={eq}/>
            })}
        </div>
    )
}

export const EquipmentComponent = React.memo(EquipmentComponentFunc);