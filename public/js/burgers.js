// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-tastes_Good").on("click", function(event) {
      var id = $(this).data("id");
      var new_tastes_Good = $(this).data("new_tastes_Good");
  
      var new_tastes_Good_State = {
        tastes_Good: new_tastes_Good
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: new_tastes_Good_State
      }).then(
        function() {
          console.log("changed tastes good to", new_tastes_Good);
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
        tastes_Good: $("[name=tastes_Good]:checked").val().trim()
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
  