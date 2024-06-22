rowWord = 1;
front = true;
lettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
boardDefault = '<div id="word_board"> <div id="line1" class="line"> <div class="scene" id="cube1"> <div class="cube" id="cubeanim1"> <div class="cube__face cube__face--front" id="cube1front"><span id="letter1front"></span></div> <div class="cube__face cube__face--back" id="cube1back"><span id="letter1back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube2"> <div class="cube" id="cubeanim2"> <div class="cube__face cube__face--front" id="cube2front"><span id="letter2front"></span></div> <div class="cube__face cube__face--back" id="cube2back"><span id="letter2back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube3"> <div class="cube" id="cubeanim3"> <div class="cube__face cube__face--front" id="cube3front"><span id="letter3front"></span></div> <div class="cube__face cube__face--back" id="cube3back"><span id="letter3back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube4"> <div class="cube" id="cubeanim4"> <div class="cube__face cube__face--front" id="cube4front"><span id="letter4front"></span></div> <div class="cube__face cube__face--back" id="cube4back"><span id="letter4back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube5"> <div class="cube" id="cubeanim5"> <div class="cube__face cube__face--front" id="cube5front"><span id="letter5front"></span></div> <div class="cube__face cube__face--back" id="cube5back"><span id="letter5back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line2" class="line"> <div class="scene" id="cube6"> <div class="cube" id="cubeanim6"> <div class="cube__face cube__face--front" id="cube6front"><span id="letter6front"></span></div> <div class="cube__face cube__face--back" id="cube6back"><span id="letter6back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube7"> <div class="cube" id="cubeanim7"> <div class="cube__face cube__face--front" id="cube7front"><span id="letter7front"></span></div> <div class="cube__face cube__face--back" id="cube7back"><span id="letter7back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube8"> <div class="cube" id="cubeanim8"> <div class="cube__face cube__face--front" id="cube8front"><span id="letter8front"></span></div> <div class="cube__face cube__face--back" id="cube8back"><span id="letter8back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube9"> <div class="cube" id="cubeanim9"> <div class="cube__face cube__face--front" id="cube9front"><span id="letter9front"></span></div> <div class="cube__face cube__face--back" id="cube9back"><span id="letter9back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube10"> <div class="cube" id="cubeanim10"> <div class="cube__face cube__face--front" id="cube10front"><span id="letter10front"></span></div> <div class="cube__face cube__face--back" id="cube10back"><span id="letter10back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line3" class="line"> <div class="scene" id="cube11"> <div class="cube" id="cubeanim11"> <div class="cube__face cube__face--front" id="cube11front"><span id="letter11front"></span></div> <div class="cube__face cube__face--back" id="cube11back"><span id="letter11back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube12"> <div class="cube" id="cubeanim12"> <div class="cube__face cube__face--front" id="cube12front"><span id="letter12front"></span></div> <div class="cube__face cube__face--back" id="cube12back"><span id="letter12back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube13"> <div class="cube" id="cubeanim13"> <div class="cube__face cube__face--front" id="cube13front"><span id="letter13front"></span></div> <div class="cube__face cube__face--back" id="cube13back"><span id="letter13back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube14"> <div class="cube" id="cubeanim14"> <div class="cube__face cube__face--front" id="cube14front"><span id="letter14front"></span></div> <div class="cube__face cube__face--back" id="cube14back"><span id="letter14back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube15"> <div class="cube" id="cubeanim15"> <div class="cube__face cube__face--front" id="cube15front"><span id="letter15front"></span></div> <div class="cube__face cube__face--back" id="cube15back"><span id="letter15back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line4" class="line"> <div class="scene" id="cube16"> <div class="cube" id="cubeanim16"> <div class="cube__face cube__face--front" id="cube16front"><span id="letter16front"></span></div> <div class="cube__face cube__face--back" id="cube16back"><span id="letter16back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube17"> <div class="cube" id="cubeanim17"> <div class="cube__face cube__face--front" id="cube17front"><span id="letter17front"></span></div> <div class="cube__face cube__face--back" id="cube17back"><span id="letter17back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube18"> <div class="cube" id="cubeanim18"> <div class="cube__face cube__face--front" id="cube18front"><span id="letter18front"></span></div> <div class="cube__face cube__face--back" id="cube18back"><span id="letter18back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube19"> <div class="cube" id="cubeanim19"> <div class="cube__face cube__face--front" id="cube19front"><span id="letter19front"></span></div> <div class="cube__face cube__face--back" id="cube19back"><span id="letter19back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube20"> <div class="cube" id="cubeanim20"> <div class="cube__face cube__face--front" id="cube20front"><span id="letter20front"></span></div> <div class="cube__face cube__face--back" id="cube20back"><span id="letter20back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line5" class="line"> <div class="scene" id="cube21"> <div class="cube" id="cubeanim21"> <div class="cube__face cube__face--front" id="cube21front"><span id="letter21front"></span></div> <div class="cube__face cube__face--back" id="cube21back"><span id="letter21back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube22"> <div class="cube" id="cubeanim22"> <div class="cube__face cube__face--front" id="cube22front"><span id="letter22front"></span></div> <div class="cube__face cube__face--back" id="cube22back"><span id="letter22back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube23"> <div class="cube" id="cubeanim23"> <div class="cube__face cube__face--front" id="cube23front"><span id="letter23front"></span></div> <div class="cube__face cube__face--back" id="cube23back"><span id="letter23back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube24"> <div class="cube" id="cubeanim24"> <div class="cube__face cube__face--front" id="cube24front"><span id="letter24front"></span></div> <div class="cube__face cube__face--back" id="cube24back"><span id="letter24back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube25"> <div class="cube" id="cubeanim25"> <div class="cube__face cube__face--front" id="cube25front"><span id="letter25front"></span></div> <div class="cube__face cube__face--back" id="cube25back"><span id="letter25back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line6" class="line offstage"> <div class="scene" id="cube26"> <div class="cube" id="cubeanim26"> <div class="cube__face cube__face--front" id="cube26front"><span id="letter26front"></span></div> <div class="cube__face cube__face--back" id="cube26back"><span id="letter26back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube27"> <div class="cube" id="cubeanim27"> <div class="cube__face cube__face--front" id="cube27front"><span id="letter27front"></span></div> <div class="cube__face cube__face--back" id="cube27back"><span id="letter27back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube28"> <div class="cube" id="cubeanim28"> <div class="cube__face cube__face--front" id="cube28front"><span id="letter28front"></span></div> <div class="cube__face cube__face--back" id="cube28back"><span id="letter28back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube29"> <div class="cube" id="cubeanim29"> <div class="cube__face cube__face--front" id="cube29front"><span id="letter29front"></span></div> <div class="cube__face cube__face--back" id="cube29back"><span id="letter29back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube30"> <div class="cube" id="cubeanim30"> <div class="cube__face cube__face--front" id="cube30front"><span id="letter30front"></span></div> <div class="cube__face cube__face--back" id="cube30back"><span id="letter30back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line7" class="line offstage"> <div class="scene" id="cube31"> <div class="cube" id="cubeanim31"> <div class="cube__face cube__face--front" id="cube31front"><span id="letter31front"></span></div> <div class="cube__face cube__face--back" id="cube31back"><span id="letter31back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube32"> <div class="cube" id="cubeanim32"> <div class="cube__face cube__face--front" id="cube32front"><span id="letter32front"></span></div> <div class="cube__face cube__face--back" id="cube32back"><span id="letter32back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube33"> <div class="cube" id="cubeanim33"> <div class="cube__face cube__face--front" id="cube33front"><span id="letter33front"></span></div> <div class="cube__face cube__face--back" id="cube33back"><span id="letter33back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube34"> <div class="cube" id="cubeanim34"> <div class="cube__face cube__face--front" id="cube34front"><span id="letter34front"></span></div> <div class="cube__face cube__face--back" id="cube34back"><span id="letter34back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube35"> <div class="cube" id="cubeanim35"> <div class="cube__face cube__face--front" id="cube35front"><span id="letter35front"></span></div> <div class="cube__face cube__face--back" id="cube35back"><span id="letter35back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line8" class="line offstage"> <div class="scene" id="cube36"> <div class="cube" id="cubeanim36"> <div class="cube__face cube__face--front" id="cube36front"><span id="letter36front"></span></div> <div class="cube__face cube__face--back" id="cube36back"><span id="letter36back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube37"> <div class="cube" id="cubeanim37"> <div class="cube__face cube__face--front" id="cube37front"><span id="letter37front"></span></div> <div class="cube__face cube__face--back" id="cube37back"><span id="letter37back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube38"> <div class="cube" id="cubeanim38"> <div class="cube__face cube__face--front" id="cube38front"><span id="letter38front"></span></div> <div class="cube__face cube__face--back" id="cube38back"><span id="letter38back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube39"> <div class="cube" id="cubeanim39"> <div class="cube__face cube__face--front" id="cube39front"><span id="letter39front"></span></div> <div class="cube__face cube__face--back" id="cube39back"><span id="letter39back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube40"> <div class="cube" id="cubeanim40"> <div class="cube__face cube__face--front" id="cube40front"><span id="letter40front"></span></div> <div class="cube__face cube__face--back" id="cube40back"><span id="letter40back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line9" class="line offstage"> <div class="scene" id="cube41"> <div class="cube" id="cubeanim41"> <div class="cube__face cube__face--front" id="cube41front"><span id="letter41front"></span></div> <div class="cube__face cube__face--back" id="cube41back"><span id="letter41back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube42"> <div class="cube" id="cubeanim42"> <div class="cube__face cube__face--front" id="cube42front"><span id="letter42front"></span></div> <div class="cube__face cube__face--back" id="cube42back"><span id="letter42back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube43"> <div class="cube" id="cubeanim43"> <div class="cube__face cube__face--front" id="cube43front"><span id="letter43front"></span></div> <div class="cube__face cube__face--back" id="cube43back"><span id="letter43back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube44"> <div class="cube" id="cubeanim44"> <div class="cube__face cube__face--front" id="cube44front"><span id="letter44front"></span></div> <div class="cube__face cube__face--back" id="cube44back"><span id="letter44back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube45"> <div class="cube" id="cubeanim45"> <div class="cube__face cube__face--front" id="cube45front"><span id="letter45front"></span></div> <div class="cube__face cube__face--back" id="cube45back"><span id="letter45back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> <div id="line10" class="line offstage"> <div class="scene" id="cube46"> <div class="cube" id="cubeanim46"> <div class="cube__face cube__face--front" id="cube46front"><span id="letter46front"></span></div> <div class="cube__face cube__face--back" id="cube46back"><span id="letter46back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube47"> <div class="cube" id="cubeanim47"> <div class="cube__face cube__face--front" id="cube47front"><span id="letter47front"></span></div> <div class="cube__face cube__face--back" id="cube47back"><span id="letter47back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube48"> <div class="cube" id="cubeanim48"> <div class="cube__face cube__face--front" id="cube48front"><span id="letter48front"></span></div> <div class="cube__face cube__face--back" id="cube48back"><span id="letter48back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube49"> <div class="cube" id="cubeanim49"> <div class="cube__face cube__face--front" id="cube49front"><span id="letter49front"></span></div> <div class="cube__face cube__face--back" id="cube49back"><span id="letter49back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> <div class="scene" id="cube50"> <div class="cube" id="cubeanim50"> <div class="cube__face cube__face--front" id="cube50front"><span id="letter50front"></span></div> <div class="cube__face cube__face--back" id="cube50back"><span id="letter50back"></span></div> <div class="cube__face_short cube__face--right"></div> <div class="cube__face_short cube__face--left"></div> <div class="cube__face_tops cube__face--top"></div> <div class="cube__face_tops cube__face--bottom"></div> </div> </div> </div> </div>';

