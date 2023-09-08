// To hide or show comment block
function hideComments() {
    $('#comments').slideUp(300, function() {
        // Change text to show
        $('#show-comments-button').show()
        $('#hide-comments-button').hide()
    })
}

function showComments() {
    $('#comments').slideDown(300, function() {
        // Change text to show
        $('#show-comments-button').hide()
        $('#hide-comments-button').show()
    })
}

$(document).ready(function() {
    $('#show-comments-button').bind('click', showComments)
    $('#hide-comments-button').bind('click', hideComments)
})