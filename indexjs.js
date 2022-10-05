var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    
  },500);
  
  var i = 0;
  var txt1 = "Hello my pretty baby!  <<               Now I want to say something special to you. <<<                So , please read everything carefully my love.                                                                           > When I saw you for the first time < You seems something so special to me.  <<                  As the days goes < you get closer to me. <<                           I don't know the reason why your thoughts always resonates inside my mind.                                                  > Everything about you is always intresting for me.                     << I'm somewhat nervous since I haven't said these words to anyone and I won't say to anyone in future.                                                     > The moment that I saw you, I think I'm in love with the first sight                    << Even though I lost my smartphone that time, I saw you in return that gave me a sunshine!                                                             >I have no regrets of loving you my love, you're the only one for me!             <<< HAPPY 6TH ANNIVERSARY!               Always remember that, <<<  I love you so much Ann Jeiamae Lacdao Verzosa!";
  var speed = 50;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {
          $(".bg_heart").css("background-image","url('2.gif')");
  
        }
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }