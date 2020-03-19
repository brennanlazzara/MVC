// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-taste_Good").on("click", function(event) {
      var id = $(this).data("id");
      var name = $(this).data("name");
      var new_taste_Good = $(this).data("taste");

      
      var new_taste_Good_State = {
        id,
        name,
        taste_Good: !Boolean(new_taste_Good)
      };
  
      console.log(new_taste_Good_State)
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: new_taste_Good_State
      }).then(
        function() {
          console.log("changed tastes good to", new_taste_Good);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        taste_Good: $("[name=taste_Good]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burgers").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  