beep1 = document.getElementById("beep1");
beep2 = document.getElementById("beep2");
beep3 = document.getElementById("beep3");
beep4 = document.getElementById("beep4");
beep5 = document.getElementById("beep5");
notinword1 = document.getElementById("notinword1");
notinword2 = document.getElementById("notinword2");
notinword3 = document.getElementById("notinword3");
notinword4 = document.getElementById("notinword4");
notinword5 = document.getElementById("notinword5");
wrongplace1 = document.getElementById("wrongplace1");
wrongplace2 = document.getElementById("wrongplace2");
wrongplace3 = document.getElementById("wrongplace3");
wrongplace4 = document.getElementById("wrongplace4");
wrongplace5 = document.getElementById("wrongplace5");

socket.on('startWord',function(word, round) {
	correctLetters = [".",".",".",".","."];
	wordArray = word.split("");
	rowWord = 1;
	cubeCount = ((rowWord - 1) * 5) + 1;
	thisCube1 = document.getElementById("cubeanim"+cubeCount);
	thisCube2 = document.getElementById("cubeanim"+(cubeCount+1));
	thisCube3 = document.getElementById("cubeanim"+(cubeCount+2));
	thisCube4 = document.getElementById("cubeanim"+(cubeCount+3));
	thisCube5 = document.getElementById("cubeanim"+(cubeCount+4));
	thisCube1.className = '';
	thisCube1.classList.add("cube");
	thisCube1.classList.add("noanim");
	thisCube1.classList.add("show-back");
	thisCube2.className = '';
	thisCube2.classList.add("cube");
	thisCube2.classList.add("noanim");
	thisCube2.classList.add("show-back");
	thisCube3.className = '';
	thisCube3.classList.add("cube");
	thisCube3.classList.add("noanim");
	thisCube3.classList.add("show-back");
	thisCube4.className = '';
	thisCube4.classList.add("cube");
	thisCube4.classList.add("noanim");
	thisCube4.classList.add("show-back");
	thisCube5.className = '';
	thisCube5.classList.add("cube");
	thisCube5.classList.add("noanim");
	thisCube5.classList.add("show-back");
	thisSquareFront = document.getElementById("letter"+cubeCount+"front");
	thisSquareFront.innerHTML = wordArray[0].toUpperCase();
	correctLetters = [wordArray[0].toUpperCase(),".",".",".","."];
	if(round !== 1){
		randomExtraLetter = Math.floor(Math.random() * 4) + 1;
		document.getElementById("letter"+(cubeCount+1)+"front").innerHTML = '.';
		document.getElementById("letter"+(cubeCount+2)+"front").innerHTML = '.';
		document.getElementById("letter"+(cubeCount+3)+"front").innerHTML = '.';
		document.getElementById("letter"+(cubeCount+4)+"front").innerHTML = '.';
		document.getElementById("letter"+(randomExtraLetter+1)+"front").innerHTML = wordArray[randomExtraLetter].toUpperCase();
		correctLetters[randomExtraLetter] = wordArray[randomExtraLetter].toUpperCase();
	} else {
		document.getElementById("letter"+(cubeCount+1)+"front").innerHTML = '.';
		document.getElementById("letter"+(cubeCount+2)+"front").innerHTML = '.';
		document.getElementById("letter"+(cubeCount+3)+"front").innerHTML = '.';
		document.getElementById("letter"+(cubeCount+4)+"front").innerHTML = '.';
	}
	front = false;
 	flipTiles(1);
});

