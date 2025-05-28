export const effects = (effects, translations) => {
  if (effects.length === 0) {
    return effects;
  }

  if (!translations) {
    return effects;
  }

  effects.forEach((currenteffect, index, _scriptDataArray) => {
    const teffects = translations[index];
    if (!teffects) {
      return;
    }

    if (teffects.name) currenteffect.name = teffects.name;
	if (teffects.preApplyScript) currenteffect.system.transferData.preApplyScript = teffects.preApplyScript;
	if (teffects.filter) currenteffect.system.transferData.filter = teffects.filter;
	
    if (currenteffect.system.scriptData && currenteffect.system.scriptData.length > 0) {
        effects[index].system.scriptData.forEach((scriptData, idx) => {
          const tscriptData = teffects.scriptData[idx];
		  if (!tscriptData) return;
		  if (tscriptData.label) scriptData.label = tscriptData.label;
		  if (tscriptData.script) scriptData.script = tscriptData.script;
		  if (tscriptData.hideScript) scriptData.options.hideScript = tscriptData.hideScript;
		  if (tscriptData.activateScript) scriptData.options.activateScript = tscriptData.activateScript;
		  if (tscriptData.submissionScript) scriptData.options.submissionScript = tscriptData.submissionScript;
        });
    }
  })

  return effects;
};

export const templatesskills = (list, translations) => {
  if (list.length === 0) {
    return list;
  }

  if (!translations) {
    return list;
  }

  list.forEach((currentskills, index, _scriptDataArray) => {
    const tskills = translations[index];
    if (!tskills) {
      return;
    }

    if (tskills.name) currentskills.name = tskills.name;
  })

  return list;
};

export const templatestalents = (list, translations) => {
  if (list.length === 0) {
    return list;
  }

  if (!translations) {
    return list;
  }

  list.forEach((currenttalents, index, _scriptDataArray) => {
    const ttalents = translations[index];
    if (!ttalents) {
      return;
    }

    if (ttalents.name) currenttalents.name = ttalents.name;
  })

  return list;
};

export const templatestrappings = (options, translations) => {
  if (options.length === 0) {
    return options;
  }

  if (!translations) {
    return options;
  }

  options.forEach((currenttrappings, index, _scriptDataArray) => {
    const ttrappings = translations[index];
    if (!ttrappings) {
      return;
    }

    if (ttrappings.name) currenttrappings.name = ttrappings.name;
  })

  return options;
};

export const tablenames = (results, translations) => {
  if (results.length === 0) {
    return results;
  }

  if (!translations) {
    return results;
  }

  results.forEach((currentttablenames, index, _scriptDataArray) => {
    const ttablenames = translations[index];
    if (!ttablenames) {
      return;
    }

    if (ttablenames.name) currentttablenames.name = ttablenames.name;
  })

  return results;
};