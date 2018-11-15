$(document).ready(function () {
    //  currently using placeholder values
    var characterData = [
        {
            name: 'Warrior',
            health: 100,
            attack: 10,
        },
        {
            name: 'Mage',
            health: 80,
            attack: 15,
        },
        {
            name: 'Thief',
            health: 50,
            attack: 25,
        },
        {
            //  placeholder/testing character
            name: 'Dummy',
            health: 10,
            attack: 5,
        }
    ];

    var pickedPlayer = false;
    var pickedDefender = false;
    var defenderAlive;

    // -- MAIN DRIVER
    initialize();

    $('.character-button').on('click', function () {
        if (!pickedPlayer) {
            $(this).attr('id', 'player')
            $('#player-character').append($(this));
            $('#enemy-list').append($('#character-select'));
            pickedPlayer = true;

        }
        else if (!pickedDefender) {
            if ($(this).data('name') !== $('#player').data('name')) {
                $('#defender').append($(this));
                pickedDefender = true;
                defenderAlive = true;
            }

        }
        else {
            if (defenderAlive) {
                // work-in-progress
                $('#attack-button').on('click', function () {
                    var dmg = calcDamage($('#player').data('attack'));
                    console.log($('#player').data('attack'))

                })
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
            charBox.attr('data-attack', characterData[i].attack);
            charBox.text(characterData[i].name);
            $('#character-select').append(charBox);
        }
    }
    function calcDamage(attack) {
        Math.floor(Math.random() * Math.floor(attack))
    }

    // Psuedo-code
    // undergo balancing process to solve the below:
        // display health of characters
        // make attack button functional
        // "" function that increases player's attack after a victory;


    // "" function to remove defender; condition: 0 health;
        // may remove via *visibility* due to
        // on-click scripts not behaving well with
        // newly-made elements given addClass(character-button).
        // Although, that was before the code overhaul.


    // functional reset button
        // maybe function via page refresh?
        //OR:
        // re-append containers to inital positions,
        // and add classes back to them.
        // (Removed classes at certain points to restrict button actions)


    // create some checks that stops usr from:
        //  -   attacking nothing;
        //  DONE --   changing the defender mid-fight;

    // find a good 'theme' for the game (genre / franchise-wise)  
        // Traditional elements ?
        //  Maybe.
        // Based on existing franchises ?
        //  Preferably not.
        // Source free-use assets ?
        //  Possibly.

    // Scripts in-progress:
        //  attack button
        //  reset button
        //  function calcDamage(){} -- Math.floor(Math.random() * _x_ )
        //  function checkHP(){} -- on hp === 0, player loses or defender loses
        //  function attackUp(){} -- on Defender hp <= 0; raise own atk


    // end of doc
})