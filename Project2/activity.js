//Apurva
//Activity 
// **Slide:** **Intro**     
// With instructions regarding the task. The intro container is shown, the continue calls the next slide when clicked.
$(function () {
    function init_activity() {
        $('#intro2').show();
        $('#submit_intro2').on('click', function () {
            $('#intro2').hide();
            init_choose();
//         });
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

        // $('#submit_text').on('click', function () {
        //     $('#mcat').hide();
        //     init_thankyou();
        // });
    }

    function init_thankyou() {
        $('#thanks').show();
        $('#next_page').on('click', function () {
            $('#thanks').hide();
            init_final();
        });
    }

    function init_final() {
        $('#final').show();
    }
    
   //Apurva
   // Get URL parameters to set condition number and participant number
  function get_params() {
    // condition number must be 1, 2, or 3
    if(window.QueryString.c !== undefined && !isNaN(parseInt(window.QueryString.c)) && parseInt(window.QueryString.c) > 0 && parseInt(window.QueryString.c) < 4) {
      window.condition = parseInt(window.QueryString.c);
    } else {
      window.condition = 1; // condition defaults to 1
    }
    // participant number must be numeric
    if(window.QueryString.p !== undefined && !isNaN(parseInt(window.QueryString.p))) {
      window.participant = parseInt(window.QueryString.p);
    } else {
      window.participant = 0; // participant defaults to 0
    }    
    // redirect
    if(window.QueryString.redirect !== undefined && window.QueryString.redirect !== "") {
      window.redirect = decode(window.QueryString.redirect);
    } else {
	  window.redirect = window.settings.defaultredirect;
	}
	
	var urlHasQuestionMark = (window.redirect.indexOf("?") > -1);
	if(!urlHasQuestionMark) {
		window.redirect = window.redirect+"?redir=1";
	}
	//alert(window.redirect);

  }
   // Function for encoding and decoding URLs
  // via http://meyerweb.com/eric/tools/dencoder/
  function encode(unencoded) {
	return encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
  }
  function decode(encoded) {
	return decodeURIComponent(encoded.replace(/\+/g,  " "));
  }     
   // Prevent that participants accidentally exit the experiment by disabling F5 and backspace keys
  shortcut.add("f5",function() {});  
  $(window).bind('beforeunload', function(){
    return 'Are you sure you want to quit the experiment completely?';
  });
       //Apurva  
    init_activity();
});
    
    
    
    
