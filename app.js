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

function onlineWidthChange(e) {
	ctx.lineWidth = e.target.value;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", onlineWidthChange);
