getAchievements = () => {
    $.get("json/achievements.json", (data) => {
      let output = "";
      data.forEach((person) => {
        output += `
          <div class="row">
            <div class="col-md-8">
              <!-- Wanted Person -->
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">${person['competition']}</h5>
                  <p class="card-text">Year: ${person['year']}</p>
                  <p class="card-text">Title: ${person['title']}</p>
                  <p class="card-text">Winner: ${person['winner']}</p>
                  <p class="card-text">Prize: ${person['prize']}</p>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      $("#achievements").html(output);
    });
  };
  
  
