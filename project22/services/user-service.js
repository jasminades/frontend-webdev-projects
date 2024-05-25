let UserService = {
  init: function () {
      let token = localStorage.getItem("user");
      if (token) {
          let user = JSON.parse(token);
          if (user.role === 'coach') {
              window.location.replace("coach_dashboard.html");
          } else if (user.role === 'member') {
              window.location.replace("member_dashboard.html");
          } else {
              window.location.replace("boxing2.html"); // Redirect to default page
          }
      }

      $("#login-form").validate({
          submitHandler: function (form) {
              let entity = Object.fromEntries(new FormData(form).entries());
              UserService.login(entity);
          },
      });
  },

  
    
  login: function (user) {
      $.ajax({
          url: '/../json/users.json',
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
                      window.location.replace("boxing2.html"); // Redirect to default page
                  }
              } else {
                  toastr.error('Invalid credentials');
              }
          },
          error: function (xhr, status, error) {
              console.error('Error fetching data from file:', error);
          }
      });
  },
  
  logout: function () {
      localStorage.clear();
      window.location.replace("login.html");
  },
}


