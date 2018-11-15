$(document).ready(function () {
    //  currently using placeholder values
    var characterData = [
        {
            name: 'Warrior',
            health: 100,
            attack: 0,
        },
        {
            name: 'Mage',
            health: 80,
            attack: 0,
        },
        {
            name: 'Thief',
            health: 50,
            attack: 0,
        },
        {
            //  placeholder/testing character
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
                // work-in-progress
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
    // undergo balancing process to solve the below:
        // display health of characters
        // make attack button functional
        // "" function that increases player's attack after a victory;


    // "" function to remove defender; condition: 0 health;
        //  may remove via *visibility* due to
        // on-click scripts not working on newly-made elements.



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
        // Use original free-use game assets ?
            //  Possibly.

    // Scripts in-progress:
        //  attack button
        //  reset button
        //  function calcDamage(){} -- Math.Floor(Math.Rand() * _x_ )
        //  function checkHP(){} -- on hp === 0, player loses or defender loses
        //  function attackUp(){} -- on Defender hp <= 0; raise own atk
        

    // end of doc
})