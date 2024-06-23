import "./Quick.css"
import { useEffect, useState } from "react"
import { QuickHero, body, mechanicStats } from "../../Interfaces/QuickHero"
import { Link } from "react-router-dom"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { nameGenerator } from "../../functions/nameGeneratorFunc"
import { ageGenerator, appearanceGeneratorFunc, bodyTypesGenerator, featuresGenerator } from "../../functions/appearanceGenerator"
import { aimsGenerator, callingGenerator, characterGenerator, concernsGenerator } from "../../functions/worldViewGenerator"
import { familyAndRelationshipsCombined } from "../../functions/familyRelationshipsGenerator"
import { mechSingleStats, mechStatGenerator } from "../../functions/mechStatGenerator"
import dice from "../../../public/441965163_472462378601661_2030822002986090823_n.png"

export default function Quick() {
    const [reroll, setReroll] = useState<boolean>(false);
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

    useEffect(() => {
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
        setHeroStats((prev) => ({
            ...prev, gender: genderGen, origin: origin,
            society: society, name: name, age: age, appearance: appearance,
            features: features, body: body,
            worldView: {
                character, calling, aims, concerns
            }, familyAndRelationships, mechanicalStats
        }))
    }, [reroll])

    const rerollFunc = () => {
        setReroll(prev => !prev)
    };

    const singleStatReroll = (statName:"strength"|"confidence"|"ability"|"perception") => {
        const newValueRoll = mechSingleStats();
        const mechStatOld = {...heroStats.mechanicalStats};
        if (statName === "strength") {
            mechStatOld.strength = newValueRoll;
        } else if (statName === "confidence") {
            mechStatOld.confidence = newValueRoll;
        } else if (statName === "ability") {
            mechStatOld.ability = newValueRoll;
        } else if (statName === "perception") {
            mechStatOld.perception = newValueRoll;
        }
        setHeroStats( (prev) => ({...prev, mechStatOld}))
    }

    return (
        <div className="container quick">
            <Link className="backLink" to="/">Назад</Link>
            <img className="dice" src={dice} alt="" onClick={rerollFunc} />
            <div className="containerInfo">
                <div>
                    <h2>Наративни характеристики</h2>
                    <p> Пол: {heroStats.gender}</p>
                    <p> Произход: {heroStats.origin}</p>
                    <p> Общество: {heroStats.society}</p>
                    <p> Име: {heroStats.name}</p>
                </div>
                <div>
                    <h2>Външност</h2>
                    <p> Възраст: {heroStats.age}</p>
                    <p> Тен: {heroStats.appearance.color}</p>
                    <p> Коса: {heroStats.appearance.hair}</p>
                    <p> Очи: {heroStats.appearance.eyes}</p>
                    <p> Отличителни белези: {heroStats.features}</p>
                    <p>Ръст: {heroStats.body.height}</p>
                    <p>Форма: {heroStats.body.shape}</p>
                </div>
                <div>
                    <h2>Мироглед</h2>
                    <p> Нрав: {heroStats.worldView.character}</p>
                    <p> Призвание: {heroStats.worldView.calling}</p>
                    <p> Цели: {heroStats.worldView.aims}</p>
                    <p> Опасения: {heroStats.worldView.concerns}</p>
                </div>
                <div>
                    <h2>Среда и положение</h2>
                    <p> Среда: {heroStats.familyAndRelationships.surrounding}</p>
                    <p> Положение: {heroStats.familyAndRelationships.wealth}</p>
                    <p> Род: {heroStats.familyAndRelationships.familyReputation}</p>
                    <p> Семейство: {heroStats.familyAndRelationships.family}</p>
                    <p> Братя и сестри: {heroStats.familyAndRelationships.siblings}</p>
                    <p> Семейно положение: {heroStats.familyAndRelationships.relationshipStatus}</p>
                    <p> Очаквания и репутация: {heroStats.familyAndRelationships.ownReputation}</p>
                    <p> Приятелства: {heroStats.familyAndRelationships.friendship}</p>
                    <p> Вражди: {heroStats.familyAndRelationships.enemies}</p>
                    <p> Слухове: {heroStats.familyAndRelationships.rumors}</p>
                    <p> Трудности и Постижения: {heroStats.familyAndRelationships.difficultiesAndAchievements}</p>
                </div>
                <div>
                    <h2>Механични измерения</h2>
                    <p> Крепкост: {heroStats.mechanicalStats.strength}</p>
                    <p> Увереност: {heroStats.mechanicalStats.confidence}</p>
                    <p> Способност: {heroStats.mechanicalStats.ability}</p>
                    <p> Възприятие: {heroStats.mechanicalStats.perception}</p>
                </div>
                <div>
                    <h2>Недостатъци</h2>
                </div>
            </div>
        </div>
    )
}