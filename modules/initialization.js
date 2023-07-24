Hooks.on("setup", () => {
    game.settings.register("wfrp4e-core", "initialized", {
        name: "Initialization",
        scope: "world",
        config: false,
        default: false,
        type: Boolean
    });

    game.settings.registerMenu("wfrp4e-core", "init-dialog", {
        name: "WFRP4e Content Setup",
        label: "Setup",
        hint: "Import or update the content from the WFRP4e Core Module",
        type: WFRP4eCoreInitWrapper,
        restricted: true
    })
})

Hooks.on("renderCompendiumDirectory", async () => {
    if (game.packs.get("wfrp4e-core.trappings")) {
        game.packs.delete("wfrp4e.basic")
        ui.sidebar.element.find("[data-pack='wfrp4e.basic']").remove()
    }
})

class WFRP4eCoreInitWrapper extends FormApplication {
    render() {
        new WFRP4eContentInitialization().render(true);
    }
}

class WFRP4eContentInitialization extends Dialog {
    constructor() {
        super({
            title: "Inicialización del Contenido de WFRP4e",
            content:
                `<img src="/modules/wfrp4e-core/art/ui/logo.webp" style="margin-right: auto;margin-left: auto;width: 40%;display: block;"/>
            <p class="notes">¿Inicializar el Módulo de Contenido de WFRP4e?<br><br>Importa o actualiza todos los Diarios y Escenas en tu mundo, los ordena en carpetas, y coloca notas en los mapas</p>
            <ul>
            <li>131 Entradas de Diario (Trasfondo y Reglas)</li>
            <li>19 Carpetas que organizan las entradas anteriores</li>
            <li>3 Escenas - Incluyendo el Mapa de Reikland con Anotaciones</li>
            </ul>
            <p class="notes">
            Warhammer Fantasy Roleplay 4th Edition Core Module.<br><br>

            No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form by any means, electronic, mechanical, photocopying, recording or otherwise without the prior permission of the publishers.<br><br>
            
            Warhammer Fantasy Roleplay 4th Edition © Copyright Games Workshop Limited 2020. Warhammer Fantasy Roleplay 4th Edition, the Warhammer Fantasy Roleplay 4th Edition logo, GW, Games Workshop, Warhammer, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Cubicle 7 Entertainment and the Cubicle 7 Entertainment logo are trademarks of Cubicle 7 Entertainment Limited. All rights reserved.<br><br>
            
            <img src="modules/wfrp4e-core/c7.png" height=50 width=50/>   <img src="modules/wfrp4e-core/warhammer.png" height=50 width=50/>
            <br>
            Published by: <b>Cubicle 7 Entertainment Ltd</b><br>
            Foundry Edition by <b>Russell Thurman (Moo Man)</b><br>
            Special thanks to: <b>Games Workshop, Fatshark</b><br><br>
            
            <a href="mailto: info@cubicle7games.com">info@cubicle7games.com</a>`,
            module: game.modules.get("wfrp4e-core"),
            buttons: {
                initialize: {
                    label: "Inicializar",
                    callback: async () => {
                        game.settings.set("wfrp4e-core", "initialized", true)
                        await this.initialize()
                        ui.notifications.notify(this.data.module.title + ": Inicialización Completada")
                    }
                },
                update: {
                    label: "Actualizar",
                    callback: async () => {
                        let updater = await game.wfrp4e.apps.ModuleUpdater.create(game.modules.get("wfrp4e-core"), this)
                        updater.render(true)
                    }
                },
                delete : {
                    label: "Borrar",
                    callback: async () => {
                        this.deleteModuleContent("wfrp4e-core");
                    }
                },
                no: {
                    label: "No",
                    callback: () => {
                        game.settings.set("wfrp4e-core", "initialized", true)
                        ui.notifications.notify("Inicialización Saltada.")
                    }
                }
            }
        })

        this.folders = {
            "Scene": {},
            "Item": {},
            "Actor": {},
            "JournalEntry": {},
	    "RollTable" : {}
        }

        this.journals = {};
        this.actors = {};
        this.scenes = {};
	this.tables = {};
        this.moduleKey = "wfrp4e-core"
    }

    async initialize() {
        return new Promise((resolve) => {
            fetch(`modules/wfrp4e-castellano/modules/initialization.json`).then(async r => r.json()).then(async json => {
                let createdFolders = await Folder.create(json)
                for (let folder of createdFolders)
                    this.folders[folder.type][folder.name] = folder;

                for (let folderType in this.folders) {
                    for (let folder in this.folders[folderType]) {

                        let parent = this.folders[folderType][folder].getFlag(this.moduleKey, "initialization-parent")
                        if (parent) {
                            let parentId = this.folders[folderType][parent].id
                            await this.folders[folderType][folder].update({ parent: parentId })
                        }
                    }
                }

                await this.initializeDocuments()
                resolve()
            })
        })
    }

    async initializeDocuments() {

        let packList = this.data.module.flags.initializationPacks

        for (let pack of packList) {
            let documents = await game.packs.get(pack).getDocuments();
            for (let document of documents) {
                let folder = document.getFlag(this.moduleKey, "initialization-folder")
                if (folder)
                    document.updateSource({ "folder": this.folders[document.documentName][folder].id })
                if (document.getFlag(this.moduleKey, "sort"))
                    document.updateSource({ "sort": document.flags[this.moduleKey].sort })
            }
            switch (documents[0].documentName) {
                case "Actor":
                    ui.notifications.notify(this.data.module.title + ": Inicializando Actores")
                    await this.createOrUpdateDocuments(documents, game.actors)
                    break;
                case "Item":
                    ui.notifications.notify(this.data.module.title + ": Inicializando Objetos")
                    await this.createOrUpdateDocuments(documents, game.items)
                    break;
                case "JournalEntry":
                    ui.notifications.notify(this.data.module.title + ": Inicializando Diarios")
                    this.createOrUpdateDocuments(documents, game.journal)
                    break;
		case "RollTable":
                    ui.notifications.notify(this.data.module.title + ": Inicializando Tablas")
                    await this.createOrUpdateDocuments(documents, game.tables)
                    break;
                case "Scene":
                    ui.notifications.notify(this.data.module.title + ": Inicializando Escenas")
                    await this.createOrUpdateDocuments(documents, game.scenes)
                    break;
                }
            }
        }

