Hooks.once("setup", async function () {

const WFRP4E = {}

CONFIG.JournalEntry.noteIcons = {
    "Marcador": "systems/wfrp4e/icons/buildings/point_of_interest.png",
    "Aldea 1": "systems/wfrp4e/icons/buildings/village1.png",
    "Aldea 2": "systems/wfrp4e/icons/buildings/village2.png",
    "Aldea 3": "systems/wfrp4e/icons/buildings/village3.png",
    "Barracones Imperiales": "systems/wfrp4e/icons/buildings/empire_barracks.png",
    "Bosque Encantado": "systems/wfrp4e/icons/buildings/haunted_wood.png",
    "Boticario": "systems/wfrp4e/icons/buildings/apothecary.png",
    "Camino": "systems/wfrp4e/icons/buildings/roads.png",
    "Campamento Orco": "systems/wfrp4e/icons/buildings/orc_city.png",
    "Cementerio": "systems/wfrp4e/icons/buildings/cemetery.png",
    "Cerveza Enana": "systems/wfrp4e/icons/buildings/dwarf_beer.png",
    "Ciudad Bretoniana 1": "systems/wfrp4e/icons/buildings/bret_city1.png",
    "Ciudad Bretoniana 2": "systems/wfrp4e/icons/buildings/bret_city2.png",
    "Ciudad Bretoniana 3": "systems/wfrp4e/icons/buildings/bret_city3.png",
    "Ciudad Imperial 1": "systems/wfrp4e/icons/buildings/empire_city1.png",
    "Ciudad Imperial 2": "systems/wfrp4e/icons/buildings/empire_city2.png",
    "Ciudad Imperial 3": "systems/wfrp4e/icons/buildings/empire_city3.png",
    "Ciudad Kislevita 1": "systems/wfrp4e/icons/buildings/kislev_city1.png",
    "Ciudad Kislevita 2": "systems/wfrp4e/icons/buildings/kislev_city2.png",
    "Ciudad Kislevita 3": "systems/wfrp4e/icons/buildings/kislev_city3.png",
    "Colina de Castillo 1": "systems/wfrp4e/icons/buildings/castle_hill1.png",
    "Colina de Castillo 2": "systems/wfrp4e/icons/buildings/castle_hill2.png",
    "Colina de Castillo 3": "systems/wfrp4e/icons/buildings/castle_hill3.png",
    "Colina de la Torre": "systems/wfrp4e/icons/buildings/tower_hill.png",
    "Colina Encantada": "systems/wfrp4e/icons/buildings/haunted_hill.png",
    "Comida": "systems/wfrp4e/icons/buildings/food.png",
    "Comida 2": "systems/wfrp4e/icons/buildings/food2.png",
    "Corte": "systems/wfrp4e/icons/buildings/court.png",
    "Cueva 1": "systems/wfrp4e/icons/buildings/cave1.png",
    "Cueva 2": "systems/wfrp4e/icons/buildings/cave2.png",
    "Cueva 3": "systems/wfrp4e/icons/buildings/cave3.png",
    "Culto Bretoniano": "systems/wfrp4e/icons/buildings/bretonnia_worship.png",
    "Culto del Caos": "systems/wfrp4e/icons/buildings/chaos_worship.png",
    "D??lmenes": "systems/wfrp4e/icons/buildings/standing_stones.png",
    "Elfos Silvanos 1": "systems/wfrp4e/icons/buildings/welves1.png",
    "Elfos Silvanos 2": "systems/wfrp4e/icons/buildings/welves2.png",
    "Elfos Silvanos 3": "systems/wfrp4e/icons/buildings/welves3.png",
    "Establos": "systems/wfrp4e/icons/buildings/stables.png",
    "Fuerte Enano 1": "systems/wfrp4e/icons/buildings/dwarf_hold1.png",
    "Fuerte Enano 2": "systems/wfrp4e/icons/buildings/dwarf_hold2.png",
    "Fuerte Enano 3": "systems/wfrp4e/icons/buildings/dwarf_hold3.png",
    "Granja": "systems/wfrp4e/icons/buildings/farms.png",
    "Herrero": "systems/wfrp4e/icons/buildings/blacksmith.png",
    "Puesto de Guardia": "systems/wfrp4e/icons/buildings/guards.png",
    "Magia": "systems/wfrp4e/icons/buildings/magic.png",
    "Metal": "systems/wfrp4e/icons/buildings/metal.png",
    "Monta??a 1": "systems/wfrp4e/icons/buildings/mountains1.png",
    "Monta??a 2": "systems/wfrp4e/icons/buildings/mountains2.png",
    "Muro de Castillo": "systems/wfrp4e/icons/buildings/castle_wall.png",
    "Orcos": "systems/wfrp4e/icons/buildings/orcs.png",
    "Portal del Caos": "systems/wfrp4e/icons/buildings/chaos_portal.png",
    "Posada 1": "systems/wfrp4e/icons/buildings/inn1.png",
    "Posada 2": "systems/wfrp4e/icons/buildings/inn2.png",
    "Pantano": "systems/wfrp4e/icons/buildings/swamp.png",
    "Pergamino": "systems/wfrp4e/icons/buildings/scroll.png",
    "Puerto": "systems/wfrp4e/icons/buildings/port.png",
    "Reba??o de Hombres Bestia 1": "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
    "Reba??o de Hombres Bestia 2": "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
    "Ruinas": "systems/wfrp4e/icons/buildings/ruins.png",
    "Serrer??a": "systems/wfrp4e/icons/buildings/lumber.png",
    "Sigmar": "systems/wfrp4e/icons/buildings/sigmar_worship.png",
    "Templo": "systems/wfrp4e/icons/buildings/temple.png",
    "Textil": "systems/wfrp4e/icons/buildings/textile.png",
    "Torre 1": "systems/wfrp4e/icons/buildings/tower1.png",
    "Torre 2": "systems/wfrp4e/icons/buildings/tower2.png",
    "Torre de Mago": "systems/wfrp4e/icons/buildings/wizard_tower.png",
    "Ulric": "systems/wfrp4e/icons/buildings/ulric_worship.png"
}

game.wfrp4e.config.symptomEffects = {
        "blight": {
            label: "Decaimiento",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "symptom": true,
                    "script": `
                        let difficulty = ""
                        if (this.effect.label.includes("Moderado"))
                            difficulty = "easy"
                        else if (this.effect.label.includes("Severo"))
                            difficulty = "average"
                        else
                            difficulty = "veasy"
    
                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill("Aguante", {absolute: {difficulty}}).then(setupData => {
                                args.actor.basicTest(setupData).then(test => 
                                    {
                                        if (test.result.outcome == "failure")
                                            args.actor.addCondition("dead")
                                    })
                                })
                        }`
                }
            }
        },
        "buboes": {
            label: "Bubas",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item.key))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }
            `}
            }
        },
        "convulsions": {
            label: "Convulsiones",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                        let modifier = 0
                        if (this.effect.label.includes("Moderado"))
                            modifier = -20
                        else
                            modifier = -10
                        
                        let applicableCharacteristics = ["ws", "bs", "s", "ag", "t", "dex"]
                        if (args.type == "weapon")
                            args.prefillModifiers.modifier += modifier
                        else if (args.type == "characteristic")
                        {
                            if (applicableCharacteristics.includes(args.item))
                                args.prefillModifiers.modifier += modifier
                        }
                        else if (args.type == "skill")
                        {
                            if (applicableCharacteristics.includes(args.item.characteristic.key))
                                args.prefillModifiers.modifier += modifier
                        }`
                }
            }
        },
        "fever": {
            label: "Fiebre",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                       
                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
    
                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }`,
                    "otherEffects": ["blight", "wounded"]
                }
            }
        },
        "flux": {
            label: "Diarrea",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "lingering": {
            label: "Persistente",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "coughsAndSneezes": {
            label: "Toses y estornudos",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "gangrene": {
            label: "Gangrena",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                        if (args.type == "characteristic" && args.item == "fel")
                        {
                            if (args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        }
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }
                    }`
                }
            }
        },
        "malaise": {
            label: "Malestar",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prepareData",
                    "symptom": true,
                    "script": `
                    if (game.user.isUniqueGM)
                    {
                        let fatigued = args.actor.hasCondition("fatigued")
                        if (!fatigued)
                        {
                            args.actor.addCondition("fatigued")
                            ui.notifications.notify("A??adido Fatigado a \" + args.actor.name + \" que no puede ser quitado hasta que haya desaparecido el s??ntoma Malestar.")
                        }
                    }
                    `
                }
            }
        },
        "nausea": {
            label: "N??useas",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "rollTest",
                    "symptom": true,
                    "script": `
                    if (this.actor.owner && args.test.result.outcome == "failure")
                    {
                        let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                        if (applicableCharacteristics.includes(args.test.characteristicKey))
                            this.actor.addCondition("stunned")
    
                    }
                    `
                }
            }
        },
        "pox": {
            label: "Plaga",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                       
                        if (args.type == "characteristic" && args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }`
                }
            }
        },
        "wounded": {
            label: "Herido",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "symptom": true,
                    "script": `
                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill("Aguante", {absolute: {difficulty : "average"}}).then(setupData => {
                                args.actor.basicTest(setupData).then(test => 
                                    {
                                        if (test.result.outcome == "failure")
                                            fromUuid("Compendium.wfrp4e-core.diseases.kKccDTGzWzSXCBOb").then(disease => {
                                                args.actor.createEmbeddedDocuments("Item", [disease.toObject()])
                                            })
                                    })
                                })
                        }`
                }
            }
        }
    }

game.wfrp4e.config.effectTriggers = {
    "invoke" : "Invocado Manualmente",
    "oneTime" : "Inmediato",
    "dialogChoice" : "Elecci??n de Di??logo",
    "prefillDialog" : "Prellenar Di??logo",
    "prePrepareData" : "Pre-Preparar Datos",
    "prePrepareItems" : "Pre-Preparar Objetos de Actor",
    "prepareData" : "Preparar Datos",
    "preWoundCalc" : "Pre-C??lculo de Heridas",
    "woundCalc" : "C??lculo de Heridas",
    "preApplyDamage" : "Pre-Aplicar Da??o",
    "applyDamage" : "Aplicar Da??o",
    "preTakeDamage" : "Pre-Recibir Da??o",
    "takeDamage" : "Recibir Da??o",
    "preApplyCondition" : "Pre-Aplicar Condici??n",
    "applyCondition" : "Aplicar Condici??n",
    "prePrepareItem" : "Pre-Preparar Objeto",
    "prepareItem" : "Preparar Objeto",
    "preRollTest" : "Pre-Tirar Chequeo",
    "preRollWeaponTest" : "Pre-Tirar Chequeo de Arma",
    "preRollCastTest" : "Pre-Tirar Chequeo de Lanzamiento",
    "preChannellingTest" : "Pre-Tirar Chequeo de Canalizaci??n",
    "preRollPrayerTest" : "Pre-Tirar Chequeo de Plegaria",
    "preRollTraitTest" : "Pre-Tirar Chequeo de Rasgo",
    "rollTest" : "Tirar Chequeo",
    "rollIncomeTest" : "Tirar Chequeo de Salario",
    "rollWeaponTest" : "Tirar Chequeo de Arma",
    "rollCastTest" : "Tirar Chequeo de Lanzamiento",
    "rollChannellingTest" : "Tirar Chequeo de Canalizaci??n",
    "rollPrayerTest" : "Tirar Chequeo de Plegaria",
    "rollTraitTest" : "Tirar Chequeo de Rasgo",
    "preOpposedAttacker" : "Pre-Enfrentado Atacante",
    "preOpposedDefender" : "Pre-Enfrentado Defensor",
    "opposedAttacker" : "Enfrentado Atacante",
    "opposedDefender" : "Enfrentado Defensor",
    "calculateOpposedDamage" : "Calcular Da??o Enfrentado",
    "targetPrefillDialog" : "Prellenar Di??logo del Objetivo",
    "getInitiativeFormula" : "Conseguir Iniciativa",
    "endTurn" : "Fin del Turno",
    "endRound" : "Fin del Asalto",
    "endCombat" : "Fin del Combate"
}

game.wfrp4e.config.effectPlaceholder = {

    "invoke" : 
    `Este efecto s??lo se aplica al pulsar el bot??n de Invocar.
    args:

    ninguno`,
    "oneTime" : 
    `Este efecto ocurre una vez, inmediatamente al aplicar.
    args:

    actor : actor propietario del efecto
    `,
    "prefillDialog" : 
    `Este efecto se aplica antes de reproducir el di??logo de tirada, y deber??a cambiar los valores prellenados en la secci??n de bonos
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: el objeto del tipo mencionado usado
    options: otros detalles sobre el chequeo (options.rest u options.mutate por ejemplo)
    
    Example: 
    if (args.type == "skill" && args.item.name == "Atletismo") args.prefillModifiers.modifier += 10`,

    "prePrepareData" : 
    `Este efecto se aplica antes de calcular cualquier dato del actor.
    args:

    actor : actor propietario del efecto
    `,

    "prePrepareItems" : 
    `Este efecto se aplica antes de que los objetos se ordenen y calculen

    actor : actor propietario del efecto
    `,

    "prepareData" : 
    `Este efecto se aplica tras calcular y procesar los datos del actor.

    args:

    actor : actor propietario del efecto
    `,

    "preWoundCalc" : 
    `Este efecto se aplica justo antes del c??lculo de heridas, ideal para cambiar atributos o a??adir multiplicadores

    actor : actor propietario del efecto
    sb : Bono por Fuerza
    tb : Bono por Resistencia
    wpb : Bono por Voluntad
    multiplier : {
        sb : Multiplicador de BF
        tb : Multiplicador de BR
        wpb : Modificador de BVol
    }

    e.g. para Hardy: "args.multiplier.tb += 1"
    `,

    "woundCalc" : 
    `Este efecto ocurre tras el c??lculo de heridas, ideal para multiplicar el resultado.

    args:

    actor : actor propietario del efecto
    wounds : heridas calculadas

    e.g. for Swarm: "wounds *= 5"
    `,

    "preApplyDamage" : 
    `Este efecto ocurre antes de aplicar da??o en un chequeo enfrentado
    args:

    actor : actor que recibe da??o
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de da??o seleccionado (ignora TB, AP, etc.)
    `,
    "applyDamage" : 
    `Este efecto ocurre despu??s calcular el da??o en un chequeo enfrentado, pero antes de actualizar los datos del actor.

    args:

    actor : actor que recibe da??o
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de da??o seleccionado (ignora TB, AP, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualizaci??n de da??o
    messageElements : despliegue de secuencias usadas para mostrar c??mo se calcul?? la mitigaci??n de da??o
    `,

    "preTakeDamage" : 
    `Este efecto ocurre antes de recibir da??o en un chequeo enfrentado

    args:

    actor : actor que recibe da??o
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de da??o seleccionado (ignora TB, AP, etc.)
    `,
    
    "takeDamage" : 
    `Este efecto ocurre tras calcular el da??o en un chequeo enfrentado, pero antes de actualizar los datos del actor.

    args:

    actor : actor que recibe da??o
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de da??o seleccionado (ignora TB, AP, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualizaci??n de da??o
    messageElements : despliegue de secuencias usadas para mostrar c??mo se calcul?? la mitigaci??n de da??o
    `,

    "preApplyCondition" :  
    `Este efecto ocurre antes de aplicar los efectos de una condici??n.

    args:

    effect : condici??n aplicada
    data : {
        msg : Mensaje de chat sobre la aplicaci??n de la condici??n
        <otros datos, posiblemente espec??ficos de la condici??n>
    }
    `,

    "applyCondition" :  
    `Este efecto ocurre tras aplicar los efectos de una condici??n.

    args:

    effect : condici??n aplicada
    data : {
        msg : Mensaje de chat sobre la aplicaci??n de la condici??n
        <otros datos, posiblemente espec??ficos de la condici??n>
    }
    `,
    "prePrepareItem" : 
    `Este efecto se aplica antes de procesar un objeto con datos del actor.

    args:

    item : objeto a procesar
    `,
    "prepareItem" : 
`Este efecto se aplica tras procesar un objeto con datos del actor.

    args:

    item : objeto procesado
    `,
    "preRollTest": 
    `Este efecto se aplica antes de calcular un chequeo.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,
    "preRollWeaponTest" :  
    `Este efecto se aplica antes de calcular un chequeo de arma.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "preRollCastTest" :  
    `Este efecto se aplica antes de calcular un chequeo de lanzamiento.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "preChannellingTest" :  
    `Este efecto se aplica antes de calcular un chequeo de canalizaci??n.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "preRollPrayerTest" :  
    `Este efecto se aplica antes de calcular un chequeo de plegaria.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "preRollTraitTest" :  
    `Este efecto se aplica antes de calcular un chequeo de rasgo.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "rollTest" : 
    `Este efecto se aplica tras calcular un chequeo.

    args:

    test: objeto que contiene informaci??n del chequeo y resultado
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,
    "rollIncomeTest" : 
    `Este efecto se aplica tras calcular un chequeo de salario.

    args:

    test: objeto que contiene informaci??n del chequeo y resultado
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "rollWeaponTest" : 
    `Este efecto se aplica tras calcular un chequeo de arma.

    args:

    test: objeto que contiene informaci??n del chequeo y resultado
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "rollCastTest" : 
    `Este efecto se aplica tras calcular un chequeo de lanzamiento.

    args:

    test: objeto que contiene informaci??n del chequeo y resultado
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "rollChannellingTest" : 
    `Este efecto se aplica tras calcular un chequeo de canalizaci??n.

    args:

    test: objeto que contiene informaci??n del chequeo y resultado
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "rollPrayerTest" : 
    `Este efecto se aplica tras calcular un chequeo de plegaria.

    args:

    test: objeto que contiene informaci??n del chequeo y resultado
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "rollTraitTest" : 
    `Este efecto se aplica tras calcular un chequeo de rasgo.

    args:

    test: objeto que contiene informaci??n del chequeo y resultado
    cardOptions: Datos para la vista, t??tulo, plantilla, etc. de la tarjeta
    `,

    "preOpposedAttacker" : 
    `Este efecto se aplica antes de comenzar el c??lculo del resultado de un chequeo enfrentado, como atacante.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del c??lculo
    `,
    "preOpposedDefender" : 
    `Este efecto se aplica antes de comenzar el c??lculo del resultado de un chequeo enfrentado, como defensor.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del c??lculo
    `,

    "opposedAttacker" : 
    `Este efecto se aplica tras comenzar el c??lculo del resultado de un chequeo enfrentado, como atacante.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del c??lculo
    `,

    "opposedDefender" : 
    `Este efecto se aplica tras comenzar el c??lculo del resultado de un chequeo enfrentado, como defensor.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del c??lculo
    `,

    "calculateOpposedDamage" : 
    `Este efecto se aplica durante el c??lculo del da??o de un chequeo enfrentado. Este efecto se ejecuta en el actor atacante

    args:

    damage : da??o inicial antes de multiplicadores
    damageMultiplier : multiplicadores calculado en base a la diferencia de tama??o
    sizeDiff : diferencia num??rica de tama??o, que ser?? usada para a??adir da??ina/impactante
    opposedTest : opposedTest object
    `,

    "getInitiativeFormula" : 
    `Este efecto se ejecuta al determinar la iniciativa del actor

    args:

    initiative: Valor calculado de iniciativa
    `,

    "targetPrefillDialog" : 
    `Este efecto se aplica a otro actor cuando hacen objetivo a este actor, y deber??a cambiar los valores prellenados en la secci??n de bonos
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: el objeto del tipo mencionado usado
    options: otros detalles sobre el chequeo (options.rest u options.mutate por ejemplo)
    
    Example: 
    if (args.type == "skill" && args.item.name == "Athletics") args.prefillModifiers.modifier += 10`,

    "endTurn" : 
    `Este efecto se ejecuta al final del turno del actor

    args:

    combat: combate actual
    `,

    "endRound" :  
    `Este efecto se ejecuta al final del asalto

    args:

    combat: combate actual
    `,
    "endCombat" :  
    `Este efecto se ejecuta al terminar el combate

    args:

    combat: combate actual
    `,

    "this" : 
    `
    
    Todos los efectos tienen acceso a: 
        this.actor : actor ejecutando el efecto
        this.effect : efecto ejecutado
        this.item : objeto que posee el efecto, si el efecto proviene de un objeto`

}

game.wfrp4e.config.speciesSkills = {
        "human": [
                    "Criar Animales",
                    "Carisma",
                    "Frialdad",
                    "Tasar",
                    "Cotilleo",
                    "Regatear",
                    "Hablar idioma (Bretoniano)",
                    "Hablar idioma (Tierras Desoladas)",
                    "Mando",
                    "Sabidur??a acad??mica (Reikland)",
                    "Cuerpo a cuerpo (B??sica)",
                    "A distancia (Arco)"
        ],
        "dwarf": [
            "Consumir Alcohol",
            "Frialdad",
            "Aguante",
            "Animar (Relatar)",
            "Tasar",
            "Intimidar",
            "Hablar idioma (Khazalid)",
            "Sabidur??a acad??mica (Enanos)",
            "Sabidur??a acad??mica (Geolog??a)",
            "Sabidur??a acad??mica (Metalurgia)",
            "Cuerpo a cuerpo (B??sica)",
            "Oficio (Cualquiera)"
        ],
        "halfling": [
            "Carisma",
            "Consumir Alcohol",
            "Esquivar",
            "Juego",
            "Regatear",
            "Intuici??n",
            "Hablar idioma (Asambleario)",
            "Sabidur??a acad??mica (Reikland)",
            "Percepci??n",
            "Prestidigitaci??n",
            "Movimiento silencioso (Cualquiera)",
            "Oficio (Cocinero)"
        ],
        "helf": [
            "Frialdad",
            "Animar (Cantar)",
            "Tasar",
            "Hablar idioma (Eltharin)",
            "Mando",
            "Cuerpo a cuerpo (B??sica)",
            "Orientaci??n",
            "Percepci??n",
            "Tocar (Cualquiera)",
            "A distancia (Arco)",
            "Navegar",
            "Nadar"
        ],
        "welf": [
            "Atletismo",
            "Escalar",
            "Aguante",
            "Animar (Cantar)",
            "Intimidar",
            "Hablar idioma (Eltharin)",
            "Cuerpo a cuerpo (B??sica)",
            "Supervivencia",
            "Percepci??n",
            "A distancia (Arco)",
            "Movimiento silencioso (Rural)",
            "Seguir rastros"
        ],
    }

game.wfrp4e.config.speciesTalents = {
        "human": [
            "Condenado",
            "Espabilado, Cort??s",
            3
        ],
        "dwarf": [
            "Resistencia a la magia",
            "Visi??n nocturna",
            "Leer y escribir, Incansable",
            "Resuelto, Decidido",
            "Fornido",
            0
        ],
        "halfling": [
            "Sentidos desarrollados (Gusto)",
            "Visi??n nocturna",
            "Resistencia (Caos)",
            "Peque??o",
            2
        ],
        "helf": [
            "Sentidos desarrollados (Vista)",
            "Sangre fr??a, Espabilado",
            "Visi??n nocturna",
            "Clarividencia, Sexto sentido",
            "Leer y escribir",
            0
        ],
        "welf": [
            "Sentidos desarrollados (Vista)",
            "Recio, Clarividencia",
            "Visi??n nocturna",
            "Leer y escribir, Muy resistente",
            "Errante",
            0
        ]
    }

game.wfrp4e.config.subspecies = {
        human: {
            reiklander: {
                name: "Reikland??s",
                skills: [
                    "Criar Animales",
                    "Carisma",
                    "Frialdad",
                    "Tasar",
                    "Cotilleo",
                    "Regatear",
                    "Hablar idioma (Bretoniano)",
                    "Hablar idioma (Tierras Desoladas)",
                    "Mando",
                    "Sabidur??a acad??mica (Reikland)",
                    "Cuerpo a cuerpo (B??sica)",
                    "A distancia (Arco)"
                ],
                talents: [
                    "Condenado",
		    "Espabilado, Cort??s",
                    3
                ]
            }
        }
    }

game.wfrp4e.config.loreEffects = {
        "beasts": {
            label: "Saber de las Bestias",
            icon: "modules/wfrp4e-core/icons/spells/beasts.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "lore": true,
                    "script": `
                    let value = 1
                    let name = this.actor.data.token.name
                    
                    if (game.user.isGM) {
                        game.user.targets.forEach(t => {
                            t.actor.applyFear(value, name)
                        })
                        game.user.updateTokenTargets([]);
                    }
                    else {
                        game.wfrp4e.utility.postFear(value, name)
                    }
                `
                }
            }
        },
        "death": {
            label: "Saber de la Muerte",
            icon: "modules/wfrp4e-core/icons/spells/death.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("fatigued")
                    }`
                }
            }
        },
        "fire": {
            label: "Saber del Fuego",
            icon: "modules/wfrp4e-core/icons/spells/fire.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("ablaze")
                    }`
                }
            }
        },
        "heavens": {
            label: "Saber de los Cielos",
            icon: "modules/wfrp4e-core/icons/spells/heavens.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                
                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }
                
                if (applyAP) {
                
                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;
                
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                    `
                }
            }
        },
        "metal": {
            label: "Saber del Metal",
            icon: "modules/wfrp4e-core/icons/spells/metal.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)

                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }
                
                
                if (metalValue)
                    args.messageElements.push("-" + metalValue + " Armadura Met??lica")
                args.totalWoundLoss += metalValue
                
                if (applyAP) {
                
                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;
                
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                `
                }
            }
        },
        "life": {
            label: "Saber de la Vida",
            icon: "modules/wfrp4e-core/icons/spells/life.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    fromUuid(this.effect.origin).then(caster => {
                        if (this.actor.owner)
                        {
                            if (!this.actor.has(game.i18n.localize("NAME.Daemonic")) && !this.actor.has(game.i18n.localize("NAME.Undead")))
                            {
                                let bleeding = this.actor.hasCondition("bleeding")
                                let fatigued = this.actor.hasCondition("fatigued")
                                if (bleeding) this.actor.removeCondition("bleeding", bleeding.flags.wfrp4e.value)
                                if (fatigued) this.actor.removeCondition("fatigued", fatigued.flags.wfrp4e.value)
                            }
                            else if (this.actor.has(game.i18n.localize("NAME.Undead")))
                                this.actor.applyBasicDamage(caster.data.data.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                        }
                    })`
                }
            }
        },
        "light": {
            label: "Saber de la Luz",
            icon: "modules/wfrp4e-core/icons/spells/light.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                fromUuid(this.effect.origin).then(caster => {
                    if (this.actor.owner)
                    {
                        let bleeding = this.actor.addCondition("blinded")
                        if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
                            this.actor.applyBasicDamage(caster.data.data.characteristics.int.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                    }
                })`
                }
            }
        },
        "shadow": {
            label: "Saber de las Sombras",
            icon: "modules/wfrp4e-core/icons/spells/shadow.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                
                if (applyAP) {
                   let AP = args.AP
                
                   args.totalWoundLoss += AP.used
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = "0/" + AP.value + " " + game.i18n.localize("AP")
                }`
                }
            }
        },
        "hedgecraft": {
            label: "Saber de la Adivinaci??n",
            icon: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "lore": true,
                    "script": ``
                }
            }
        },
        "witchcraft": {
            label: "Saber de la Brujer??a",
            icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("bleeding")
                    }`
                }
            }
        }
    }

});