socket.on('boardWord',function(data) {
	placeWord(data);
});

function placeWord(word){
	word = word.replace(" ", "");
	wordArray = word.split("");
	thisRow = document.getElementById("line"+rowWord);
	for(x=0;x<wordArray.length;x++){
		cubeCount = ((rowWord - 1) * 5) + (x+1);
		if(front){
			squareOppSide = document.getElementById("letter"+cubeCount+"back");
			posGo = "back";
		} else {
			squareOppSide = document.getElementById("letter"+cubeCount+"front");
			posGo = "front";
		}
		thisSquareFront = document.getElementById("letter"+cubeCount+"front");
		thisSquareBack = document.getElementById("letter"+cubeCount+"back");
		squareOppSide.innerHTML = wordArray[x].toUpperCase();
	}
	if(rowWord > 5){
		document.getElementById("line"+(rowWord-5)).classList.add("offstage");
		document.getElementById("line"+rowWord).className = "line";
		document.getElementById("word_board").className = "transition";
		document.getElementById("word_board").classList.add("pos"+rowWord);
	}
	flipTiles(1);
}

function flipTiles(speed){
	if(front){
		flipClass = "show-back";
		front = false
	} else {
		flipClass = "show-front";
		front = true;
	}
	if(speed==1){
		speed1=0;
		speed2=100;
		speed3=200;
		speed4=300;
		speed5=400;
	} else {
		speed1=0;
		speed2=250;
		speed3=500;
		speed4=750;
		speed5=1000;
	}
	cubeCount = ((rowWord - 1) * 5) + 1;
	thisCube1 = document.getElementById("cubeanim"+cubeCount);
	thisCube2 = document.getElementById("cubeanim"+(cubeCount+1));
	thisCube3 = document.getElementById("cubeanim"+(cubeCount+2));
	thisCube4 = document.getElementById("cubeanim"+(cubeCount+3));
	thisCube5 = document.getElementById("cubeanim"+(cubeCount+4));
	setTimeout(function(){ 
		thisCube1.className = '';
		thisCube1.classList.add("cube");
		thisCube1.classList.add(flipClass);
	}, speed1);
	setTimeout(function(){ 
		thisCube2.className = '';
		thisCube2.classList.add("cube");
		thisCube2.classList.add(flipClass);
	}, speed2);
	setTimeout(function(){ 
		thisCube3.className = '';
		thisCube3.classList.add("cube");
		thisCube3.classList.add(flipClass);
	}, speed3);
	setTimeout(function(){ 
		thisCube4.className = '';
		thisCube4.classList.add("cube");
		thisCube4.classList.add(flipClass);
	}, speed4);
	setTimeout(function(){ 
		thisCube5.className = '';
		thisCube5.classList.add("cube");
		thisCube5.classList.add(flipClass);
	}, speed5);
}

