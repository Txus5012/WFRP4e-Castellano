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

game.wfrp4e.config.loreEffects = {
        "beasts": {
            name: "Saber de las Bestias",
            img: "modules/wfrp4e-core/icons/spells/beasts.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "document",
                        documentType : "Item"
                    },
                    scriptData: [
                        {
                            "label": "Añadir Miedo",
                            "trigger": "rollCastTest",
                            "script": "if (args.test.result.castOutcome == \"success\")\n{\n    args.test.result.other.push(`<strong>${this.effect.name}</strong>: @Fear[1,${this.actor.prototypeToken.name}]`)\n\tif (!this.actor.has(game.i18n.localize(\"NAME.Fear\")))\n\t{\n\t\tlet item = await fromUuid(\"Compendium.wfrp4e-core.items.Item.pTorrE0l3VybAbtn\");\n\t\tlet data = item.toObject();\n\t\tdata.system.specification.value = 1\n\t\tthis.actor.createEmbeddedDocuments(\"Item\", [data])\n\t\tthis.script.scriptNotification(\"Añadido Rasgo Miedo\");\n\t}\n}"
                        }
                    ]
                }
            }
        },
        "death": {
            name: "Saber de la Muerte",
            img: "modules/wfrp4e-core/icons/spells/death.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "target"
                    },
                    scriptData: [
                        {
                            trigger: "immediate",
                            label : "@effect.name",
                            script : `this.actor.addCondition("fatigued")`,
                            options : {
                                immediate : {
                                    deleteEffect : true
                                }
                            }
                        }
                    ]
                }
            }
        },
        "fire": {
            name: "Saber del Fuego",
            img: "modules/wfrp4e-core/icons/spells/fire.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "target"
                    },
                    scriptData: [
                        {
                            trigger: "immediate",
                            label : "@effect.name",
                            script : `this.actor.addCondition("ablaze")`,
                            options : {
                                immediate : {
                                    deleteEffect : true
                                }
                            }
                        }
                    ]
                }
            }
        },
        "heavens": {
            name: "Saber de los Cielos",
            img: "modules/wfrp4e-core/icons/spells/heavens.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "document",
                        documentType : "Item"
                    },
                    scriptData: [
                        {
                            trigger: "computeApplyDamageModifiers",
                            label : "@effect.name",
                            script : `
                            if (args.applyAP && args.modifiers.ap.metal) 
                            {
                                args.modifiers.ap.ignored += args.modifiers.ap.metal
                                args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Ignorar Metal (" + args.modifiers.ap.metal + ")");
                                args.modifiers.ap.metal = 0
                            }
                            `
                        }
                    ]
                },
            }
        },
        "metal": {
            name: "Saber del Metal",
            img: "modules/wfrp4e-core/icons/spells/metal.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "document",
                        documentType : "Item"
                    },
                    scriptData: [
                        {
                            trigger: "computeApplyDamageModifiers",
                            label : "@effect.name",
                            script : `
                            if (args.applyAP && args.modifiers.ap.metal) 
                            {
                                args.modifiers.ap.ignored += args.modifiers.ap.metal
                                args.modifiers.other.push({value : args.modifiers.ap.metal, label : this.effect.name, details : "Añadido PA de Metal al Daño" })
                                args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Ignorar Metal (" + args.modifiers.ap.metal + ")");
                                args.modifiers.ap.metal = 0
                            }
                            `
                        }
                    ]
                }
            }
        },
        "life": {
            name: "Saber de la Vida",
            img: "modules/wfrp4e-core/icons/spells/life.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "target"
                    },
                    scriptData: [
                        {
                            trigger: "immediate",
                            label : "@effect.name",
                            script : `
                            let caster = this.effect.sourceActor
                            if (!this.actor.has(game.i18n.localize("NAME.Daemonic")) && !this.actor.has(game.i18n.localize("NAME.Undead")))
                            {
                                await this.actor.hasCondition("bleeding")?.delete();
                                await this.actor.hasCondition("fatigued")?.delete();
                            }
                            else if (this.actor.has(game.i18n.localize("NAME.Undead")))
                            {
                                this.script.scriptMessage(await this.actor.applyBasicDamage(caster.system.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, suppressMsg : true}));
                            }`,
                            options : {
                                immediate : {
                                    deleteEffect : true
                                }
                            }
                        }
                    ]
                }
            }
        },
        "light": {
            name: "Saber de la Luz",
            img: "modules/wfrp4e-core/icons/spells/light.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "target"
                    },
                    scriptData: [
                        {
                            trigger: "immediate",
                            label : "@effect.name",
                            script : `
                            let caster = this.effect.sourceActor
                            await this.actor.addCondition("blinded")
                            if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
                            {
                                this.script.scriptMessage(await this.actor.applyBasicDamage(caster.system.characteristics.int.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, suppressMsg : true}));
                            }`,
                            options : {
                                immediate : {
                                    deleteEffect : true
                                }
                            }
                        }
                    ]
                }
            }
        },
        "shadow": {
            name: "Saber de las Sombras",
            img: "modules/wfrp4e-core/icons/spells/shadow.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "document",
                        documentType : "Item"
                    },
                    scriptData: [
                        {
                            trigger: "computeApplyDamageModifiers",
                            label : "@effect.name",
                            script : `
                            let nonmagical = args.modifiers.ap.value - args.modifiers.ap.magical
                            if (args.applyAP && nonmagical) 
                            {
                                args.modifiers.ap.ignored += nonmagical
                                args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Ignorar PA no mágicos (" + nonmagical + ")");
                            }
                            `
                        }
                    ]
                }
            }
        },
        "hedgecraft": {
            name: "Saber de la Adivinación",
            img: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
            flags: {
                wfrp4e : {
                    lore: true,
                    applicationData : {
                        type : "other"
                    }
                },
            }
        },
        "witchcraft": {
            name: "Saber de la Brujería",
            img: "modules/wfrp4e-core/icons/spells/witchcraft.png",
            flags: {
                wfrp4e: {
                    lore: true,
                    applicationData : {
                        type : "target"
                    },
                    scriptData: [
                        {
                            trigger: "immediate",
                            label : "@effect.name",
                            script : `this.actor.addCondition("bleeding")`,
                            options : {
                                immediate : {
                                    deleteEffect : true
                                }
                            }
                        }
                    ]
                }
            }
        }
    }

game.wfrp4e.config.symptomEffects = {
        "blight": {
            name: "WFRP4E.Symptom.Blight",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "manual",
                            label : "@effect.name",
                            script : `
                            let difficulty = ""
                            if (this.effect.name.includes("Moderado"))
                                difficulty = "easy"
                            else if (this.effect.name.includes("Severo"))
                                difficulty = "average"
                            else
                                difficulty = "veasy"
        
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : this.actor.name + " muere de Decaimiento"}, fields: {difficulty}, appendTitle : " - Decaimiento"})
                            await test.roll();
                            if (test.failed)
                            {
                                this.actor.addCondition("dead");
                            }
                            `,
                        }
                    ]
                }
            }
        },
        "buboes": {
            name: "WFRP4E.Symptom.Buboes",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                    activateScript : `return ["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        "convulsions": {
            name: "WFRP4E.Symptom.Convulsions",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `
                            let modifier = 0
                            if (this.effect.name.includes("Moderado"))
                                modifier = -20
                            else
                                modifier = -10
                            args.fields.modifier += modifier
                            `,
                            options: {
                                dialog : {
                                    hideScript : `return !["ws", "bs", "s", "ag", "t", "dex"].includes(args.characteristic)`,
                                    activateScript : `return ["ws", "bs", "s", "ag", "t", "dex"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        "coughsandsneezes": {
            name: "WFRP4E.Symptom.CoughsandSneezes",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "fever": {
            name: "WFRP4E.Symptom.Fever",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                    activateScript : `return ["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        "flux": {
            name: "WFRP4E.Symptom.Flux",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "gangrene": {
            name: "WFRP4E.Symptom.Gangrene",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["fel"].includes(args.characteristic)`,
                                    activateScript : `return ["fel"].includes(args.characteristic)`,
                                }
                            }
                        },
                        {
                            trigger: "manual",
                            label : "Herido",
                            script : `
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields: {difficulty : "average"}, appendTitle : " - Herido"})
                            await test.roll();
                            if (test.failed)
                            {
                                fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb").then(disease => {
                                    this.actor.createEmbeddedDocuments("Item", [disease.toObject()])
                                    this.script.scriptNotification("Ganado " + disease.name)
                                })
                            }
                            `,
                        },
                        {
                            trigger: "manual",
                            label : "Decaimiento",
                            script : `
                            let difficulty = ""
                            if (this.effect.name.includes("Moderado"))
                                difficulty = "easy"
                            else if (this.effect.name.includes("Severo"))
                                difficulty = "average"
                            else
                                difficulty = "veasy"
        
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : this.actor.name + " muere de Decaimiento"}, fields: {difficulty}, appendTitle : " - Decaimiento"})
                            await test.roll();
                            if (test.failed)
                            {
                                this.actor.addCondition("dead");
                            }
                            `,
                        }
                    ]
                }
            }
        },
        "lingering": {
            name: "WFRP4E.Symptom.Lingering",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "malaise": {
            name: "WFRP4E.Symptom.Malaise",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "update",
                            label : "@effect.name",
                            script : `
                            let fatigued = this.actor.hasCondition("fatigued")
                            if (!fatigued)
                            {
                                this.actor.addCondition("fatigued")
                                ui.notifications.notify("Fatigado añadido a " + this.actor.name + " que no puede ser eliminado hasta que el síntoma Malestar se haya ido.")
                            }`,
                        }
                    ]
                }
            }
        },
        "nausea": {
            name: "WFRP4E.Symptom.Nausea",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "rollTest",
                            label : "@effect.name",
                            script : `                 
                            if (args.test.failed)
                            {
                                let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"];
                                if (applicableCharacteristics.includes(args.test.characteristicKey))
                                {
                                    this.actor.addCondition("stunned");
                                }
                            }`,
                        }
                    ]
                }
            }
        },
        "pox": {
            name: "WFRP4E.Symptom.Pox",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["fel"].includes(args.characteristic)`,
                                    activateScript : `return ["fel"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        "wounded": {
            name: "WFRP4E.Symptom.Wounded",
            img: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "manual",
                            label : "@effect.name",
                            script : `
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields: {difficulty : "average"}, appendTitle : " - Herido"})
                            await test.roll();
                            if (test.failed)
                            {
                                fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb").then(disease => {
                                    this.actor.createEmbeddedDocuments("Item", [disease.toObject()])
                                    this.script.scriptNotification("Ganado " + disease.name)
                                })
                            }
                            `,
                        }
                    ]
                }
            }
        }
    }

