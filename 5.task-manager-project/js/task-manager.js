$(document).ready(function() {
    // Add a Task to the List
    $('#addTask').click(function() {
       var task = $('#taskInput').val();
       if (task) {
            // Append list item to the List
            $('#taskList').append('<li><span class="taskText">'+task+'</span><span class="editButton">Edit</span><span class="removeButton">Remove</span></li>')
            $('#taskInput').val('');
       }
    })

    // Highlight input field on focus
    $('#taskInput').focus(function() {
        $(this).addClass('highlight')
    })

    // Remove Highlight from input on blur
    $('#taskInput').blur(function() {
        $(this).removeClass('highlight')
    })

    // Mark task as completed
    $('#taskList').on('click', '.taskText', function() {
        $(this).toggleClass('completed')
    })

    // Remove task from the list
    $('#taskList').on('click', '.removeButton', function() {
        $(this).parent().remove();
    })

    // Edit Task text
    $('#taskList').on('click', '.editButton', function() {
        var $taskText = $(this).siblings('.taskText')
        var currentText = $taskText.text();
        var newText = prompt('Edit Task:', currentText)
        if(newText) {
            $taskText.text(newText);
        }
    })

    // Event for mouseenter
    $('#taskList').on('mouseenter', '.taskText',function() {
        $(this).css('cursor', 'pointer')
    })

})