    async createOrUpdateDocuments(documents, collection, )
    {
        let existingDocuments = documents.filter(i => collection.has(i.id))
        let newDocuments = documents.filter(i => !collection.has(i.id))
        await collection.documentClass.create(newDocuments)
        if (existingDocuments.length)
        {
            game.wfrp4e.utility.log("Pre Existing Documents: ", null, {args : existingDocuments})
            existingDocuments = await new Promise(resolve => new ModuleDocumentResolver(existingDocuments, {resolve}).render(true));
            game.wfrp4e.utility.log("Post Existing Documents: ", null, {args : existingDocuments})
        }
        for (let doc of existingDocuments)
        {
            let existing = collection.get(doc.id)
            await existing.update(doc.toObject())
            ui.notifications.notify(`Actualizado documento existente ${doc.name}`)
        }
    }
	

    async deleteModuleContent(id)
    {
        let proceed = await Dialog.confirm({
            title : game.i18n.localize("UPDATER.DeleteModuleContent"),
            content : game.i18n.format("UPDATER.DeleteModuleContentPrompt", {id}),
            yes : () => {return true},
            no : () => {return false},
        })
        if (proceed)
        {
            ui.notifications.notify(this.data.module.title + ": Borrando Escenas")
            let moduleScenes = game.scenes.filter(doc => doc.flags[id]);
            moduleScenes.forEach(doc => {
                doc.folder?.folder?.delete();
                doc.folder?.delete()})
            Scene.deleteDocuments(moduleScenes.map(doc => doc.id));

            ui.notifications.notify(this.data.module.title + ": Borrando Actores")
            let moduleActors = game.actors.filter(doc => doc.flags[id] && !doc.hasPlayerOwner)
            moduleActors.forEach(doc => {
                doc.folder?.folder?.delete();
                doc.folder?.delete()})
            Actor.deleteDocuments(moduleActors.map(doc => doc.id));

            ui.notifications.notify(this.data.module.title + ": Borrando Objetos")
            let moduleItems = game.items.filter(doc => doc.flags[id])
            moduleItems.forEach(doc => {
                doc.folder?.folder?.delete();
                doc.folder?.delete()})
            Item.deleteDocuments(moduleItems.map(doc => doc.id));

            ui.notifications.notify(this.data.module.title + ": Borrando Diarios")
            let moduleJournals = game.journal.filter(doc => doc.flags[id])
            moduleJournals.forEach(doc => {
                doc.folder?.folder?.delete();
                doc.folder?.delete()})
            JournalEntry.deleteDocuments(moduleJournals.map(doc => doc.id));

            ui.notifications.notify(this.data.module.title + ": Borrando Tablas")
            let moduleTables = game.tables.filter(doc => doc.flags[id])
            moduleTables.forEach(doc => {
                doc.folder?.folder?.delete();
                doc.folder?.delete()})
            RollTable.deleteDocuments(moduleTables.map(doc => doc.id));
        }
    }
}

class WFRP4eContentInitializationSetup {

    static async setup() {
        WFRP4eContentInitializationSetup.displayFolders()
        WFRP4eContentInitializationSetup.setFolderFlags()
        WFRP4eContentInitializationSetup.setSceneNotes();
        WFRP4eContentInitializationSetup.setEmbeddedEntities()
    }

    static async displayFolders() {
        let array = [];
        game.folders.entities.forEach(async f => {
            if (f.data.parent)
                await f.setFlag("wfrp4e-core", "initialization-parent", game.folders.get(f.data.parent).data.name)
        })
        game.folders.entities.forEach(f => {
            array.push(f.data)
        })
        console.log(JSON.stringify(array))
    }

    static async setFolderFlags() {
        for (let actor of game.actors.entities)
            await actor.update({ "flags.wfrp4e-core": { "initialization-folder": game.folders.get(actor.data.folder).data.name, sort: actor.data.sort } })
        for (let item of game.items.entities)
            await item.update({ "flags.wfrp4e-core": { "initialization-folder": game.folders.get(item.data.folder).data.name, sort: item.data.sort } })
        for (let journal of game.journal.entities)
            await journal.update({ "flags.wfrp4e-core": { "initialization-folder": game.folders.get(journal.data.folder).data.name, sort: journal.data.sort } })
    }

    static async setSceneNotes() {
        for (let scene of game.scenes.entities)
            if (scene.data.journal)
                await scene.setFlag("wfrp4e-core", "scene-note", game.journal.get(scene.data.journal).data.name)
    }


    static async setEmbeddedEntities() {
        for (let scene of game.scenes.entities) {
            let notes = duplicate(scene.data.notes)
            for (let note of notes) {
                setProperty(note, "flags.wfrp4e-core.initialization-entryName", game.journal.get(note.entryId).data.name)
            }
            let tokens = duplicate(scene.data.tokens)
            for (let token of tokens) {
                setProperty(token, "flags.wfrp4e-core.initialization-actorName", game.actors.get(token.actorId).data.name)
            }
            await scene.update({ notes: notes, tokens: tokens })
        }
    }
}