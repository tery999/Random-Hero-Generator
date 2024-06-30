import { useState } from "react";
import { EquipmentInt } from "../../InformationObjects/Equipment";

export function SubEquipment(props: any) {

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

// const [hidden, setHidden] = useState(true);

// <div className="equipmentDiv">
// <p onMouseEnter={() => setHidden(false)}
//     onMouseLeave={() => setHidden(true)}
//     className="questionMark"> ? </p>
// <p>{eq.Name}</p>
// { !hidden &&
//     <div className="hiddenEquipment">
//         <p>{eq.Name}</p>
//         <p>{eq.Price}</p>
//         <p>{eq.Information}</p>
//     </div>
// }
// </div>