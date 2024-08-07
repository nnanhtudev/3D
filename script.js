document.addEventListener("DOMContentLoaded", () => {
  const sphere = document.getElementById("sphere");
  const radius = 150; // Distance from the center
  const numberCount = 60; // Total number of numbers
  const numbers = ["7", "2", "1"]; // The sequence to repeat
  const rows = 6; // Number of rows in the sphere

  // Create and position the numbers
  for (let i = 0; i < numberCount; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.className = "number";
    numberDiv.textContent = numbers[i % numbers.length]; // Cycle through numbers

    // Calculate the position and rotation for each number
    const angleY = (360 / (numberCount / rows)) * (i % (numberCount / rows)); // Angle for Y rotation
    const angleX = (180 / rows) * Math.floor(i / (numberCount / rows)); // Angle for X rotation

    numberDiv.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg) translateZ(${radius}px)`;
    sphere.appendChild(numberDiv);
  }
});
