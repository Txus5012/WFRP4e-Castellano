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
    "Ciudad": "systems/wfrp4e/icons/buildings/food.png",
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
    "Cementerio": "systems/wfrp4e/icons/buildings/cemetery.png",
    "Cerveza Enana": "systems/wfrp4e/icons/buildings/dwarf_beer.png",
    "Corte": "systems/wfrp4e/icons/buildings/court.png",
    "Cueva 1": "systems/wfrp4e/icons/buildings/cave1.png",
    "Cueva 2": "systems/wfrp4e/icons/buildings/cave2.png",
    "Cueva 3": "systems/wfrp4e/icons/buildings/cave3.png",
    "Culto Bretoniano": "systems/wfrp4e/icons/buildings/bretonnia_worship.png",
    "Culto del Caos": "systems/wfrp4e/icons/buildings/chaos_worship.png",
    "Dólmenes": "systems/wfrp4e/icons/buildings/standing_stones.png",
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
    "Montaña 1": "systems/wfrp4e/icons/buildings/mountains1.png",
    "Montaña 2": "systems/wfrp4e/icons/buildings/mountains2.png",
    "Muro de Castillo": "systems/wfrp4e/icons/buildings/castle_wall.png",
    "Orcos": "systems/wfrp4e/icons/buildings/orcs.png",
    "Portal del Caos": "systems/wfrp4e/icons/buildings/chaos_portal.png",
    "Posada 1": "systems/wfrp4e/icons/buildings/inn1.png",
    "Posada 2": "systems/wfrp4e/icons/buildings/inn2.png",
    "Pantano": "systems/wfrp4e/icons/buildings/swamp.png",
    "Pergamino": "systems/wfrp4e/icons/buildings/scroll.png",
    "Puerto": "systems/wfrp4e/icons/buildings/port.png",
    "Rebaño de Hombres Bestia 1": "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
    "Rebaño de Hombres Bestia 2": "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
    "Ruinas": "systems/wfrp4e/icons/buildings/ruins.png",
    "Serrería": "systems/wfrp4e/icons/buildings/lumber.png",
    "Sigmar": "systems/wfrp4e/icons/buildings/sigmar_worship.png",
    "Templo": "systems/wfrp4e/icons/buildings/temple.png",
    "Textil": "systems/wfrp4e/icons/buildings/textile.png",
    "Torre 1": "systems/wfrp4e/icons/buildings/tower1.png",
    "Torre 2": "systems/wfrp4e/icons/buildings/tower2.png",
    "Torre de Mago": "systems/wfrp4e/icons/buildings/wizard_tower.png",
    "Ulric": "systems/wfrp4e/icons/buildings/ulric_worship.png"
}

