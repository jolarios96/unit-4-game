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
        },
        {
            name: 'Dummy',
            health: 10,
            attack: 0,
        }
    ];

    var pickedPlayer = false;
    var pickedDefender = false;
    var defenderAlive;

    // -- MAIN DRIVER
    initialize();
    
    $('.character-button').on('click', function () {
        if (!pickedPlayer) {
            $(this).removeClass('character-button');
            $('#player-character').append($(this));
            $('#enemy-list').append($('#character-select'));
            pickedPlayer = true;
        }
        else if (!pickedDefender){
                $(this).removeClass('character-button');
                $('#defender').append($(this));
                pickedDefender = true;
                defenderAlive = true;
        }
        else {
            if (defenderAlive){
                
            }
        }
    });
    // -- END OF DRIVER



    // -- FUNCTIONS
    function initialize() {
        for (var i = 0; i < characterData.length; i++) {
            var charBox = $('<button>');
            charBox.addClass('character-button');
            charBox.attr('data-name', characterData[i].name);
            charBox.text(characterData[i].name);
            $('#character-select').append(charBox);
        }
    }





    // Psuedo-code

    // implement function that moves single enemy to defender's spot
    // "" on-click event button to "attack"
    // "" function to remove defender; condition: 0 health;
    // "" function that increases player's attack after a victory;

    // create some checks that stops usr from:
    //  -   attacking nothing;
    //  -   changing the defender mid-fight;

    // end of doc
})