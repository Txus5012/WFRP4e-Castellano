Hooks.once("babele.init", (babele) => {
        babele.register({
            module: 'wfrp4e-castellano',
            lang: 'es',
            dir: 'compendium'
        });

game.babele.registerConverters({

    "array": (list, translations) => {
        if (list.length === 0 || !translations) { return list }

        list = translations;
        return list;
    },

    "duration_range_target": (value) => {  // Hechizos y Plegarias, Rango de munición
        if ( value == "Touch" ) return "Toque";
        if ( value == "You" ) return "Tú";
        if ( value == "Self" ) return "Uno mismo";
        if ( value == "Instant" ) return "Instantáneo";
        if ( value == "Permanent" ) return "Permanente";
        if ( value == "Line of Sight" ) return "Línea de Visión";
        if ( value == "See Text" ) return "Ver texto";
        if ( value == "Special" ) return "Especial";
        if ( value == "special" ) return "Especial";
        if ( value == "Varies" ) return "Varía";
        if ( value == "AoE (Special)" ) return "AdE (Especial)";
        if ( value == "1 with AoE (Willpower Bonus yards)" ) return "1 con AdE (Bonificador por Voluntad yardas)";
        if ( value == "4 Willpower Bonus yards (AoE)" ) return "Bonificador por Voluntad yardas";
        if ( value == "See text" ) return "Ver texto";
        if ( value == "Any ally" ) return "Cualquier aliado";
        if ( value == "a single location" ) return "Un solo lugar";
        if ( value == "see description" ) return "Ver descripción";
        if ( value == "Until sunrise" ) return "Hasta el amanecer";
        if ( value == "Until the next sunrise" ) return "Hasta el siguiente amanecer";
        if ( value == "The spell affects either one of the casters" ) return "El hechizo afecta a cualquiera de los lanzadores";
        if ( value == "One of your Constructs or Familiars" ) return "Uno de tus constructos o familiares";
        if ( value == "Gold Standing Days +SL (see below)" ) return "Tantos días como el Estatus de Oro +NE (ver descripción)";
        if ( value == "1 object" ) return "1 objeto";
        if ( value == "1 object of 1 Encumbrance" ) return "1 objeto (1 Imp.)";
        if ( value == "1 weapon" ) return "1 arma";
        if ( value == "1 fire" ) return "1 fuego";
        if ( value == "1 Forge" ) return "1 forja";
        if ( value == "1 compass" ) return "1 brújula";
        if ( value == "1 pot, jug or flask" ) return "1 olla, jarra o frasco";
        if ( value == "1 (maximum)" ) return "1 (máximo)";
        if ( value == "1 Fenbeast" ) return "1 bestia del cieno";
        if ( value == "Any 1 Fenbeast" ) return "Cualquier bestia del cieno (sólo 1)";
        if ( value == "Any 1 Construct" ) return "A cualquier constructo (sólo 1)";
        if ( value == "Any item" ) return "Cualquier objeto";
        if ( value == "1 building" ) return "1 edificio";
        if ( value == "1 boat or ship" ) return "1 barco o embarcación";
        if ( value == "Random Vortex" ) return "Vórtice aleatorio";
        if ( value == "Willpower Bonus" ) return "Bonificador por Voluntad Asaltos (utilizar la puntuación mayor de Voluntad de los dos participantes).";
        if ( value == "Willpower Bonus hours, days, weeks, or months" ) return "Bonificador por Voluntad horas, días, semanas o meses";
        if ( value == "Target’s Intelligence Bonus rounds" ) return "Bonificador por Inteligencia del objetico asaltos";
        if ( value == "2 * Willpower Bonus rounds" ) return "2 * Bonificador por Voluntad asaltos";
        if ( value == "2 * Willpower Bonus yards" ) return "2 * Bonificador por Voluntad yardas";
        if ( value == "2 * Fellowship Bonus yards" ) return "2 * Bonificador por Empatía yardas";
        if ( value == "2 * Initiative Bonus or Initiative Bonus" ) return "2 * Bonificador por Iniciativa o Bonificador por Iniciativa";
        if ( value == "Willpower / 2 yards" ) return "Voluntad / 2 yardas";
        if ( value == "Half Willpower yards" ) return "Voluntad / 2 yardas";
        if ( value == "Half Initiative yards" ) return "Iniciativa / 2 yardas";
        if ( value == "Half Intelligence yards or Touch" ) return "Inteligencia / 2 yardas o Toque";
        if ( value == "Line of sight" ) return "Línea de visión";
        if ( value == "You or Touch" ) return "Tú o Toque";
        if ( value == "You or 1 (maximum)" ) return "Tú o 1 (máximo)";
        if ( value == "As weapon" ) return "Según arma";
        if ( value == "Half weapon" ) return "Mitad del arma";
        if ( value == "Third weapon" ) return "Tercio del arma";
        if ( value == "Quarter weapon" ) return "Cuarto del arma";
        if ( value == "Twice weapon" ) return "Doble del arma";
        if ( value == "As Weapon" ) return "Según arma";
        if ( value == "Half Weapon" ) return "Mitad del arma";
        if ( value == "Third Weapon" ) return "Tercio del arma";
        if ( value == "Quarter Weapon" ) return "Cuarto del arma";
        if ( value == "Twice Weapon" ) return "Doble del arma";
        var translw = value;
        var re  = /(.*) Bonus (\w*)/i;
        var res = re.exec( value );
        var unit = "";
        var charac = "";
        var characbonus = "";
        if ( res ) { // Test "<charac> Bonus <unit>" pattern
          if ( res[1] ) { // We have charac name, then convert it
            translw = characbonus;
          }
          characbonus = res[1];
          unit = res[2];
        } else { 
          re = /(\d+) (\w+)/i;
          res = re.exec( value );
          if (res) { // Test : "<number> <unit>" pattern
            translw  = res[1];
            unit = res[2];
          } else { // Test 
            re = /(\w+) (\w+)/i;
            res = re.exec( value );
            if (res) { // Test : "<charac> <unit>" pattern
              translw = charac;
              charac  = res[1];
              unit = res[2];
            } 
          }
        }  
        if ( charac == "Weapon Skill") charac = "Habilidad de Armas";
        if ( charac == "Ballistic Skill") charac = "Habilidad de Proyectiles";
        if ( charac == "Strength") charac = "Fuerza";
        if ( charac == "Toughness") charac = "Resistencia";
        if ( charac == "Initiative") charac = "Iniciativa";
        if ( charac == "Agility") charac = "Agilidad";
        if ( charac == "Dexterity") charac = "Destreza";
        if ( charac == "Intelligence") charac = "Inteligencia";
        if ( charac == "Willpower") charac = "Voluntad";
        if ( charac == "WIllpower") charac = "Voluntad";
        if ( charac == "Fellowship") charac = "Empatía";
		if ( charac == "SL") charac = "NE";

        if ( characbonus == "Weapon Skill") charac = "Bonificador por Habilidad de Armas";
        if ( characbonus == "Ballistic Skill") charac = "Bonificador por Habilidad de Proyectiles";
        if ( characbonus == "Strength") charac = "Bonificador por Fuerza";
        if ( characbonus == "Toughness") charac = "Bonificador por Resistencia";
        if ( characbonus == "Initiative") charac = "Bonificador por Iniciativa";
        if ( characbonus == "Intiative") charac = "Bonificador por Iniciativa";
        if ( characbonus == "Agility") charac = "Bonificador por Agilidad";
        if ( characbonus == "Dexterity") charac = "Bonificador por Destreza";
        if ( characbonus == "Intelligence") charac = "Bonificador por Inteligencia";
        if ( characbonus == "Willpower") charac = "Bonificador por Voluntad";
        if ( characbonus == "Fellowship") charac = "Bonificador por Empatía";

        if ( unit == "Round") unit = "Asalto";
        if ( unit == "Rounds") unit = "Asaltos";
        if ( unit == "round") unit = "asalto";
        if ( unit == "rounds") unit = "asaltos";
        if ( unit == "minute") unit = "minuto";
        if ( unit == "minutes") unit = "minutos";
        if ( unit == "Minute") unit = "Minuto";
        if ( unit == "Minutes") unit = "Minutos";
        if ( unit == "hour") unit = "hora";
        if ( unit == "hours") unit = "horas";
        if ( unit == "Hour") unit = "Hora";
        if ( unit == "Hours") unit = "Horas";
        if ( unit == "day") unit = "día";
        if ( unit == "days") unit = "días";
        if ( unit == "Days") unit = "Días";
        if ( unit == "months") unit = "meses";
        if ( unit == "Months") unit = "Meses";
        if ( unit == "years") unit = "años";
        if ( unit == "yard") unit = "yarda";
        if ( unit == "yards") unit = "yardas";
        if ( unit == "Yard") unit = "Yarda";
        if ( unit == "Yards") unit = "Yardas";
        if ( unit == "mile") unit = "milla";
        if ( unit == "miles") unit = "millas";
        if ( unit == "Mile") unit = "Milla";
        if ( unit == "Miles") unit = "Millas";
        if ( unit == "allies") unit = "aliados";
        if ( unit == "Allies") unit = "Aliados";
        if ( unit == "sailing") unit = "barco";
        if ( unit == "Sailing") unit = "Barco";
        translw += charac + " " + unit;
        return translw; 
	},
	
  });
 })

Hooks.on("setup", () => {
	if (game.modules.get("wfrp4e-core") && game.modules.get("wfrp4e-core").active) {
	  if (game.folders.get("FrdgIb0QiKl7cPNJ")) { game.folders.get("FrdgIb0QiKl7cPNJ").name = "Libro Básico" }
	  if (game.folders.get("75mueNHFxgFQDKVr")) { game.folders.get("75mueNHFxgFQDKVr").name = "Libro Básico" }
 	  if (game.folders.get("GzEVcnQg3OwynZ9T")) { game.folders.get("GzEVcnQg3OwynZ9T").name = "Libro Básico" }
 	  if (game.folders.get("sBNF1v9ovsQ5VdNG")) { game.folders.get("sBNF1v9ovsQ5VdNG").name = "Libro Básico" }
 	  if (game.folders.get("8swRurVD2l3fjJF3")) { game.folders.get("8swRurVD2l3fjJF3").name = "Reglas caseras de Moo" }
 	  if (game.folders.get("hbRpwkDO06dl6yY5")) { game.folders.get("hbRpwkDO06dl6yY5").name = "Creación de Personaje" }
 	  if (game.folders.get("eol6GcmRA7Io2NVG")) { game.folders.get("eol6GcmRA7Io2NVG").name = "Ubicación de Impacto" }
 	  if (game.folders.get("RZMc4c3gB7cN5KME")) { game.folders.get("RZMc4c3gB7cN5KME").name = "Libreta del DJ" }
 	  if (game.folders.get("b6PFNJT2yqU43jS2")) { game.folders.get("b6PFNJT2yqU43jS2").name = "Tablas de Carrera" }
 	  if (game.folders.get("wvlmyiitIjcxqo1J")) { game.folders.get("wvlmyiitIjcxqo1J").name = "Tablas de Impactos Críticos" }
 	  if (game.folders.get("IKkKpsHgWQLDRjgY")) { game.folders.get("IKkKpsHgWQLDRjgY").name = "Tablas de Mutación y Corrupción" }
	}

	if (game.modules.get("wfrp4e-uia") && game.modules.get("wfrp4e-uia").active) {
	  if (game.folders.get("y5TuKPB73PHk77tf")) { game.folders.get("y5TuKPB73PHk77tf").name = "¡A las Armas!" }
	  if (game.folders.get("F1AUYScWn7uHEwy3")) { game.folders.get("F1AUYScWn7uHEwy3").name = "¡A las Armas!" }
	  if (game.folders.get("IQmBeG9CO09ouMen")) { game.folders.get("IQmBeG9CO09ouMen").name = "Críticos" }
	  if (game.folders.get("lPwrIEntpaTbP448")) { game.folders.get("lPwrIEntpaTbP448").name = "Asalariado" }
	  if (game.folders.get("vvElJLX5kpGyiNip")) { game.folders.get("vvElJLX5kpGyiNip").name = "Trabajo" }
	}

	if (game.modules.get("wfrp4e-wom") && game.modules.get("wfrp4e-wom").active) {
	  if (game.folders.get("aHacdjaAbp8SImbu")) { game.folders.get("aHacdjaAbp8SImbu").name = "Vientos de la Magia" }
	  if (game.folders.get("lQNYcn2MLkhOfWXy")) { game.folders.get("lQNYcn2MLkhOfWXy").name = "Vientos de la Magia" }
	  if (game.folders.get("CPCVrzbppuFh3C3M")) { game.folders.get("CPCVrzbppuFh3C3M").name = "Personalidad del Familiar" }
	  if (game.folders.get("s1nE91yUqhqPpmpN")) { game.folders.get("s1nE91yUqhqPpmpN").name = "Grimorio" }
	  if (game.folders.get("EXCI9FfGD3SqeDQ7")) { game.folders.get("EXCI9FfGD3SqeDQ7").name = "Marcas" }
	  if (game.folders.get("QJhoMJLhy5eDjsHL")) { game.folders.get("QJhoMJLhy5eDjsHL").name = "Disfunción" }
	  if (game.folders.get("YLG1wiXC1BSEn8e6")) { game.folders.get("YLG1wiXC1BSEn8e6").name = "Otras" }
	  if (game.folders.get("IbuJZ3WEVPY1xNKu")) { game.folders.get("IbuJZ3WEVPY1xNKu").name = "Deterioro en pociones" }
	  if (game.folders.get("I2iilcldXrGJksrs")) { game.folders.get("I2iilcldXrGJksrs").name = "Pergamino" }
	  if (game.folders.get("neCEaarIdZuLeIoM")) { game.folders.get("neCEaarIdZuLeIoM").name = "Símbolo" }
	  if (game.folders.get("CBtcsmGBeFuGFjzN")) { game.folders.get("CBtcsmGBeFuGFjzN").name = "Vórtice" }
	}

	if (game.modules.get("wfrp4e-eis") && game.modules.get("wfrp4e-eis").active) {
	  if (game.folders.get("Oobgkgtyg5YfHyTS")) { game.folders.get("Oobgkgtyg5YfHyTS").name = "El Enemigo en las Sombras" }
	  if (game.folders.get("VewvefWTIRlohEb7")) { game.folders.get("VewvefWTIRlohEb7").name = "El Enemigo en las Sombras" }
	  if (game.folders.get("ktSRAB1Cuyh68udm")) { game.folders.get("ktSRAB1Cuyh68udm").name = "El Enemigo en las Sombras" }
	  if (game.folders.get("cNomE7hTwiKR7Qkz")) { game.folders.get("cNomE7hTwiKR7Qkz").name = "El Enemigo en las Sombras" }
	  if (game.folders.get("RQMja5dMDJoONxFv")) { game.folders.get("RQMja5dMDJoONxFv").name = "El Enemigo en las Sombras" }
	  if (game.folders.get("7xsFaDgshkMm49nU")) { game.folders.get("7xsFaDgshkMm49nU").name = "Aventura" }
	  if (game.folders.get("FB5bioYo0lwQAca2")) { game.folders.get("FB5bioYo0lwQAca2").name = "Aventura" }
	  if (game.folders.get("Yeqx5f1MRwsY2Vdy")) { game.folders.get("Yeqx5f1MRwsY2Vdy").name = "Aventura" }
	  if (game.folders.get("J9sNjxudZtK4iwzL")) { game.folders.get("J9sNjxudZtK4iwzL").name = "Compendio" }
	  if (game.folders.get("vTNWMOmmVwE4Po94")) { game.folders.get("vTNWMOmmVwE4Po94").name = "Compendio" }
	  if (game.folders.get("CvRwHJhAiYrfkRYG")) { game.folders.get("CvRwHJhAiYrfkRYG").name = "Compendio" }
	  if (game.folders.get("w5q0YSuGUlnNIyVE")) { game.folders.get("w5q0YSuGUlnNIyVE").name = "Capítulo 1 - ¡Se buscan aventureros audaces!" }
	  if (game.folders.get("51B5eaMeekTUU5ia")) { game.folders.get("51B5eaMeekTUU5ia").name = "Capítulo 2 - Confusión de identidades" }
	  if (game.folders.get("irzpw0wIKCsCt5ki")) { game.folders.get("irzpw0wIKCsCt5ki").name = "Capítulo 3 - El corazón del Imperio" }
	  if (game.folders.get("o8XB5omFC038Wns5")) { game.folders.get("o8XB5omFC038Wns5").name = "Capítulo 4 - Hacia Bögenhafen" }
	  if (game.folders.get("25pNM3s6l0aeadIa")) { game.folders.get("25pNM3s6l0aeadIa").name = "Capítulo 6 - La Schaffenfest" }
	  if (game.folders.get("N5CabmMkcmYUNLj9")) { game.folders.get("N5CabmMkcmYUNLj9").name = "Capítulo 7 - Hacia la oscuridad" }
	  if (game.folders.get("pDbVvspwJWw3F6Ha")) { game.folders.get("pDbVvspwJWw3F6Ha").name = "Capítulo 8 - La caza de fantasmas" }
	  if (game.folders.get("2lYoZ0bJ8XieVrkR")) { game.folders.get("2lYoZ0bJ8XieVrkR").name = "Capítulo 9 - El peor momento" }
	  if (game.folders.get("mJ9p6pJlDCJ0cku4")) { game.folders.get("mJ9p6pJlDCJ0cku4").name = "Apéndices" }
	  if (game.folders.get("mzrgh64ctXsd8zRa")) { game.folders.get("mzrgh64ctXsd8zRa").name = "Pregenerados" }
	  if (game.folders.get("bf34fpkHjZXyOVRY")) { game.folders.get("bf34fpkHjZXyOVRY").name = "Monturas y vehículos" }
	  if (game.folders.get("SCJdGmWePKRbMDiL")) { game.folders.get("SCJdGmWePKRbMDiL").name = "Guardas de caminos" }
	  if (game.folders.get("3REOhajOw0rRk5Wy")) { game.folders.get("3REOhajOw0rRk5Wy").name = "Chusma de carretera" }
	  if (game.folders.get("2sRCVcdrwUTrRNmx")) { game.folders.get("2sRCVcdrwUTrRNmx").name = "Alborotadores de las poblaciones" }
	  if (game.folders.get("WBWWucClAtZvLHZx")) { game.folders.get("WBWWucClAtZvLHZx").name = "Demonios" }
	  if (game.folders.get("PqsBQxrJqKwDwG1U")) { game.folders.get("PqsBQxrJqKwDwG1U").name = "En la carretera" }
	  if (game.folders.get("lDxgZDjjQlmXa9gt")) { game.folders.get("lDxgZDjjQlmXa9gt").name = "El caso de la joya oculta" }
	  if (game.folders.get("khp4NiSSYztpsjSu")) { game.folders.get("khp4NiSSYztpsjSu").name = "La Feria del Pandemonio" }
	  if (game.folders.get("6wfgpdwb6UcA9HLO")) { game.folders.get("6wfgpdwb6UcA9HLO").name = "Cabeza de bestia" }
	  if (game.folders.get("6G2ZEsymVYS7W5R7")) { game.folders.get("6G2ZEsymVYS7W5R7").name = "Aspecto demoníaco" }
	  if (game.folders.get("6cdhF59J0yBGqT46")) { game.folders.get("6cdhF59J0yBGqT46").name = "Sucesos" }
	  if (game.folders.get("cmU7EFYGygSPWkaI")) { game.folders.get("cmU7EFYGygSPWkaI").name = "El Enemigo en las Sombras" }
	  if (game.folders.get("O506jKlzOPZZebpC")) { game.folders.get("O506jKlzOPZZebpC").name = "Percances" }
	  if (game.folders.get("H0sE2BZDukXUam8p")) { game.folders.get("H0sE2BZDukXUam8p").name = "Física" }
	  if (game.folders.get("5KhfFmseb9BI2Z65")) { game.folders.get("5KhfFmseb9BI2Z65").name = "Tiempo" }
	}

	if (game.modules.get("wfrp4e-lustria") && game.modules.get("wfrp4e-lustria").active) { 
	  if (game.folders.get("0zS6lLSl96ht8RFF")) { game.folders.get("0zS6lLSl96ht8RFF").name = "Creación de Personaje" }
 	  if (game.folders.get("gmv0hDRZUCQqSeIT")) { game.folders.get("gmv0hDRZUCQqSeIT").name = "Encuentros con criaturas ambulantes" }
	}

	if (game.modules.get("wfrp4e-dslf") && game.modules.get("wfrp4e-dslf").active) {
	  if (game.folders.get("oB4Sbqi9zcihhi30")) { game.folders.get("oB4Sbqi9zcihhi30").name = "Pasos Hábiles y Dedos Ligeros" }
	  if (game.folders.get("U3jYz1msfN2O9tf2")) { game.folders.get("U3jYz1msfN2O9tf2").name = "Pasos Hábiles y Dedos Ligeros" }
	  if (game.folders.get("IonZEkPpzJXFEptp")) { game.folders.get("IonZEkPpzJXFEptp").name = "Pasos Hábiles y Dedos Ligeros" }
	  if (game.folders.get("U6vaoEkrAja7kFKQ")) { game.folders.get("U6vaoEkrAja7kFKQ").name = "Robos, argucias y fraude" }
	  if (game.folders.get("BDqLd18iG4VBy3V2")) { game.folders.get("BDqLd18iG4VBy3V2").name = "Contactos delictivos" }
	  if (game.folders.get("0Y5iVNPI60wY9tOk")) { game.folders.get("0Y5iVNPI60wY9tOk").name = "Complicaciones de Empresas" }
	  if (game.folders.get("uBSDC33xk6m5UchV")) { game.folders.get("uBSDC33xk6m5UchV").name = "Tablas de sucesos" }
	  if (game.folders.get("RjZOgiNgPII7iFx9")) { game.folders.get("RjZOgiNgPII7iFx9").name = "Rasgos de forajido" }
	  if (game.folders.get("nzyeAZbzel7icvW9")) { game.folders.get("nzyeAZbzel7icvW9").name = "Cómo encontrar el camino" }
	  if (game.folders.get("481aeeiXOLPVdrU1")) { game.folders.get("481aeeiXOLPVdrU1").name = "La Guardia y cazarrecompensas" }
	}

	if (game.modules.get("wfrp4e-gm-toolkit") && game.modules.get("wfrp4e-gm-toolkit").active) { 
	  if (game.folders.get("8bDNzfl3xQr6W9a2")) { game.folders.get("8bDNzfl3xQr6W9a2").name = "Cajas de herramientas" }
	}
})

Hooks.on("aa.getRequiredData",(data)=>{
const originalName = data.item.flags.babele.originalName
if (originalName) { data.overrideNames.push(originalName) }
})