game.wfrp4e.config.PrepareSystemItems = function() {

    this.systemItems = foundry.utils.mergeObject(this.systemItems, {
        reload : {
            type: "extendedTest",
            name: "",
            system: {
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
            name: game.i18n.localize("NAME.Improvised"),
            type: "weapon",
            effects : [],
            system: {
                damage: { value: "SB + 1" },
                reach: { value: "personal" },
                weaponGroup: { value: "basic" },
                twohanded: { value: false },
                qualities: { value: [] },
                flaws: { value: [{name : "undamaging"}] },
                special: { value: "" },
                range: { value: "" },
                ammunitionGroup: { value: "" },
                offhand: { value: false },
            }
        },
        stomp : {
            name: game.i18n.localize("NAME.Stomp"),
            type: "trait",
            effects : [],
            system: {
                specification: { value: 0 },
                rollable: { value: true, rollCharacteristic: "ws", bonusCharacteristic: "s", defaultDifficulty: "challenging", damage : true, SL: true, skill : game.i18n.localize("NAME.MeleeBrawling") },
            }
        },
        unarmed : {
            name: game.i18n.localize("NAME.Unarmed"),
            type: "weapon",
            effects : [],
            system: {
                damage: { value: "SB + 0" },
                reach: { value: "personal" },
                weaponGroup: { value: "brawling" },
                twohanded: { value: false },
                qualities: { value: [] },
                flaws: { value: [{name : "undamaging"}] },
                special: { value: "" },
                range: { value: "" },
                ammunitionGroup: { value: "" },
                offhand: { value: false },
            }
        },

        fear : {
            name : game.i18n.localize("NAME.FearExtendedTest"),
            type : "extendedTest",
            system : {
                completion:{value: 'remove'},
                description:{type: 'String', label: 'Description', value: ''},
                failingDecreases:{value: true},
                gmdescription:{type: 'String', label: 'Description', value: ''},
                hide: { test: false, progress: false },
                negativePossible: { value: false },
                SL: { current: 0, target: 1 },
                test: { value: game.i18n.localize("NAME.Cool") }
            },
            flags : {
                wfrp4e : {
                    fear : true
                }
            },
            effects:
                [{
                    name: game.i18n.localize("NAME.Fear"),
                    img: "systems/wfrp4e/icons/conditions/fear.png",
                    statuses : ["fear"],
                    system: {
                            transferData : {},
                            scriptData : [
                                {
                                    label : "@effect.flags.wfrp4e.dialogTitle",
                                    trigger : "dialog",
                                    script : `args.fields.slBonus -= 1`,
                                    options : {
                                        hideScript : "",
                                        activateScript : `return args.data.targets[0]?.name == this.item.flags.wfrp4e?.fearName`
                                    }
                                },
                                {
                                    label : "@effect.name",
                                    trigger : "immediate",
                                    script : `
                                    let name = this.item?.flags?.wfrp4e?.fearName
                                    this.effect.updateSource({"flags.wfrp4e.dialogTitle" : (name ? game.i18n.format("EFFECT.AffectTheSourceOfFearName", {name}) : game.i18n.format("EFFECT.AffectTheSourceOfFear"))})
                                    if (name)
                                    {
                                        this.item.updateSource({name : this.item.name + " (" + name + ")" })
                                    }
                                    `
                                }
                            ]
                        }
                    }
                ]

        },

        terror: {
            name: game.i18n.localize("NAME.Terror"),
            img: "systems/wfrp4e/icons/conditions/terror.png",
            system: {
                transferData : {},
                scriptData : [
                    {
                        label : "@effect.name",
                        trigger : "immediate",
                        script : `
                        let terror = this.effect.flags.wfrp4e.terrorValue;
                        let skillName = game.i18n.localize("NAME.Cool");
                        let test = await args.actor.setupSkill(skillName, {terror: true, appendTitle : " - Terror", skipTargets: true});
                        await test.roll();
                        await this.actor.applyFear(terror, name)
                        if (test.failed)
                        {
                            if (test.result.SL < 0)
                                terror += Math.abs(test.result.SL)

                            await this.actor.addCondition("broken", terror)
                        }
                        `
                    }
                ]
            },
        }
    });


    this.systemEffects = foundry.utils.mergeObject(this.systemEffects, {
        "fear": {
            name: game.i18n.localize("NAME.Fear"),
            img: "systems/wfrp4e/icons/conditions/fear.png",
            statuses: ["fear"],
            flags: {
                wfrp4e: {
                    transferData: {},
                    scriptData: [
                        {
                            label: "@effect.flags.wfrp4e.dialogTitle",
                            trigger: "dialog",
                            script: `args.fields.slBonus -= 1`,
                            options: {
                                    hideScript: "",
                                    activateScript: `return args.data.targets[0]?.name == this.item.flags.wfrp4e?.fearName`
                            }
                        },
                        {
                            label: "@effect.name",
                            trigger: "immediate",
                            script: `
                            let name = this.item?.flags?.wfrp4e?.fearName
                            this.effect.updateSource({"flags.wfrp4e.dialogTitle" : (name ? game.i18n.format("EFFECT.AffectTheSourceOfFearName", {name}) : game.i18n.format("EFFECT.AffectTheSourceOfFear"))})
                            if (name)
                            {
                                this.item.updateSource({name : this.item.name + " (" + name + ")" })
                            }
                            `
                        }
                    ]
                }
            }
        },
        "enc1": {
            name: game.i18n.localize("EFFECT.Encumbrance") + " 1",
            img: "systems/wfrp4e/icons/effects/enc1.png",
            statuses: ["enc1"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "prePrepareData",
                        script: `
                            args.actor.characteristics.ag.modifier -= 10;

                            if (args.actor.details.move.value > 3)
                            {
                                args.actor.details.move.value -= 1;
                                if (args.actor.details.move.value < 3)
                                    args.actor.details.move.value = 3
                            }
                            `
                    }
                ]
            }
        },
        "enc2": {
            name: game.i18n.localize("EFFECT.Encumbrance") + " 2",
            img: "systems/wfrp4e/icons/effects/enc2.png",
            statuses: ["enc2"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "prePrepareData",
                        script: `
                            args.actor.characteristics.ag.modifier -= 20;
                            if (args.actor.details.move.value > 2)
                            {
                                args.actor.details.move.value -= 2;
                                if (args.actor.details.move.value < 2)
                                    args.actor.details.move.value = 2
                            }
                            `
                    }
                ]
            }
        },
        "enc3": {
            name: game.i18n.localize("EFFECT.Encumbrance") + " 3",
            img: "systems/wfrp4e/icons/effects/enc3.png",
            statuses: ["enc3"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "prePrepareData",
                        script: "args.actor.details.move.value = 0;"
                    }
                ]
            }
        },
        "cold1": {
            name: game.i18n.localize("EFFECT.ColdExposure") + " 1",
            img: "",
            statuses: ["cold1"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -10 },
            ]
        },
        "cold2" : {
            name: game.i18n.localize("EFFECT.ColdExposure") + " 2",
            img: "",
            statuses: ["cold2"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ws.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.s.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.i.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.int.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.fel.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1 },
            ]
        },
        "cold3": {
            name: game.i18n.localize("EFFECT.ColdExposure") + " 3",
            img: "",
            statuses: ["cold3"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "manual",
                        script: `
                            let tb = this.actor.characteristics.t.bonus
                            let damage = (await new Roll("1d10").roll()).total
                            damage -= tb
                            if (damage <= 0) damage = 1
                            if (this.actor.status.wounds.value <= damage) {
                                await this.actor.addCondition("unconscious")
                            }
                            this.actor.modifyWounds(-damage)
                            ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                            `
                    }
                ]
            }
        },
        "heat1": {
            name: game.i18n.localize("EFFECT.HeatExposure") + " 1",
            img: "",
            statuses: ["heat1"],
            changes: [
                { key: "system.characteristics.int.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1 },
            ]
        },
        "heat2": {
            name: game.i18n.localize("EFFECT.HeatExposure") + " 2",
            img: "",
            statuses: ["heat2"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ws.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.s.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.i.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.int.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.fel.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1 },
            ]
        },
        "heat3": {
            name: game.i18n.localize("EFFECT.HeatExposure") + " 3",
            img: "",
            statuses: ["heat3"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "manual",
                        script: `
                            let tb = this.actor.characteristics.t.bonus
                            let damage = (await new Roll("1d10").roll()).total
                            damage -= tb
                            if (damage <= 0) {
                                damage = 1
                            }
                            this.actor.modifyWounds(-damage)
                            ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                            `
                    }
                ]
            }
        },
        "thirst1": {
            name: game.i18n.localize("EFFECT.Thirst") + " 1",
            img: "",
            statuses: ["thirst1"],
            changes: [
                { key: "system.characteristics.int.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.fel.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1 },
            ]
        },
        "thirst2": {
            name: game.i18n.localize("EFFECT.Thirst") + " 2+",
            img: "",
            statuses: ["thirst2"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ws.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.s.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.i.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.int.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.fel.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1 },
            ],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "manual",
                        script: `
                            let tb = this.actor.characteristics.t.bonus
                            let damage = (await new Roll("1d10").roll()).total
                            damage -= tb
                            if (damage <= 0) {
                                damage = 1
                            }
                            this.actor.modifyWounds(-damage)
                            ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                            `
                    }
                ]
            }
        },
        "starvation1": {
            name: game.i18n.localize("EFFECT.Starvation") + " 1",
            img: "",
            statuses: ["starvation1"],
            changes: [
                { key: "system.characteristics.s.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1 },
            ]
        },
        "starvation2": {
            name: game.i18n.localize("EFFECT.Starvation") + " 2",
            img: "",
            statuses: ["starvation2"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ws.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.s.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.i.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.int.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.wp.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.fel.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1 },
                { key: "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1 },
            ],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "manual",
                        script: `
                            let tb = this.actor.characteristics.t.bonus
                            let damage = (await new Roll("1d10").roll()).total
                            damage -= tb
                            if (damage <= 0) {
                                damage = 1
                            }
                            this.actor.modifyWounds(-damage)
                            ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                            `
                    }
                ]
            }
        },
        "blackpowder": {
            name: game.i18n.localize("EFFECT.BlackpowderShock"),
            img: "",
            statuses: ["blackpowder"],
            flags: {
                wfrp4e: {
                    blackpowder: true,
                },
            },

            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "immediate",
                        script: `
                            test = await this.actor.setupSkill(game.i18n.localize("NAME.Cool"), {appendTitle : " - " + this.effect.name, skipTargets: true, fields : {difficulty : "average"}});
                            await test.roll();
                            if (test.failed)
                            {
                                this.actor.addCondition("broken");
                            }
                            return false;
                        `
                    }
                ]
            }
        },
        "infighting": {
            name: game.i18n.localize("EFFECT.Infighting"),
            img: "modules/wfrp4e-core/icons/talents/in-fighter.png",
            statuses: ["infighting"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "prePrepareItem",
                        script: `
                            if (args.item.type == "weapon" && args.item.isEquipped)
                            {
                                let weaponLength = args.item.reachNum
                                if (weaponLength > 3)
                                {
                                    let improv = foundry.utils.duplicate(game.wfrp4e.config.systemItems.improv)
                                    improv.system.twohanded.value = args.item.twohanded.value
                                    improv.system.offhand.value = args.item.offhand.value
                                    improv.name = args.item.name + " (" + game.i18n.localize("EFFECT.Infighting") + ")"
                                    foundry.utils.mergeObject(args.item.system, improv.system, {overwrite : true})
                                    args.item.system.qualities = improv.system.qualities
                                    args.item.system.flaws = improv.system.flaws
                                    args.item.name = improv.name
                                    args.item.system.infighting = true;
                                }
                            }
                            `
                    }
                ]
            }
        },
        "defensive": {
            name: game.i18n.localize("EFFECT.OnDefensive"),
            img: "",
            statuses: ["defensive"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "dialog",
                        script: `args.prefillModifiers.modifier += 20`,
                        options: {
                            hideScript: "return !this.actor.isOpposing",
                            activateScript: `
                                    let skillName = this.effect.name.substring(this.effect.name.indexOf("[") + 1, this.effect.name.indexOf("]"))
                                    return args.skill?.name == skillName
                                `
                        }
                    },
                    {
                        label: "@effect.name",
                        trigger: "immediate",
                        script: `
                                let choice = await ItemDialog.create(this.actor.itemTypes.skill.sort((a, b) => a.name > b.name ? 1 : -1), 1, "Escoge una habilidad con la que usar A la Defensiva");    
                                this.effect.updateSource({name : this.effect.name + " [" +  choice[0]?.name + "]"})
                                `
                    }
                ]
            }
        },
        "dualwielder": {
            name: game.i18n.localize("EFFECT.DualWielder"),
            img: "modules/wfrp4e-core/icons/talents/dual-wielder.png",
            statuses: ["dualwielder"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "dialog",
                        script: `args.prefillModifiers.modifier -= 10`,
                        options: {
                            hideScript: "return !this.actor.isOpposing",
                            activateScript: `return this.actor.isOpposing`
                        }
                    },
                    {
                        label: "Comienzo del Turno",
                        trigger: "startTurn",
                        script: `this.effect.delete()`,
                    }
                ]
            }
        },
        "consumealcohol1": {
            name: game.i18n.localize("EFFECT.ConsumeAlcohol") + " 1",
            img: "",
            statuses: ["consumealcohol1"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.ws.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.int.modifier", mode: 2, value: -10 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -10 },
            ]
        },
        "consumealcohol2": {
            name: game.i18n.localize("EFFECT.ConsumeAlcohol") + " 2",
            img: "",
            statuses: ["consumealcohol2"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -20 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -20 },
                { key: "system.characteristics.ws.modifier", mode: 2, value: -20 },
                { key: "system.characteristics.int.modifier", mode: 2, value: -20 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -20 },
            ]
        },
        "consumealcohol3": {
            name: game.i18n.localize("EFFECT.ConsumeAlcohol") + " 3",
            img: "",
            statuses: ["consumealcohol3"],
            changes: [
                { key: "system.characteristics.bs.modifier", mode: 2, value: -30 },
                { key: "system.characteristics.ag.modifier", mode: 2, value: -30 },
                { key: "system.characteristics.ws.modifier", mode: 2, value: -30 },
                { key: "system.characteristics.int.modifier", mode: 2, value: -30 },
                { key: "system.characteristics.dex.modifier", mode: 2, value: -30 },
            ]
        },
        "stinkingdrunk1": {
            name: game.i18n.localize("EFFECT.MarienburghersCourage"),
            img: "",
            statuses: ["stinkingdrunk1"],
            system: {
                transferData: {},
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "dialog",
                        script: `args.prefillModifiers.modifier += 20`,
                        options: {
                            hideScript: "return args.skill?.name != game.i18n.localize('NAME.Cool')",
                            activateScript: `return args.skill?.name == game.i18n.localize('NAME.Cool')`
                        }
                    }
                ]
            }
        }
    })

