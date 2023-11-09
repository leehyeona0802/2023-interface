document.addEventListener("DOMContentLoaded", function() {
    const genderButtons = document.querySelectorAll(".gender-button");
    const mbtiButtons = document.querySelector(".mbti-buttons");
    const nextButton = document.getElementById("nextButton");
    const nextButton1 = document.getElementById("nextButton1");

    let selectedGender = null;

    genderButtons.forEach(button => {
      button.addEventListener("click", function() {
        genderButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        selectedGender = button.dataset.gender;
      });
    });

    const mbtiOptions = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
    mbtiOptions.forEach(option => {
      const mbtiButton = document.createElement("button");
      mbtiButton.classList.add("mbti-button");
      mbtiButton.textContent = option;
      mbtiButton.dataset.mbti = option;
      mbtiButton.addEventListener("click", function() {
        mbtiButtons.querySelectorAll(".mbti-button").forEach(btn => btn.classList.remove("active"));
        mbtiButton.classList.add("active");
      });
      mbtiButtons.appendChild(mbtiButton);
    });
    
    
    nextButton.addEventListener("click", function() {
      const name = document.getElementById("nameInput").value;
      const gender = document.querySelector(".gender-button.active")?.dataset.gender;
      const mbtiType = document.querySelector(".mbti-button.active")?.dataset.mbti;
      
      if (!name || !gender || !mbtiType) {
        alert("모든 필드를 채워주세요.");
        return;
      }

      localStorage.setItem("name", name);
      localStorage.setItem("gender", gender);
      localStorage.setItem("mbtiType", mbtiType);

      window.location.href = "test2.html";
    });
  
     
    // nextButton1.addEventListener("click", function() {

    //   const idealType = document.querySelector(".image-button.active")?.alt;
      

    //   if (!idealType) {
    //     alert("MBTI 이상형을 선택해주세요.");
    //     return;
    //   }

    //   localStorage.setItem("idealType", idealType);
    //   window.location.href = "test3.html";
    // });


});

