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
        if ( value == "Instante" ) return "Instantáneo";
        if ( value == "Line of Sight" ) return "Línea de Visión";
        if ( value == "See Text" ) return "Ver texto";
        if ( value == "Special" ) return "Especial";
        if ( value == "special" ) return "Especial";
        if ( value == "Varies" ) return "Varía";
        if ( value == "AoE (Special)" ) return "AdE (Especial)";
        if ( value == "1 with AoE (Willpower Bonus yards)" ) return "1 con AdE (Bonificador por Voluntad yardas)";
        if ( value == "4 Willpower Bonus yards (AoE)" ) return "4 * AdE (Bonificador por Voluntad yardas)";
        if ( value == "See text" ) return "Ver texto";
        if ( value == "Any ally" ) return "Cualquier aliado";
        if ( value == "a single location" ) return "Un solo lugar";
        if ( value == "see description" ) return "Ver descripción";
        if ( value == "Until sunrise" ) return "Hasta el amanecer";
        if ( value == "Until the next sunrise" ) return "Hasta el siguiente amanecer";
        if ( value == "The spell affects either one of the casters" ) return "El hechizo afecta a cualquiera de los lanzadores";
        if ( value == "One of your Constructs or Familiars" ) return "Uno de tus constructos o familiares";
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
	if (game.folders.getName("Moo's Homebrew")) {
	  game.folders.getName("Core Rulebook").name = "Libro Básico"
	  game.folders.getName("Core Rulebook").name = "Libro Básico"
 	  game.folders.getName("Core Rulebook").name = "Libro Básico"
 	  game.folders.getName("Core Rulebook").name = "Libro Básico"
 	  game.folders.getName("Moo's Homebrew").name = "Reglas caseras de Moo"
 	  game.folders.getName("Character Creation").name = "Creación de Personaje"
 	  game.folders.getName("Hit Location").name = "Ubicación de Impacto"
 	  game.folders.getName("GM Booklet").name = "Libreta del DJ"
 	  game.folders.getName("Career Tables").name = "Tablas de Carrera"
 	  game.folders.getName("Critical Hit Tables").name = "Tablas de Impactos Críticos"
 	  game.folders.getName("Corruption & Mutation Tables").name = "Tablas de Mutación y Corrupción"
	}

	if (game.folders.getName("Job")) {
	  game.folders.getName("Up In Arms").name = "¡A las Armas!"
	  game.folders.getName("Up In Arms").name = "¡A las Armas!"
	  game.folders.getName("Up In Arms").name = "¡A las Armas!"
	  game.folders.getName("Criticals").name = "Críticos"
	  game.folders.getName("Hireling").name = "Asalariado"
	  game.folders.getName("Job").name = "Trabajo"
	}

	if (game.folders.getName("Potion Spoilage")) {
	  game.folders.getName("Winds of Magic").name = "Vientos de la Magia"
	  game.folders.getName("Winds of Magic").name = "Vientos de la Magia"
	  game.folders.getName("Winds of Magic").name = "Vientos de la Magia"
	  game.folders.getName("Familiar Personality").name = "Personalidad del Familiar"
	  game.folders.getName("Grimoire").name = "Grimorio"
	  game.folders.getName("Marks").name = "Marcas"
	  game.folders.getName("Miscast").name = "Disfunción"
	  game.folders.getName("Other").name = "Otras"
	  game.folders.getName("Potion Spoilage").name = "Deterioro en pociones"
	  game.folders.getName("Scroll").name = "Pergamino"
	  game.folders.getName("Symbol").name = "Símbolo"
	  game.folders.getName("Vortex").name = "Vórtice"
	}

	if (game.folders.getName("Wandering Creature Encounters")) { 
	  game.folders.getName("Character Creation").name = "Creación de Personaje"
 	  game.folders.getName("Wandering Creature Encounters").name = "Encuentros con criaturas ambulantes"
	}

	if (game.folders.getName("Toolboxes")) { 
	  game.folders.getName("Toolboxes").name = "Cajas de herramientas"
	}
})

Hooks.on("aa.getRequiredData",(data)=>{
const originalName = data.item.flags.babele.originalName
if (originalName) { data.overrideNames.push(originalName) }
})