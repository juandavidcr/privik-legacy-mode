
<!DOCTYPE HTML>
<html>     
<html>
<head>
<script>
var letterArray= new Array('&#1040; &#1072;' ,' &#1041; &#1073;' ,' &#1042; &#1074;' ,' &#1043; &#1075;' ,' &#1044; &#1076;' ,' &#1045; &#1077;' ,' &#1025; &#1105;' ,' &#1046; &#1078;' ,' &#1047; &#1079;' ,' &#1048; &#1080;' ,' &#1049; &#1081;' ,'&#1050; &#1082;' ,' &#1051; &#1083;' ,' &#1052; &#1084;' ,' &#1053; &#1085;' ,' &#1054; &#1086;' ,' &#1055; &#1087;' ,' &#1056; &#1088;' ,' &#1057; &#1089;' ,' &#1058; &#1090;' ,' &#1059; &#1091;' ,'&#1060; &#1092;' ,'&#1061; &#1093;' ,' &#1062; &#1094;' ,' &#1063; &#1095;' ,' &#1064; &#1096;' ,' &#1065; &#1097;' ,' &#1098;' ,' &#1067; &#1099;' ,' &#1100;' ,' &#1069; &#1101;' ,' &#1070; &#1102;' ,' &#1071; &#1103;');
var wordArray= new Array('&#1072;&#1088;&#1073;&#1091;&#1079;' ,'&#1073;&#1091;&#1090;&#1099;&#1083;&#1082;&#1072;' ,'&#1074;&#1080;&#1085;&#1086;' ,'&#1075;&#1088;&#1091;&#1096;&#1072;' ,'&#1076;&#1086;&#1084;' ,'&#1077;&#1083;&#1100;' ,'&#1105;&#1078;' ,'&#1078;&#1080;&#1088;&#1072;&#1092;' ,'&#1079;&#1091;&#1073;' ,'&#1080;&#1075;&#1083;&#1072;' ,'&#1081;&#1086;&#1075;&#1072;' ,'&#1082;&#1091;&#1082;&#1083;&#1072;' ,'&#1083;&#1091;&#1082;' ,'&#1084;&#1072;&#1075;&#1072;&#1079;&#1080;&#1085;' ,'&#1085;&#1086;&#1089;' ,'&#1086;&#1089;&#1090;&#1088;&#1086;&#1074;' ,'&#1087;&#1086;&#1083;&#1082;&#1072;' ,'&#1088;&#1086;&#1090;' ,'&#1089;&#1083;&#1086;&#1085;' ,'&#1090;&#1086;&#1088;&#1090;' ,'&#1091;&#1093;&#1086;' ,'&#1092;&#1072;&#1088;&#1090;&#1091;&#1082;' ,'&#1093;&#1083;&#1077;&#1073;' ,'&#1094;&#1074;&#1077;&#1090;&#1086;&#1082;' ,'&#1095;&#1072;&#1096;&#1082;&#1072;' ,'&#1096;&#1082;&#1072;&#1092;' ,'&#1097;&#1105;&#1090;&#1082;&#1072;' ,'&#1089;&#1077;&#1089;&#1090;&#1100;,         &#1089;&#1098;&#1077;&#1089;&#1090;&#1100;' ,'&#1089;&#1099;&#1088;' ,'&#1087;&#1086;&#1083;&#1082;&#1072;,         &#1087;&#1086;&#1083;&#1100;&#1082;&#1072;' ,'&#1101;&#1082;&#1088;&#1072;&#1085;' ,'&#1102;&#1073;&#1082;&#1072;         ' ,'&#1103;&#1073;&#1083;&#1086;&#1082;&#1086;');
total=33;
groups=4;
var range = new Array(9, 17, 25, 33);
var times = new Array(1.2, 2.1, 3.3, 4.2, 5.4, 6.4, 7.4, 8.3, 9.4, 10.3, 11.2, 12.1, 13.1, 14.1, 15.2, 16.2, 17.3, 18.3, 19.3, 20.1, 21.1, 22.5, 23.6, 24.5, 25.5, 26.5, 27.5, 28.4, 29.7, 30.6, 31.6, 32.6, 33.8, 34.6, 35.7, 36.8, 37.9, 38.9, 40, 40.8, 41.8, 42.6, 43.5, 44.6, 45.9, 46.8, 48, 49, 50.3, 51.2, 52.4, 53.4, 54.7, 55.7, 57, 58.5, 61.1, 61.9, 63, 64.6, 66.9, 67.7, 68.9, 69.7, 70.8, 71.8, 73);