game.wfrp4e.config.systemItems = {
    reload : {
        type: "extendedTest",
        name: "",
        data: {
            SL: {
            },
            test: {
                value: ""
            },
            completion: {
                value: "remove"
            }
        },
        flags: {
            wfrp4e: {
                reloading: ""
            }
        }
    },
    improv : {
          name: "Arma Improvisada",
          type: "weapon",
          effects : [],
          data: {
            damage: { value: "SB + 1" },
            reach: { value: "personal" },
            weaponGroup: { value: "basic" },
            twohanded: { value: false },
            qualities: { value: "" },
            flaws: { value: [{name : "undamaging"}] },
            special: { value: "" },
            range: { value: "" },
            ammunitionGroup: { value: "" },
            offhand: { value: false },
          }
    },
    stomp : {
        name: "Pisotear",
        type: "trait",
          effects : [],
          data: {
            specification: { value: "4" },
            rollable: { value: true, rollCharacteristic: "ws", bonusCharacteristic: "s", defaultDifficulty: "challenging", damage : true },
        }
    },
    unarmed : {
          name: "Desarmado",
          type: "weapon",
          effects : [],
          data: {
            damage: { value: "SB + 0" },
            reach: { value: "personal" },
            weaponGroup: { value: "brawling" },
            twohanded: { value: false },
            qualities: { value: "" },
            flaws: { value: [{name : "undamaging"}] },
            special: { value: "" },
            range: { value: "" },
            ammunitionGroup: { value: "" },
            offhand: { value: false },
          }
      },

    fear : {
        name : "Miedo",
        type : "extendedTest",
        data : {
            completion:{value: 'remove'},
            description:{type: 'String', label: 'Description', value: ''},
            failingDecreases:{value: true},
            gmdescription:{type: 'String', label: 'Description', value: ''},
            hide: { test: false, progress: false },
            negativePossible: { value: false },
            SL: { current: 0, target: 1 },
            test: { value: 'Frialdad' }
        },
        effects:
            [{
                label: "Miedo",
                icon: "systems/wfrp4e/icons/conditions/fear.png",
                transfer: true,
                flags: {
                    core : {
                        statusId : "fear"
                    },
                    wfrp4e: {
                        "effectTrigger": "dialogChoice",
                        "effectData": {
                            "description": "Chequeos para afectar a",
                            "slBonus": "-1"
                        },
                        "script": `
                            if (this.flags.wfrp4e.fearName)
                                this.flags.wfrp4e.effectData.description += " " + this.flags.wfrp4e.fearName
                            else
                                this.flags.wfrp4e.effectData.description += " la fuente del miedo"
                        `}
                }
            }
            ]

    },

    terror: {

        label: "Terror",
        icon: "systems/wfrp4e/icons/conditions/terror.png",
        transfer: true,
        flags: {
            wfrp4e: {
                "effectTrigger": "oneTime",
                "effectApplication": "actor",
                "terrorValue": 1,
                "script": `
                    args.actor.setupSkill("Frialdad").then(setupData =>{
                    args.actor.basicTest(setupData).then(test => {
                        let terror = this.effect.flags.wfrp4e.terrorValue;   
                        args.actor.applyFear(terror, name)
                        if (test.result.outcome == "failure")
                        {            
                            if (test.result.SL < 0)
                                terror += Math.abs(test.result.SL)
                
                            args.actor.addCondition("broken", terror)
                        }
                        })
                    })`
            }
        }
    }
}


