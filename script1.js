document.addEventListener("DOMContentLoaded", function() {

    const imageButtons = document.querySelectorAll(".image-button");

    let selectedMbti = null

    imageButtons.forEach(button => {
      button.addEventListener("click", function() {
            // Remove active class from all buttons
          imageButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
          button.classList.add("active");
       });
     });


    nextButton.addEventListener("click", function() {
      
        const selectedButton = document.querySelector(".image-button.active");
  
        if (!selectedButton) {
          alert("MBTI 이상형을 선택해주세요.");
          return;
        }  

        // Retrieve the MBTI type from the 'alt' attribute of the image inside the selected button
        const idealType = selectedButton.querySelector("img").alt;
              
        localStorage.setItem("idealType", idealType);
        window.location.href = "middlescreen.html";
      
      });

   
      
});
