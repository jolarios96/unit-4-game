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

    // -- MAIN DRIVER
    initialize();
    choosePlayer();
    chooseDefender();

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

    function choosePlayer() {
        $('.character-button').on('click', function () {
            charBox = $('<button>');
            charBox.attr('data-name', $(this).data('name'));
            charBox.text(charBox.data('name'));
            $('#player-character').append(charBox);

            for (var i = 0; i < characterData.length; i++) {
                if (characterData[i].name !== charBox.data('name')) {
                    enemyBox = $('<button>');
                    enemyBox.addClass('enemy-button')
                    enemyBox.attr('data-name', characterData[i].name);
                    // enemyBox.attr('id', i)
                    enemyBox.text(characterData[i].name);
                    $('#enemy-list').append(enemyBox);
                }
            }

            $('#character-select').empty();
        });
    }

    function chooseDefender() {

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