alpha="Alphabet";
quiz="Quiz";

</script>
<script src="applets/html5audio.js"></script>
<script src="applets/alpha.js"></script>
<style type="text/css">
.typeshape{
	font-size: large;
}
.displayshape{
font-size: large;
font-weight: bold; 
cursor: pointer;
color:#0000ff; 
}
</style>

  <title>Russian: Alphabet: Quiz</title>
    
 <link rel="stylesheet" href="applets/imnorm_new.css" type="text/css">
  	<link href="css/new_tabs4.css" rel="stylesheet" type="text/css">
<meta charset="UTF-8">
</head>
<body onLoad="alphaQuiz()" bgcolor="#FFFFFF">
<div style="float:right;"><em><a href="/eng/help/alphabet.html" target="_top">help?</a></em></div>
<div id="header">
<ul id="primary">
    <li><a href="ruso/">
  Alphabet</a>  
  <li id="current"><a>Quiz</a></li>
   </ul>
  </div>

<table width="700" border="0" cellspacing="2" cellpadding="4" align="center">
  <tr> 
      
    <td width="111">
      <input  type='button' name='random' value='Randomize Letters' onclick='randomize()'>
      </td>
      <td> 
        <div align="center">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td >
<div align="right"><span id="speakerarrow"></span></div></td>
            <td >
<div align="center"><a >
<button style="margin: 0 20px 0 0;font-size: 110%;" onclick="playLetter()" id="speaker" readonly="readonly">replay <img src="/vocabulary/images/sound.png" align="absmiddle" width="13" height="18"></button>
</div></td>
            <td >&nbsp;</td>
          </tr>
        </table>
        
      </div>
      </td>
      <td width="101"><audio id="player" autoplay><source src="/snd/ru/alpha.m4a" /><source src="/snd/ru/alpha.ogg" type="audio/ogg" />Whoops, we thought your browser supported HTML5 audio and it doesn't. <a href="/user/report.jsp">Click here</a> to report the issue.</audio>
</td>
    </tr>
  </table>
<div align="center">
</div>
<table width="280" height="50" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr> 
    <td width="17"><div align="center"><span id="answerright"></span></div></td>
    <td width="60" nowrap="nowrap"> <div align="center"><span id="correctletter"></span></div></td>
    <td><div align="center"><span id="correctword"></span></div></td>
    <td><span id="percent"></span></td>
    <td rowspan="2"><span id="complete"></span></td>
  </tr>
  <tr> 
    <td><div align="center"><span id="answerleft"></span></div></td>
    <td nowrap="nowrap"> <div align="center"><span id="wrongletter"></span></div></td>
    <td><div align="center"><span id="wrongword"></span></div></td>
    <td><span id="ratio"></span></td>
  </tr>
