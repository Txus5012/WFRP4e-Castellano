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
            icon: "modules/wfrp4e-core/icons/spells/beasts.png",
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
            icon: "modules/wfrp4e-core/icons/spells/death.png",
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
            icon: "modules/wfrp4e-core/icons/spells/fire.png",
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
            icon: "modules/wfrp4e-core/icons/spells/heavens.png",
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
            icon: "modules/wfrp4e-core/icons/spells/metal.png",
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
            icon: "modules/wfrp4e-core/icons/spells/life.png",
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
            icon: "modules/wfrp4e-core/icons/spells/light.png",
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
            icon: "modules/wfrp4e-core/icons/spells/shadow.png",
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
            icon: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
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
            icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "fever": {
            name: "WFRP4E.Symptom.Fever",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "gangrene": {
            name: "WFRP4E.Symptom.Gangrene",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "malaise": {
            name: "WFRP4E.Symptom.Malaise",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
                                if (applicableCharacteristics.includes(args.preData.characteristic))
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
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

    this.systemItems = mergeObject(this.systemItems, {
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
            name : game.i18n.localize("NAME.Fear"),
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
                    icon: "systems/wfrp4e/icons/conditions/fear.png",
                    statuses : ["fear"],
                    flags: {
                        wfrp4e : {
                            applicationData : {},
                            scriptData : [
                                {
                                    label : "@effect.flags.wfrp4e.dialogTitle",
                                    trigger : "dialog",
                                    script : `args.fields.slBonus -= 1`,
                                    options : {
                                        dialog : {
                                            hideScript : "",
                                            activateScript : `return args.data.targets[0]?.name == this.item.flags.wfrp4e?.fearName`
                                        }
                                    }
                                },
                                {
                                    label : "@effect.name",
                                    trigger : "immediate",
                                    script : `
                                    let name = this.item?.flags?.wfrp4e?.fearName
                                    this.effect.updateSource({"flags.wfrp4e.dialogTitle" : (name ? game.i18n.format("EFFECT.AffectTheSourceOfFearName", {name}) : game.i18n.format("EFFECT.AffectTheSourceOfFear"))})
                                    `
                                }
                            ]
                        }
                    }
                }]

        },

        terror: {
            name: game.i18n.localize("NAME.Terror"),
            icon: "systems/wfrp4e/icons/conditions/terror.png",
            transfer: true,
            flags: {
                wfrp4e : {
                    applicationData : {},
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
        }
    });


    this.systemEffects = mergeObject(this.systemEffects, {
        "enc1" : {
            name: game.i18n.localize("EFFECT.Encumbrance") + " 1",
            icon: "systems/wfrp4e/icons/effects/enc1.png",
            statuses : ["enc1"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "prePrepareData",
                            script : `
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
            }
        },
        "enc2" : {
            name: game.i18n.localize("EFFECT.Encumbrance") + " 2",
            icon: "systems/wfrp4e/icons/effects/enc2.png",
            statuses : ["enc2"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "prePrepareData",
                            script : `
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
            }
        },
        "enc3" : {
            name: game.i18n.localize("EFFECT.Encumbrance") + " 3",
            icon: "systems/wfrp4e/icons/effects/enc3.png",
            statuses : ["enc3"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "prePrepareData",
                            script : "args.actor.details.move.value = 0;"
                        }
                    ]
                }
            }
        },
        "cold1" : {
            name: game.i18n.localize("EFFECT.ColdExposure") + " 1",
            icon: "",
            statuses : ["cold1"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -10},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -10},
            ]
        },
        "cold2" : {
            name: game.i18n.localize("EFFECT.ColdExposure") + " 2",
            icon: "",
            statuses : ["cold2"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ws.modifier", mode: 2, value: -10},
                {key : "system.characteristics.s.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.modifier", mode: 2, value: -10},
                {key : "system.characteristics.i.modifier", mode: 2, value: -10},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -10},
                {key : "system.characteristics.int.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.modifier", mode: 2, value: -10},
                {key : "system.characteristics.fel.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
            ]
        },
        "cold3" : {
            name: game.i18n.localize("EFFECT.ColdExposure") + " 3",
            icon: "",
            statuses : ["cold3"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "manual",
                            script : `
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
            }
        },
        "heat1" : {
            name: game.i18n.localize("EFFECT.HeatExposure") + " 1",
            icon: "",
            statuses : ["heat1"],
            changes : [
                {key : "system.characteristics.int.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
            ]
        },
        "heat2" : {
            name: game.i18n.localize("EFFECT.HeatExposure") + " 2",
            icon: "",
            statuses : ["heat2"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ws.modifier", mode: 2, value: -10},
                {key : "system.characteristics.s.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.modifier", mode: 2, value: -10},
                {key : "system.characteristics.i.modifier", mode: 2, value: -10},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -10},
                {key : "system.characteristics.int.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.modifier", mode: 2, value: -10},
                {key : "system.characteristics.fel.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
            ]
        },
        "heat3" : {
            name: game.i18n.localize("EFFECT.HeatExposure") + " 3",
            icon: "",
            statuses : ["heat3"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "manual",
                            script : `
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
            }
        },
        "thirst1" : {
            name: game.i18n.localize("EFFECT.Thirst") + " 1",
            icon: "",
            statuses : ["thirst1"],
            changes : [
                {key : "system.characteristics.int.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.modifier", mode: 2, value: -10},
                {key : "system.characteristics.fel.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
            ]
        },
        "thirst2" : {
            name: game.i18n.localize("EFFECT.Thirst") + " 2+",
            icon: "",
            statuses : ["thirst2"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ws.modifier", mode: 2, value: -10},
                {key : "system.characteristics.s.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.modifier", mode: 2, value: -10},
                {key : "system.characteristics.i.modifier", mode: 2, value: -10},
                {key : "system.characteristics.int.modifier", mode: 2, value: -10},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.modifier", mode: 2, value: -10},
                {key : "system.characteristics.fel.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
            ],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "manual",
                            script : `
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
            }
        },
        "starvation1" : {
            name: game.i18n.localize("EFFECT.Starvation") + " 1",
            icon: "",
            statuses : ["starvation1"],
            changes : [
                {key : "system.characteristics.s.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            ]
        },
        "starvation2" : {
            name: game.i18n.localize("EFFECT.Starvation") + " 2",
            icon: "",
            statuses : ["starvation2"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ws.modifier", mode: 2, value: -10},
                {key : "system.characteristics.s.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.modifier", mode: 2, value: -10},
                {key : "system.characteristics.i.modifier", mode: 2, value: -10},
                {key : "system.characteristics.int.modifier", mode: 2, value: -10},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -10},
                {key : "system.characteristics.wp.modifier", mode: 2, value: -10},
                {key : "system.characteristics.fel.modifier", mode: 2, value: -10},
                {key : "system.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
                {key : "system.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
            ],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "manual",
                            script : `
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
            }
        },
        "infighting" : {
            name: game.i18n.localize("EFFECT.Infighting"),
            icon: "modules/wfrp4e-core/icons/talents/in-fighter.png",
            statuses : ["infighting"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "prePrepareItem",
                            script : `
                            if (args.item.type == "weapon" && args.item.isEquipped)
                            {
                                let weaponLength = args.item.reachNum
                                if (weaponLength > 3)
                                {
                                    let improv = duplicate(game.wfrp4e.config.systemItems.improv)
                                    improv.system.twohanded.value = args.item.twohanded.value
                                    improv.system.offhand.value = args.item.offhand.value
                                    improv.name = args.item.name + " (" + game.i18n.localize("EFFECT.Infighting") + ")"
                                    mergeObject(args.item.system, improv.system, {overwrite : true})
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
            }
        },
        "defensive" : {
            name: game.i18n.localize("EFFECT.OnDefensive"),
            icon: "",
            statuses : ["defensive"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "dialog",
                            script : `args.fields.modifier += 20`,
                            options : {
                                dialog : {
                                    hideScript : "return !this.actor.isOpposing",
                                    activateScript : `
                                        let skillName = this.effect.name.substring(this.effect.name.indexOf("[") + 1, this.effect.name.indexOf("]"))
                                        return args.skill?.name == skillName
                                    `
                                }
                            }
                        },
                        {
                            label : "@effect.name",
                            trigger : "immediate",
                            script : `
                                let choice = await ItemDialog.create(this.actor.itemTypes.skill.sort((a, b) => a.name > b.name ? 1 : -1), 1, "Escoge una habilidad con la que usar A la Defensiva");    
                                this.effect.updateSource({name : this.effect.name + " [" +  choice[0]?.name + "]"})
                                `
                        }
                    ]
                }
            }
        },
        "dualwielder" : {
            name: game.i18n.localize("EFFECT.DualWielder"),
            icon: "modules/wfrp4e-core/icons/talents/dual-wielder.png",
            statuses : ["dualwielder"],
            flags : {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.name",
                            trigger : "dialog",
                            script : `args.fields.modifier -= 10`,
                            options : {
                                dialog : {
                                    hideScript : "return !this.actor.isOpposing",
                                    activateScript : `return this.actor.isOpposing`
                                }
                            }
                        }
                    ]
                }
            }
        },
        "consumealcohol1" : {
            name: game.i18n.localize("EFFECT.ConsumeAlcohol") + " 1",
            icon: "",
            statuses : ["consumealcohol1"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -10},
                {key : "system.characteristics.ws.modifier", mode: 2, value: -10},
                {key : "system.characteristics.int.modifier", mode: 2, value: -10},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -10},
            ]
        },
        "consumealcohol2" : {
            name: game.i18n.localize("EFFECT.ConsumeAlcohol") + " 2",
            icon: "",
            statuses : ["consumealcohol2"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -20},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -20},
                {key : "system.characteristics.ws.modifier", mode: 2, value: -20},
                {key : "system.characteristics.int.modifier", mode: 2, value: -20},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -20},
            ]
        },
        "consumealcohol3" : {
            name: game.i18n.localize("EFFECT.ConsumeAlcohol") + " 3",
            icon: "",
            statuses : ["consumealcohol3"],
            changes : [
                {key : "system.characteristics.bs.modifier", mode: 2, value: -30},
                {key : "system.characteristics.ag.modifier", mode: 2, value: -30},
                {key : "system.characteristics.ws.modifier", mode: 2, value: -30},
                {key : "system.characteristics.int.modifier", mode: 2, value: -30},
                {key : "system.characteristics.dex.modifier", mode: 2, value: -30},
            ]
        },
        "stinkingdrunk1" : {
            name: game.i18n.localize("EFFECT.MarienburghersCourage"),
            icon: "",
            statuses : ["stinkingdrunk1"],
            wfrp4e : {
                applicationData : {},
                scriptData : [
                    {
                        label : "@effect.name",
                        trigger : "dialog",
                        script : `args.fields.modifier += 20`,
                        options : {
                            dialog : {
                                hideScript : "return args.skill?.name != game.i18n.localize('NAME.Cool')",
                                activateScript : `return args.skill?.name == game.i18n.localize('NAME.Cool')`
                            }
                        }
                    }
                ]
            }
        }
    })

game.wfrp4e.config.statusEffects = [
        {
            icon: "systems/wfrp4e/icons/conditions/bleeding.png",
            id: "bleeding",
            statuses: ["bleeding"],
            name: "WFRP4E.ConditionName.Bleeding",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {
                        conditionTrigger : "endRound"
                    },
                    scriptData: [
                        {
                            trigger: "manual",
                            label : "@effect.name",
                            script : `let actor = this.actor;
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
                                return this.script.scriptMessage(msg)
                            }
                            `
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/poisoned.png",
            id: "poisoned",
            statuses: ["poisoned"],
            name: "WFRP4E.ConditionName.Poisoned",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {
                        conditionTrigger : "endRound"
                    },
                    scriptData: [
                        {
                            trigger: "manual",
                            label : "@effect.name",
                            script : `let actor = this.actor;
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
                                return this.script.scriptMessage(msg)
                            }
                            `
                        },
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10 * this.effect.conditionValue`,
                            options : {
                                dialog : {
                                    activateScript : "return true"
                                }
                            }
                        }
                    ]
                }
            }

        },
        {
            icon: "systems/wfrp4e/icons/conditions/ablaze.png",
            id: "ablaze",
            statuses: ["ablaze"],
            name: "WFRP4E.ConditionName.Ablaze",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {
                        conditionTrigger : "endRound"
                    },
                    scriptData: [
                        {
                            trigger: "manual",
                            label : "@effect.name",
                            script : `let leastProtectedLoc;
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
                                return this.script.scriptMessage(msg)
                            }
                            `
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/deafened.png",
            id: "deafened",
            statuses: ["deafened"],
            name: "WFRP4E.ConditionName.Deafened",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Chequeos relacionados con el oído",
                            script : `args.fields.modifier -= 10 * this.effect.conditionValue`
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/stunned.png",
            id: "stunned",
            statuses: ["stunned"],
            name: "WFRP4E.ConditionName.Stunned",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Penalizador a todos los Chequeos (@effect.name)",
                            script : `args.fields.modifier -= 10 * this.effect.conditionValue`,
                            options : {
                                dialog : {
                                    activateScript : "return true"
                                }
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
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/entangled.png",
            id: "entangled",
            statuses: ["entangled"],
            name: "WFRP4E.ConditionName.Entangled",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Chequeos relacionados con movimiento de cualquier tipo",
                            script : `args.fields.modifier -= 10 * this.effect.conditionValue`,
                            options : {
                                dialog : {
                                    activateScript : "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/fatigued.png",
            id: "fatigued",
            statuses: ["fatigued"],
            name: "WFRP4E.ConditionName.Fatigued",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Penalizador a todos los Chequeos (@effect.name)",
                            script : `args.fields.modifier -= 10 * this.effect.conditionValue`,
                            options : {
                                dialog : {
                                    activateScript : "return true"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/blinded.png",
            id: "blinded",
            statuses: ["blinded"],
            name: "WFRP4E.ConditionName.Blinded",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Chequeos relacionados con la vista",
                            script : `args.fields.modifier -= 10 * this.effect.conditionValue`,
                            options : {
                                dialog : {
                                    activateScript : "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                                }
                            }
                        },
                        {
                            trigger: "dialog",
                            label : "Bonificador a ataques cuerpo a cuerpo",
                            script : `args.fields.modifier += 10 * this.effect.conditionValue`,
                            options : {
                                dialog : {
                                    targeter : true,
                                    hideScript : "return args.item?.attackType != 'melee'",
                                    activateScript : "return args.item?.attackType == 'melee'"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/broken.png",
            id: "broken",
            statuses: ["broken"],
            name: "WFRP4E.ConditionName.Broken",
            flags: {
                wfrp4e: {
                    value: 1,
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Penalizador a todos los Chequeos que no implican correr y ocultarse.",
                            script : `args.fields.modifier -= 10 * this.effect.conditionValue`,
                            options : {
                                dialog : {
                                    activateScript : "return !args.skill?.name?.includes(game.i18n.localize('NAME.Stealth')) && args.skill?.name != game.i18n.localize('NAME.Athletics')"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/prone.png",
            id: "prone",
            statuses: ["prone"],
            name: "WFRP4E.ConditionName.Prone",
            flags: {
                wfrp4e: {
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Chequeos relacionados con movimiento de cualquier tipo",
                            script : `args.fields.modifier -= 20`,
                            options : {
                                dialog : {
                                    activateScript : "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                                }
                            }
                        },
                        {
                            trigger: "dialog",
                            label : "Bonificador a ataques cuerpo a cuerpo",
                            script : `args.fields.modifier += 20`,
                            options : {
                                dialog : {
                                    targeter : true,
                                    hideScript : "return args.item?.system.attackType != 'melee'",
                                    activateScript : "return args.item?.system.attackType == 'melee'"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/fear.png",
            id: "fear",
            statuses: ["fear"],
            name: "WFRP4E.ConditionName.Fear",
            flags: {
                wfrp4e : {
                    applicationData : {},
                    scriptData : [
                        {
                            label : "@effect.flags.wfrp4e.dialogTitle",
                            trigger : "dialog",
                            script : `args.fields.slBonus -= 1`,
                            options : {
                                dialog : {
                                    hideScript : "",
                                    activateScript : `return args.data.targets[0]?.name == this.item.flags.wfrp4e?.fearName`
                                }
                            }
                        },
                        {
                            label : "@effect.name",
                            trigger : "immediate",
                            script : `
                            let name = this.item?.flags?.wfrp4e?.fearName
                            this.effect.updateSource({"flags.wfrp4e.dialogTitle" : (name ? game.i18n.format("EFFECT.AffectTheSourceOfFearName", {name}) : game.i18n.format("EFFECT.AffectTheSourceOfFear"))})
                            `
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/surprised.png",
            id: "surprised",
            statuses: ["surprised"],
            name: "WFRP4E.ConditionName.Surprised",
            flags: {
                wfrp4e: {
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "Bonificador a ataques cuerpo a cuerpo",
                            script : `args.fields.modifier += 20`,
                            options : {
                                dialog : {
                                    targeter : true,
                                    hideScript : "return args.item?.system.attackType != 'melee'",
                                    activateScript : "return args.item?.system.attackType == 'melee'"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/unconscious.png",
            id: "unconscious",
            statuses: ["unconscious"],
            name: "WFRP4E.ConditionName.Unconscious",
            flags: {
                wfrp4e: {
                    "value": null
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/conditions/grappling.png",
            id: "grappling",
            statuses: ["grappling"],
            name: "WFRP4E.ConditionName.Grappling",
            flags: {
                wfrp4e: {
                    "value": null
                }
            }

        },
        {
            icon: "systems/wfrp4e/icons/conditions/engaged.png",
            id: "engaged",
            statuses: ["engaged"],
            name: "WFRP4E.ConditionName.Engaged",
            flags: {
                wfrp4e: {
                    applicationData : {},
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.abort = true
                            ui.notifications.error(game.i18n.localize("EFFECT.ShooterEngagedError"))`,
                            options : {
                                dialog : {
                                    hideScript : "return !args.weapon || args.weapon.isMelee || args.weapon.properties.qualities.pistol",
                                    activateScript : "return args.weapon.isRanged && !args.weapon.properties.qualities.pistol"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            icon: "systems/wfrp4e/icons/defeated.png",
            id: "dead",
            statuses: ["dead"],
            name: "WFRP4E.ConditionName.Dead",
            flags: {
                wfrp4e: {
                    "value": null
                }
            }
        }
	]
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
    "endTurn" : "Fin del Turno",
    "startTurn" : "Comienzo del Turno",
    "endRound" : "Fin del Asalto",
    "endCombat" : "Fin del Combate"
}

game.wfrp4e.config.effectPlaceholder = {

    "invoke" : 
    `Este efecto sólo se aplica al pulsar el botón de Invocar. Puede ser asíncrono.
    args:

    ninguno`,
    "oneTime" : 
    `Este efecto ocurre una vez, inmediatamente al aplicar. Puede ser asíncrono.
    args:

    actor : actor propietario del efecto
    `,

    "addItems" : 
    `Como los efectos Inmediatos, ocurre una vez, pero el efecto permanece. También permite al efecto borrar los objetos añadidos cuando el efecto se elimina. Puede ser asíncrono.
    args:
    
    actor : actor propietario del efecto
    `,

    "prefillDialog" : 
    `Este efecto se aplica antes de reproducir el diálogo de tirada, y debería cambiar los valores prellenados en la sección de bonos. Puede ser asíncrono.
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: el objeto del tipo mencionado usado
    options: otros detalles sobre el chequeo (options.rest u options.mutate por ejemplo)
    
    Ejemplo: 
    if (args.type == "skill" && args.item.name == "Atletismo") args.prefillModifiers.modifier += 10`,

    "update" : 
    `este efecto se ejecuta cuando un actor o documento embebido es cambiado. Puede ser asíncrono.
    args:
    item: si un objeto es modificado, se provee como un argumento
    effect: si un efecto es modificado, se provee como un argumento
    `,

    "prePrepareData" : 
    `Este efecto se aplica antes de calcular cualquier dato del actor. No puede ser asíncrono.
    args:

    actor : actor propietario del efecto
    `,

    "prePrepareItems" : 
    `Este efecto se aplica antes de que los objetos se ordenen y calculen. No puede ser asíncrono.

    actor : actor propietario del efecto
    `,

    "prepareData" : 
    `Este efecto se aplica tras calcular y procesar los datos del actor. No puede ser asíncrono.

    args:

    actor : actor propietario del efecto
    `,

    "preWoundCalc" : 
    `Este efecto se aplica justo antes del cálculo de heridas, ideal para cambiar atributos o añadir multiplicadores. No puede ser asíncrono.

    actor : actor propietario del efecto
    sb : Bonificador por Fuerza
    tb : Bonificador por Resistencia
    wpb : Bonificador por Voluntad
    multiplier : {
        sb : Multiplicador de BF
        tb : Multiplicador de BR
        wpb : Multiplicador de BVol
    }

    p.ej. para Recio: "args.multiplier.tb += 1"
    `,

    "woundCalc" : 
    `Este efecto ocurre tras el cálculo de heridas, ideal para multiplicar el resultado. No puede ser asíncrono.

    args:

    actor : actor propietario del efecto
    wounds : heridas calculadas

    p.ej. para Plaga: "wounds *= 5"
    `,

    "calculateSize" : 
    `Este efecto se aplica tras el cálculo de tamaño, que puede ser invalidado. No puede ser asíncrono.
    args:
    size : Valor del tamaño
    p.ej. para Pequeño: "args.size = 'sml'"
    `,

    "preAPCalc" : `Este efecto se aplica antes de calcular los PA. No puede ser asíncrono.
    args:
    AP : Objeto de Armadura
    e.g. args.AP.head.value += 1
    `,
    "APCalc" : `Este efecto se aplica tras calcular los PA. No puede ser asíncrono.
    args:
    AP : Objeto de Armadura
    e.g. args.AP.head.value += 1
    `,

    "preApplyDamage" : 
    `Este efecto ocurre antes de aplicar daño en un chequeo enfrentado. Puede ser asíncrono.
    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    weaponProperties : objeto de cualidades/defectos del arma atacante
    applyAP : si los PA reducen el daño
    applyTB : si la BR reduce el daño
    totalWoundLoss : Total de Heridas Perdidas ANTES DE LAS REDUCCIONES
    AP : Objeto de la PA del defensor
    `,
    
    "applyDamage" : 
    `Este efecto ocurre después calcular el daño en un chequeo enfrentado, pero antes de actualizar los datos del actor. Puede ser asíncrono.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualización de daño
    messageElements : despliegue de secuencias usadas para mostrar cómo se calculó la mitigación de daño
    extraMessages : texto aplicado al final de updateMsg
    `,

    "preTakeDamage" : 
    `Este efecto ocurre antes de recibir daño en un chequeo enfrentado. Puede ser asíncrono.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    weaponProperties : objeto de cualidades/defectos del arma atacante
    applyAP : si PA está reduciendo el daño
    applyTB : si BR está reduciendo el daño
    totalWoundLoss : Pérdida Total de Heridas ANTES DE REDUCCIONES
    AP : objeto de los PA del defensor
    `,
    
    "takeDamage" : 
    `Este efecto ocurre tras calcular el daño en un chequeo enfrentado, pero antes de actualizar los datos del actor. Puede ser asíncrono.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualización de daño
    messageElements : despliegue de secuencias usadas para mostrar cómo se calculó la mitigación de daño
    extraMessages : texto aplicado al final de updateMsg
    `,

    "preApplyCondition" :  
    `Este efecto ocurre antes de aplicar los efectos de una condición. Puede ser asíncrono.

    args:

    effect : condición aplicada
    data : {
        msg : Mensaje de chat sobre la aplicación de la condición
        <otros datos, posiblemente específicos de la condición>
    }
    `,

    "applyCondition" :  
    `Este efecto ocurre tras aplicar los efectos de una condición. Puede ser asíncrono.

    args:

    effect : condición aplicada
    data : {
        msg : Mensaje de chat sobre la aplicación de la condición
        <otros datos, posiblemente específicos de la condición>
    }
    `,
    "prePrepareItem" : 
    `Este efecto se aplica antes de procesar un objeto con datos del actor. No puede ser asíncrono.

    args:

    item : objeto a procesar
    `,

    "prepareItem" : 
    `Este efecto se aplica tras procesar un objeto con datos del actor. No puede ser asíncrono.

    args:

    item : objeto procesado
    `,

    "preRollTest": 
    `Este efecto se aplica antes de calcular un chequeo. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollWeaponTest" :  
    `Este efecto se aplica antes de calcular un chequeo de arma. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollCastTest" :  
    `Este efecto se aplica antes de calcular un chequeo de lanzamiento. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preChannellingTest" :  
    `Este efecto se aplica antes de calcular un chequeo de canalización. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollPrayerTest" :  
    `Este efecto se aplica antes de calcular un chequeo de plegaria. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollTraitTest" :  
    `Este efecto se aplica antes de calcular un chequeo de rasgo. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollTest" : 
    `Este efecto se aplica tras calcular un chequeo. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollIncomeTest" : 
    `Este efecto se aplica tras calcular un chequeo de salario. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollWeaponTest" : 
    `Este efecto se aplica tras calcular un chequeo de arma. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollCastTest" : 
    `Este efecto se aplica tras calcular un chequeo de lanzamiento. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollChannellingTest" : 
    `Este efecto se aplica tras calcular un chequeo de canalización. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollPrayerTest" : 
    `Este efecto se aplica tras calcular un chequeo de plegaria. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollTraitTest" : 
    `Este efecto se aplica tras calcular un chequeo de rasgo. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preOpposedAttacker" : 
    `Este efecto se aplica antes de comenzar el cálculo del resultado de un chequeo enfrentado, como atacante. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "preOpposedDefender" : 
    `Este efecto se aplica antes de comenzar el cálculo del resultado de un chequeo enfrentado, como defensor. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "opposedAttacker" : 
    `Este efecto se aplica tras comenzar el cálculo del resultado de un chequeo enfrentado, como atacante. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "opposedDefender" : 
    `Este efecto se aplica tras comenzar el cálculo del resultado de un chequeo enfrentado, como defensor. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "calculateOpposedDamage" : 
    `Este efecto se aplica durante el cálculo del daño de un chequeo enfrentado. Este efecto se ejecuta en el actor atacante. Puede ser asíncrono.

    args:

    damage : daño inicial antes de multiplicadores
    damageMultiplier : multiplicadores calculado en base a la diferencia de tamaño
    sizeDiff : diferencia numérica de tamaño, que será usada para añadir dañina/impactante
    opposedTest : objeto del chequeo enfrentado,
    addDamaging : si añadir la cualidad Dañina 
    addImpact : si añadir la cualidad Impactante
    `,

    "getInitiativeFormula" : 
    `Este efecto se ejecuta al determinar la iniciativa del actor. No puede ser asíncrono.

    args:

    initiative: Valor calculado de iniciativa
    `,

    "targetPrefillDialog" : 
    `Este efecto se aplica a otro actor cuando hacen objetivo a este actor, y debería cambiar los valores prellenados en la sección de bonos. Puede ser asíncrono.
    
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: el objeto del tipo mencionado usado
    options: otros detalles sobre el chequeo (options.rest u options.mutate por ejemplo)
    
    Ejemplo: 
    if (args.type == "skill" && args.item.name == "Athletics") args.prefillModifiers.modifier += 10`,

    "endTurn" : 
    `Este efecto se ejecuta al final del turno del actor. Puede ser asíncrono.

    args:

    combat: combate actual
    `,

    "startTurn" : 
    `Este efecto se ejecuta al comienzo del turno del actor. Puede ser asíncrono.
    
    args:
    
    combat: combate actual
    `,

    "endRound" :  
    `Este efecto se ejecuta al final del asalto. Puede ser asíncrono.

    args:

    combat: combate actual
    `,
    
    "endCombat" :  
    `Este efecto se ejecuta al terminar el combate. Puede ser asíncrono.

    args:

    combat: combate actual
    `,

    "this" : 
    `
    
    Todos los efectos tienen acceso a: 
        this.actor : actor ejecutando el efecto
        this.effect : efecto ejecutado
        this.item : objeto que posee el efecto, si el efecto proviene de un objeto
    `

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
});