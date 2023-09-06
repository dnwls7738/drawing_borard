// 색팔레트 불러오기
const colorOptions = Array.from(
	document.getElementsByClassName("color-option")
);
// 색선택 불러오기
const color = document.getElementById("color");
// 선굵기선택 불러오기
const lineWidth = document.getElementById("line_width");
// 캔버스 불러오기
const canvas = document.querySelector("canvas");
// 캔버스에 그릴 수 있는 붓(context)
const ctx = canvas.getContext("2d");
// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

let isPainting;
// 초기 선 굵기
ctx.lineWidth = lineWidth.value;

function onMove(e) {
	// 선 그리기
	if (isPainting) {
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		return;
	}
	// 커서 위치에 context 움직이기
	ctx.moveTo(e.offsetX, e.offsetY);
}
// 페인팅 시작
function startPainting() {
	isPainting = true;
}
// 페인팅 끝
function stopPainting() {
	isPainting = false;
	// 새로운 path로 초기화
	ctx.beginPath();
}
// 선 굵기
function onlineWidthChange(e) {
	ctx.lineWidth = e.target.value;
}
// 색 변경
function ocColorChange(e) {
	ctx.strokeStyle = e.target.value;
	ctx.fillStyle = e.target.value;
}
// 팔레트 선택한 색 변경
function onColorClick(e) {
	ctx.strokeStyle = e.target.dataset.color;
	ctx.fillStyle = e.target.dataset.color;
	color.value = e.target.dataset.color;
}
// 캔버스에 선그리는 이벤트
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
// 선굵기 변경 이벤트
lineWidth.addEventListener("change", onlineWidthChange);
// 색 변경 이벤트
color.addEventListener("change", ocColorChange);
// 팔레트 색 변경 이벤트
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
