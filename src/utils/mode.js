let current_mode = 'DEFAULT';

/*

   LIST OF AVAILABLE MODES:

   DEFAULT
   NO_AI
   NO_AI_AGRESSIVE
   SLEEP
   AI_ONLY
   TYURYAGA

 */

export const getCurrentMode = () => {
    return current_mode;
}

export const setCurrentMode = (mode) => {
    current_mode = mode;
    return true;
}