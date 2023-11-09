const select = []
const totalPoint = 40; // 총 점수
const main = document.querySelector("#main");
const resultscreen = document.querySelector("#result")
const opposite_mbti = localStorage.getItem("idealType")
const my_mbti = localStorage.getItem("mbtiType");

//이미지(png)로 다운로드
// function PrintDiv(div){
// 	html2canvas(div).then(function(canvas){
// 		var myImage = canvas.toDataURL();
// 		downloadURI(myImage, "저장이미지이름.png") 
// 	});
// }

// function downloadURI(uri, name){
// 	var link = document.createElement("a")
// 	link.download = name;
// 	link.href = uri;
// 	document.body.appendChild(link);
// 	link.click();
// }

function cal_close_degree(){
    var opposite_num = get_opposite_mbti_num();
   
    if(opposite_mbti.substring(0,1) == 'E'){
        distance = e_mbti_level[opposite_num].pass_number - totalPoint;
        return Math.round((40 - distance)/40 * 100);
    }

    else if(opposite_mbti.substring(0,1) == 'I'){
        distance = i_mbti_level[opposite_num].pass_number - totalPoint;
        return Math.round((39 - distance)/39 * 100);
    }
    
}

function get_opposite_mbti_num(){
    if(opposite_mbti.substring(0,1) == 'E'){
        for(i = 0;i < 8;i++){
            if(e_mbti_level[i].mbti == opposite_mbti){
                num = i
            }
        }
        return num;
    }

    else if(opposite_mbti.substring(0,1) == 'I'){
        for(i = 0;i < 8;i++){
            if(i_mbti_level[i].mbti == opposite_mbti){
                num = i
            }
        }
        return num;
    }
}

function getMbti(){
    for(i = 0;i < 16;i++){
        if(my_mbti == mbti_info[i].mymbti){
            return mbti_info[i]
        }
    }
}

function pass_fail(){               // 찰떡 궁합일때 return 1, ~퍼 성공일때 return 0, 더 배워오세요일때 return -1
    if(opposite_mbti.substring(0,1) == 'E'){
        for(i = 0;i < 8;i++){
            if(e_mbti_level[i].mbti == opposite_mbti){
                num = i
                break;
            }
        }
        if(e_mbti_level[num].pass_number <= totalPoint){
           return 1;
        }

        if(totalPoint < 5){
            return -1;
        }
    }

    else if(opposite_mbti.substring(0,1) == 'I'){
        for(i = 0;i < 8;i++){
            if(i_mbti_level[i].mbti == opposite_mbti){
                num = i
            }
        }
        if(i_mbti_level[num].pass_number <= totalPoint){

            return 1;
        }

        if(totalPoint < 4){
            return -1;
        }
    }

    return 0;
}

function setResult(){

    if(pass_fail() == 1){
        var resultImg = document.createElement('img');
        const imgDiv = document.querySelector('#resultImg');
        var imgURL = 'img/image-1.jpg';
        resultImg.src = imgURL;
        resultImg.classList.add('img-fluid');
        imgDiv.appendChild(resultImg);

        const resultDesc = document.querySelector('.resultDesc');
        resultDesc.innerHTML = "찰떡 궁합이네요~~!!";

        const best_mbti1 = document.querySelector('.best_mbti');
        best_mbti1.innerHTML = "당신의 최고의 궁합은?" + '<br>' + getMbti().bestmbti;

        const worst_mbti1 = document.querySelector('.worst_mbti');
        worst_mbti1.innerHTML = "당신의 최악의 궁합은?"+ '<br>' + getMbti().worstmbti; ; // 최악의 궁합을 어떻게 계산할것인지?

    }
    else if(pass_fail() == 0){
        var resultImg = document.createElement('img');
        const imgDiv = document.querySelector('#resultImg');
        var imgURL = 'img/image-2.jpg';
        resultImg.src = imgURL;
        resultImg.classList.add('img-fluid');
        imgDiv.appendChild(resultImg);

        const resultDesc = document.querySelector('.resultDesc');
        resultDesc.innerHTML = cal_close_degree() + "퍼 성공!";

        const best_mbti1 = document.querySelector('.best_mbti');
        best_mbti1.innerHTML = "당신의 최고의 궁합은?"+ '<br>' + getMbti().bestmbti;

        const worst_mbti1 = document.querySelector('.worst_mbti');
        worst_mbti1.innerHTML = "당신의 최악의 궁합은?"+ '<br>' + getMbti().worstmbti;  // 최악의 궁합을 어떻게 계산할것인지?
    
    }

    else if(pass_fail() == -1){
        var resultImg = document.createElement('img');
        const imgDiv = document.querySelector('#resultImg');
        var imgURL = 'img/image-3.jpeg';
        resultImg.src = imgURL;
        resultImg.classList.add('img-fluid');
        imgDiv.appendChild(resultImg);

        const resultDesc = document.querySelector('.resultDesc');
        resultDesc.innerHTML = "당신은 낙제생입니다 ㅜㅜ" + '<br>' + "더 배워오세요" + '<br>' + '<button type="button" class="btn btn-outline-success" onClick="location.href="https:\\www.youtube.com\"">배우러 가기</button>'
        

        const best_mbti1 = document.querySelector('.best_mbti');
        best_mbti1.innerHTML = "당신의 최고의 궁합은?"+ '<br>' + getMbti().bestmbti;

        const worst_mbti1 = document.querySelector('.worst_mbti');
        worst_mbti1.innerHTML = "당신의 최악의 궁합은?"+ '<br>' + getMbti().worstmbti;  // 최악의 궁합을 어떻게 계산할것인지?
    }

}

function begin1(){
        main.style.display = "none";
        result.style.display = "block";
        console.log(localStorage.getItem("mbtiType"));
        setResult()
}