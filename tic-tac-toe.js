
  $(document).ready(function() {
    var turn = false;
    var xcounter = 0;
    var ycounter = 0;
    var tiegamecounter = 0;

        $('.square').click(function() {


          if (turn === false) {
            if ($(this).text() === '') {
              $(this).text('X').css('background-color', '#CC2936');
            }
            turn = true;
          }
          else if (turn === true) {
            if ($(this).text() === '') {
              $(this).text('O').css('background-color', '#08415C');
            }

            turn = false;
          }

          tiegamecounter++;
          if (tiegamecounter === 9) {
            $('#playerwins').text('Tie Game');
            $('#playerwins').css('display', 'block');
            $('#continue').text("Again?").css({"background-color": "#222", "color": "white", 'border': '10px solid #D0CCD0', 'display': 'block'});
            $('.square').prop('disabled', true);
            tiegamecounter = 0;
          }

          var board = [
            [$('#one').text(),$('#two').text(),$('#three').text()],
            [$('#four').text(),$('#five').text(),$('#six').text()],
            [$('#seven').text(),$('#eight').text(),$('#nine').text()]
          ];
          var winner = tictactoe(board);

          if (winner) {
            $('#playerwins').text(winner + ' Wins!');
            $('#playerwins').css('display', 'block');
            $('#continue').css('display', 'block');
            $('.square').prop('disabled', true);
            tiegamecounter = 0;
              if(winner === 'X'){
                $('#continue').text("Again? X > O").css({"background-color": "#CC2936", "color": "white", 'border': '10px solid #D0CCD0'});
                console.log("winner");
                xcounter++;
              }

              else if (winner === 'O'){
                $('#continue').text("Again? O > X").css({'background-color': '#08415C', 'color': 'white', 'border': '10px solid #D0CCD0'});
                ycounter++;
              }

          }

              $('#xscore').text(xcounter.toString());

              $('#yscore').text(ycounter.toString());


        });

        $('#continue').click(function() {
            $('.square').prop('disabled', false);
            $('.square').text('').css('background-color', 'white');
            $('#playerwins').css('display', 'none');
            $('#continue').css('display', 'none');
        });

    });






//----------------------
function tictactoe(board) {

   function check(player) {
     var topLeft = board[0][0] === player,
         topMid = board[0][1] === player,
         topRight = board[0][2] === player,
         midLeft = board[1][0] === player,
         mid = board[1][1] === player,
         midRight = board[1][2] === player,
         btmLeft = board[2][0] === player,
         btmMid = board[2][1] === player,
         btmRight = board[2][2] === player;

     if (
       (topLeft && topMid && topRight) ||
       (btmLeft && btmMid && btmRight) ||
       (topLeft && midLeft && btmLeft) ||
       (topRight && midRight && btmRight) ||
       (midLeft && mid && midRight) ||
       (topMid && mid && btmMid) ||
       (topLeft && mid && btmRight) ||
       (btmLeft && mid &&topRight)
     ) {
       return player;
     }
     return null;
   }

   var x = check('X'),
       o = check('O');
   return x || o;
  }