socket.on('checkWord',function(guess, word, round = 1) {
	guess = guess.toUpperCase();
	guessArray = guess.split("");
	word = word.toUpperCase();
	masterArray = word.split("");
	masterArrayMaster = word.split("");
	thisRow = document.getElementById("line"+rowWord);
	correctArray = "";
	correctCount = 0;
	wrongplaceCount = 1;
	notinwordCount = 1;
	for(x=0;x<guessArray.length;x++){
		guessLetter = guessArray[x].toUpperCase();
		masterLetter = masterArray[x].toUpperCase();
		cubeCount = ((rowWord - 1) * 5) + (x+1);
		if(front){
			squareOppSide = document.getElementById("letter"+cubeCount+"back");
			posGo = "back";
		} else {
			squareOppSide = document.getElementById("letter"+cubeCount+"front");
			posGo = "front";
		}
		squareOppSide.innerHTML = guessLetter;
		//CHECKING IF IN ARRAY
		if(masterArray.includes(guessArray[x])){
			letterPos = masterArray.indexOf(guessArray[x]);
			if(masterArray[x] == guessArray[x]){
				document.getElementById("cube"+cubeCount+""+posGo).className = "";
				document.getElementById("cube"+cubeCount+""+posGo).classList.add("cube__face");
				document.getElementById("cube"+cubeCount+""+posGo).classList.add("cube__face--"+posGo);
				document.getElementById("cube"+cubeCount+""+posGo).classList.add("correct");
				masterArray[x] = ".";
// 				correctArray += guessArray[x];
				correctLetters[x] = guessArray[x];
				correctCount++;
				
				if(correctCount == 1){
					sfxPlay = beep1;
					setTimeout(function(){ 
					 	playSfx(beep1);
					}, (cubeCount-1)*250);
				}
				if(correctCount == 2){
					sfxPlay = beep2;
					setTimeout(function(){ 
					 	playSfx(beep2);
					}, (cubeCount-1)*250);
				}
				if(correctCount == 3){
					sfxPlay = beep3;
					setTimeout(function(){ 
					 	playSfx(beep3);
					}, (cubeCount-1)*250);
				}
				if(correctCount == 4){
					sfxPlay = beep4;
					setTimeout(function(){ 
					 	playSfx(beep4);
					}, (cubeCount-1)*250);
				}
				if(correctCount == 5){
					sfxPlay = beep5;
					setTimeout(function(){ 
					 	playSfx(beep5);
					}, (cubeCount-1)*250);
				}
			} else if(masterArray[letterPos] !== guessArray[letterPos]){
				if(wrongplaceCount == 1){
					sfxPlay = wrongplace1;
					setTimeout(function(){ 
					 	playSfx(wrongplace1);
					}, (cubeCount-1)*250);
				}
				if(wrongplaceCount == 2){
					sfxPlay = wrongplace2;
					setTimeout(function(){ 
					 	playSfx(wrongplace2);
					}, (cubeCount-1)*250);
				}
				if(wrongplaceCount == 3){
					sfxPlay = beep3;
					setTimeout(function(){ 
					 	playSfx(wrongplace3);
					}, (cubeCount-1)*250);
				}
				if(wrongplaceCount == 4){
					sfxPlay = beep4;
					setTimeout(function(){ 
					 	playSfx(wrongplace4);
					}, (cubeCount-1)*250);
				}
				if(wrongplaceCount == 5){
					sfxPlay = beep5;
					setTimeout(function(){ 
					 	playSfx(wrongplace5);
					}, (cubeCount-1)*250);
				}
				wrongplaceCount++;
				document.getElementById("cube"+cubeCount+""+posGo).className = "";
				document.getElementById("cube"+cubeCount+""+posGo).classList.add("cube__face");
				document.getElementById("cube"+cubeCount+""+posGo).classList.add("cube__face--"+posGo);
				document.getElementById("cube"+cubeCount+""+posGo).classList.add("wrongplace");
				masterArray[letterPos] = ".";
// 				correctArray += ".";
			} else {
				if(notinwordCount == 1){
					sfxPlay = wrongplace1;
					setTimeout(function(){ 
					 	playSfx(notinword1);
					}, (cubeCount-1)*250);
				}
				if(notinwordCount == 2){
					sfxPlay = wrongplace2;
					setTimeout(function(){ 
					 	playSfx(notinword2);
					}, (cubeCount-1)*250);
				}
				if(notinwordCount == 3){
					sfxPlay = beep3;
					setTimeout(function(){ 
					 	playSfx(notinword3);
					}, (cubeCount-1)*250);
				}
				if(notinwordCount == 4){
					sfxPlay = beep4;
					setTimeout(function(){ 
					 	playSfx(notinword4);
					}, (cubeCount-1)*250);
				}
				if(notinwordCount == 5){
					sfxPlay = beep5;
					setTimeout(function(){ 
					 	playSfx(notinword5);
					}, (cubeCount-1)*250);
				}
				notinwordCount++;
// 				correctArray += ".";
			}
		} else {
// 			correctArray += ".";
		}
	}
	if(round == 2){
		flipTiles(1);
		lineTimer = 1250;
	} else {
		flipTiles(2);
		lineTimer = 3000;
	}
	if(correctCount == 5){
		
	} else {
			rowWord++;
			correctLetterCount = 0;
			firstMark = 0;
			for(y=0;y<correctLetters.length;y++){
			 	if(correctLetters[y] !== "."){
				 	correctLetterCount++;
			 	} else {
				 	if(firstMark == 0){
					 	firstMark = y;
				 	}
			 	}
		 	}
// 		 	alert(correctLetterCount);
		 	if(rowWord > 5 && correctLetterCount < 4){
				correctLetters[firstMark] = masterArrayMaster[firstMark];
			}
			if(round == 2 && rowWord==6){
				for(y=0;y<5;y++){
					correctLetters[y] = masterArrayMaster[y];
				}
			}
			for(y=0;y<correctLetters.length;y++){
			 	correctArray += correctLetters[y];	
		 	}
		 	if(rowWord <= 10 && correctCount < 5){
			 	setTimeout(function(){ 
				 	front = true;
					placeWord(correctArray);
				}, lineTimer);
			}
	}
});

