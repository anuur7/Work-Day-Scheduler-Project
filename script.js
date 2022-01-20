// made a function for jquery to listen to the documents
$(document).ready(function() {
    // added current day to jumbotron
    $('#currentDay').text(moment().format('dddd, MMM Do'))

    var saveBtn = $('.saveBtn')
    // made function to grab the id of the hour and text to set to local storage
    saveBtn.on('click', function() {
        var btn = $(this).parent().attr('id')
        console.log('btn', btn)

        var text = $(this).siblings('.description').val()
        console.log('text', text)

        localStorage.setItem(btn, text)
    })

})