game.wfrp4e.config.systemEffects = {
    "enc1" : {
        label: "Sobrecarga 1",
        icon: "systems/wfrp4e/icons/effects/enc1.png",
        flags: {
            wfrp4e: {
                "effectTrigger": "prePrepareData",
                "effectApplication": "actor",
                "script": `
                    args.actor.characteristics.ag.modifier -= 10;

                    if (args.actor.details.move.value > 3)
                    {
                        args.actor.details.move.value -= 1;
                        if (args.actor.details.move.value < 3)
                            args.actor.details.move.value = 3
                    }
                    `
            }
        }
    },
    "enc2" : {
        label: "Sobrecarga 2",
        icon: "systems/wfrp4e/icons/effects/enc2.png",
        flags: {
            wfrp4e: {
                "effectTrigger": "prePrepareData",
                "effectApplication": "actor",
                "script": `
                    args.actor.characteristics.ag.modifier -= 20;
                    if (args.actor.details.move.value > 2)
                    {
                        args.actor.details.move.value -= 2;
                        if (args.actor.details.move.value < 2)
                            args.actor.details.move.value = 2
                    }
                    `
            }
        }
    },
    "enc3" : {
        label: "Sobrecarga 3",
        icon: "systems/wfrp4e/icons/effects/enc3.png",
        flags: {
            wfrp4e: {
                "effectTrigger": "prePrepareData",
                "effectApplication": "actor",
                "script": `
                    args.actor.details.move.value = 0;`
            }
        }
    },
    "cold1" : {
        label: "Exposición al Frío 1",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "cold2" : {
        label: "Exposición al Frío 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "cold3" : {
        label: "Exposición al Frío 3",
        icon: "",
        flags: {
            wfrp4e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                    let tb = this.actor.characteristics.t.bonus
                    let damage = new Roll("1d10").roll().total
                    damage -= tb
                    if (damage <= 0) damage = 1
                    if (this.actor.status.wounds.value <= damage)
                    {
                        this.actor.addCondition("unconscious")
                    }
                    this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                `
            }
        }
    },
    "heat1" : {
        label: "Exposición al Calor 1",
        icon: "",
        changes : [
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "heat2" : {
        label: "Exposición al Calor 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "heat3" : {
        label: "Exposición al Calor 3",
        icon: "",
        flags: {
            wfrp4e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                    let tb = this.actor.characteristics.t.bonus
                    let damage = new Roll("1d10").roll().total
                    damage -= tb
                    if (damage <= 0) damage = 1
                    this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                `
            }
        }
    },
    "thirst1" : {
        label: "Sed 1",
        icon: "",
        changes : [
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "thirst2" : {
        label: "Sed 2+",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                let tb = this.actor.characteristics.t.bonus
                let damage = new Roll("1d10").roll().total
                damage -= tb
                if (damage <= 0) damage = 1
                this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
            `
            }
        }
    },
    "starvation1" : {
        label: "Hambre 1",
        icon: "",
        changes : [
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "starvation2" : {
        label: "Hambre 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp4e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                let tb = this.actor.characteristics.t.bonus
                let damage = new Roll("1d10").roll().total
                damage -= tb
                if (damage <= 0) damage = 1
                this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
            `
            }
        }
    },
    "infighting": {
        label: "Combate Cercano",
        icon: "modules/wfrp4e-core/icons/talents/in-fighter.png",
        flags: {
            wfrp4e: {
                "effectTrigger": "prePrepareItem",
                "effectApplication": "actor",
                "script": `
                        if (args.item.type == "weapon" && args.item.isEquipped)
                        {
                            let weaponLength = args.item.reachNum
                            if (weaponLength > 3)
                            {
                                let improv = duplicate(game.wfrp4e.config.systemItems.improv)
                                improv.data.twohanded.value = args.item.twohanded.value
                                improv.data.offhand.value = args.item.offhand.value
                                args.item.data.update({"data" : improv.data, name : args.item.name + " (Infighting")})
                            }
                        }
                `
            }
        }
    },
    "defensive": {
        label: "A la Defensiva [Nombre de la Habilidad]",
        icon: "",
        flags: {
            wfrp4e: {
                "effectTrigger": "prefillDialog",
                "effectApplication": "actor",
                "script": `
                    let skillName = this.effect.label.substring(this.effect.label.indexOf("[") + 1, this.effect.label.indexOf("]"))
                    if (!this.actor.isOpposing)
                      return
                    if ((args.type == "skill" && args.item.name == skillName) ||
                        (args.type == "weapon" && args.item.skillToUse.name == skillName) ||
                        (args.type == "cast" && skillName == "Language (Magick)") ||
                        (args.type == "prayer" && skillName == "Prayer") || 
                        (args.type == "trait" && args.item.rollable.skill == skillName))
                        args.prefillModifiers.modifier += 20` 
            }
        }
    },
    "dualwielder" : {
        label: "Empuñar Dos Armas",
        icon: "modules/wfrp4e-core/icons/talents/dual-wielder.png",
        flags: {
            wfrp4e: {
                "effectTrigger": "prefillDialog",
                "effectApplication": "actor",
                "script": `
                    if (this.actor.isOpposing)
                        args.prefillModifiers.modifier -= 10` 
            }
        }
    },
    "consumealcohol1" : {
        label: "Consumir Alcohol 1",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
        ]
    },
    "consumealcohol2" : {
        label: "Consumir Alcohol 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -20},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -20},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -20},
            {key : "data.characteristics.int.modifier", mode: 2, value: -20},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -20},
        ]
    },
    "consumealcohol3" : {
        label: "Consumir Alcohol 3",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -30},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -30},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -30},
            {key : "data.characteristics.int.modifier", mode: 2, value: -30},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -30},
        ]
    },
    "stinkingdrunk1" : {
        label: "El Valor de Marienburgo",
        icon: "",
        flags: {
            wfrp4e: {
                "effectTrigger": "prefillDialog",
                "effectApplication": "actor",
                "script": `
                    if (args.type=="skill" && args.item.name=="Frialdad")
                        args.prefillModifiers.modifier += 20` 
            }
        }
    }
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
    
                        if (args.actor.owner)
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
                            ui.notifications.notify("Añadido Fatigado a \" + args.actor.name + \" que no puede ser quitado hasta que haya desaparecido el síntoma Malestar.")
                        }
                    }
                    `
                }
            }
        },
        "nausea": {
            label: "Náuseas",
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
                        if (args.actor.owner)
                        {
                            args.actor.setupSkill("Aguante", {absolute: {difficulty : "average"}}).then(setupData => {
                                args.actor.basicTest(setupData).then(test => 
                                    {
                                        if (test.result.outcome == "failure")
                                            fromUuid("Compendium.wfrp4e-core.diseases.kKccDTGzWzSXCBOb").then(disease => {
                                                args.actor.createEmbeddedDocuments("Item", [disease.toObject])
                                            })
                                    })
                                })
                        }`
                }
            }
        }
    }

