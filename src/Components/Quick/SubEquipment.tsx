
import { EquipmentInt } from "../../InformationObjects/Equipment";

export function SubEquipment(props: any) {
    console.log("check rendering sub equipment");
    const eq = props.eq as EquipmentInt;
    return (
        <div className="equipmentDiv">
            <p className="questionMark"> ? </p>
            <p>{eq.Name}</p>

            <div className="hiddenEquipment">
                <p>{eq.Name}</p>
                <p>{eq.Price}</p>
                <p>{eq.Information}</p>
            </div>
        </div>
    )
}
