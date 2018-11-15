$(document).ready(function () {
    var characterData = [
        {
            name: 'Warrior',
            health: 10,
            attack: 0,
        },
        {
            name: 'Mage',
            health: 10,
            attack: 0,
        },
        {
            name: 'Thief',
            health: 10,
            attack: 0,
        }
    ];

// MAIN DRIVER -----------------------------------------
    var picked = false;
    var enemyPicked = false;
    initialize();
    
    // On-click events
    
    $('.character-button').on('click', function () {
        console.log(picked)
        if (!picked) {
            for (var i = 0; i < characterData.length; i++) {
                // console.log('loop' , i);
                // console.log($(this));
                // console.log(characters[i]);
                // console.log($(this).attr('data-character'));

                if (characterData[i].name === ($(this).attr('data-character'))) {
                    var pickedChar = $('<button>');
                    pickedChar.addClass('character-button');
                    pickedChar.text(characterData[i].name);
                    pickedChar.attr('data-health', characterData[i].health);
                    $('#player-character').append(pickedChar);
                }
                else {
                    var enemyChar = $('<button>');
                    enemyChar.addClass('enemy-button');
                    enemyChar.attr('data-character', characterData[i].name);
                    enemyChar.attr('data-health', characterData[i].health);
                    enemyChar.text(characterData[i].name);
                    $('#enemy-characters').append(enemyChar);
                }
            }
            $('#character-select').empty();
            picked = true;
        }
    })

    $('.enemy-button').on('click', function () {
        if (!enemyPicked) {
            var defender = $('<button>');
            defender.addClass('defender-button');
            defender.text($(this));
            $('#defender').append(defender);
            enemyPicked = true;
        }
        else {
            console.log('Defeat your current enemy first!')
        }
    })
// -----------------------------------------------------

    //
    // FUNCTIONS
    function initialize() {
        for (var i = 0; i < characterData.length; i++) {
            var charBox = $('<button>');
            charBox.addClass('character-button');
            charBox.attr('data-character', characterData[i].name)
            charBox.text(characterData[i].name);
            $('#character-select').append(charBox);
        }
    }

    // Psuedo-code

    // implement function that removes character box for player-character;
    // implement function that moves enemies to enemies list
    // "" function that moves single enemy to defender's spot
    // "" on-click event button to "attack"
    // implement function to remove defender; condition: 0 health;
    // "" function that increases player's attack after a victory;

    // create some checks that stops usr from:
    //  -   attacking nothing;
    //  -   changing the defender mid-fight;

    // end of doc
})