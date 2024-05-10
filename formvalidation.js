
$(document).ready(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            date: {
                required: true,
                date: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 2 characters long"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            date: {
                required: "Please enter a date",
                date: "Please enter a valid date"
            },
            subject: {
                required: "Please enter a subject"
            },
            message: {
                required: "Please enter a message"
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
});