game.wfrp4e.config.statusEffects = [
        {
            img: "systems/wfrp4e/icons/conditions/bleeding.png",
            id: "bleeding",
            statuses: ["bleeding"],
            name: "WFRP4E.ConditionName.Bleeding",
            description : "WFRP4E.Conditions.Bleeding",
            system: {
                condition : {
                    value : 1,
                    numbered: true,
                    trigger: "endRound"
                },
                scriptData: [
                    {
                        trigger: "manual",
                        label: "@effect.name",
                        script: `let actor = this.actor;
                            let effect = this.effect;
                            let bleedingAmt;
                            let bleedingRoll;
                            let msg = ""

                            let damage = effect.conditionValue;
                            let scriptArgs = {msg, damage};
                            await Promise.all(actor.runScripts("preApplyCondition", {effect, data : scriptArgs}))
                            msg = scriptArgs.msg;
                            damage = scriptArgs.damage;
                            msg += await actor.applyBasicDamage(damage, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, minimumOne : false, suppressMsg : true})

                            if (actor.status.wounds.value == 0 && !actor.hasCondition("unconscious"))
                            {
                                await actor.addCondition("unconscious")
                                msg += "<br>" + game.i18n.format("BleedUnc", {name: actor.prototypeToken.name })
                            }

                            if (actor.hasCondition("unconscious"))
                            {
                                bleedingAmt = effect.conditionValue;
                                bleedingRoll = (await new Roll("1d100").roll()).total;
                                if (bleedingRoll <= bleedingAmt * 10)
                                {
                                    msg += "<br>" + game.i18n.format("BleedFail", {name: actor.prototypeToken.name}) + " (" + game.i18n.localize("Rolled") + " " + bleedingRoll + ")";
                                    await actor.addCondition("dead")
                                }
                                else if (bleedingRoll % 11 == 0)
                                {
                                    msg += "<br>" + game.i18n.format("BleedCrit", { name: actor.prototypeToken.name } ) + " (" + game.i18n.localize("Rolled") + bleedingRoll + ")"
                                    await actor.removeCondition("bleeding")
                                }
                                else
                                {
                                    msg += "<br>" + game.i18n.localize("BleedRoll") + ": " + bleedingRoll;
                                }
                            }

                            await Promise.all(actor.runScripts("applyCondition", {effect, data : {bleedingRoll}}))
                            if (args.suppressMessage)
                            {
                                let messageData = game.wfrp4e.utility.chatDataSetup(msg);
                                messageData.speaker = {alias: this.effect.name}
                                messageData.flavor = this.effect.name;
                                return messageData
                            }
                            else
                            {
                                return this.script.message(msg)
                            }
                            `
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/poisoned.png",
            id: "poisoned",
            statuses: ["poisoned"],
            name: "WFRP4E.ConditionName.Poisoned",
            description : "WFRP4E.Conditions.Poisoned",
            system: {
                condition : {
                    value : 1,
                    numbered: true,
                    trigger: "endRound"
                },
                scriptData: [
                    {
                        trigger: "manual",
                        label: "@effect.name",
                        script: `let actor = this.actor;
                            let effect = this.effect;
                            let msg = ""

                            let damage = effect.conditionValue;
                            let scriptArgs = {msg, damage};
                            await Promise.all(actor.runScripts("preApplyCondition", {effect, data : scriptArgs}))
                            msg = scriptArgs.msg;
                            damage = scriptArgs.damage;
                            msg += await actor.applyBasicDamage(damage, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, suppressMsg : true})

                            await Promise.all(actor.runScripts("applyCondition", {effect}))
                            if (args.suppressMessage)
                            {
                                let messageData = game.wfrp4e.utility.chatDataSetup(msg);
                                messageData.speaker = {alias: this.effect.name}
                                return messageData
                            }
                            else
                            {
                                return this.script.message(msg)
                            }
                            `
                    },
                    {
                        trigger: "dialog",
                        label: "@effect.name",
                        script: `args.fields.modifier -= 10 * this.effect.conditionValue`,
                        options: {
                                activateScript: "return true"
                        }
                    }
                ]
            }

        },
        {
            img: "systems/wfrp4e/icons/conditions/ablaze.png",
            id: "ablaze",
            statuses: ["ablaze"],
            name: "WFRP4E.ConditionName.Ablaze",
            description : "WFRP4E.Conditions.Ablaze",
            system: {
                condition : {
                    value : 1,
                    numbered: true,
                    trigger: "endRound"
                },
                scriptData: [
                    {
                        trigger: "manual",
                        label: "@effect.name",
                        script: `let leastProtectedLoc;
                            let leastProtectedValue = 999;
                            for (let loc in this.actor.status.armour)
                            {
                                if (this.actor.status.armour[loc].value != undefined && this.actor.status.armour[loc].value < leastProtectedValue)
                                {
                                    leastProtectedLoc = loc;
                                    leastProtectedValue = this.actor.status.armour[loc].value;
                                }
                            }

                            let formula = "1d10 + @effect.conditionValue - 1"
                            let msg = "<b>${game.i18n.localize("Formula")}</b>: @FORMULA"

                            let scriptArgs = {msg, formula}
                            await Promise.all(this.actor.runScripts("preApplyCondition", {effect : this.effect, data : scriptArgs}));
                            formula = scriptArgs.formula;
                            msg = scriptArgs.msg;
                            let roll = await new Roll(formula, this).roll();
                            let terms = roll.terms.map(i => (i instanceof Die ? (i.formula + " (" + i.total + ")") : (i.total))).join("")
                            msg = msg.replace("@FORMULA", terms);

                            let damageMsg = ("<br>" + await this.actor.applyBasicDamage(roll.total, {loc: leastProtectedLoc, suppressMsg : true})).split("")
                            msg += damageMsg.join("");
                            await Promise.all(this.actor.runScripts("applyCondition", {effect : this.effect}))
                            if (args.suppressMessage)
                            {
                                let messageData = game.wfrp4e.utility.chatDataSetup(msg);
                                messageData.speaker = {alias: this.actor.prototypeToken.name}
                                messageData.flavor = this.effect.name
                                return messageData
                            }
                            else
                            {
                                return this.script.message(msg)
                            }
                            `
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/deafened.png",
            id: "deafened",
            statuses: ["deafened"],
            name: "WFRP4E.ConditionName.Deafened",
            description : "WFRP4E.Conditions.Deafened",
            system: {
                condition : {
                    value : 1,
                    numbered: true
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Chequeos relacionados con el oído",
                        script: `args.fields.modifier -= 10 * this.effect.conditionValue`
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/stunned.png",
            id: "stunned",
            statuses: ["stunned"],
            name: "WFRP4E.ConditionName.Stunned",
            system: {
                condition : {
                    value : 1,
                    numbered: true
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Penalizador a todos los Chequeos (@effect.name)",
                        script: `args.fields.modifier -= 10 * this.effect.conditionValue`,
                        options: {
                            activateScript: "return true"
                        }
                    }
                    // { // Not sure what to do about this
                    //     trigger: "dialog",
                    //     label : "Bonus to Melee Attacks",
                    //     script : `args.fields.modifier -= 10 * this.effect.conditionValue`,
                    //     "options.dialog.targeter" : true
                    // }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/entangled.png",
            id: "entangled",
            statuses: ["entangled"],
            name: "WFRP4E.ConditionName.Entangled",
            description : "WFRP4E.Conditions.Entangled",
            system: {
                condition : {
                    value : 1,
                    numbered: true
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Chequeos relacionados con movimiento de cualquier tipo",
                        script: `args.fields.modifier -= 10 * this.effect.conditionValue`,
                        options: {
                                activateScript: "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/fatigued.png",
            id: "fatigued",
            statuses: ["fatigued"],
            name: "WFRP4E.ConditionName.Fatigued",
            description : "WFRP4E.Conditions.Fatigued",
            system: {
                condition : {
                    value : 1,
                    numbered: true
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Penalizador a todos los Chequeos (@effect.name)",
                        script: `args.fields.modifier -= 10 * this.effect.conditionValue`,
                        options: {
                                activateScript: "return true"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/blinded.png",
            id: "blinded",
            statuses: ["blinded"],
            name: "WFRP4E.ConditionName.Blinded",
            description : "WFRP4E.Conditions.Blinded",
            system: {
                condition : {
                    value : 1,
                    numbered: true
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Chequeos relacionados con la vista",
                        script: `args.fields.modifier -= 10 * this.effect.conditionValue`,
                        options: {
                                activateScript: "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                        }
                    },
                    {
                        trigger: "dialog",
                        label: "Bonificador a ataques cuerpo a cuerpo",
                        script: `args.fields.modifier += 10 * this.effect.conditionValue`,
                        options: {
                                targeter: true,
                                hideScript: "return args.item?.attackType != 'melee'",
                                activateScript: "return args.item?.attackType == 'melee'"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/broken.png",
            id: "broken",
            statuses: ["broken"],
            name: "WFRP4E.ConditionName.Broken",
            description : "WFRP4E.Conditions.Broken",
            system: {
                condition : {
                    value : 1,
                    numbered: true
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Penalizador a todos los Chequeos que no implican correr y ocultarse.",
                        script: `args.fields.modifier -= 10 * this.effect.conditionValue`,
                        options: {
                            activateScript: "return !args.skill?.name?.includes(game.i18n.localize('NAME.Stealth')) && args.skill?.name != game.i18n.localize('NAME.Athletics')"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/prone.png",
            id: "prone",
            statuses: ["prone"],
            name: "WFRP4E.ConditionName.Prone",
            description : "WFRP4E.Conditions.Prone",
            system: {
                condition : {
                    value : null,
                    numbered: false
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Chequeos relacionados con movimiento de cualquier tipo",
                        script: `args.fields.modifier -= 20`,
                        options: {
                                activateScript: "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                        }
                    },
                    {
                        trigger: "dialog",
                        label: "Bonificador a ataques cuerpo a cuerpo",
                        script: `args.fields.modifier += 20`,
                        options: {
                            targeter: true,
                            hideScript: "return args.item?.system.attackType != 'melee'",
                            activateScript: "return args.item?.system.attackType == 'melee'"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/surprised.png",
            id: "surprised",
            statuses: ["surprised"],
            name: "WFRP4E.ConditionName.Surprised",
            description : "WFRP4E.Conditions.Surprised",
            system: {
                condition : {
                    value : null,
                    numbered: false
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Bonificador a ataques cuerpo a cuerpo",
                        script: `args.fields.modifier += 20`,
                        options: {
                            targeter: true,
                            hideScript: "return args.item?.system.attackType != 'melee'",
                            activateScript: "return args.item?.system.attackType == 'melee'"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/unconscious.png",
            id: "unconscious",
            statuses: ["unconscious"],
            name: "WFRP4E.ConditionName.Unconscious",
            description : "WFRP4E.Conditions.Unconscious",
            system : {
                condition : {
                    value : null,
                    numbered: false
                },
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/grappling.png",
            id: "grappling",
            statuses: ["grappling"],
            name: "WFRP4E.ConditionName.Grappling",
            description : "WFRP4E.Conditions.Grappling",
            system : {
                condition : {
                    value : null,
                    numbered: false
                },
            }

        },
        {
            img: "systems/wfrp4e/icons/conditions/engaged.png",
            id: "engaged",
            statuses: ["engaged"],
            name: "WFRP4E.ConditionName.Engaged",
            description : "WFRP4E.Conditions.Engaged",
            system: {
                condition : {
                    value : null,
                    numbered: false
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "@effect.name",
                        script: `args.abort = true
                        ui.notifications.error(game.i18n.localize("EFFECT.ShooterEngagedError"))`,
                        options: {
                                hideScript: "return !args.weapon || args.weapon.isMelee || args.weapon.properties.qualities.pistol",
                                activateScript: "return args.weapon.isRanged && !args.weapon.properties.qualities.pistol"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/defeated.png",
            id: "dead",
            statuses: ["dead"],
            name: "WFRP4E.ConditionName.Dead",
            description : "WFRP4E.Conditions.Dead",
            system : {
                condition : {
                    value : null,
                    numbered: false
                },
            }
        }
	]


    foundry.utils.mergeObject(this.propertyEffects, {

        // Qualities
        accurate: {
            name : game.i18n.localize("PROPERTY.Accurate"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : game.i18n.localize("PROPERTY.Accurate"),
                    trigger : "dialog",
                    script : "args.fields.modifier += 10;",
                    options : {
                        hideScript : "",
                        activateScript : "return true"
                    }
                },
                {
                    label : "Script",
                    trigger : "manual",
                    script : "this.script.notification('test')",
                }
            ],
            }
        },
        blackpowder: {
            img : "systems/wfrp4e/icons/blank.png",
            name: game.i18n.localize("EFFECT.BlackpowderShock"),
            system: {
                transferData : {
                    type : "target",
                    documentType : "Actor"
                },
                scriptData: [
                    {
                        label: "@effect.name",
                        trigger: "immediate",
                        script: `
                            test = await this.actor.setupSkill(game.i18n.localize("NAME.Cool"), {appendTitle : " - " + this.effect.name, skipTargets: true, fields : {difficulty : "average"}});
                            await test.roll();
                            if (test.failed)
                            {
                                this.actor.addCondition("broken");
                            }
                            return false;
                        `
                    }
                ]
            }
        },
        blast: {
            name : game.i18n.localize("PROPERTY.Blast"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : game.i18n.localize("PROPERTY.Blast"),
                    trigger : "rollWeaponTest",
                    script : "if (args.test.succeeded) args.result.other.push(`<a class='aoe-template' data-type='radius'><i class='fas fa-ruler-combined'></i>Explosión de ${this.item.properties.qualities.blast.value} yardas</a>`)",
                }]
            }
        },
        damaging: {
            name : game.i18n.localize("PROPERTY.Damaging"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        defensive: {
            name : game.i18n.localize("PROPERTY.Defensive"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Actor",
                    equipTransfer: true
                },
                scriptData : [{
                    label : game.i18n.localize("PROPERTY.Defensive"),
                    trigger : "dialog",
                    script : "args.fields.slBonus++;",
                    options : {
                        activateScript : "return args.actor.attacker",
                        hideScript : "return !args.actor.attacker"
                    }
                }]
            }
        },
        distract: {
            name : game.i18n.localize("PROPERTY.Distract"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        entangle: {
            name : game.i18n.localize("PROPERTY.Entangle"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
                scriptData : [{
                    label : game.i18n.localize("PROPERTY.Entangle"),
                    trigger : "applyDamage",
                    script : "args.actor.addCondition('entangled')"
                }]
            }

        },
        fast: {
            name : game.i18n.localize("PROPERTY.Fast"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        hack: {
            name : game.i18n.localize("PROPERTY.Hack"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        impact: {
            name : game.i18n.localize("PROPERTY.Impact"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        impale: {
            name : game.i18n.localize("PROPERTY.Impale"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        magical: {
            name : game.i18n.localize("PROPERTY.Magical"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        penetrating: {
            name : game.i18n.localize("PROPERTY.Penetrating"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        pistol: {
            name : game.i18n.localize("PROPERTY.Pistol"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        precise: {
            name : game.i18n.localize("PROPERTY.Precise"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : game.i18n.localize("PROPERTY.Precise"),
                    trigger : "dialog",
                    script : "args.fields.successBonus += 1;",
                    options : {
                        hideScript : "",
                        activateScript : "return true"
                    }
                }]
            }
        },
        pummel: {
            name : game.i18n.localize("PROPERTY.Pummel"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        repeater: {
            name : game.i18n.localize("PROPERTY.Repeater"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        shield: {
            name : game.i18n.localize("PROPERTY.Shield"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        trapblade: {
            name : game.i18n.localize("PROPERTY.TrapBlade"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        unbreakable: {
            name : game.i18n.localize("PROPERTY.Unbreakable"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        wrap: {
            name : game.i18n.localize("PROPERTY.Wrap"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },




        // Flaws
        dangerous: {
            name : game.i18n.localize("PROPERTY.Dangerous"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        imprecise: {
            name : game.i18n.localize("PROPERTY.Imprecise"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : game.i18n.localize("PROPERTY.Imprecise"),
                    trigger : "dialog",
                    script : "args.fields.slBonus -= 1;",
                    options : {
                        hideScript : "",
                        activateScript : "return true"
                    }
                }]
            }
        },
        reload: {
            name : game.i18n.localize("PROPERTY.Reload"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        slow: {
            name : game.i18n.localize("PROPERTY.Slow"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        tiring: {
            name : game.i18n.localize("PROPERTY.Tiring"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
        undamaging: {
            name : game.i18n.localize("PROPERTY.Undamaging"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
            }
        },
    })

}

game.wfrp4e.config.scriptTriggers = {
    "manual" : "Invocado Manualmente",
    "immediate" : "Inmediato",
    "dialog" : "Diálogo",
    "addItems" : "Añadir Objetos",
    "preUpdate" : "Pre-Actualizar",
    "update" : "Al Actualizar",
    "equipToggle" : "Cambiar Equipado",
    "prePrepareData" : "Pre-Preparar Datos",
    "prePrepareItems" : "Pre-Preparar Objetos del Actor",
    "prepareData" : "Preparar Datos",
    "prepareOwned" : "Preparar Datos de Propietario (Para Objetos)",
    "computeCharacteristics" : "Calcular Características",
    "computeEncumbrance" : "Calcular Impedimenta",
    "preWoundCalc" : "Pre-Cálculo de Heridas",
    "woundCalc" : "Cálculo de Heridas",
    "calculateSize" : "Cálculo de Tamaño",
    "preAPCalc" : "Pre-Cálculo de Armadura",
    "APCalc" : "Cálculo de Armadura",
    "preApplyDamage" : "Pre-Aplicar Daño",
    "applyDamage" : "Aplicar Daño",
    "preTakeDamage" : "Pre-Recibir Daño",
    "takeDamage" : "Recibir Daño",
    "computeTakeDamageModifiers" : "Calcular Modificadores de Recibir Daño",
    "computeApplyDamageModifiers" : "Calcular Modificadores de Daño",
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
    "targetPrefillDialog" : "Prellenar Diálogo del Objetivo",
    "getInitiativeFormula" : "Calcular Iniciativa",
    "createToken" : "Crear Icono",
    "deleteEffect" : "Efecto Eliminado",
    "startCombat"  : "WH.Trigger.StartCombat",
    "startRound" : "WH.Trigger.StartRound",
    "startTurn" : "Comienzo del Turno",
    "updateCombat"  : "WH.Trigger.UpdateCombat",
    "endTurn" : "Fin del Turno",
    "endRound" : "Fin del Asalto",
    "endCombat" : "Fin del Combate",
}

game.wfrp4e.config.species = {
        "human": "Humano",
        "dwarf": "Enano",
        "halfling": "Halfling",
        "helf": "Alto Elfo",
        "welf": "Elfo Silvano",
    };

game.wfrp4e.config.speciesSkills = {
        "human": [
            "Criar animales",
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
            "Consumir alcohol",
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
            "Consumir alcohol",
            "Esquivar",
            "Jugar",
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
                    "Criar animales",
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

game.wfrp4e.config.classTrappings = {
        "Académicos": "Bandolera que contiene Material de escritura y 1d10 hojas de pergamino, Daga, Ropas, Bolsa",
        "Académico": "Bandolera que contiene Material de escritura y 1d10 hojas de pergamino, Daga, Ropas, Bolsa",
        "Burgueses": "Bandolera que contiene el almuerzo, Capa, Daga, Ropas, Bolsa, Sombrero",
        "Burgués": "Bandolera que contiene el almuerzo, Capa, Daga, Ropas, Bolsa, Sombrero",
        "Cortesanos": "Daga, Ropas de calidad, Bolsa conteniendo unas Pinzas, Limpiaorejas, Peine",
        "Cortesano": "Daga, Ropas de calidad, Bolsa conteniendo unas Pinzas, Limpiaorejas, Peine",
        "Campesinos": "Bandolera que contiene Raciones (1 día), Capa, Daga, Ropas, Bolsa",
        "Campesino": "Bandolera que contiene Raciones (1 día), Capa, Daga, Ropas, Bolsa",
        "Rurales": "Capa, Daga, Mochila que contiene un Yesquero, Ropas, Bolsa, Manta, Raciones (1 día)",
        "Rural": "Capa, Daga, Mochila que contiene un Yesquero, Ropas, Bolsa, Manta, Raciones (1 día)",
        "Ribereños": "Bandolera que contiene un Frasco de alcohol, Capa, Daga, Ropas, Bolsa",
		"Ribereño": "Bandolera que contiene un Frasco de alcohol, Capa, Daga, Ropas, Bolsa",
        "Pícaros": "Bandolera que contiene 2 Velas, 1d10 Cerillas, Capucha o Máscara, Daga, Ropas, Bolsa",
        "Pícaro": "Bandolera que contiene 2 Velas, 1d10 Cerillas, Capucha o Máscara, Daga, Ropas, Bolsa",
        "Guerreros": "Daga, Ropas, Bolsa, Un arma cuerpo a cuerpo",
        "Guerrero": "Daga, Ropas, Bolsa, Un arma cuerpo a cuerpo",
    }

game.wfrp4e.config.vehicleTypes = {
    "water" : "Acuático",
    "land" : "Terrestre",
    "air" : "Aéreo"
    }
})