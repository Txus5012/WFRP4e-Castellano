Hooks.once("setup", async function () {

WFRP5E.systemEffects = {
    momentum: {
        name: "NAME.Momentum",
        img: "systems/wfrp4e/icons/conditions/momentum.png",
        statuses: ["momentum"],
        system: {
            transferData: {},
            scriptData: [
                {
                    label: "Ventaja en Chequeos de Cuerpo a cuerpo",
                    trigger: "dialog",
                    script: `args.fields.advantage++`,
                    options: {
                            hideScript: `return args.fields.characteristic != "ws"`,
                            activateScript: `return args.fields.characteristic == "ws"`
                    }
                },
                {
                    label: "Eliminar",
                    trigger: "endCombat",
                    script: `this.actor.update({"system.status.momentum" : false});`,
                },
                {
                    label: "Recibir daño",
                    trigger: "takeDamage",
                    script: `if (args.totalWoundLoss) this.actor.update({"system.status.momentum" : false});`
                },
                {
                    label: "Fallar chequeo de ataque",
                    trigger: "opposedAttacker",
                    script: `if (args.opposedTest.result.winner == "defender" && args.attackerTest.item?.system.isMelee) this.actor.update({"system.status.momentum" : false});`
                },
                {
                    label: "Fallar chequeo defensivo",
                    trigger: "opposedAttacker",
                    script: `if (args.opposedTest.result.winner == "attacker" && args.defenderTest.item?.system.isMelee) this.actor.update({"system.status.momentum" : false});`
                },
                {
                    label: "Obtener un Estado",
                    trigger: "updateDocument",
                    script: `if (args.type == "effect" && args.options.action == "create" && args.document.isCondition)
                        {
                            this.actor.update({"system.status.momentum" : false});
                        }
                        `
                }
            ]
        }
    },
    channelling: {
        name: "NAME.Channelling",
        img: "modules/wfrp4e-core/art/magic/winds.webp",
        statuses: ["channelling"],
        system: {
            transferData: {},
            scriptData: [
                {
                    label: "NE canalizados",
                    trigger: "dialog",
                    script: `args.fields.SL += args.actor.system.status.channelling.value`,
                    options: {
                            hideScript: `return !args.spell || !args.spell.system.usesWind(this.effect.getFlag("wfrp4e", "wind"))`,
                            activateScript: `return true;`,
                            submissionScript: `args.context.flags.channelled = args.actor.system.status.channelling.value; args.actor.update(args.actor.system.status.channelling.clear());`
                    }
                }
            ]
        }
    }
}

WFRP5E.PrepareSystemItems = function() {

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
                                    label : "Atacando objetivo con Miedo",
                                    trigger : "dialog",
                                    script : `args.fields.advantage++;`,
                                    options : {
                                        targeter: true,
                                        hideScript : "",
                                        activateScript : `return [args.actor.name, args.actor.prototypeToken.namae].includes(this.item.flags.wfrp4e?.fearName);`
                                    }
                                },
                                {
                                    label : "@effect.name",
                                    trigger : "immediate",
                                    script : `
                                    let name = this.item?.flags?.wfrp4e?.fearName
                                    if (name)
                                    {
                                        this.item.updateSource({name : this.item.setSpecifier(name)});
                                    }
                                    `
                                },
                                {
                                    trigger: "endTurn",
                                    label: "Chequeo para eliminar Miedo",
                                    script: `
                                        await this.actor.setupExtendedTest(this.effect.item, {
                                            fields: {difficulty: "challenging"}, 
                                            skipTargets: true, 
                                            appendTitle :  \` - \${this.effect.name}\`, 
                                        });
                                    `,
                                },
                                {
                                    trigger: "preUpdateDocument",
                                    label: "Prevenir ganancia de Momentum",
                                    script: `
                                    if (args.type != "data")
                                        return
                                    let momentum = foundry.utils.getProperty(args.data, "system.status.momentum")
                                    if (momentum)
                                    {
                                        args.data.system.status.momentum = false;
                                        this.script.notification("No puede ganar Momentum");
                                    }

                                    `
                                }
                            ]
                        }
                }]

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
    })

    foundry.utils.mergeObject(this.propertyEffects, {
        parry: {
            name : game.i18n.localize("PROPERTY.Parry"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : "Ignorar penalizador por mano torpe",
                    trigger : "dialog",
                    script : "",
                    options : {
                        activateScript : "",
                        hideScript : "if (args.actor.attacker) args.ignoreModifiers.add('offhand'); return true;"
                    }
                }]
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
        engineering: {
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
                    label : "Explosiva",
                    trigger : "rollWeaponTest",
                    script : "if (args.test.succeeded) args.test.result.other.push(`<a class='content-link' data-action='placeTemplate' data-type='radius'><i class='fas fa-ruler-combined'></i>${this.item.properties.qualities.blast.value} yard Blast</a>`)",
                },
                {
                    label : "Daño",
                    trigger : "computeDamage",
                    script : `
                    delete args.damage.SL; // Might necessitate some sort of ordering to make sure this happens before damaging?
                    `
                }
            ]
            }
        },
        damaging: {
            name : game.i18n.localize("PROPERTY.Damaging"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
                scriptData : [{
                    label : "Daño",
                    trigger : "computeDamage",
                    script : `
                    let ones = parseInt(args.test.result.roll.toString().split("").pop());
                    if (ones == 0)
                    {
                        ones = 10;
                    }
                    if (ones > (args.damage.SL?.value || 0))
                    {
                        delete args.damage.SL;
                        args.damage.damaging = {label: this.effect.name, value: ones};
                    }
                    `
                }]
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
                    label : "Defensiva",
                    trigger : "dialog",
                    script : "if (!args.flags.defensive) { args.fields.SL++; args.flags.defensive = true; }",
                    options : {
                        activateScript : "return args.actor.attacker",
                        hideScript : "return !args.actor.attacker"
                    }
                }]
            }
        },
        inflict: {
            name : game.i18n.localize("PROPERTY.Inflict"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item",
                },
                scriptData : [{
                    label : "Enmarañante",
                    trigger : "applyDamage",
                    script : "args.actor.addCondition(this.effect.specifier?.slugify());"
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
                scriptData : [{
                    label : "Traspasante",
                    trigger : "opposedAttacker",
                    script : `
                        if (args.opposedTest.result.winner == "attacker")
                            args.opposedTest.addAction({label: "Aplicar Traspasante", scriptIndex: 1, effectPath: "system.properties.qualities.hack.effect", itemUuid: this.item.uuid });
                        `,
                },
                {
                    label : "Aplicar Traspasante",
                    trigger : "",
                    async: true,
                    script : "if (!args.opposedTest.defenderTest.actor.isOwner)\n  return ui.notifications.error(\"ErrorArmourDamagePermission\", { localize: true })\n\nlet loc = args.opposedTest.result.hitloc.value\nlet armour = args.opposedTest.defenderTest.actor.physicalNonDamagedArmourAtLocation(loc);\nif (armour.length) {\n  let chosen = await ItemDialog.create(armour, 1, { text: game.i18n.localize(\"DIALOG.ChooseArmour\"), title: this.effect.name });\n  if (chosen[0]) {\n    chosen[0].system.damageItem(1, [loc])\n    ChatMessage.create({ content: `<p>${game.i18n.format(\"CHAT.DamageToArmour\", { item: `@UUID[${chosen[0].uuid}]{${chosen[0].name}}`, type: this.effect.name })}</p>`, speaker: ChatMessage.getSpeaker({ actor: args.opposedTest.attackerTest.actor }) })\n  }\n}\nelse {\n  return ui.notifications.error(\"ErrorNoArmourToDamage\", { localize: true })\n}",
                }
            ]
            }
        },
        impale: {
            name : game.i18n.localize("PROPERTY.Impale"),
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : "Crítico",
                    trigger : "computeCriticalFumble",
                    script : `
                        if (args.test.result.roll % 10 == 0 && args.test.succeeded)
                        {
                            args.test.result.critical = true;
                        }
                        `,
                }]
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
                scriptData : [{
                    label : "Perforante",
                    trigger : "preApplyDamage",
                    script : `
                    let value = Number(this.effect.flags.wfrp4e.value) || 2;
                    args.modifiers.ap.ignore += value; 
                    args.modifiers.ap.details.push("Perforante - Ignora " + value);
                    `
                }]
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
                    label : "Precisa", // TODO
                    trigger : "dialog",
                    script : "",
                    options : {
                        hideScript : "return true;",
                        activateScript : ""
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
                scriptData : [{
                    label : "Contundente",
                    trigger : "preApplyDamage",
                    script : `
                    if (args.loc == "head" && args.totalWoundLoss >= args.actor.system.characteristics.tb.value);
                    {
                        args.actor.addCondition("stunned");
                    }
                    `
                }]
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
                scriptData : [{
                    label : "Penalizador por Envolvente",
                    trigger : "dialog",
                    script : `args.fields.SL--;`,
                    options: {
                        hideScript: "return !args.weapon;",
                        activateScript: "return args.weapon;"
                    }
                }]
            }
        },




        // Flaws
        dangerous: {
            name : game.i18n.localize("PROPERTY.Dangerous"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : "Pifia",
                    trigger : "computeCriticalFumble",
                    script : "if (args.test.result.roll.toString().includes(\"9\") && args.test.failed)\n{\n    args.test.result.fumble = true;\n    args.test.result.other.push({label: this.effect.name, description: '¡Pifia!'})\n}",
                }]
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
                    label : "Penalizador al ataque",
                    trigger : "dialog",
                    script : "args.fields.slBonus -= 1;",
                    options : {
                        hideScript : "return args.actor.attacker;",
                        activateScript : "return true;"
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
        unbalanced: {
            name : game.i18n.localize("PROPERTY.Unbalanced"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : "Penalizador a la defensa",
                    trigger : "dialog",
                    script : "args.fields.slBonus -= 1;",
                    options : {
                        hideScript : "return !args.actor.attacker;",
                        activateScript : "return true;"
                    }
                }]
            }
        },
        undamaging: {
            name : game.i18n.localize("PROPERTY.Undamaging"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : "Doble PA",
                    trigger : "preApplyDamage",
                    script : `
                        Object.values(args.armour).forEach(a => a.value *= 2);
                        args.modifiers.minimumOne = false;
                        args.modifiers.ap.details.push("Inofensiva - PA doblados");
                        `,
                }]
            }
        },


        // ------------- ARMOUR -------------

        partial: {
            name : game.i18n.localize("PROPERTY.Partial"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : "Ignora PA",
                    trigger : "preTakeDamage",
                    script : `
                        if (args.armour[this.item.id])
                        {
                            args.armour[this.item.id].ignored = args.sourceTest.result.hitloc.roll % 2 == 0; // Ignore if even hit location
                            args.armour[this.item.id].tooltip = this.effect.name;
                        }
                        `,
                }]
            }
        },
        weakpoints: {
            name : game.i18n.localize("PROPERTY.Weakpoints"), 
            img : "systems/wfrp4e/icons/blank.png",
            system : {
                transferData : {
                    documentType : "Item"
                },
                scriptData : [{
                    label : "Ignora PA",
                    trigger : "preTakeDamage",
                    script : `
                        if (args.armour[this.item.id] && args.weaponProperties.qualities.impale && args.sourceTest.result.critical)
                        {
                            args.armour[this.item.id].ignored = true;
                            args.armour[this.item.id].tooltip = this.effect.name;
                        }
                        `,
                }]
            }
        }
    });

    this.statusEffects = [
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
                        script: `let uiaBleeding = game.settings.get("wfrp4e", "uiaBleeding");
                            let actor = this.actor;
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
                                addBleedingUnconscious = async () => {
                                    await actor.addCondition("unconscious")
                                    msg += "<br>" + game.i18n.format("BleedUnc", {name: actor.prototypeToken.name })
                                }
                                if (uiaBleeding) {
                                    test = await actor.setupSkill(game.i18n.localize("NAME.Endurance"), {appendTitle : " - " + this.effect.name, skipTargets: true, fields : {difficulty : "challenging"}});
                                    await test.roll();
                                    if (test.failed) {
                                        await addBleedingUnconscious();
                                    }
                                } else {
                                    await addBleedingUnconscious();
                                }
                            }
    
                            if (actor.hasCondition("unconscious"))
                            {
                                bleedingAmt = effect.conditionValue;
                                bleedingRoll = (await new Roll("1d10").roll()).total;
                                if (bleedingRoll == 10)
                                {
                                    msg += "<br>" + game.i18n.format("BleedCrit", { name: actor.prototypeToken.name } ) + " (" + game.i18n.localize("Rolled") + bleedingRoll + ")"
                                    await actor.removeCondition("bleeding")
                                }
                                else if (bleedingRoll <= bleedingAmt)
                                {
                                    msg += "<br>" + game.i18n.format("BleedFail", {name: actor.prototypeToken.name}) + " (" + game.i18n.localize("Rolled") + " " + bleedingRoll + ")";
                                    await actor.addCondition("dead")
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
                        script: `args.fields.SL -= 1 * this.effect.conditionValue`,
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
                            let msg = "<strong>Fórmula</strong>: @FORMULA"
    
                            let scriptArgs = {msg, formula}
                            await Promise.all(this.actor.runScripts("preApplyCondition", {effect : this.effect, data : scriptArgs}));
                            formula = scriptArgs.formula;
                            msg = scriptArgs.msg;
                            let roll = await new Roll(formula, this).roll({allowInteractive : false});
                            let terms = roll.terms.map(i => (i instanceof foundry.dice.terms.Die ? (i.formula + " (" + i.total + ")") : (i.total))).join("")
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
            description : "WFRP4E.Conditions.Stunned",
            system: {
                condition : {
                    value : 1,
                    numbered: true
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Penalizador a todos los Chequeos (@effect.name)",
                        script: `args.fields.SL -= 1 * this.effect.conditionValue`,
                        options: {
                            activateScript: "return true"
                        }
                    },
                    {
                        trigger: "prePrepareData",
                        label: "Mitad de Movimiento",
                        script: `args.actor.system.details.move.value /= 2`
                    },
                    {
                        trigger: "updateDocument",
                        label: "Añadir Inconsciente",
                        script: `if (this.actor.hasCondition("stunned")?.conditionValue > this.actor.system.characteristics.t.bonus) this.actor.addCondition("unconscious");`
                    },
                    {
                        trigger: "endRound",
                        label: "Chequeo para eliminar Aturdido",
                        script: `
    const test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields: {difficulty: "challenging"}, skipTargets: true, appendTitle :  \` - \${this.effect.name}\`, context: {success: "Eliminados NE + 1 Estados.", failure: "Fallo al eliminar Estados."}});
    await test.roll();
    if (test.succeeded) {
    const toRemove = 1 + Number(test.result.SL);
    this.actor.removeCondition("stunned", toRemove);
    }
                    `,
                    },
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
                        script: `args.fields.SL -= 1 * this.effect.conditionValue`,
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
                        script: `args.fields.SL -= 1 * this.effect.conditionValue`,
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
                        label: "Chequeos cuerpo a cuerpo o chequeos relacionados con la vista",
                        script: `args.fields.disadvantage++`,
                        options: {
                                activateScript: "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                        }
                    },
                    {
                        trigger: "dialog",
                        label: "No puede realizar chequeos A distancia",
                        script: `args.fields.disadvantage++`,
                        options: {
                                hideScript: "if (['bs'].includes(args.characteristic)) {args.abort = true; this.script.notification('Cannot perform Ranged attacks!');} return true;"
                        }
                    },
                    {
                        trigger: "dialog",
                        label: "Ventaja contra Cegado",
                        script: `args.fields.advantage++`,
                        options: {
                                targeter: true,
                                hideScript: "return args.item?.attackType != 'melee' || args.actor.hasCondition('blinded')",
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
                        script: `args.fields.SL -= 1 * this.effect.conditionValue`,
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
                        label: "Desventaja en movimiento de cualquier tipo",
                        script: `args.fields.disadvantage++;`,
                        options: {
                                activateScript: "return ['ws', 'bs', 'ag'].includes(args.characteristic)"
                        }
                    },
                    {
                        trigger: "dialog",
                        label: "Ventaja para atacar a Tumbado",
                        script: `args.fields.advantage++;`,
                        options: {
                            targeter: true,
                            hideScript: "return !args.item?.system.isMelee",
                            activateScript: "return args.item?.system.isMelee"
                        }
                    }
                ]
            }
        },
        {
            img: "systems/wfrp4e/icons/conditions/besmirched.png",
            id: "besmirched",
            statuses: ["besmirched"],
            name: "WFRP4E.ConditionName.Besmirched",
            description : "WFRP4E.Conditions.besmirched",
            system: {
                condition : {
                    value : null,
                    numbered: false
                },
                scriptData: [
                    {
                        trigger: "dialog",
                        label: "Desventaja en chequeos de Empatía",
                        script: `args.fields.disadvantage++;`,
                        options: {
                            hideScript: `args.fields.characteristic != "fel"`,
                            activateScript: `args.fields.characteristic == "fel"`,
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
                        label: "Bonificador para atacar a Sorprendido",
                        script: `args.fields.SL += 2`,
                        options: {
                            targeter: true,
                            hideScript: "return !args.item?.system.isMelee",
                            activateScript: "return args.item?.system.isMelee"
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
            },
            flags: {
                core: {
                    overlay: true
                }
            }
        }
    ]
}

})