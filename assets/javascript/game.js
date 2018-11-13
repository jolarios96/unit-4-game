
$(document).ready(function () {
    renderCharSelect();

    // On-click events
    $('.character-button').on('click', function () {
        console.log('did something');
    })

    function renderCharSelect() {
        var charSelect = $('<div>');
        charSelect.attr('id', 'character-select');
        charSelect.addClass('btn-group');
        $('#game-container').append(charSelect);

        var characters = ['Warrior', 'Mage', 'Thief'];
        for (var i = 0; i < characters.length; i++) {
            var charBox = $('<button>');
            charBox.addClass('character-button character');
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