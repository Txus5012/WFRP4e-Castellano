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
	if (teffects.preApplyScript) currenteffect.flags.wfrp4e.applicationData.preApplyScript = teffects.preApplyScript;
	if (teffects.filter) currenteffect.flags.wfrp4e.applicationData.filter = teffects.filter;
	
    if (currenteffect.flags.wfrp4e.scriptData && currenteffect.flags.wfrp4e.scriptData.length > 0) {
        effects[index].flags.wfrp4e.scriptData.forEach((scriptData, idx) => {
          const tscriptData = teffects.scriptData[idx];
		  if (!tscriptData) return;
		  if (tscriptData.label) scriptData.label = tscriptData.label;
		  if (tscriptData.script) scriptData.script = tscriptData.script;
		  if (tscriptData.hideScript) scriptData.options.dialog.hideScript = tscriptData.hideScript;
		  if (tscriptData.activateScript) scriptData.options.dialog.activateScript = tscriptData.activateScript;
		  if (tscriptData.submissionScript) scriptData.options.dialog.submissionScript = tscriptData.submissionScript;
        });
    }
  })

  return effects;
};