game.wfrp4e.config.statusEffects = [
    {
        icon: "systems/wfrp4e/icons/conditions/bleeding.png",
        id: "bleeding",
        label: "WFRP4E.ConditionName.Bleeding",
        flags: {
            wfrp4e: {
                "trigger": "endRound",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/poisoned.png",
        id: "poisoned",
        label: "WFRP4E.ConditionName.Poisoned",
        flags: {
            wfrp4e: {
                "trigger": "endRound",
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value": 1
            }
        }
        
    },
    {
        icon: "systems/wfrp4e/icons/conditions/ablaze.png",
        id: "ablaze",
        label: "WFRP4E.ConditionName.Ablaze",
        flags: {
            wfrp4e: {
                "trigger": "endRound",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/deafened.png",
        id: "deafened",
        label: "WFRP4E.ConditionName.Deafened",
        flags: {
            wfrp4e: {
                "trigger": "endRound",
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Chequeos relacionados con el oído",
                    "modifier" : "-10 * this.flags.wfrp4e.value"
                },
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/stunned.png",
        id: "stunned",
        label: "WFRP4E.ConditionName.Stunned",
        flags: {
            wfrp4e: {
                "trigger": "endRound",
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/entangled.png",
        id: "entangled",
        label: "WFRP4E.ConditionName.Entangled",
        flags: {
            wfrp4e: {
                "trigger": "endRound",
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Chequeos relacionados con movimiento de cualquier tipo",
                    "modifier" : "-10 * this.flags.wfrp4e.value"
                },
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/fatigued.png",
        id: "fatigued",
        label: "WFRP4E.ConditionName.Fatigued",
        flags: {
            wfrp4e: {
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value" : 1
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/blinded.png",
        id: "blinded",
        label: "WFRP4E.ConditionName.Blinded",
        flags: {
            wfrp4e: {
                "trigger": "endRound",
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Chequeos relacionados con la vista",
                    "modifier" : "-10 * this.flags.wfrp4e.value"
                },
                "value": 1,
                "secondaryEffect" :{
                    "effectTrigger": "targetPrefillDialog",
                    "script": "if (args.type == 'weapon' && args.item.attackType=='melee') args.prefillModifiers.modifier += 10 * this.effect.conditionValue",
                }
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/broken.png",
        id: "broken",
        label: "WFRP4E.ConditionName.Broken",
        flags: {
            wfrp4e: {
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/prone.png",
        id: "prone",
        label: "WFRP4E.ConditionName.Prone",
        flags: {
            wfrp4e: {
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Chequeos relacionados con movimiento de cualquier tipo",
                    "modifier" : "-20"
                },
                "value": null,
                "secondaryEffect" :{
                    "effectTrigger": "targetPrefillDialog",
                    "script": "if (args.type == 'weapon' && args.item.attackType=='melee') args.prefillModifiers.modifier += 20",
                }
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/fear.png",
        id: "fear",
        label: "WFRP4E.ConditionName.Fear",
        flags: {
            wfrp4e: {
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Chequeos para afectar a",
                    "slBonus" : "-1"
                },
                "script" : `
                    if (this.flags.wfrp4e.fearName)
                        this.flags.wfrp4e.effectData.description += " " + this.flags.wfrp4e.fearName
                    else
                        this.flags.wfrp4e.effectData.description += " la fuente del miedo"
                `,
                "value": null
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/surprised.png",
        id: "surprised",
        label: "WFRP4E.ConditionName.Surprised",
        flags: {
            wfrp4e: {
                "value": null,
                "secondaryEffect" :{
                    "effectTrigger": "targetPrefillDialog",
                    "script": "if (args.type == 'weapon' && args.item.attackType=='melee') args.prefillModifiers.modifier += 20",
                }
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/unconscious.png",
        id: "unconscious",
        label: "WFRP4E.ConditionName.Unconscious",
        flags: {
            wfrp4e: {
                "value": null
            }
        }
    },
    {
        icon: "systems/wfrp4e/icons/conditions/grappling.png",
        id: "grappling",
        label: "WFRP4E.ConditionName.Grappling",
        flags: {
            wfrp4e: {
                "value": null
            }
        }
        
    },
    {
        icon: "systems/wfrp4e/icons/defeated.png",
        id: "dead",
        label: "WFRP4E.ConditionName.Dead",
        flags: {
            wfrp4e: {
                "value": null
            }
        }
        
    }
]

game.wfrp4e.config.effectApplication = {
    "actor" : "Actor",
    "equipped" : "Al equipar el Objeto",
    "apply" : "Aplicar con objetivo",
    "damage" : "Aplicar cuando el Objeto aplique daño",
}

game.wfrp4e.config.applyScope = {
    "actor" : "Actor",
    "item" : "Objeto"
}

game.wfrp4e.config.effectTriggers = {
    "invoke" : "Invocado Manualmente",
    "oneTime" : "Inmediato",
    "dialogChoice" : "Elección de Diálogo",
    "prefillDialog" : "Prellenar Diálogo",
    "prePrepareData" : "Pre-Preparar Datos",
    "prePrepareItems" : "Pre-Preparar Objetos de Actor",
    "prepareData" : "Preparar Datos",
    "preWoundCalc" : "Pre-Cálculo de Heridas",
    "woundCalc" : "Cálculo de Heridas",
    "preApplyDamage" : "Pre-Aplicar Daño",
    "applyDamage" : "Aplicar Daño",
    "preTakeDamage" : "Pre-Recibir Daño",
    "takeDamage" : "Recibir Daño",
    "preApplyCondition" : "Pre-Aplicar Condición",
    "applyCondition" : "Aplicar Condición",
    "prePrepareItem" : "Pre-Preparar Objeto",
    "prepareItem" : "Preparar Objeto",
    "preRollTest" : "Pre-Tirar Chequeo",
    "preRollWeaponTest" : "Pre-Tirar Chequeo de Arma",
    "preRollCastTest" : "Pre-Tirar Chequeo de Lanzamiento",
    "preChannellingTest" : "Pre-Tirar Chequeo de Canalización",
    "preRollPrayerTest" : "Pre-Tirar Chequeo de Plegaria",
    "preRollTraitTest" : "Pre-Tirar Chequeo de Rasgo",
    "rollTest" : "Tirar Chequeo",
    "rollIncomeTest" : "Tirar Chequeo de Salario",
    "rollWeaponTest" : "Tirar Chequeo de Arma",
    "rollCastTest" : "Tirar Chequeo de Lanzamiento",
    "rollChannellingTest" : "Tirar Chequeo de Canalización",
    "rollPrayerTest" : "Tirar Chequeo de Plegaria",
    "rollTraitTest" : "Tirar Chequeo de Rasgo",
    "preOpposedAttacker" : "Pre-Enfrentado Atacante",
    "preOpposedDefender" : "Pre-Enfrentado Defensor",
    "opposedAttacker" : "Enfrentado Atacante",
    "opposedDefender" : "Enfrentado Defensor",
    "calculateOpposedDamage" : "Calcular Daño Enfrentado",
    "targetPrefillDialog" : "Prellenar Diálogo del que Hace Objetivo",
    "getInitiativeFormula" : "Conseguir Iniciativa",
    "endTurn" : "Fin del Turno",
    "endRound" : "Fin del Asalto",
    "endCombat" : "Fin del Combate"
}

game.wfrp4e.config.effectPlaceholder = {

    "invoke" : 
    `Este efecto sólo se aplica al pulsar el botón de Invocar.
    args:

    ninguno`,
    "oneTime" : 
    `Este efecto ocurre una vez, inmediatamente al aplicar.
    args:

    actor : actor propietario del efecto
    `,
    "prefillDialog" : 
    `Este efecto se aplica antes de reproducir el diálogo de tirada, y debería cambiar los valores prellenados en la sección de bonos
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
    `Este efecto se aplica justo antes del cálculo de heridas, ideal para cambiar atributos o añadir multiplicadores

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
    `Este efecto ocurre tras el cálculo de heridas, ideal para multiplicar el resultado.

    args:

    actor : actor propietario del efecto
    wounds : heridas calculadas

    e.g. for Swarm: "wounds *= 5"
    `,

    "preApplyDamage" : 
    `Este efecto ocurre antes de aplicar daño en un chequeo enfrentado
    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora TB, AP, etc.)
    `,
    "applyDamage" : 
    `Este efecto ocurre después calcular el daño en un chequeo enfrentado, pero antes de actualizar los datos del actor.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora TB, AP, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualización de daño
    messageElements : despliegue de secuanecias usadas para mostrar cómo se calculó la mitigación de daño
    `,

    "preTakeDamage" : 
    `Este efecto ocurre antes de recibir daño en un chequeo enfrentado

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora TB, AP, etc.)
    `,
    
    "takeDamage" : 
    `Este efecto ocurre tras calcular el daño en un chequeo enfrentado, pero antes de actualizar los datos del actor.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora TB, AP, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualización de daño
    messageElements : despliegue de secuanecias usadas para mostrar cómo se calculó la mitigación de daño
    `,

    "preApplyCondition" :  
    `Este efecto ocurre antes de aplicar los efectos de una condición.

    args:

    effect : condición aplicada
    data : {
        msg : Mensaje de chat sobre la aplicación de la condición
        <otros datos, posiblemente específicos de la condición>
    }
    `,

    "applyCondition" :  
    `Este efecto ocurre tras aplicar los efectos de una condición.

    args:

    effect : condición aplicada
    data : {
        msg : Mensaje de chat sobre la aplicación de la condición
        <otros datos, posiblemente específicos de la condición>
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
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,
    "preRollWeaponTest" :  
    `Este efecto se aplica antes de calcular un chequeo de arma.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollCastTest" :  
    `Este efecto se aplica antes de calcular un chequeo de lanzamiento.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preChannellingTest" :  
    `Este efecto se aplica antes de calcular un chequeo de canalización.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollPrayerTest" :  
    `Este efecto se aplica antes de calcular un chequeo de plegaria.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollTraitTest" :  
    `Este efecto se aplica antes de calcular un chequeo de rasgo.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollTest" : 
    `Este efecto se aplica tras calcular un chequeo.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,
    "rollIncomeTest" : 
    `Este efecto se aplica tras calcular un chequeo de salario.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollWeaponTest" : 
    `Este efecto se aplica tras calcular un chequeo de arma.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollCastTest" : 
    `Este efecto se aplica tras calcular un chequeo de lanzamiento.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollChannellingTest" : 
    `Este efecto se aplica tras calcular un chequeo de canalización.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollPrayerTest" : 
    `Este efecto se aplica tras calcular un chequeo de plegaria.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollTraitTest" : 
    `Este efecto se aplica tras calcular un chequeo de rasgo.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preOpposedAttacker" : 
    `Este efecto se aplica antes de comenzar el cálculo del resultado de un chequeo enfrentado, como atacante.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,
    "preOpposedDefender" : 
    `Este efecto se aplica antes de comenzar el cálculo del resultado de un chequeo enfrentado, como defensor.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "opposedAttacker" : 
    `Este efecto se aplica tras comenzar el cálculo del resultado de un chequeo enfrentado, como atacante.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "opposedDefender" : 
    `Este efecto se aplica tras comenzar el cálculo del resultado de un chequeo enfrentado, como defensor.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "calculateOpposedDamage" : 
    `Este efecto se aplica durante el cálculo del daño de un chequeo enfrentado. Este efecto se ejecuta en el actor atacante

    args:

    damage : daño inicial antes de multiplicadores
    damageMultiplier : multiplicadores calculado en base a la diferencia de tamaño
    sizeDiff : diferencia numérica de tamaño, que será usada para añadir dañina/impactante
    opposedTest : opposedTest object
    `,

    "getInitiativeFormula" : 
    `Este efecto se ejecuta al determinar la iniciativa del actor

    args:

    initiative: Valor calculado de iniciativa
    `,

    "targetPrefillDialog" : 
    `Este efecto se aplica a otro actor cuando hacen objetivo a este actor, y debería cambiar los valores prellenados en la sección de bonos
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
                    "Sabiduría académica (Reikland)",
                    "Cuerpo a cuerpo (Básica)",
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
            "Sabiduría académica (Enanos)",
            "Sabiduría académica (Geología)",
            "Sabiduría académica (Metalurgia)",
            "Cuerpo a cuerpo (Básica)",
            "Oficio (Cualquiera)"
        ],
        "halfling": [
            "Carisma",
            "Consumir Alcohol",
            "Esquivar",
            "Juego",
            "Regatear",
            "Intuición",
            "Hablar idioma (Asambleario)",
            "Sabiduría académica (Reikland)",
            "Percepción",
            "Prestidigitación",
            "Movimiento silencioso (Cualquiera)",
            "Oficio (Cocinero)"
        ],
        "helf": [
            "Frialdad",
            "Animar (Cantar)",
            "Tasar",
            "Hablar idioma (Eltharin)",
            "Mando",
            "Cuerpo a cuerpo (Básica)",
            "Orientación",
            "Percepción",
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
            "Cuerpo a cuerpo (Básica)",
            "Supervivencia",
            "Percepción",
            "A distancia (Arco)",
            "Movimiento silencioso (Rural)",
            "Seguir rastros"
        ],
    }

game.wfrp4e.config.speciesTalents = {
        "human": [
            "Condenado",
            "Espabilado, Cortés",
            3
        ],
        "dwarf": [
            "Resistencia a la magia",
            "Visión nocturna",
            "Leer y escribir, Incansable",
            "Resuelto, Decidido",
            "Fornido",
            0
        ],
        "halfling": [
            "Sentidos desarrollados (Gusto)",
            "Visión nocturna",
            "Resistencia (Caos)",
            "Pequeño",
            2
        ],
        "helf": [
            "Sentidos desarrollados (Vista)",
            "Sangre fría, Espabilado",
            "Visión nocturna",
            "Clarividencia, Sexto sentido",
            "Leer y escribir",
            0
        ],
        "welf": [
            "Sentidos desarrollados (Vista)",
            "Recio, Clarividencia",
            "Visión nocturna",
            "Leer y escribir, Muy resistente",
            "Errante",
            0
        ]
    }

game.wfrp4e.config.subspecies = {
        human: {
            reiklander: {
                name: "Reiklandés",
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
                    "Sabiduría académica (Reikland)",
                    "Cuerpo a cuerpo (Básica)",
                    "A distancia (Arco)"
                ],
                talents: [
                    "Condenado",
		    "Espabilado, Cortés",
                    3
                ]
            }
        }
    }

game.wfrp4e.tables.scatter = {
      name: "Dispersión",
      die: "1d10",
      rows: [
        {
          name: "Arriba Izquierda",
          range: [1, 1]
        },
        {
          name: "Arriba Medio",
          range: [2, 2]
        },
        {
          name: "Arriba Derecha",
          range: [3, 3]
        },
        {
          name: "Centro Izquierda",
          range: [4, 4]
        },
        {
          name: "Centro Derecha",
          range: [5, 5]
        },
        {
          name: "Abajo Izquierda",
          range: [6, 6]
        },
        {
          name: "Abajo Medio",
          range: [7, 7]
        },
        {
          name: "Abajo Derecha",
          range: [8, 8]
        },
        {
          name: "A tus pies",
          range: [9, 9]
        },
        {
          name: "A los pies del objetivo",
          range: [10, 10]
        },
      ]
    }

game.wfrp4e.tables.winds = {
      name: "Los Vientos Revueltos",
      die: "1d10",
      rows: [
        {
	  name: "-30",
          modifier: "-30",
          range: [1, 1]
        },
        {
	  name: "-10",
          modifier: "-10",
          range: [2, 3]
        },
        {
	  name: "0",
          modifier: "0",
          range: [4, 7]
        },
        {
	  name: "+10",
          modifier: "+10",
          range: [8, 9]
        },
        {
	  name: "+30",
          modifier: "+30",
          range: [10, 10]
        }
      ]
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
                    if (args.actor.owner)
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
                    if (args.actor.owner)
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
                    args.messageElements.push("-" + metalValue + " Armadura Metálica")
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
            label: "Saber de la Adivinación",
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
            label: "Saber de la Brujería",
            icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (args.actor.owner)
                    {
                        args.actor.addCondition("bleeding")
                    }`
                }
            }
        }
    }

});