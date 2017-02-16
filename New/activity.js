//Apurva
//Activity 
// **Slide:** **Intro**     
// With instructions regarding the task. The intro container is shown, the continue calls the next slide when clicked.
$(function () {

    function init_survey2() {
    $('#survey2').show();
  }

    function init_activity() {
        $('#intro2').show();
        $('#submit_intro2').on('click', function () {
            $('#intro2').hide();
            init_choose();
        });
    }

    function init_choose() {

        $('#mcat').show();

       /* prtnrs = {
            "partners": [
              {
                  "avatar": 'avatars/' + window.avatar + '.png',
                  "username": window.username,
                  "major": window.major,
                  "interest1": window.interest1,
                  "interest2": window.interest2,
                  "interest3": window.interest3,
                  "interest4": window.interest4,
                  /*"text": window.description,
                  "likes": window.settings.condition_likes,
                  "usernames": window.settings.likes_by,
              }
            ]
        };*/

        var tpl = $('#partnerstmp').html(), html = Mustache.to_html(tpl, partners);
        $("#mcat").append(html);

        function reorder() {
            var grp = $("#partners").children();
            var cnt = grp.length;

            var temp, x;
            for (var i = 0; i < cnt; i++) {
                temp = grp[i];
                x = Math.floor(Math.random() * cnt);
                grp[i] = grp[x];
                grp[x] = temp;
            }
            $(grp).remove();
            $("#partners").append($(grp));
        }
        reorder();

        $('#mcat').masonry({
            itemSelector: '.entry',
            columnWidth: 10
        });

        $('#cont1').on('click', function () {
          var error = 0;
          var p_john = $('#John').val();
          var p_sarah = $('#Sarah').val();
          var p_nick = $('#Nick').val();

          if (p_john == "" || p_sarah == "" || p_nick == "") {
              error = 1;
              errormsg = 'Please choose your partner';
              p_john = "undefined";
              p_sarah = "undefined";
              p_nick = "undefined";
          }

          if (error == 0) {
              $('#mcat').hide();
              window.john = $('#John').val();
              window.sarah = $('#Sarah').val();
              window.nick = $('#Nick').val();
          } else {
              alertify.log(errormsg, "error");
          }

        });

        // $('#submit_text').on('click', function () {
        //     $('#mcat').hide();
        //     init_thankyou();
        // });
    }

    function partner_choose(){
      // $('#cont1').on('click', function () {
      //     var error = 0;
      //     var p_john = $('#John').val();
      //     var p_sarah = $('#Sarah').val();
      //     var p_nick = $('#Nick').val();

      //     if (p_john == "" || p_sarah == "" || p_nick == "") {
      //         error = 1;
      //         errormsg = 'Please choose your partner';
      //         p_john = "undefined";
      //         p_sarah = "undefined";
      //         p_nick = "undefined";
      //     }

      //     if (error == 0) {
      //         $('#mcat').hide();
      //         window.john = $('#John').val();
      //         window.sarah = $('#Sarah').val();
      //         window.nick = $('#Nick').val();
      //     } else {
      //         alertify.log(errormsg, "error");
      //     }

      //   });
    }
    //   partner_choose();
    // function init_thankyou() {
    //     $('#thanks').show();
    //     $('#next_page').on('click', function () {
    //         $('#thanks').hide();
    //         init_final();
    //     });
    // }

    // function init_final() {
    //     $('#final').show();
    // }
    init_survey2();
    init_activity();
});