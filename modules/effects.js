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