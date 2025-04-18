import "./Quick.css"
import { useEffect, useState } from "react"
import { QuickHero, body, mechanicStats } from "../../Interfaces/QuickHero"
import { Link } from "react-router-dom"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { nameGenerator } from "../../functions/nameGeneratorFunc"
import { ageGenerator, appearanceGeneratorFunc, bodyTypesGenerator, featuresGenerator } from "../../functions/appearanceGenerator"
import { aimsGenerator, callingGenerator, characterGenerator, concernsGenerator } from "../../functions/worldViewGenerator"
import { DiffAndAch, familyAndRelationshipsCombined } from "../../functions/familyRelationshipsGenerator"
import { mechSingleStats, mechStatGenerator, mechStatLowHigh } from "../../functions/mechStatGenerator"
import dice from "../../../public/441965163_472462378601661_2030822002986090823_n.png"
import { nedostataciInterface, nedostataciMentalFunc, nedostataciPhysicalFunc } from "../../functions/disadvantageGenerator"
import { PhysicalSpecialtiesComp } from "./PhysicalSpecialties"
import { MentalSpecialtiesComp } from "./MentalSpecialties"
import { EquipmentComponent } from "./Equipment"

//COPY IN CASE I SCREW THE NEW CSS

export default function Quick() {
    const [reroll, setReroll] = useState<boolean>(false);
    const [readable, setReadable] = useState<boolean>(false);
    const [heroStats, setHeroStats] = useState<QuickHero>({
        gender: "",
        origin: "",
        society: "",
        name: "",
        age: "",
        appearance: {
            color: "",
            hair: "",
            eyes: ""
        },
        features: "",
        body: {
            height: "",
            shape: ""
        },
        worldView: {
            character: "",
            calling: "",
            aims: "",
            concerns: ""
        },
        familyAndRelationships: {
            surrounding: "",
            wealth: "",
            familyReputation: "",
            family: "",
            siblings: "",
            relationshipStatus: "",
            ownReputation: "",
            friendship: "",
            enemies: "",
            rumors: "",
            difficultiesAndAchievements: ""
        },
        mechanicalStats: {
            strength: 0,
            confidence: 0,
            ability: 0,
            perception: 0

        }
    })
    const [disadvantages, setDisadvantages] = useState<nedostataciInterface[]>([]);

    useEffect(() => {
        console.log("REROLL ON MAIN PAGE USE EFFECT");
        const genderGen = genderGenerator();
        const origin = originGenerator("quick");
        const society = societyGenerator();
        const age = ageGenerator();
        const name = nameGenerator(genderGen, origin, age);
        const appearance = appearanceGeneratorFunc(origin);
        const features = featuresGenerator();
        const body = bodyTypesGenerator(genderGen, age, origin) as body;
        const character = characterGenerator();
        const calling = callingGenerator();
        const aims = aimsGenerator();
        const concerns = concernsGenerator();
        const mechanicalStats = mechStatGenerator() as mechanicStats;
        const familyAndRelationships = familyAndRelationshipsCombined(age, mechanicalStats);
        console.log("REROLL ON MAIN PAGE , SURR IS", familyAndRelationships.surrounding);
        setHeroStats((prev) => ({
            ...prev, gender: genderGen, origin: origin,
            society: society, name: name, age: age, appearance: appearance,
            features: features, body: body,
            worldView: {
                character, calling, aims, concerns
            }, familyAndRelationships, mechanicalStats
        }))
    }, [reroll])
    console.log("REROLL ON MAIN PAGE");
  

    const rerollFunc = () => {
        setReroll(prev => !prev);
        setDisadvantages([]);

    };

    const changeFontFunc = () => {
        setReadable( prev => !prev);
    }

    const singleStatReroll = (statName: "strength" | "confidence" | "ability" | "perception") => {
        // debugger;
        const newValueRoll = mechSingleStats();
        const mechStatOld = { ...heroStats.mechanicalStats };
        if (statName === "strength") {
            mechStatOld.strength = newValueRoll;
        } else if (statName === "confidence") {
            mechStatOld.confidence = newValueRoll;
        } else if (statName === "ability") {
            mechStatOld.ability = newValueRoll;
        } else if (statName === "perception") {
            mechStatOld.perception = newValueRoll;
        }

        //need to change Difficulties and Achievements, if the highest and lowest value change
        const [low, high] = mechStatLowHigh(mechStatOld);
        const newDiffAch = DiffAndAch(low, high);

        const familyFieldOld = { ...heroStats.familyAndRelationships };
        familyFieldOld.difficultiesAndAchievements = newDiffAch;

        if (statName === "strength" || statName === "ability") {
            // debugger;
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

        } else if (statName === "confidence" || statName === "perception") {
            // debugger;
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
        setHeroStats((prev) => ({ ...prev, mechanicalStats: mechStatOld, familyAndRelationships: familyFieldOld }));
    }

    return (
        <div className={`container quick ${readable}`}>
            <Link className="backLink" to="/">Назад</Link>
            <img className="dice" src={dice} alt="" onClick={rerollFunc} />
            <div className="containerInfo">
               <button className="changeFont" onClick={changeFontFunc}>
                Фонт
               </button>
                <div className="firstRow">
                    <img className="cornerDec upLeft" src="/CornerDecorationUpLeft.png" alt="" />
                    <img className="cornerDec upRight" src="/CornerDecorationUpRight.png" alt="" />
                    <img className="cornerDec downLeft" src="/CornerDecorationDownLeft.png" alt="" />
                    <img className="cornerDec downRight" src="/CornerDecorationDownRight.png" alt="" />
                    <div className="statsDiv">
                        <h2>Наративни характеристики</h2>
                        <p> Пол: {heroStats.gender}</p>
                        <p> Произход: {heroStats.origin}</p>
                        <p> Общество: {heroStats.society}</p>
                        <p> Име: {heroStats.name}</p>
                    </div>
                    <div className="statsDiv">
                        <h2>Външност</h2>
                        <p> Възраст: {heroStats.age}</p>
                        <p> Тен: {heroStats.appearance.color}</p>
                        <p> Коса: {heroStats.appearance.hair}</p>
                        <p> Очи: {heroStats.appearance.eyes}</p>
                        <p> Отличителни белези: {heroStats.features}</p>
                        <p>Ръст: {heroStats.body.height}</p>
                        <p>Форма: {heroStats.body.shape}</p>
                    </div>
                    <div className="statsDiv">
                        <h2>Мироглед</h2>
                        <p> Нрав: {heroStats.worldView.character}</p>
                        <p> Призвание: {heroStats.worldView.calling}</p>
                        <p> Цели: {heroStats.worldView.aims}</p>
                        <p className="opasenia"> Опасения: {heroStats.worldView.concerns}</p>
                    </div>
                    <img className="lionPic" src="/lionImage.png" alt="" />
                </div>
                <div className="secondRow">
                    <img className="cornerDec upLeft" src="/CornerDecorationUpLeft.png" alt="" />
                    <img className="cornerDec upRight" src="/CornerDecorationUpRight.png" alt="" />
                    <img className="cornerDec downLeft" src="/CornerDecorationDownLeft.png" alt="" />
                    <img className="cornerDec downRight" src="/CornerDecorationDownRight.png" alt="" />
                    <div className="sredaIpolojenieHolder">
                        <h2>Среда и положение</h2>
                        <p> Среда: {heroStats.familyAndRelationships.surrounding} .</p>
                        <p> Положение: {heroStats.familyAndRelationships.wealth} .</p>
                        <p className="RodP"> Род: {heroStats.familyAndRelationships.familyReputation}</p>
                        <p> Семейство: {heroStats.familyAndRelationships.family}</p>
                        <p> Братя и сестри: {heroStats.familyAndRelationships.siblings}</p>
                        <p> Семейно положение: {heroStats.familyAndRelationships.relationshipStatus}</p>
                        <p> Очаквания и репутация: {heroStats.familyAndRelationships.ownReputation}</p>
                        <p> Приятелства: {heroStats.familyAndRelationships.friendship}</p>
                        <p> Вражди: {heroStats.familyAndRelationships.enemies}</p>
                        <p> Слухове: {heroStats.familyAndRelationships.rumors}</p>
                        <p className="TrudnostiIPostijeniqP"> Трудности и постижения: {heroStats.familyAndRelationships.difficultiesAndAchievements}</p>
                    </div>
                    <img className="ricarNaKon" src="/ricarNaKon.png" alt="" />
                </div>
                <div className="thirdRow">
                    <img className="cornerDec upLeft" src="/CornerDecorationUpLeft.png" alt="" />
                    <img className="cornerDec upRight" src="/CornerDecorationUpRight.png" alt="" />
                    <img className="cornerDec downLeft" src="/CornerDecorationDownLeft.png" alt="" />
                    <img className="cornerDec downRight" src="/CornerDecorationDownRight.png" alt="" />
                    <div className="mehanichniStatHolder">
                        <h2>Механични измерения</h2>
                        <div className="singleStatHolder">
                            <img className="diceSm" src={dice} alt="" onClick={() => singleStatReroll("strength")} />
                            <p> Крепкост: {heroStats.mechanicalStats.strength}</p>
                        </div>
                        <div className="singleStatHolder">
                            <img className="diceSm" src={dice} alt="" onClick={() => singleStatReroll("confidence")} />
                            <p> Увереност: {heroStats.mechanicalStats.confidence}</p>
                        </div>
                        <div className="singleStatHolder">
                            <img className="diceSm" src={dice} alt="" onClick={() => singleStatReroll("ability")} />
                            <p> Способност: {heroStats.mechanicalStats.ability}</p>
                        </div>
                        <div className="singleStatHolder">
                            <img className="diceSm" src={dice} alt="" onClick={() => singleStatReroll("perception")} />
                            <p> Възприятие: {heroStats.mechanicalStats.perception}</p>
                        </div>
                    </div>
                    {disadvantages.length === 0 && <img className="ricatNaKonTwo" src="/ricarNaKon2.png" alt="" /> }
                    <div className="nedostataciHolder">
                        {disadvantages.length > 0 && <h2>Недостатъци</h2> }
                        {disadvantages.map((single) =>
                            <p>{single.name} {single.level}: {single.information}</p>
                        )}
                    </div>
                </div>
                <div className="forthRow">
                    <img className="cornerDec upLeft" src="/CornerDecorationUpLeft.png" alt="" />
                    <img className="cornerDec upRight" src="/CornerDecorationUpRight.png" alt="" />
                    <img className="cornerDec downLeft" src="/CornerDecorationDownLeft.png" alt="" />
                    <img className="cornerDec downRight" src="/CornerDecorationDownRight.png" alt="" />
                    <PhysicalSpecialtiesComp reroll={reroll} abilityProp={heroStats.mechanicalStats.ability} />
                </div>
                <div className="fifthRow">
                    <img className="cornerDec upLeft" src="/CornerDecorationUpLeft.png" alt="" />
                    <img className="cornerDec upRight" src="/CornerDecorationUpRight.png" alt="" />
                    <img className="cornerDec downLeft" src="/CornerDecorationDownLeft.png" alt="" />
                    <img className="cornerDec downRight" src="/CornerDecorationDownRight.png" alt="" />
                    <MentalSpecialtiesComp reroll={reroll} perceptionProp={heroStats.mechanicalStats.perception} />
                </div>
                <div className="sixthRow">
                    <img className="cornerDec upLeft" src="/CornerDecorationUpLeft.png" alt="" />
                    <img className="cornerDec upRight" src="/CornerDecorationUpRight.png" alt="" />
                    <img className="cornerDec downLeft" src="/CornerDecorationDownLeft.png" alt="" />
                    <img className="cornerDec downRight" src="/CornerDecorationDownRight.png" alt="" />
                    <EquipmentComponent reroll={reroll} surrounding={heroStats.familyAndRelationships.surrounding} />
                    <img className="rogImg" src="pileOfWeapons.png" alt="" />
                </div>

            </div>
        </div>
    )
}