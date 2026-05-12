// ------------------------------------------------------
// This module handles the logic for the final screen
// ------------------------------------------------------

export function finalScreen() {

    // Number of Player choices Rich or Poor
    let currentPlayerChoicePoor = Number(localStorage.getItem('currentPlayerChoicePoor'));
    let currentPlayerChoiceRich = Number(localStorage.getItem('currentPlayerChoiceRich'));


    // Number of Fate results Rich or Poor
    let currentFatePoor = Number(localStorage.getItem('currentFatePoor'));
    let currentFateRich = Number(localStorage.getItem('currentFateRich'));

    //////////// Interesting calculations //////////

    // Define life style
    let lifestyle = ''

    if ( currentPlayerChoiceRich > currentPlayerChoicePoor ) {
        lifestyle = 'You prioritize private innovation'
    } else {
        lifestyle =  'You prioritize community support and accessibility'
    }


    return {
        currentPlayerChoicePoor,
        currentPlayerChoiceRich,
        currentFatePoor,
        currentFateRich,
        lifestyle
    }

}
