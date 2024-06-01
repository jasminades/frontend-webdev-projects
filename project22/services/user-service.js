const UserService = {
    init: function () {
        console.log("UserService initialized");
    },

    login: function (user) {
        $.ajax({
            url: '../json/users.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let authenticatedUser = data.find(u => u.email === user.email && u.password === user.password);
                if (authenticatedUser) {
                    localStorage.setItem("user", JSON.stringify(authenticatedUser));
                    if (authenticatedUser.role === 'coach') {
                        window.location.replace("coach_dashboard.html");
                    } else if (authenticatedUser.role === 'member') {
                        window.location.replace("member_dashboard.html");
                    } else {
                        window.location.replace("boxing2.html");
                    }
                } else {
                    toastr.error('Invalid credentials');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data from file:', error);
                toastr.error('An error occurred while trying to log in. Please try again.');
            }
        });
    },

    logout: function () {
        localStorage.clear();
        window.location.replace("login.html");
    }
};
