import { useEffect, useState } from "react";
import { mechanicStats } from "../../../Interfaces/QuickHero";
import { mechSingleStats, mechStatGenerator, mechStatLowHigh } from "../../../functions/mechStatGenerator";
import dice from "../../../../public/441965163_472462378601661_2030822002986090823_n.png"

export function MechStatsComplex(props: any) {
    const changeMechLowHigh = props.changeMechLowHigh
    const changenumberOfDisadvantages = props.changenumberOfDisadvantages;
    const changePerceptionFunc = props.changePerceptionFunc;
    const [mechStats, setMechStats] = useState<mechanicStats>({
        strength: 0,
        confidence: 0,
        ability: 0,
        perception: 0
    })

    //open individual rolls only after first roll 
    const [hasRolled, setHasRolled] = useState(false);

    const rollStats = () => {
        const mechSt = mechStatGenerator();
        setMechStats(mechSt);
        const lowHigh = mechStatLowHigh(mechSt);
        changeMechLowHigh(lowHigh);
        setHasRolled(true);
    }

    const rollIndividualStat = (statName:"strength"|"confidence"|"ability"|"perception") => {
        const newMechStats = {...mechStats};
        const individualRoll = mechSingleStats();
        newMechStats[statName] = individualRoll;
        setMechStats(newMechStats);

        const lowHigh = mechStatLowHigh(newMechStats);
        changeMechLowHigh(lowHigh);

        //passes to parent that there should be a disadvantage roll
        if (statName === "strength" || statName === "ability") {
            changenumberOfDisadvantages("physical");
        } else {
            changenumberOfDisadvantages("mental");
        }

    }

    useEffect( ()=> {
        changePerceptionFunc(mechStats.perception);
    } , [mechStats] )

    return (
        <div className="MechStatHolder">
            <h2>Механични измерения</h2>
            {
                !hasRolled &&
                <img className="diceLogo" src={dice} alt="" onClick={rollStats} />
            }
            <div className="DivHolderStat">

                {
                    hasRolled &&
                    <img className="diceLogo" src={dice} alt="" onClick={()=>rollIndividualStat("strength")} />
                }
                <p> Крепкост: {mechStats.strength}</p>
            </div>
            <div className="DivHolderStat">
                {
                    hasRolled &&
                    <img className="diceLogo" src={dice} alt="" onClick={()=>rollIndividualStat("confidence")} />
                }
                <p> Увереност: {mechStats.confidence}</p>
            </div>
            <div className="DivHolderStat">

                {
                    hasRolled &&
                    <img className="diceLogo" src={dice} alt="" onClick={()=>rollIndividualStat("ability")} />
                }
                <p> Способност: {mechStats.ability}</p>
            </div>
            <div className="DivHolderStat">
                {
                    hasRolled &&
                    <img className="diceLogo" src={dice} alt="" onClick={()=>rollIndividualStat("perception")} />
                }
                <p> Възприятие: {mechStats.perception}</p>
            </div>
        </div>
    )
}