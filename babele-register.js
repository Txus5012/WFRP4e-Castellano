Hooks.on('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'wfrp4e-castellano',
            lang: 'es',
            dir: 'compendium'
        });

Babele.get().registerConverters({

       "spells_duration_range_target_damage": (value) => {  // Hechizos y Plegarias
        if ( value == "" ) return "";
        if ( value == "Touch" ) return "Toque";
        if ( value == "You" ) return "Tú";
        if ( value == "Instant" ) return "Instantáneo";
        if ( value == "Line of Sight" ) return "Línea de Visión";
        if ( value == "Special" ) return "Especial";
	if (value == "a single location" ) return "Un solo lugar";
	if ( value == "see description" ) return "Ver descripción";
	if ( value == "Until sunrise" ) return "Hasta el amanecer";
	if ( value == "Until the next sunrise" ) return "Hasta el siguiente amanecer";
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
        if ( charac == "Strenght") charac = "Fuerza";
        if ( charac == "Toughness") charac = "Resistencia";
        if ( charac == "Initiative") charac = "Iniciativa";
        if ( charac == "Agility") charac = "Agilidad";
        if ( charac == "Dexterity") charac = "Destreza";
        if ( charac == "Intelligence") charac = "Inteligencia";
        if ( charac == "Willpower") charac = "Voluntad";
        if ( charac == "Fellowship") charac = "Empatía";

        if ( characbonus == "Weapon Skill") charac = "Habilidad de Armas Bonus";
        if ( characbonus == "Ballistic Skill") charac = "Habilidad de Proyectiles Bonus";
        if ( characbonus == "Strenght") charac = "Fuerza Bonus";
        if ( characbonus == "Toughness") charac = "Resistencia Bonus";
        if ( characbonus == "Initiative") charac = "Iniciativa Bonus";
        if ( characbonus == "Agility") charac = "Agilidad Bonus";
        if ( characbonus == "Dexterity") charac = "Destreza Bonus";
        if ( characbonus == "Intelligence") charac = "Inteligencia Bonus";
        if ( characbonus == "Willpower") charac = "Voluntad Bonus";
        if ( characbonus == "Fellowship") charac = "Empatía Bonus";

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
        if ( unit == "days") unit = "días";            
        if ( unit == "Days") unit = "Días";            
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

      "career_class": (value) => { // Clases
        if ( value == "Academics" ) return "Académicos";
        if ( value == "Academic" ) return "Académico";
        if ( value == "Burghers" ) return "Burgueses";
        if ( value == "Burgher" ) return "Burgués";
        if ( value == "Courtiers" ) return "Cortesanos";
        if ( value == "Courtier" ) return "Cortesano";
        if ( value == "Peasants" ) return "Campesinos";
        if ( value == "Peasant" ) return "Campesino";
        if ( value == "Rangers" ) return "Rurales";
        if ( value == "Ranger" ) return "Rural";
        if ( value == "Riverfolk" ) return "Ribereños";
        if ( value == "Rogues" ) return "Pícaros";
        if ( value == "Rogue" ) return "Pícaro";
        if ( value == "Warriors" ) return "Guerreros";
        if ( value == "Warrior" ) return "Guerrero";
	},

      "career_careergroup": (value) => { // Grupo de carrera
        if ( value == "Apothecary" ) return "Boticario";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Lawyer" ) return "Abogado";
        if ( value == "Nun" ) return "Monja";
        if ( value == "Physician" ) return "Físico";
        if ( value == "Priest" ) return "Sacerdote";
        if ( value == "Scholar" ) return "Erudito";
        if ( value == "Wizard" ) return "Hechicero";
        if ( value == "Agitator" ) return "Alborotador";
        if ( value == "Artisan" ) return "Artesano";
        if ( value == "Beggar" ) return "Mendigo";
        if ( value == "Investigator" ) return "Investigador";
        if ( value == "Merchant" ) return "Mercader";
        if ( value == "Rat Catcher" ) return "Cazarratas";
        if ( value == "Townsman" ) return "Ciudadano";
        if ( value == "Watchman" ) return "Vigilante";
        if ( value == "Advisor" ) return "Asesor";
        if ( value == "Artist" ) return "Artista";
        if ( value == "Duellist" ) return "Duelista";
        if ( value == "Envoy" ) return "Emisario";
        if ( value == "Servant" ) return "Sirviente";
        if ( value == "Spy" ) return "Espía";
        if ( value == "Warden" ) return "Guarda";
        if ( value == "Bailiff" ) return "Alguacil";
        if ( value == "Hedge Witch" ) return "Adivino";
        if ( value == "Herbalist" ) return "Herbolario";
        if ( value == "Hunter" ) return "Cazador";
        if ( value == "Miner" ) return "Minero";
        if ( value == "Mystic" ) return "Místico";
        if ( value == "Scout" ) return "Explorador";
        if ( value == "Villager" ) return "Aldeano";
        if ( value == "Bounty Hunter" ) return "Cazarrecompensas";
        if ( value == "Coachman" ) return "Cochero";
        if ( value == "Entertainer" ) return "Animador";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Flagellant" ) return "Flagelante";
        if ( value == "Messenger" ) return "Mensajero";
        if ( value == "Pedlar" ) return "Vendedor ambulante";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Road warden" ) return "Guarda de caminos";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Witch Hunter" ) return "Cazador de brujas";
        if ( value == "Boatman" ) return "Barquero";
        if ( value == "Huffer" ) return "Práctico";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Riverwarden" ) return "Guardián del río";
        if ( value == "Riverwoman" ) return "Mujer del río";
        if ( value == "Seaman" ) return "Marino";
        if ( value == "Smuggler" ) return "Contrabandista";
        if ( value == "Stevedore" ) return "Estibador";
        if ( value == "Wrecker" ) return "Raquero";
        if ( value == "Bawd" ) return "Chalán";
        if ( value == "Charlatan" ) return "Charlatán";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Fence" ) return "Perista";
        if ( value == "Grave Robber" ) return "Ladrón de tumbas";
        if ( value == "Outlaw" ) return "Forajido";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Racketeer" ) return "Pandillero";
        if ( value == "Thief" ) return "Ladrón";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Witch" ) return "Bruja";
        if ( value == "Cavalryman" ) return "Reitre";
        if ( value == "Engineer" ) return "Ingeniero";
        if ( value == "Guard" ) return "Guardia";
        if ( value == "Knight" ) return "Caballero";
        if ( value == "Pit Fighter" ) return "Guerrero de foso";
        if ( value == "Protagonist" ) return "Protagonista";
        if ( value == "Soldier" ) return "Soldado";
        if ( value == "Slayer" ) return "Matador";
        if ( value == "Warrior Priest" ) return "Sacerdote guerrero";
	},

	"talents_specification_label": (value) => {  // Especificación de talentos
             if ( value == "Specification" ) return "Especificación";
	},
	
	"talents_specification": (value) => {  // Especificación de talentos, valor
	     if ( value == "Target" ) return "Objetivo";
	     if ( value == "Everything" ) return "Todo";
             if ( value == "Greenskins" ) return "Pieles verdes";
     	     if ( value == "Dwarfs" ) return "Enanos";
	     if ( value == "Elves" ) return "Elfos";
	     if ( value == "Predators" ) return "Depredadores";
	     if ( value == "Living" ) return "Vivos";
	},
	
	"traits_specification_label": (value) => {  // Especificación de rasgos
             if ( value == "Specification" ) return "Especificación";
	},
      
	"traits_specification": (value) => {  // Especificación de rasgos, valor
	     if ( value == "Any" ) return "Cualquiera";
             if ( value == "Rating" ) return "Valor";
             if ( value == "Target" ) return "Objetivo";
	     if ( value == "Damage" ) return "Daño";
             if ( value == "Deity" ) return "Deidad";
             if ( value == "Diety" ) return "Deidad";
             if ( value == "Trained Skills" ) return "Habilidades Entrenadas";
             if ( value == "# (Type)" ) return "# (Tipo)";
	     if ( value == "Target #" ) return "# Objetivo";
	     if ( value == "Type" ) return "Tipo";
     	     if ( value == "Size" ) return "Tamaño";
     	     if ( value == "Tiny" ) return "Diminuto";
     	     if ( value == "Little" ) return "Muy pequeño";
       	     if ( value == "Small" ) return "Pequeño";
     	     if ( value == "Average" ) return "Normal";
     	     if ( value == "Large" ) return "Grande";
     	     if ( value == "Enormous" ) return "Enorme";
	     if ( value == "Monstrous" ) return "Monstruoso";
             if ( value == "Corruption Strength" ) return "Fuerza de la Corrupción";
	     if ( value == "Minor" ) return "Menor";
	     if ( value == "Moderate" ) return "Moderado";
	     if ( value == "Major" ) return "Mayor";
             if ( value == "Difficulty" ) return "Dificultad";
	     if ( value == "Very Easy" ) return "Muy Fácil";
	     if ( value == "Easy" ) return "Fácil";
	     if ( value == "Average" ) return "Normal";
	     if ( value == "Challenging" ) return "Desafiante";
	     if ( value == "Difficult" ) return "Complicado";
	     if ( value == "Hard" ) return "Difícil";
	     if ( value == "Very Hard" ) return "Muy Difícil";
             if ( value == "Lore" ) return "Saber";
	     if ( value == "Beasts" ) return "Bestias";
	     if ( value == "Death" ) return "Muerte";
	     if ( value == "Fire" ) return "Fuego";
	     if ( value == "Heavens" ) return "Cielos";
	     if ( value == "Life" ) return "Vida";
	     if ( value == "Light" ) return "Luz";
	     if ( value == "Shadow" ) return "Sombras";
	     if ( value == "Hedgecraft" ) return "Adivinación";
	     if ( value == "Witchcraft" ) return "Brujería";
	     if ( value == "Necromancy" ) return "Nigromancia";
	     if ( value == "Daemonology" ) return "Demonología";
	     if ( value == "Chaos" ) return "Caos";
	     if ( value == "Any Chaos" ) return "Cualquiera del Caos";
	     if ( value == "Any Lore" ) return "Cualquier saber";
	     if ( value == "Poison" ) return "Veneno";
     	     if ( value == "Venom" ) return "Veneno";
	     if ( value == "Broken" ) return "Domado";
     	     if ( value == "Drive" ) return "Tirar";
	     if ( value == "Entertain" ) return "Entretener";
	     if ( value == "Fetch" ) return "Trae";
	     if ( value == "Guard" ) return "Protege";
     	     if ( value == "Home" ) return "Casa";
	     if ( value == "Magic" ) return "Magia";
	     if ( value == "Mount" ) return "Montura";
	     if ( value == "War" ) return "Guerra";
	     if ( value == "Sigmarites" ) return "Sigmaritas";
	     if ( value == "Witch" ) return "Brujo";
	     if ( value == "the Rich, Beastmen" ) return "Los ricos, los hombres bestia";
	     if ( value == "Bailiffs, Lawyers" ) return "Alguaciles, abogados";
	     if ( value == "Itching Pox" ) return "Plaga picante";
	     if ( value == "Packer's Pox" ) return "Plaga del empaquetador";
	     if ( value == "Ratte Fever" ) return "Fiebre ratonil";
	     if ( value == "The Black Plague" ) return "Peste negra";
	     if ( value == "Various" ) return "Varios";
	     if ( value == "Choose one" ) return "Elige una";
	     if ( value == "Choose two" ) return "Elige dos";
	     if ( value == "Everything" ) return "Todo";
	     if ( value == "Greenskins" ) return "Pieles verdes";
	     if ( value == "Dwarfs" ) return "Enanos";
	     if ( value == "Elves" ) return "Elfos";
	     if ( value == "Thin People" ) return "Gente delgada";
	},

	"criticals_wounds": (value) => {  // Localización de críticos
             if ( value == "Death" ) return "Muerte";
	},

	"criticals_location": (value) => {  // Localización de críticos
             if ( value == "Head" ) return "Cabeza";
             if ( value == "Arm" ) return "Brazo";
	     if ( value == "Leg" ) return "Pierna";
             if ( value == "Body" ) return "Cuerpo";
	},
	
	"trappings_penalty": (value) => {  // Penalizador de accesorios
             if ( value == "-10 Perception" ) return "-10 Percepción";
	     if ( value == "-20 Perception" ) return "-20 Percepción";
	     if ( value == "-10 Stealth" ) return "–10 al Movimiento silencioso";
	},

	"trappings_range": (value) => {  // Alcance de armas a distancia
	     if ( value == "As weapon" ) return "Según arma";
	     if ( value == "Half weapon" ) return "Mitad del arma";
	     if ( value == "Third weapon" ) return "Tercio del arma";
	     if ( value == "Quarter weapon" ) return "Cuarto del arma";
	     if ( value == "Twice weapon" ) return "Doble del arma";
	},

	"bestiary_ws": (value) => {  // Bestiario, HA
             if ( value == "Weapon Skill" ) return "Habilidad de Armas";
	},
	"bestiary_wsabrev": (value) => {  // Bestiario, HA abreviatura
             if ( value == "WS" ) return "HA";
	},
	"bestiary_bs": (value) => {  // Bestiario, HP
	     if ( value == "Ballistic Skill" ) return "Habilidad de Proyectiles";
	},
	"bestiary_bsabrev": (value) => {  // Bestiario, HP abreviatura
	     if ( value == "BS" ) return "HP";
	},
	"bestiary_s": (value) => {  // Bestiario, F
             if ( value == "Strength" ) return "Fuerza";
	},
	"bestiary_sabrev": (value) => {  // Bestiario, F abreviatura
             if ( value == "S" ) return "F";
	},
	"bestiary_t": (value) => {  // Bestiario, R
	     if ( value == "Toughness" ) return "Resistencia";
	},
	"bestiary_tabrev": (value) => {  // Bestiario, R abreviatura
	     if ( value == "T" ) return "R";
	},
	"bestiary_i": (value) => {  // Bestiario, Ini
             if ( value == "Initiative" ) return "Iniciativa";
	},
	"bestiary_iabrev": (value) => {  // Bestiario, Ini abreviatura
             if ( value == "I" ) return "Ini";
	},
	"bestiary_ag": (value) => {  // Bestiario, Ag
	     if ( value == "Agility" ) return "Agilidad";
	},
	"bestiary_dex": (value) => {  // Bestiario, Des
             if ( value == "Dexterity" ) return "Destreza";
	},
	"bestiary_dexabrev": (value) => {  // Bestiario, Des abreviatura
             if ( value == "Dex" ) return "Des";
	},
	"bestiary_int": (value) => {  // Bestiario, I
	     if ( value == "Intellegence" ) return "Inteligencia";
	},
	"bestiary_intabrev": (value) => {  // Bestiario, I abreviatura
	     if ( value == "Int" ) return "I";
	},
	"bestiary_wp": (value) => {  // Bestiario, Vol
             if ( value == "Willpower" ) return "Voluntad";
	},
	"bestiary_wpabrev": (value) => {  // Bestiario, Vol abreviatura
             if ( value == "WP" ) return "V";
	},
	"bestiary_fel": (value) => {  // Bestiario, Emp
	     if ( value == "Fellowship" ) return "Empatía";
	},
	"bestiary_felabrev": (value) => {  // Bestiario, Emp abreviatura
	     if ( value == "Fel" ) return "Em";
	},
	
	"injuries_location": (value) => {  // Heridas, Localización
	     if ( value == "Head" ) return "Cabeza";
	     if ( value == "Ear" ) return "Oreja";
	     if ( value == "Nose" ) return "Nariz";
	     if ( value == "Eye" ) return "Ojo";
	     if ( value == "Teeth" ) return "Dientes";
	     if ( value == "Tongue" ) return "Lengua";
	     if ( value == "Body" ) return "Cuerpo";
	     if ( value == "Arm" ) return "Brazo";
	     if ( value == "Hand" ) return "Mano";
	     if ( value == "Finger" ) return "Dedo de la mano";
	     if ( value == "Leg" ) return "Pierna";
	     if ( value == "Foot" ) return "Pie";
	     if ( value == "Toes" ) return "Dedos del pie";
	},
	"injuries_duration": (value) => {  // Heridas, Duración
	     if ( value == "30 - TB" ) return "30 - BR";
	     if ( value == "30 - TB days" ) return "30 - BR";
	},

	"disease_units": (value) => {  // Enfermedades, Unidades
	     if ( value == "days" ) return "días";
	     if ( value == "hours" ) return "horas";
	     if ( value == "minutes" ) return "minutos";
	},
	
	"diaries_folder": (value) => {  // Diarios y Tablas, Carpetas
	     if ( value == "Bestiary" ) return "Bestiario";
	     if ( value == "Between Adventures" ) return "Entre Aventuras";
	     if ( value == "Character" ) return "Personaje";
	     if ( value == "Rules" ) return "Reglas";
	     if ( value == "Class Endeavours" ) return "Empresas de Clase";
	     if ( value == "General Endeavours" ) return "Empresas Generales";
	     if ( value == "Endeavours" ) return "Empresas";
	     if ( value == "Combat" ) return "Combate";
	     if ( value == "GM's Guide" ) return "Guía del DJ";
	     if ( value == "Magic" ) return "Magia";
	     if ( value == "Mountains, Foothills, and Vorbergland" ) return "Montañas, Colinas y Vorbergland";
	     if ( value == "Moving" ) return "Movimiento";
	     if ( value == "Politics" ) return "Política";
	     if ( value == "Religion and Belief" ) return "Religión y Creencias";
	     if ( value == "Rivers, Canals, and Lakes" ) return "Ríos, Canales y Lagos";
	     if ( value == "Settlements" ) return "Asentamientos";
	     if ( value == "Species" ) return "Especies";
	     if ( value == "The Consumers' Guide" ) return "La Guía del Consumidor";
	     if ( value == "The Cursed and Fetid Marshlands" ) return "Las Malditas y Fétidas Marismas";
	     if ( value == "The Eight Lores" ) return "Los Ocho Saberes";
	     if ( value == "The Grim, Dark Forests" ) return "Los Bosques Oscuros y Lúgubres";
	     if ( value == "Trapping Lists" ) return "Listas de Accesorios";
	     if ( value == "Core" ) return "Básico";
	     if ( value == "Moo's Homebrew" ) return "Reglas Caseras de Moo";
	     if ( value == "Career Tables" ) return "Tablas de Carrera";
	     if ( value == "Character Creation" ) return "Creación de Personaje";
	     if ( value == "Corruption & Mutation Tables" ) return "Tablas de Corrupción y Mutación";
	     if ( value == "Critical Hit Tables" ) return "Tablas de Impactos Críticos";
	     if ( value == "GM Booklet" ) return "Libreta de DJ";
	     if ( value == "Hit Location" ) return "Ubicación de Impacto";
	}

	});
    }
});