</table>
<div align="center"><span id='answer'></span></div><table width="100%" border="0" cellspacing="2" cellpadding="2"><tr>
<td><table width='100%'>
<tr align='center'><td><span id='loc0'><input class='typeshape' type='button' id='letter0'  value=' &#1040; &#1072;' onclick='choose(0)'></span></td></tr>
<tr align='center'><td><span id='loc1'><input class='typeshape' type='button' id='letter1'  value=' &#1041; &#1073;' onclick='choose(1)'></span></td></tr>
<tr align='center'><td><span id='loc2'><input class='typeshape' type='button' id='letter2'  value=' &#1042; &#1074;' onclick='choose(2)'></span></td></tr>
<tr align='center'><td><span id='loc3'><input class='typeshape' type='button' id='letter3'  value=' &#1043; &#1075;' onclick='choose(3)'></span></td></tr>
<tr align='center'><td><span id='loc4'><input class='typeshape' type='button' id='letter4'  value=' &#1044; &#1076;' onclick='choose(4)'></span></td></tr>
<tr align='center'><td><span id='loc5'><input class='typeshape' type='button' id='letter5'  value=' &#1045; &#1077;' onclick='choose(5)'></span></td></tr>
<tr align='center'><td><span id='loc6'><input class='typeshape' type='button' id='letter6'  value=' &#1025; &#1105;' onclick='choose(6)'></span></td></tr>
<tr align='center'><td><span id='loc7'><input class='typeshape' type='button' id='letter7'  value=' &#1046; &#1078;' onclick='choose(7)'></span></td></tr>
<tr align='center'><td><span id='loc8'><input class='typeshape' type='button' id='letter8'  value=' &#1047; &#1079;' onclick='choose(8)'></span></td></tr>
<tr align='center'><td><span id='loc9'><input class='typeshape' type='button' id='letter9'  value=' &#1048; &#1080;' onclick='choose(9)'></span></td></tr>
<tr align='center'><td><span id='loc10'><input class='typeshape' type='button' id='letter10'  value=' &#1049; &#1081;' onclick='choose(10)'></span></td></tr>
</table></td>
<td><table width='100%'>
<tr align='center'><td><span id='loc11'><input class='typeshape' type='button' id='letter11'  value='&#1050; &#1082;' onclick='choose(11)'></span></td></tr>
<tr align='center'><td><span id='loc12'><input class='typeshape' type='button' id='letter12'  value=' &#1051; &#1083;' onclick='choose(12)'></span></td></tr>
<tr align='center'><td><span id='loc13'><input class='typeshape' type='button' id='letter13'  value=' &#1052; &#1084;' onclick='choose(13)'></span></td></tr>
<tr align='center'><td><span id='loc14'><input class='typeshape' type='button' id='letter14'  value=' &#1053; &#1085;' onclick='choose(14)'></span></td></tr>
<tr align='center'><td><span id='loc15'><input class='typeshape' type='button' id='letter15'  value=' &#1054; &#1086;' onclick='choose(15)'></span></td></tr>
<tr align='center'><td><span id='loc16'><input class='typeshape' type='button' id='letter16'  value=' &#1055; &#1087;' onclick='choose(16)'></span></td></tr>
<tr align='center'><td><span id='loc17'><input class='typeshape' type='button' id='letter17'  value=' &#1056; &#1088;' onclick='choose(17)'></span></td></tr>
<tr align='center'><td><span id='loc18'><input class='typeshape' type='button' id='letter18'  value=' &#1057; &#1089;' onclick='choose(18)'></span></td></tr>
<tr align='center'><td><span id='loc19'><input class='typeshape' type='button' id='letter19'  value=' &#1058; &#1090;' onclick='choose(19)'></span></td></tr>
<tr align='center'><td><span id='loc20'><input class='typeshape' type='button' id='letter20'  value=' &#1059; &#1091;' onclick='choose(20)'></span></td></tr>
<tr align='center'><td><span id='loc21'><input class='typeshape' type='button' id='letter21'  value='&#1060; &#1092;' onclick='choose(21)'></span></td></tr>
</table></td>
<td><table width='100%'>
<tr align='center'><td><span id='loc22'><input class='typeshape' type='button' id='letter22'  value='&#1061; &#1093;' onclick='choose(22)'></span></td></tr>
<tr align='center'><td><span id='loc23'><input class='typeshape' type='button' id='letter23'  value=' &#1062; &#1094;' onclick='choose(23)'></span></td></tr>
<tr align='center'><td><span id='loc24'><input class='typeshape' type='button' id='letter24'  value=' &#1063; &#1095;' onclick='choose(24)'></span></td></tr>
<tr align='center'><td><span id='loc25'><input class='typeshape' type='button' id='letter25'  value=' &#1064; &#1096;' onclick='choose(25)'></span></td></tr>
<tr align='center'><td><span id='loc26'><input class='typeshape' type='button' id='letter26'  value=' &#1065; &#1097;' onclick='choose(26)'></span></td></tr>
<tr align='center'><td><span id='loc27'><input class='typeshape' type='button' id='letter27'  value=' &#1098;' onclick='choose(27)'></span></td></tr>
<tr align='center'><td><span id='loc28'><input class='typeshape' type='button' id='letter28'  value=' &#1067; &#1099;' onclick='choose(28)'></span></td></tr>
<tr align='center'><td><span id='loc29'><input class='typeshape' type='button' id='letter29'  value=' &#1100;' onclick='choose(29)'></span></td></tr>
<tr align='center'><td><span id='loc30'><input class='typeshape' type='button' id='letter30'  value=' &#1069; &#1101;' onclick='choose(30)'></span></td></tr>
<tr align='center'><td><span id='loc31'><input class='typeshape' type='button' id='letter31'  value=' &#1070; &#1102;' onclick='choose(31)'></span></td></tr>
<tr align='center'><td><span id='loc32'><input class='typeshape' type='button' id='letter32'  value=' &#1071; &#1103;' onclick='choose(32)'></span></td></tr>
</table></td>
</tr></table>
<table width='400' border='0' align='center' cellpadding='3' cellspacing='1' alt='this allows you to'><tr bgcolor='#FFFFFF'><td width='15'><input type='checkbox' onclick='changeGroup(this)' value='0' checked="checked"></td><td>Group 1</td><td width='15'><input type='checkbox' onclick='changeGroup(this)' value='1' checked="checked"></td><td>Group 2</td><td width='15'><input type='checkbox' onclick='changeGroup(this)' value='2' checked="checked"></td><td>Group 3</td><td width='15'><input type='checkbox' onclick='changeGroup(this)' value='3' checked="checked"></td><td>Group 4</td></tr></table>
<hr size="1" width="550" align="center">
<div id="A0" class="popUpStyle">watermelon</div>
<div id="A1" class="popUpStyle">bottle</div>
<div id="A2" class="popUpStyle">wine</div>
<div id="A3" class="popUpStyle">pear</div>
<div id="A4" class="popUpStyle">house</div>
<div id="A5" class="popUpStyle">fir-tree</div>
<div id="A6" class="popUpStyle">hedgehog</div>
<div id="A7" class="popUpStyle">giraffe</div>
<div id="A8" class="popUpStyle">tooth</div>
<div id="A9" class="popUpStyle">needle</div>
<div id="A10" class="popUpStyle">yoga</div>
<div id="A11" class="popUpStyle">doll</div>
<div id="A12" class="popUpStyle">onion</div>
<div id="A13" class="popUpStyle">store</div>
<div id="A14" class="popUpStyle">nose</div>
<div id="A15" class="popUpStyle">island</div>
<div id="A16" class="popUpStyle">shelf</div>
<div id="A17" class="popUpStyle">mouth</div>
<div id="A18" class="popUpStyle">elephant</div>
<div id="A19" class="popUpStyle">cake</div>
<div id="A20" class="popUpStyle">ear</div>
<div id="A21" class="popUpStyle">apron</div>
<div id="A22" class="popUpStyle">bread</div>
<div id="A23" class="popUpStyle">flower</div>
<div id="A24" class="popUpStyle">cup</div>
<div id="A25" class="popUpStyle">closet</div>
<div id="A26" class="popUpStyle">brush</div>
<div id="A27" class="popUpStyle">sit down, eat (not pronounced)</div>
<div id="A28" class="popUpStyle">cheese</div>
<div id="A29" class="popUpStyle">shelf, polish woman/polka dance (not pronounced)</div>
<div id="A30" class="popUpStyle">screen</div>
<div id="A31" class="popUpStyle">skirt</div>
<div id="A32" class="popUpStyle">apple</div>
<div id="popup" class="pop_up"></div>
</body>
</html>
