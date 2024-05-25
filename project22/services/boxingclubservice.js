let BoxingClubService = {
    init: function () {
        // Initialize form validation for the contact form
        $('#contactForm').validate({
            rules: {
                name: 'required',
                email: {
                    required: true,
                    email: true
                },
                message: 'required'
            },
            messages: {
                name: 'Please enter your name',
                email: {
                    required: 'Please enter your email',
                    email: 'Please enter a valid email address'
                },
                message: 'Please enter your message'
            },
            submitHandler: function (form) {
                let message = Object.fromEntries(new FormData(form).entries());
                BoxingClubService.sendMessage(message);
                form.reset();
            }
        });

        // Initialize form validation for the registration form
        $('#registrationForm').validate({
            rules: {
                name: 'required',
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 20
                }
            },
            messages: {
                name: 'Please enter your name',
                email: {
                    required: 'Please enter your email',
                    email: 'Please enter a valid email address'
                },
                password: {
                    required: 'Please enter a password',
                    minlength: 'Password must be at least 8 characters long',
                    maxlength: 'Password cannot be longer than 20 characters'
                }
            },
            submitHandler: function (form) {
                let user = Object.fromEntries(new FormData(form).entries());
                BoxingClubService.registerUser(user);
                form.reset();
            }
        });

        // Fetch initial data
        BoxingClubService.fetchCoaches();
        BoxingClubService.fetchTrainingPlans();
    },

    sendMessage: function (message) {
        try {
            $.blockUI({ message: '<h3>Sending...</h3>' });
            toastr.success("Message sent successfully");
            $.unblockUI();
        } catch (error) {
            console.error('Error in sending message:', error);
            alert('An error occurred. Please try again later.');
            $.unblockUI();
        }
    },

    registerUser: function (user) {
        try {
            $.blockUI({ message: '<h3>Registering...</h3>' });
            toastr.success("User registered successfully");
            $.unblockUI();
        } catch (error) {
            console.error('Error in registration:', error);
            alert('An error occurred. Please try again later.');
            $.unblockUI();
        }
    },

    fetchCoaches: function () {
        $.ajax({
            url: 'data/coaches.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Render coaches data in a table
                Utils.datatable('coaches', [
                    { data: 'name', title: 'Name' },
                    { data: 'experience', title: 'Experience' },
                    { data: 'specialty', title: 'Specialty' },
                    {
                        title: 'Action',
                        render: function (data, type, row, meta) {
                            return '<button class="btn btn-primary" onclick="BoxingClubService.viewCoachDetails(\'' + row.id + '\')">View Details</button>';
                        }
                    }
                ], data, 10);
            },
            error: function (xhr, status, error) {
                console.error('Error fetching coaches data:', error);
            }
        });
    },

    fetchTrainingPlans: function () {
        $.ajax({
            url: 'data/training_plans.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Render training plans data in a table
                Utils.datatable('trainingPlans', [
                    { data: 'plan', title: 'Plan' },
                    { data: 'duration', title: 'Duration' },
                    { data: 'price', title: 'Price' }
                ], data, 10);
            },
            error: function (xhr, status, error) {
                console.error('Error fetching training plans data:', error);
            }
        });
    },

    viewCoachDetails: function (id) {
        $.ajax({
            url: 'data/coach_' + id + '.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Populate coach details in a modal or dedicated section
                $('#coachName').text(data.name);
                $('#coachExperience').text(data.experience);
                $('#coachSpecialty').text(data.specialty);
                $('#coachModal').modal('show');
            },
            error: function (xhr, status, error) {
                console.error('Error fetching coach details:', error);
            }
        });
    }
};

// User Service for authentication
let UserService = {
    init: function () {
        let token = localStorage.getItem("user");
        if (token) {
            window.location.replace("index.html");
        }
        $("#login-form").validate({
            submitHandler: function (form) {
                let entity = Object.fromEntries(new FormData(form).entries());
                UserService.login(entity);
            }
        });
    },

    login: function (user) {
        $.ajax({
            url: 'data/users.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                data.forEach(element => {
                    if (element.email == user.email && element.password == user.password) {
                        delete element.password;
                        localStorage.setItem("user", JSON.stringify(element));
                        window.location.replace("index.html");
                    }
                });
                toastr.error('Invalid credentials');
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
    },

    logout: function () {
        localStorage.clear();
        window.location.replace("login.html");
    }
};

$(document).ready(function () {
    BoxingClubService.init();
    UserService.init();
});
