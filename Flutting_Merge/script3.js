document.addEventListener("DOMContentLoaded", function() {
    const name = localStorage.getItem("name");
    const gender = localStorage.getItem("gender");
    const mbtiType = localStorage.getItem("mbtiType");
    const idealType = localStorage.getItem("idealType");
  
    document.getElementById("name").textContent = name;
    document.getElementById("gender").textContent = gender;
    document.getElementById("mbtiType").textContent = mbtiType;
    document.getElementById("idealType").textContent = idealType;
  });
  