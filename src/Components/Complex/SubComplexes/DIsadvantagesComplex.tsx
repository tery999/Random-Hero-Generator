import React, { useEffect, useState } from "react";
import { nedostataciInterface, nedostataciMentalFunc, nedostataciPhysicalFunc } from "../../../functions/disadvantageGenerator";

export function DisadvantagesFunction(props: any) {
    const numberOfDisadvantagesPhysic = props.numberOfDisadvantagesPhysic as number;
    const numberOfDisadvantagesMental = props.numberOfDisadvantagesMental as number;
    const [disadvantages, setDisadvantages] = useState<nedostataciInterface[]>([]);

    useEffect(() => {
        if (numberOfDisadvantagesPhysic > 0) {
            const disadvantage = nedostataciPhysicalFunc();
            const newDisArr: nedostataciInterface[] = disadvantages.map(obj => ({ ...obj }));
            const filtered = newDisArr.filter((el) => {
                return el.name === disadvantage.name
            })

            if (filtered.length > 0) {
                filtered[0].level += 1;
                setDisadvantages(newDisArr);
            } else {
                setDisadvantages((prev) => [...prev, disadvantage]);
            }

        }
    }, [numberOfDisadvantagesPhysic])

    useEffect(() => {
        if (numberOfDisadvantagesMental > 0) {
            const disadvantage = nedostataciMentalFunc();
            const newDisArr: nedostataciInterface[] = disadvantages.map(obj => ({ ...obj }));
            const filtered = newDisArr.filter((el) => {
                return el.name === disadvantage.name
            })

            if (filtered.length > 0) {
                filtered[0].level += 1;
                setDisadvantages(newDisArr);
            } else {
                setDisadvantages((prev) => [...prev, disadvantage]);
            }
        }

    }, [numberOfDisadvantagesMental])
    return (
        <div>
            <h2>Недостатъци</h2>
            {disadvantages.map((single) =>
                <p>{single.name} {single.level}: {single.information}</p>
            )}
        </div>
    )
}

export const DisadvantagesComplex = React.memo(DisadvantagesFunction);