var SQUARE_SIZE;
const NUMBER_OF_ROWS = 5;
const NUMBER_OF_COLS = 5;
var NUMBER_OF_SQUARES;

var xValue = 0;
var yValue = 0;

var canvas, ctx

window.onload
    canvas = document.getElementById("chessBoard");
    ctx = canvas.getContext("2d");
    SQUARE_SIZE = canvas.height / NUMBER_OF_ROWS;
    NUMBER_OF_SQUARES = NUMBER_OF_ROWS * NUMBER_OF_COLS;

    console.log("Size of each square = " + SQUARE_SIZE +"px");

    drawBoard(canvas, NUMBER_OF_ROWS, NUMBER_OF_COLS);


function drawBoard(can, nRow, nCol) {
    var ctx = can.getContext("2d");
    var w = can.width;
    var h = can.height;

    nRow = nRow || 8;    // default number of rows
    nCol = nCol || 8;    // default number of columns

    w /= nCol;            // width of a block
    h /= nRow;            // height of a block

    for (var i = 0; i < nRow; ++i) {
        for (var j = 0, col = nCol / 2; j < col; ++j) {
            ctx.rect(2 * j * w + (i % 2 ? 0 : w), i * h, w, h);
        }
    }

    ctx.fill();
}