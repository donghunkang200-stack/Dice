//alert("테스트");
//태그선택
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");
img1.setAttribute("src", "images/dice6.png");
img2.setAttribute("src", "images/dice6.png");
//랜덤 숫자 만들기
const random1 = Math.floor(Math.random() * 6 + 1);
const random2 = Math.floor(Math.random() * 6 + 1);
console.log(random1, random2);
//랜덤 숫자에 맞는 주사위가 나와야함
img1.setAttribute("src", "images/dice" + random1 + ".png");
img2.setAttribute("src", "images/dice" + random2 + ".png");
//주사위 결과
if (random1 == random2) {
  h1.textContent = "🤦‍♀️🤦‍♂️Draw!!";
} else if (random1 > random2) {
  h1.textContent = "🎉😊👍Player1 Win!!!";
} else {
  h1.textContent = "🎉😊👏Player2 Win!!!";
}