function playSfx(soundFile){
/*
	beep1.pause();
	beep2.pause();
	beep3.pause();
	beep4.pause();
	beep5.pause();
	wrongplace1.pause();
	wrongplace2.pause();
	wrongplace3.pause();
	wrongplace4.pause();
	wrongplace5.pause();
	notinword1.pause();
	notinword2.pause();
	notinword3.pause();
	notinword4.pause();
	notinword5.pause();
	soundFile.play();
*/
}

socket.on('revealWord',function(data) {
// 	rowWord++;
	front = true;
	var correctCount = 0;
	for(x=0;x<correctLetters.length;x++){
		if(correctLetters[x] !== "."){
			correctCount++;	
		}
	}
	if(rowWord > 5 && correctCount < 5){
		
	} else {
		rowWord++;
	}
	placeWord(data);
});

socket.on('newLine',function(data) {
	rowWord++;
	correctArray = "";
	front = true;
	for(y=0;y<correctLetters.length;y++){
 		correctArray += correctLetters[y];
	}
	placeWord(correctArray);
});
socket.on('newLineBonus',function(data) {
	rowWord++;
	correctArray = "";
	front = true;
	masterArray = data.split("");
	canBonus = true;
	for(y=0;y<correctLetters.length;y++){
		var correctLetter = correctLetters[y];
		if(correctLetter == "." && canBonus){
			correctLetter = masterArray[y];
			correctLetters[y] = masterArray[y];
			canBonus = false;
		}
 		correctArray += correctLetter;
	}
	placeWord(correctArray);
});
socket.on('bonusLetter',function(data) {
	correctArray = "";
	front = true;
	masterArray = data.split("");
	canBonus = true;
	for(y=0;y<correctLetters.length;y++){
		var correctLetter = correctLetters[y];
		if(correctLetter == "." && canBonus){
			correctLetter = masterArray[y];
			correctLetters[y] = masterArray[y];
			canBonus = false;
		}
 		correctArray += correctLetter;
	}
	placeWord(correctArray);
});
socket.on('resetBoard',function(typeBoard, teamNumber) {
	if(typeBoard == 1){
		document.getElementById("board_holder").innerHTML = boardDefault;
	}
});