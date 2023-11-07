document.addEventListener("DOMContentLoaded", function() {
    const genderButtons = document.querySelectorAll(".gender-button");
    const mbtiButtons = document.querySelector(".mbti-buttons");
    const nextButton = document.getElementById("nextButton");
    
    const imageButtons = document.querySelectorAll(".image-button");

    imageButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            imageButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");
        });
    });

     
    nextButton.addEventListener("click", function() {
      // Find the button with the class 'image-button' and 'active'
      const selectedButton = document.querySelector(".image-button.active");
    
      if (!selectedButton) {
        alert("MBTI 이상형을 선택해주세요.");
        return;
      }
    
      // Retrieve the MBTI type from the 'alt' attribute of the image inside the selected button
      const idealType = selectedButton.querySelector("img").alt;
    
      // Save the selected MBTI type to localStorage
      localStorage.setItem("idealType", idealType);
    
      // Redirect to test3.html
      window.location.href = "test3.html";
    });
    


});