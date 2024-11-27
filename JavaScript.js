let count = 0;
let highScore = 0;
const stages = ["노베이스", "입문", "초심자", "하수", "초보", "중수", "고수", "마스터"];
const images = ["가온1.png", "py.webp", "js.png", "c.png", "ja.png", "last_Image.png"];
const maxClicks = 50;  // 마지막 클릭 수

function add() {
    if (count >= maxClicks) return;  // 클릭 막기

    count++;
    document.getElementById("clickCount").innerText = `클릭수: ${count}`;
    if (count > highScore) {
        highScore = count;
        document.getElementById("highScore").innerText = highScore;
    }

    let stageIndex = Math.min(Math.floor(count / 1), stages.length - 1);
    document.getElementById("stage").innerText = `단계: ${stages[stageIndex]}`;
    document.getElementById("gaonImage").src = images[stageIndex];

    if (count >= maxClicks) {
        document.getElementById("end").innerText = "가온이가 코딩의 마스터가됐어!";
        document.getElementById("gaonImage").src = images[images.length - 1];  // 마지막 이미지
    }
}

function resetGame() {
    count = 0;
    document.getElementById("clickCount").innerText = "클릭수: 0";
    document.getElementById("stage").innerText = "단계: 노베이스";
    document.getElementById("gaonImage").src = images[0];
    document.getElementById("end").innerText = "";
}