// **Instructions** **main.js**
// ------------
// In this document you will find instructions on how to adjust different parameters of the paradigm. You can apply the desired changes to the document main.js on your computer or server, using a source code editor.
// The following parameters are necessary to adjust: number of avatar images, and the redirect link at the end of the study. All other parameters have a default option and adjustments are optional.

$(function() {

  // **Parameters**
  // ------------
  
  function set_settings() {
    window.settings = [];
	
	// **Number** **of** **Avatar** **Images**   
	// Number of avatars the user can choose from. Can be changed to any number, depending on how many avatars you would like to display. Default: 82
	// The avatar images used in the online preview of the paradigm were created using by pickaface.net and due to their terms not available for redistribution. You should therefore create your own images. All images should be 250x250 pixels in size and carry the names "avatar_NUMBER.png" (e.g. avatar_1.png; "png" should be lower case; the numbers in the names should be consequtive, starting from 1). The number of avatars dependeds on the corresponding parameter. The images should be placed in folder "avatars," located in the main study folder extracted on your computer or server.

    settings.numberofavatars = 32;

	
    // **Redirection**    
	// After the introduction task is over participants should be redirected to a survey with manipulation checks and dependent measures, to subsequent tasks, or to further instructions. 
	// If the study is called with a parameter for redirection, as explained in the documentation, this value is overwritten. 
	// To the redirect link, the following information will be appended: (1) participant number, (2) condition, (3) username, (4) description submitted by participant. These variables can be extracted from the link, saved as data, and used for linking the Social Media Ostracism paradigm to subsequent tasks and measures. See documentation for more details.

//     settings.defaultredirect = 'https://iastate.qualtrics.com/SE/?SID=SV_78y5vvwkxJZrLtH';
	 // settings.defaultredirect = 'https://iastate.qualtrics.com/SE/?SID=SV_0rFAtUZh2zg7oA5';
	    // settings.defaultredirect = 'https://iastate.qualtrics.com/SE/?SID=SV_eDMbyZaMaeG0ynb';
	  settings.defaultredirect = 'https://iastate.qualtrics.com/SE/?SID=SV_bl7dbR8Cxra8NU1';
	
	// **Tasklength**     
    // Length of the group introduction task in milliseconds. Can be changed to any number (in ms). Default: 180000 (3min) 
//     settings.tasklength = 240000; 
    settings.tasklength = 180000; 
	
	// **Number** **of** **"likes"**    
    // Each received "like" is indicated by the timepoint (in ms) at which the "like" will appear. To change the number of "likes" in each condition, add or remove timepoints. Make sure that every timepoint (except the first) is preceded by a single comma. 
	// In cases with only 1 "like," a second "like" is added with time point 9999999. This "like" is added for programming purposes and is never executed, as it is outside the task time

    // In condition 1, the participant will receive 1 like at the following timepoint (in ms). Default: [12000, 9999999]
   // A     settings.condition_1_likes = [12000, 9999999]; 
// 	settings.condition_1_likes = [12000, 20000, 30000, 9999999]; 
	   settings.condition_1_likes = [12000, 120000, 80000, 9999999]; 

    // In condition 2, user will receive 6 likes at the following timepoints (in ms). Default: [10000, 15000,35000,80000,1320000,150000]
//        settings.condition_2_likes = [10000, 15000,35000,80000,132000,150000];  
//          settings.condition_2_likes = [35000,80000,132000,150000];  
          settings.condition_2_likes = [35000,80000,150000];  

	  
    // In condition 3, user will receive 9 likes at the following timepoints (in ms). Default: [10000, 11000,15000,35000,80000,100000,110000,150000,20000]
//     settings.condition_3_likes = [10000, 11000,15000,35000,80000,100000,110000,150000,20000]; 
//       settings.condition_3_likes = [10000, 11000,15000,35000,80000,20000]; 
        settings.condition_3_likes = [10000, 11000, 35000]; 
	// **Others' likes**     
	// To keep the total distribution of "likes" constant across conditions, The "likes" received by one group member can be adjusted according to the participant's. By default, the other group member receives 9 "likes" in the participant-ostracism condition, 5 in the participant-inclusion condtion, and 1 in the participant-overinclusion condtion.
// 	settings.condition_1_adjusted_likes = [12000, 14000,15000,35000,80000,100000,110000,150000,20000]; // 9
// 	settings.condition_1_adjusted_likes = [12000, 14000,15000,35000,80000,20000]; // 9
// 	settings.condition_2_adjusted_likes = [12000, 14000,15000,35000,80000]; // 5
// 	settings.condition_1_adjusted_likes = [15000,35000,80000,200000]; // 4
	settings.condition_1_adjusted_likes = [15000,80000,100000]; // 3
	settings.condition_2_adjusted_likes = [14000,35000,80000]; // 3
	settings.condition_3_adjusted_likes = [12000, 9999999]; //1	
	
    // Usernames by which the participant will receive "likes"
	// If group member names are changed, these should be changed accordingly.
	//settings.likes_by = ['John', 'AncaD', 'Sarah', 'Arjen', 'Jane', 'George', 'Dan', 'Heather', 'Ky'];
      //Apurva
	settings.likes_by = ['Chris', 'Pat', 'Sam', 'KY'];
	settings.comments_by = ['Chris', 'Pat', 'Sam', 'KY'];
      //Apurva
  }
  
  // -------------------
  // Above were the basic parameters you can adjust using the instructions. The remaining code is also annotated, but we do not recommend changing it, unless you are comfortable with web programming.
  // -------------------
  function init_survey1() {
    $('#survey1').show();
    //$('#survey1').hide();
  }
  
  // **Slide:** **Intro**     
  // With instructions regarding the task. The intro container is shown, the continue calls the next slide when clicked.
  function init_intro() {
  	$('#intro').show();
  	$('#submit_intro').on('click',function() {
			$('#survey1').hide();
			$('#intro').hide();
  			init_name();  			
  	});	
  }
  

  // **Slide:** **Username**       
  // Note: Only alphanumeric usernames without spaces are accepted
  
  function init_name() {

  	$('#name').show();

    
  	$('#submit_username').on('click',function() {

  		var error = 0;
  		var uname = $('#username').val();

  		if(uname == "") {
  			error = 1;
  			errormsg = 'Lütfen buraya yazın';
  			uname = "undefined";
  		}
  		if(not_alphanumeric(uname)) {
  		    error = 1;
            /*Apurva 
  		    errormsg = 'Please only letters (and no spaces)';  //before
  		    Apurva*/
  		    errormsg = 'Lütfen sadece harf/rakam girin';   //Apurva
  		}  		

  		if(error == 0) {
			$('#name').hide();
			window.username = $('#username').val();
  			init_avatar();  			
  		} else {
  			alertify.log(errormsg,"error");
  		}


  	});
  }

  // **Slide:** **Avatar**       
  // Avatar slide in which the participant is asked to select an avatar
   
  function init_avatar() {
  	$('#avatar').show();

    var avatars = window.settings.numberofavatars;    
      //for(var i=0; i<avatars; i++)  //A
    for (var i = 1; i <= avatars; i++) //A
  	{ 
  		$('.avatars').append('<img id="avatar_' + i+ '" src="avatars/avatar_' + i + '.png" class="avatar" />');
  	} 

  	$('.avatar').on('click', function() {
  		$('.avatar').removeClass('selected');
  		$(this).addClass('selected');
  	});

    	$('#submit_avatar').on('click',function() {
    		if($('.selected').length == 1) {
  			$('#avatar').hide();
  			window.avatar = $('.selected').attr('id');
  			window.avatarexport = /avatar_([^\s]+)/.exec(window.avatar)[1];
    			init_text();  			
    		} else {
    			alertify.log("Lütfen avatar seçin","error");
    		}
    	});

  }


  // **Slide:** **Description**   
  function init_text() {
  	$('#text').show();

	$("#description").keyup(function(){
//   	    $("#count").text("Characters left: " + (450 - $(this).val().length));
  	    $("#count").text("Characters Count: " + $(this).val().length);
	});
	
	/*RANDOM CHANGES
	var d=$('description').val();
	alert(d);
	 var dd=$('text textarea').val();
	  alert(dd);
	var c =d.trim().split(' ').length;
	 alert(c);*/
  	$('#submit_text').on('click',function() {

  		var error = 0;
  		if($('#description').val() == "") {
  			error = 1;
  			errormsg = 'Lütfen buraya yazın';
  		}
  	    //if($('#description').val() !== "" && $('#description').val().length < 140) {  //Apurva
  		if ($('#description').val() !== "" && $('#description').val().length < 450) {   //Apurva*/
//         if ($('#description').val() !== "" && $('#description').val().length < 10) {   //Apurva
		
  			error = 1;
  			errormsg = 'Lütfen biraz daha yazın';
			}
  	    //if($('#description').val().length > 401) {   //Apurva
  	    //if ($('#description').val().length > 701) {  //Apurva
    //     if ($('#description').val().length > 21) {  //Apurva
  		// 	error = 1;
  		// 	errormsg = 'Please enter less text';
  		// }  		
  		if(error == 0) {
  			$('#text').hide();
  			window.description = $('#description').val();
    			init_more_intro();  			
    		} else {
    			alertify.log(errormsg,"error");
    		}
  	});  	
  }
    //Apurva
    // **Slide:** **More Details**
  function init_more_intro() {
      $('#more_intro').show();
      $('#submit_more_intro').on('click', function () {
          var error = 0;
          var stmajor = $('#major').val();
          var attribute1 = $('#attr1').val();
          var attribute2 = $('#attr2').val();
          var attribute3 = $('#attr3').val();
          var attribute4 = $('#attr4').val();

          if (stmajor == "" || attribute1 == "" || attribute2 == "" || attribute3 == "" || attribute4 == "") {
              error = 1;
              errormsg = 'Lütfen bütün alanlara yazın';
              stmajor = "undefined";
              attribute1 = "undefined";
              attribute2 = "undefined";
              attribute3 = "undefined";
              attribute4 = "undefined";
          }
          if (not_alphanumeric(stmajor) || not_alphanumeric(attribute1) || not_alphanumeric(attribute2) || not_alphanumeric(attribute3) || not_alphanumeric(attribute4)) {
              error = 1;
              errormsg = 'Lütfen sadece harf/rakam/tire/altçizgi/boşluk girin';   //Apurva
          }

          if (error == 0) {
              window.stmajor = $('#major').val();
              window.attribute1 = $('#attr1').val();
              window.attribute2 = $('#attr2').val();
              window.attribute3 = $('#attr3').val();
              window.attribute4 = $('#attr4').val();
	      $('#more_intro').hide();
              chooseGender();
          } else {
              alertify.log(errormsg, "error");
          }

      });
  }                 
	
  function chooseGender() {
	$('#Gender').show();

	$('#submit_gender').on('click', function() {
	    window.G=$("input[name='G']:checked", '#form1').val();
	    //alert($(".partner:checked").val());
             $('#Gender').hide();
		init_fb_intro();
	});
    }
	//Apurva

  // **Slide:** **Instructions**   
  function init_fb_intro() {
  	$('#fb_intro').show();
	
  	$('#continue_fb_intro').on('click',function() {

			$('#fb_intro').hide();
 			cont_fb_intro();  			

  	});	
  }
	
function cont_fb_intro() {
  	$('#intro_continued').show();
	
  	$('#submit_fb_intro').on('click',function() {

			$('#intro_continued').hide();
 			init_fb_login();  			

  	});	
  }


  // **Slide:** **Login** **Screen**   
  // Participant can continue after 8000ms = 8s      
  function init_fb_login() {
  	$('#fb_login').show();
	

  	setTimeout(function() {
  		$('#msg_all_done').show();
  		$("#loader").hide();
  	}, 8000);
	
  	$('#submit_fb_login').on('click',function() {
			$('#fb_login').hide();
  			init_task();  			
  	});	
  }
  
  // **Slide:** **Task**   
  function init_task() {

      $('#task').show();

      //shortcut.add("Backspace",function() {});      

      jQuery("#countdown").countDown({
          startNumber: window.settings.tasklength/1000, // in seconds
          callBack: function(me) {
              console.log('over');
              $('#timer').text('00:00');
          }
      });

   if(window.G == "Male") {
      users = {
          "posts" : [
			{
			    "avatar": 'avatars/' + window.avatar + '.png',
			    "username": window.username,
			    "text": window.description,
			    "likes": window.settings.condition_likes,
			    "usernames": window.settings.likes_by,
          // Apurva
          "comments": window.settings.condition_comments
			}
          ]
      };
   	// Add user box to slide     
      var tpl = $('#usertmp').html(),html = Mustache.to_html(tpl, users);
      $("#task").append(html);
	  
      // Add other boxes to slide    
      var tpl = $('#otherstmp').html(),html = Mustache.to_html(tpl, others);
      $("#task").append(html);
	   
   } else {
	users = {
          "posts1" : [
			{
			    "avatar": 'avatars/' + window.avatar + '.png',
			    "username": window.username,
			    "text": window.description,
			    "likes": window.settings.condition_likes,
			    "usernames": window.settings.likes_by,
          // Apurva
          "comments": window.settings.condition_comments
			}
          ]
      };   
    // Add user box to slide     
      var tpl = $('#usertmp1').html(),html = Mustache.to_html(tpl, users);
      $("#task").append(html);
	  
      // Add other boxes to slide    
      var tpl = $('#otherstmp1').html(),html = Mustache.to_html(tpl, others);
      $("#task").append(html);
    }   
//       users = {
//           "posts" : [
// 			{
// 			    "avatar": 'avatars/' + window.avatar + '.png',
// 			    "username": window.username,
// 			    "text": window.description,
// 			    "likes": window.settings.condition_likes,
// 			    "usernames": window.settings.likes_by,
//           // Apurva
//           "comments": window.settings.condition_comments
// 			}
//           ]
//       };
		
//       // Add user box to slide     
//       var tpl = $('#usertmp').html(),html = Mustache.to_html(tpl, users);
//       $("#task").append(html);
	  
//       // Add other boxes to slide    
//       var tpl = $('#otherstmp').html(),html = Mustache.to_html(tpl, others);
//       $("#task").append(html);
 
      // Randomize order of other players boxes
      function reorder() {
          var grp = $("#others").children();
          var cnt = grp.length;

          var temp,x;
          for (var i = 0; i < cnt; i++) {
              temp = grp[i];
              x = Math.floor(Math.random() * cnt);
              grp[i] = grp[x];
              grp[x] = temp;
          }
          $(grp).remove();
          $("#others").append($(grp));
      }
      reorder();

      // When user receives likes
      $('.userslikes').each(function() {
          var that = $(this);
          var usernames = $(this).data('usernames').split(",");
          var times = $(this).data('likes').split(",");

          for(var i=0; i<times.length; i++) 
              //for (var i = 1; i <= times.length; i++)
          { 
              times[i] = +times[i]; 
  			
              themsg = usernames[i] + " liked your post";

              setTimeout(function(themsg) {
                  that.text(parseInt(that.text()) + 1);
                  alertify.success(themsg)

              }, times[i], themsg);
          } 		
      });
	  
      // When others receive likes
      $('.otherslikes').each(function() {
          var that = $(this);
          var times = $(this).data('likes').split(",");
  		
          for(var i=0; i<times.length; i++) 
          { 
              times[i] = +times[i]; 
  			
              setTimeout(function () {
                  that.text(parseInt(that.text()) + 1);
              }, times[i]);
  			
          } 
      });
	 

      // Initialize like buttons
      $('.btn-like').on('click', function() {
          $(this).prev().text(parseInt($(this).prev().text()) + 1);
          // Like buttons can only be clicked once
          $(this).attr("disabled", true);
      });

      // Initalize Masonry plugin
      // For display of user and other players boxes in columns without gaps
      $('#task').masonry({
          itemSelector : '.entry',
          columnWidth : 10
      });

      //Apurva
      //Initialize comment buttons
      $(function () {
          $('.btn-comment').click(function (e) {
              $(this).prev().slideFadeToggle();
		//Apurva
	  $( '#new_message').each(function() {
  	       $( '#body' ).keyup();
	  });
	     //Apurva
		 return false;
          });
	    
          $('.close').on('click', function () {
              $('.pop').hide();
          });
      });

      $.fn.slideFadeToggle = function (easing, callback) {
          return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
      };
      //Apurva

      //Apurva
      //When user receives comments
	    var arr = ["Pat says: I enjoyed reading your description " , "Pat says: I didn’t like what you wrote there, I think you should have put more effort in it", "Pat says: Yeah, right. It looks like you are making this up."],
                rand = Math.floor(Math.random() * arr.length),
	        func = arr[rand];
	  	window.func=func;
	  
      function usercomments() {
//           var arr = ["Jason says: It's easy to lie just to make sure you impress other people.. I think you are lying to make sure people will like you. " , "Jason says: I didnot like what you wrote there. I think you should have put more effort in it ", "Jason says: I enjoyed reading your description!"],
//               rand = Math.floor(Math.random() * arr.length),
// 	      func = arr[rand]
            
	    setTimeout(function () {
              alertify.success('Sam says: Hi! Nice to meet you');
		  //document.getElementById("bottomcomment").style.visibility = "visible";
              // $(".commentby").show('Georgeee commented "Hello! nice to meet you"');
          }, 30000);
	   setTimeout(function () {
              //alertify.success('Georgeee commented "Hello! nice to meet you"');
		  document.getElementById("bottomcomment").style.visibility = "visible";
              // $(".commentby").show('Georgeee commented "Hello! nice to meet you"');
          }, 30000);   
	  
          setTimeout(function () {
// 		 alertify.success(window.func);
              alertify.success(func);
          }, 100000);
	  if(rand==0) {
		setTimeout(function () {
              //alertify.success('Georgeee commented "Hello! nice to meet you"');
		  document.getElementById("bottomcomment1").style.visibility = "visible";
           },100000);
	  }
	  else if(rand==1) {
		setTimeout(function () {
              //alertify.success('Georgeee commented "Hello! nice to meet you"');
		  document.getElementById("bottomcomment2").style.visibility = "visible";
              // $(".commentby").show('Georgeee commented "Hello! nice to meet you"');
           },100000);
	  }
	  else if(rand==2) {
		setTimeout(function () {
              //alertify.success('Georgeee commented "Hello! nice to meet you"');
		  document.getElementById("bottomcomment3").style.visibility = "visible";
              // $(".commentby").show('Georgeee commented "Hello! nice to meet you"');
           },100000);
	  }
          // $(document).ready(function() {
          //   $(func).hide().delay(35000).addClass("displaycomments");
          // });
       }
      usercomments();
   //Apurva
// // --------------- 5/10/2017 ---------------- //
//     // Redirect, default after 180000ms = 180s = 3min
//     setTimeout(function() {
    
//     $(window).unbind('beforeunload');
    
//     $('#final-continue').show();

//     $('#timer').text('00:00');
    
//      $('#final-continue').on('click', function() {

//        // Redirect link
// 	//location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d='+encodeURI(window.description);
//   	//location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d='+encodeURI(window.description)+'&mj='+encodeURI(window.stmajor)+'&a1='encodeURI(window.attribute1)+'&a2='encodeURI(window.attribute2)+'&a3='encodeURI(window.attribute3)+'&a4='encodeURI(window.attribute4);
//  	location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d='+encodeURI(window.description)+'&mj='+encodeURI(window.stmajor)+'&a1='+encodeURI(window.attribute1)+'&a2='+encodeURI(window.attribute2)+'&a3='+encodeURI(window.attribute3)+'&a4='+encodeURI(window.attribute4)+'&rd='+func;   
//      });
	      
    
//     },window.settings.tasklength); // timing for task
	  
	  // --------------- 5/10/2017 ---------------- //
    // Redirect, default after 180000ms = 180s = 3min
    setTimeout(function() {
    
    $(window).unbind('beforeunload');
    
    $('#final-continue').show();

    $('#timer').text('00:00');
    
     $('#final-continue').on('click', function() {
	  $('#task').hide();
		survey_par();	
     });
	      
    
    },window.settings.tasklength); // timing for task
	  
  }
	
     function survey_par() {
      $('#par_survey').show();
	  $('#survey-continue').on('click', function() {
	    window.s11=$('input[name=s11]:checked', '#response1').val();
            window.s12=$('input[name=s12]:checked', '#response2').val();
            window.s13=$('input[name=s13]:checked', '#response3').val();
	    window.s14=$('input[name=s14]:checked', '#response4').val();
	    window.s15=$('input[name=s15]:checked', '#response5').val();
	    window.s16=$('input[name=s16]:checked', '#response6').val();
	    window.s21=$('input[name=s21]:checked', '#response11').val();
	    window.s22=$('input[name=s22]:checked', '#response22').val();
	    window.s23=$('input[name=s23]:checked', '#response33').val();
	    window.s24=$('input[name=s24]:checked', '#response44').val();
	    window.s25=$('input[name=s25]:checked', '#response55').val();
	    window.s26=$('input[name=s26]:checked', '#response66').val();
	    window.s31=$('input[name=s21]:checked', '#response111').val();
	    window.s32=$('input[name=s32]:checked', '#response222').val();
	    window.s33=$('input[name=s33]:checked', '#response333').val();
	    window.s34=$('input[name=s34]:checked', '#response444').val();
	    window.s35=$('input[name=s35]:checked', '#response555').val();
	    window.s36=$('input[name=s36]:checked', '#response666').val();
            $('#par_survey').hide();
	    init_activity();
// 		 location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d='+encodeURI(window.description)+'&mj='+encodeURI(window.stmajor)+'&a1='+encodeURI(window.attribute1)+'&a2='+encodeURI(window.attribute2)+'&a3='+encodeURI(window.attribute3)+'&a4='+encodeURI(window.attribute4)+'&rd='+func;   
	    //alert($(".partner:checked").val());
// 		location.href = window.redirect+'&p='+window.participant+'&par='+window.partner;
  
  });
//      }

  }
// --------------	Program 2 - 5/11/2017   -------------     //
	function init_activity() {
        $('#intro2').show();
        $('#submit_intro2').on('click', function () {
   		$('#intro2').hide();
            init_choose();
        });
    }

    function init_choose() {
	window.onbeforeunload = null; 
        $('#mcat').show();
//--------- 5/11/2017 -------//
    	if( window.G == "Male" ) {
      users = {
	    "partner1": [
              {
                  "avatar": 'avatars/' + window.avatar + '.png',
                  "username": window.username,
                  "major": window.major,
                  "interest1": window.interest1,
                  "interest2": window.interest2,
                  "interest3": window.interest3,
                  "interest4": window.interest4,
              }
            ]
        };
	   	    
    	var tpl = $('#partnerstmp_m').html(), html = Mustache.to_html(tpl, partners);
        $("#mcat").append(html);
        } else {
	    
	    users = {
	    "partner2": [
              {
                  "avatar": 'avatars/' + window.avatar + '.png',
                  "username": window.username,
                  "major": window.major,
                  "interest1": window.interest1,
                  "interest2": window.interest2,
                  "interest3": window.interest3,
                  "interest4": window.interest4,
              }
            ]
        };
	    
           var tpl = $('#partnerstmp_f').html(), html = Mustache.to_html(tpl, partners);
        $("#mcat").append(html);
		
    }
//     }
	
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
	    choosePartner();
	    ('#mcat').hide();
    }

	function choosePartner() {
// 	if ( window.G == "") {
// 	//$(window).unbind('beforeunload');
// 	$('#f-continue').on('click', function() {
// 	    window.partner=$("input[name='partner']:checked", '#form_m').val();
// 	    //alert($(".partner:checked").val());
// 		location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d='+encodeURI(window.description)+'&mj='+encodeURI(window.stmajor)+'&a1='+encodeURI(window.attribute1)+'&a2='+encodeURI(window.attribute2)+'&a3='+encodeURI(window.attribute3)+'&a4='+encodeURI(window.attribute4)+'&rd='+func+window.redirect+'&p='+window.participant+'&par='+window.partner;  
// // 		location.href = window.redirect+'&p='+window.participant+'&par='+window.partner;
// 	});
// 	} else { 
	$('#f-continue').on('click', function() {
	    window.partner=$('input[name=partner]:checked', '#form').val();
	    //alert($(".partner:checked").val());
		//alert(window.s25);
		//alert(window.redirect+' '+window.participant+' '+window.condition+' '+encodeURI(window.username)+' '+window.avatarexport+' '+encodeURI(window.description)+' '+encodeURI(window.stmajor)+' '+encodeURI(window.attribute1)+' '+encodeURI(window.attribute2)+' '+encodeURI(window.attribute3)+' '+encodeURI(window.attribute4)+' '+func+'&g='+encodeURI(window.G)+' '+window.s11+' '+window.s12+' '+window.s13+' '+window.s14+' '+window.s15+' '+window.s16+' '+window.s21+' '+window.s22+' '+window.s23+' '+window.s24+' '+window.s25+' '+window.s26+' '+window.s31+' '+window.s32+' '+window.s33+' '+window.s34+' '+window.s35+' '+window.s36+' '+window.partner);
		location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d='+encodeURI(window.description)+'&mj='+encodeURI(window.stmajor)+'&a1='+encodeURI(window.attribute1)+'&a2='+encodeURI(window.attribute2)+'&a3='+encodeURI(window.attribute3)+'&a4='+encodeURI(window.attribute4)+'&rd='+window.func+'&g='+encodeURI(window.G)+'&s11='+window.s11+'&s12='+window.s12+'&s13='+window.s13+'&s14='+window.s14+'&s15='+window.s15+'&s16='+window.s16+'&s21='+window.s21+'&s22='+window.s22+'&s23='+window.s23+'&s24='+window.s24+'&s25='+window.s25+'&s26='+window.s26+'&s31='+window.s31+'&s32='+window.s32+'&s33='+window.s33+'&s34='+window.s34+'&s35='+window.s35+'&s36='+window.s36+'&par='+window.partner;  
		
// 		location.href = window.redirect+'&p='+window.participant+'&par='+window.partner;
	});
// 	}
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
	    //Apurva
	//choosePartner(); 
    }
	// --------------	Program 2 - 5/11/2017   -------------     //

// // --------------- 5/10/2017 ---------------- //

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
  
  
  // adjustments according to current condition
  function adjust_to_condition() {

    // the number of likes a person receives depends on the condition
	// in addition, the number of likes another person receives is adjusted, so that there is the same number of likes overall
	switch(condition) {
		case 1:
			window.settings.condition_likes = settings.condition_1_likes;
			window.others.posts[1].likes = settings.condition_1_adjusted_likes;
			break;
		case 2:
			window.settings.condition_likes = settings.condition_2_likes;
			window.others.posts[1].likes = settings.condition_2_adjusted_likes;
			break;
		case 3:
			window.settings.condition_likes = settings.condition_3_likes;
			window.others.posts[1].likes = settings.condition_3_adjusted_likes;
			break;
	}	
	  
  }
  

  // The variable QueryString contains the url parameters, i.e. condition no. and participant no.
  // via http://stackoverflow.com/a/979995
  window.QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
        // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = pair[1];
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]], pair[1] ];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    } 
      return query_string;
  } ();


  // Function to check letters and numbers
  // via http://www.w3resource.com/javascript/form/letters-numbers-field.php
  function not_alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z-_ ]+$/;
    if(inputtxt.match(letterNumber)) {
        return false;
      } else { 
        return true; 
      }
  }


  // Function to add extra zeros infront of numbers (used for the countdown)
  // via http://stackoverflow.com/a/6466243
  function pad (str, max) {
    return str.length < max ? pad("0" + str, max) : str;
  }

  // Function for encoding and decoding URLs
  // via http://meyerweb.com/eric/tools/dencoder/
  function encode(unencoded) {
	return encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
  }
  function decode(encoded) {
	return decodeURIComponent(encoded.replace(/\+/g,  " "));
  }

  
  // Simple Countdown
  // via http://davidwalsh.name/jquery-countdown-plugin
  jQuery.fn.countDown = function(settings,to) {
    settings = jQuery.extend({
      startFontSize: "12px",
      endFontSize: "12px",
      duration: 1000,
      startNumber: 10,
      endNumber: 0,
      callBack: function() { }
    }, settings);
    return this.each(function() {
      if(!to && to != settings.endNumber) { to = settings.startNumber; }  
      jQuery(this).children('.secs').text(to);
      jQuery(this).animate({
        fontSize: settings.endFontSize
      }, settings.duration, "", function() {
        if(to > settings.endNumber + 1) {
          jQuery(this).children('.secs').text(to - 1);
          jQuery(this).countDown(settings, to - 1);
          var minutes = Math.floor(to / 60);
          var seconds = to - minutes * 60;
          jQuery(this).children('.cntr').text(pad(minutes.toString(),2) + ':' + pad(seconds.toString(),2));
        }
        else {
          settings.callBack(this);
        }
      });
    });
  };

  // Prevent that participants accidentally exit the experiment by disabling F5 and backspace keys
  shortcut.add("f5",function() {});  
  $(window).bind('beforeunload', function(){
    return 'Are you sure you want to quit the experiment completely?';
  });   

  // Set Settings, get Participant No. and Condition No.
  set_settings();
  get_params();
  adjust_to_condition();
  // Start with the intro slide
  init_intro();

});
