// document.addEventListener("DOMContentLoaded", function() {
//     const genderButtons = document.querySelectorAll(".gender-button");
//     const mbtiButtons = document.querySelector(".mbti-buttons");
//     const nextButton = document.getElementById("nextButton");
//     const nextButton1 = document.getElementById("nextButton1");

//     let selectedGender = null;

//     genderButtons.forEach(button => {
//       button.addEventListener("click", function() {
//         genderButtons.forEach(btn => btn.classList.remove("active"));
//         button.classList.add("active");
//         selectedGender = button.dataset.gender;
//       });
//     });
    
//     // const mbtiOptions = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
//     // mbtiOptions.forEach(option => {
//     //   const mbtiButton = document.createElement("button");
//     //   mbtiButton.classList.add("mbti-button");
//     //   mbtiButton.textContent = option;
//     //   mbtiButton.dataset.mbti = option;
//     //   mbtiButton.addEventListener("click", function() {
//     //     mbtiButtons.querySelectorAll(".mbti-button").forEach(btn => btn.classList.remove("active"));
//     //     mbtiButton.classList.add("active");
//     //   });
//     //   mbtiButtons.appendChild(mbtiButton);
//     // });

//     nextButton1.addEventListener("click", function() {

//       const idealType = document.querySelector(".image-button.active")?.alt; // 당신의 mbti 이상형ㅇ

//       // if (!idealType) {
//       //   alert("MBTI 이상형을 선택해주세요.");
//       //   return;
//       // }
    
//       localStorage.setItem("idealType", idealType);
//       window.location.href = "test3.html";
//     });
    

// });

