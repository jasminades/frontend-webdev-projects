let AchievementService = {
    init: function () {
        $('#addAchievementForm').validate({
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
                },
                title: 'required',
                description: 'required',
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
                    maxlength: 'Password cannot be longer than 20 characters',
                },
                title: 'Please enter a title for the achievement',
                description: 'Please enter a description for the achievement',
            },
            submitHandler: function (form) {
                let team = Object.fromEntries(new FormData(form).entries());
                AchievementService.addTeam(team);
                form.reset();
            },
        });

        AchievementService.fetchAchievementsFromFile();
    },

    addAchievement: function (achievement) {
        try {
            $.blockUI({ message: '<h3>Processing...</h3>' });
            toastr.success("Achievement added successfully")
            $.unblockUI();
        } catch (error) {
            console.error('Error in submitHandler:', error);
            alert('An error occurred. Please try again later.');
            $.unblockUI();
        }
    },

    fetchAchievementFromFile : function(){
        RestClient.get('achievements.json', function(data){
            Utils.datatable('achievement', [
                { data: 'name', title: 'Name' },
                { data: 'email', title: 'Email' }, 
                { data: 'password', title: 'Password' },
                { data: 'title', title: 'Title' },
                { data: 'description', title: 'Description' },
                {
                title: 'Action',
                    render: function (data, type, row, meta) {
                        return '<div><button class="btn btn-primary" onclick="AchievementtService.openEditModal(\'' + row.id + '\')">Edit Achievement</button><br/>'+
                        '<button class="btn btn-primary" onclick="AchievementService.openViewMore(\'' + row.id + '\')">View More</button></div>';
                    }
                }
            ], data, 10);
            console.log('Data from file:', data);
        }, function (xhr, status, error) {
            console.error('Error fetching data from file:', error);
        });
        /*$.ajax({
            url: Constants.PROJECT_BASE_URL + 'Achievements.json', // Replace 'data.json' with the path to your JSON file
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data)
               /*let html = "<tr><th>Name</th><th>Email</th><th>Password</th><th>Actions</th></tr>";
                data.forEach(element => {
                    html+='<tr><td>'+element.name+'</td><td>'+element.email+'</td><td>'+element.password+'</td>'+
                          '<td><button onclick=openEditModal('+element.id+')>Edit</button></td></tr>';
                });
                $("table#schievements").html(html)*/         
                /*$("table#achievements").DataTable({
                    data: data, 
                    columns: [
                        { data: 'name', title: 'Name' },
                        { data: 'email', title: 'Email' }, 
                        { data: 'password', title: 'Password' },
                        { data: 'title', title: 'Title' },
                        { data: 'description', title: 'Description' },
                        {
                        title: 'Action',
                            render: function (data, type, row, meta) {
                                return '<button class="btn btn-primary" onclick="AchievementService.openEditModal(\'' + row.id + '\')">Edit Achievement</button>';
                            }
                        }
                    ]
                })*/
               /* Utils.datatable('achievements', [
                    { data: 'name', title: 'Name' },
                    { data: 'email', title: 'Email' }, 
                    { data: 'password', title: 'Password' },
                    { data: 'title', title: 'Title' },
                    { data: 'description', title: 'Description' },
                    {
                    title: 'Action',
                        render: function (data, type, row, meta) {
                            return '<button class="btn btn-primary" onclick="AchievementService.openEditModal(\'' + row.id + '\')">Edit Achievement</button>';
                        }
                    }
                ], data, 10);
                console.log('Data from file:', data);
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data from file:', error);
            }
        });*/
    },

    getAchievementById : function(id) {
        RestClient.get('achievement_' + id + '.json', function (data) {
            console.log('Data for Achievement ' + id)
            delete data.password
            console.log(data)
            localStorage.setItem('selected_achievement', JSON.stringify(data))
            $('input[name="name"]').val(data.name)
            $('input[name="email"]').val(data.email)
            $('input[name="password"]').val(data.password)
            $('input[name="title"]').val(data.title)
            $('input[name="description"]').val(data.description)
            
            $.unblockUI();
        }, function (xhr, status, error) {
            console.error('Error fetching data from file:', error);
            $.unblockUI();
        });

        /*$.ajax({
            url: Constants.PROJECT_BASE_URL + 'achievement_' + id + '.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log('Data for Achievement ' + id)
                console.log(data)
                $('input[name="name"]').val(data.name)
                $('input[name="email"]').val(data.email)
                $('input[name="password"]').val(data.password)
                $('input[name="title"]').val(data.title)
                $('input[name="description"]').val(data.description)
                
                
                $.unblockUI();
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data from file:', error);
                $.unblockUI();
            }
        });*/
    }, 

    openEditModal : function(id) {
        console.log(id);
        toastr.success('You clicked Success toast');
        $.blockUI({ message: '<h3>Processing...</h3>' });
        $('#editModal').show();
        AchievementService.getAchievementById(id)  
    }, 

    openViewMore : function(id) {
        AchievementService.getAchievementById(id) 
        window.location.replace("#view_more");
    },

    populateViewMore : function(){
        let selected_achievement = JSON.parse(localStorage.getItem('selected_achievement'))
        $("#name").text(selected_achievement.name)
        $("#email").text(selected_achievement.email)
        $("#title").text(selected_achievement.title)
        $("#description").text(selected_achievement.description)

    },

    closeModal : function() {
        $('#editModal').hide();
    },

    editAchievement : function(achievement){
        try {
            $.blockUI({ message: '<h3>Processing...</h3>' });
            toastr.success("Achievement edited successfully")
            $.unblockUI();
        } catch (error) {
            console.error('Error in submitHandler:', error);
            alert('An error occurred. Please try again later.');
            $.unblockUI();
        }
    }
}