
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
// end of doc
})