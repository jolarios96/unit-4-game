
$(document).ready(function () {
    var characters = ['Warrior', 'Mage', 'Thief'];
    // var characterData = [
    //     {
    //         name: 'Warrior',
    //         health: 10,
    //     },
    //     {
    //         name: 'Mage',
    //         health: 10,
    //     },
    //     {
    //         name: 'Thief',
    //         health: 10
    //     }
    // ];

    var picked = false;
    console.log($(this));

    renderCharSelect();
    console.log($(this));

    // On-click events
    $('.character-button').on('click', function () {
        console.log(picked)
        if (picked === false) {
            for (var i = 0; i < characters.length; i++) {
                // console.log('loop' , i);
                // console.log($(this));
                // console.log(characters[i]);
                // console.log($(this).attr('data-character'));

                // if (characters[i] === ($(this).attr('data-character'))) {
                //     var pickedChar = $('<button>');
                //     pickedChar.addClass('character-button');
                //     pickedChar.text(characters[i]);
                //     $('#player-character').append(pickedChar);
                //     $('#player-character').append($(this));
                // }
                // else {
                //     var enemyChar = $('<button>');
                //     enemyChar.addClass('character-button');
                //     enemyChar.text(characters[i]);
                //     $('#enemy-characters').append(enemyChar);
                // }
            }
            // $('#character-select').empty();
            picked = true;
        }
        else { // picked === true
            console.log('boolean true')
        }
    })

    //
    // FUNCTIONS
    function renderCharSelect() {
        for (var i = 0; i < characters.length; i++) {
            var charBox = $('<button>');
            charBox.addClass('character-button');
            charBox.attr('data-character', characters[i])
            charBox.text(characters[i]);
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