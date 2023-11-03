document.addEventListener("DOMContentLoaded", function() {
    // localStorage에서 사용자 정보 불러오기
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
    if (userInfo) {
      console.log("이름:", userInfo.name);
      console.log("성별:", userInfo.gender);
      console.log("본인의 MBTI:", userInfo.mbti);
      // 이상형 MBTI는 사용자가 이 페이지에서 선택할 것으로 예상됩니다.
    } else {
      console.error("사용자 정보를 불러오지 못했습니다.");
    }
  
    // 기존 코드나 추가적인 기능 구현
  });
  