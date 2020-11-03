$(function() {
  // Devour button listener
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Update: PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured state to", newDevour);
        location.reload();
      }
    );
  });

  // Form listener
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bur").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim()
    };

    // Create: POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  // Delete listener
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Delete: DELETE request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});