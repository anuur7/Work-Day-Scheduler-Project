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

    // got all the items by id from local storage and displayed on class description
    $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    $('#hour-13 .description').val(localStorage.getItem('hour-13'))
    $('#hour-14 .description').val(localStorage.getItem('hour-14'))
    $('#hour-15 .description').val(localStorage.getItem('hour-15'))
    $('#hour-16 .description').val(localStorage.getItem('hour-16'))
    $('#hour-17 .description').val(localStorage.getItem('hour-17'))
})
