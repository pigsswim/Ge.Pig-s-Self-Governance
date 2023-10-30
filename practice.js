
      // Get the canvas element with id "myCanvas"
      var canvas = document.getElementById("myCanvas");

      // Get the canvas context to draw on the canvas
      var ctx = canvas.getContext("2d");

      // Define the properties of the cube: center position, size, and depth
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      var size = 100;
      var depth = 100;

      // Draw the front face of the cube
      ctx.fillStyle = "blue"; // Set the fill color to blue
      ctx.fillRect(x, y, size, size); // Draw a filled rectangle at the center position with the given size

      // Draw the top face of the cube
      ctx.fillStyle = "lightblue"; // Set the fill color to light blue
      ctx.beginPath(); // Start a new path for drawing
      ctx.moveTo(x, y); // Move the pen to the center position
      ctx.lineTo(x + size, y); // Draw a line to the right edge of the front face
      ctx.lineTo(x + size + depth, y - depth); // Draw a line to the top right corner of the top face
      ctx.lineTo(x + depth, y - depth); // Draw a line to the top left corner of the top face
      ctx.closePath(); // Close the path
      ctx.fill(); // Fill the path with the current fill color

      // Draw the right face of the cube
      ctx.fillStyle = "darkblue"; // Set the fill color to dark blue
      ctx.beginPath(); // Start a new path for drawing
      ctx.moveTo(x + size, y); // Move the pen to the right edge of the front face
      ctx.lineTo(x + size, y + size); // Draw a line to the bottom edge of the front face
      ctx.lineTo(x + size + depth, y + size - depth); // Draw a line to the bottom right corner of the right face
      ctx.lineTo(x + size + depth, y - depth); // Draw a line to the top right corner of the right face
      ctx.closePath(); // Close the path
      ctx.fill(); // Fill the path with the current fill color
