Hooks.on("renderCompendiumDirectory", async () => {
	if (game.folders.getName("Core Rulebook")) {
		await game.folders.getName("Core Rulebook").update({"name":  "Libro Básico"  })
		await game.folders.getName("Core Rulebook").update({"name":  "Libro Básico"  })
		await game.folders.getName("Core Rulebook").update({"name":  "Libro Básico"  })
		await game.folders.getName("Moo's Homebrew").update({"name":  "Reglas caseras de Moo"  })
		await game.folders.getName("Corruption & Mutation Tables").update({"name":  "Tablas de Mutación y Corrupción"  })
		await game.folders.getName("Hit Location").update({"name":  "Ubicación de Impacto"  })
		await game.folders.getName("GM Booklet").update({"name":  "Libreta del DJ"  })
		await game.folders.getName("Character Creation").update({"name":  "Creación de Personaje"  })
		await game.folders.getName("Career Tables").update({"name":  "Tablas de Carrera"  })
		await game.folders.getName("Core Rulebook").update({"name":  "Libro Básico"  })
		await game.folders.getName("Critical Hit Tables").update({"name":  "Tablas de Impactos Críticos"  })
	}
	if (game.folders.getName("Up In Arms")) {
		await game.folders.getName("Up In Arms").update({"name":  "¡A las Armas!"  })
		await game.folders.getName("Up In Arms").update({"name":  "¡A las Armas!"  })
		await game.folders.getName("Criticals").update({"name":  "Críticos"  })
		await game.folders.getName("Hireling").update({"name":  "Asalariado"  })
		await game.folders.getName("Job").update({"name":  "Trabajo"  })
	}

	if (game.folders.getName("Toolboxes")) {
		await game.folders.getName("Toolboxes").update({"name":  "Cajas de herramientas"  })
	}
})