//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com

var message="Right-Click Function Disabled!";

///////////////////////////////////
function clickIE4(){
    if (event.button==2){
        alert(message);
        return false;
    }
}

function clickNS4(e){
    if (document.layers||document.getElementById&&!document.all){
        if (e.which==2||e.which==3){
            alert(message);
            return false;
        }
    }
}

if (document.layers){
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS4;
} else if (document.all&&!document.getElementById){
    document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")


// to delay weather widget
window.winXP = true;
$(document).ready(function(){
    
    document.getElementById("widget").className = "noselect";
    // Delay effects set for "Win Xp Startup feel"
    // -- 2.5 seconds for "Startup" Screen
    // -- 2.5 seconds for "Welcome" Screen
    // -- 0.5 seconds after loads everything else.
    setTimeout(function() {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(Images/WinXp-Welcome.png)"}, 2500);
    setTimeout(function() {
        $("#widget").prepend("<audio src=\"winXPstartup.mp3\" autoplay></audio>");
        }, 3500);
    setTimeout(function() {
        document.getElementsByTagName("body")[0].style.backgroundImage = "url(Images/pageBackground.png)"
        }, 5000);
    
    // load xp desktop
    setTimeout(function() {
        $("#winXP").append("<img src=\"Images/WinXP-firefox-credit-click.png\" class=\"noselect desktop-icons\" ondragstart=\"return false\" alt=\"Windows XP Desktop Icons\" usemap=\"#desktopmap\"></img>");
        $("#winXP").append("<map name=\"desktopmap\"><area shape=\"rect\" coords=\"154,78,225,128\" onclick=\"browserCredits()\"><area shape=\"rect\" coords=\"154,153,225,203\" onclick=\"browserReadme()\"><area shape=\"rect\" coords=\"0,0,75,295\" onclick=\"notRealXP()\"><area shape=\"rect\" coords=\"0,296,75,355\" onclick=\"firefox()\"></map>");
        $("#winXP").append("<img id=\"browser\" src=\"Images/WinXP-firefox-credits.png\" class=\"noselect\" alt=\"FireFox Browser\" usemap=\"firefoxmap\"></img>");
        $("#winXP").append("<map name=\"firefoxmap\"><area shape=\"rect\" coords=\"20,55,270,85\" onclick=\"browserCredits()\"><area shape=\"rect\" coords=\"270,55,525,85\" onclick=\"browserReadme()\"><area shape=\"rect\" coords=\"0,0,818,30\" onclick=\"notRealFF()\"><area shape=\"rect\" coords=\"0,30,275,54\" onclick=\"notRealFF()\"><area shape=\"rect\" coords=\"0,86,818,123\" onclick=\"notRealFF()\"><area shape=\"rect\" coords=\"526,55,818,85\" onclick=\"notRealFF()\"><area shape=\"rect\" coords=\"814,0,817,500\" onclick=\"notRealFF()\"><area shape=\"rect\" coords=\"0,0,4,500\" onclick=\"notRealFF()\"><area shape=\"rect\" coords=\"0,496,818,500\" onclick=\"notRealFF()\"></map>");
        $("#winXP").append("<div id=\"browser-content\"></div>");
        browserCredits();
        $("#winXP").append("<div id=\"winXP-Taskbar\" class=\"noselect\"></div>");
        $("#winXP-Taskbar").append("<img id=\"taskbar\" usemap=\"taskbarmap\"></img>");
        $("#winXP-Taskbar").append("<map name=\"taskbarmap\"><area shape=\"rect\" coords=\"0,0," + $(window).innerWidth() + "," + $(window).innerHeight() + "\" onclick=\"notRealXP()\"></map>");
        $("#winXP-Taskbar").append("<div id=\"xpTaskbar-LEFT\" class=\"Taskbar\"></div>");
        $("#winXP-Taskbar").append("<div class=\"clear\"></div>");
        $("#winXP-Taskbar").append("<div id=\"xpTaskbar-MID\" class=\"Taskbar\"></div>");
        $("#winXP-Taskbar").append("<div id=\"xpTaskbar-RIGHT\" class=\"Taskbar\"></div>");
        $("#xpTaskbar-RIGHT").append("<div id=\"taskbar-time\"></div>");
        $("#winXP-Taskbar").append("<div class=\"clear\"></div>");
        }, 5500);
        
    setTimeout(function() {
        setInterval("TaskbarTime(showTime())", 100);
        }, 5505);
    
    setTimeout(function() {
        $("audio").remove();
    }, 8500);
    
});

function browserCredits() {
    $(".desktop-icons").attr("src", "Images/WinXP-firefox-credit-click.png");
    $("#browser").attr("src", "Images/WinXP-firefox-credits.png");
    $("#browser-content").empty();
    $("#browser-content").append("<img src=\"Images/firefox.png\">");
}

function browserReadme() {
    $(".desktop-icons").attr("src", "Images/WinXP-firefox-readme-click.png");
    $("#browser").attr("src", "Images/WinXP-firefox-readme.png");
    $("#browser-content").empty();
    $("#browser-content").append("<p>Welcome!</p><p>Weather Widget Readme<br>ACIT 1620 - Web Development<br>Assignment 4 - Weather Widget using JavaScript and jQuery<br>By: <b><u>Yoseph Jo</u></b> and <b><u>Kenneth Tran</u></b></p><p><b>PLEASE NOTE:  OpenWeatherMap.org's API has changed since the completion of this widget, which has made this widget non-functional.</b></p><p>The Weather Widget demo is already running on your screen - Try it out!<br><i>(Windows XP visuals are just for special effects, and are separate from the actual weather widget!)</i></p><p>To install our weather widget on your website:<ol><li>Place the following file into your JS/JavaScript folder (from our js folder):<ul><li>WeatherWidget.js</li></ul></li><li>Place the following file into your CSS/Styles folder (from our css folder):<ul><li>WeatherWidget.css</li></ul></li><li>Copy and paste the following into the <span class=\"code\">&lt;head&gt;</span> section your webpage(s).<br>Change the folder names (Style, JavaScript) to whatever your folder names are:</li><p class=\"code tab\">&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"css/WeatherWidget.css\"&gt;<br>&lt;script src=\"https://code.jquery.com/jquery-1.11.1.js\"&gt;&lt;/script&gt;<br>&lt;script src=\"https://code.jquery.com/ui/1.11.2/jquery-ui.js\"&gt;&lt;/script&gt;<br>&lt;script src=\"http://momentjs.com/downloads/moment.js\"&gt;&lt;/script&gt;<br>&lt;script src=\"http://momentjs.com/downloads/moment-timezone-with-data.js\"&gt;&lt;/script&gt;<br>&lt;script&gt;<br><span class=\"tab\"><span class=\"tab\">moment().format();</span></span><br>&lt;/script&gt;<br>&lt;script src=\"js/WeatherWidget.js\"&gt;&lt;/script&gt;<br></p><p>Explanation of above code (in order):<ol id=\"expList\"><li>The CSS Styling Code for the Widget</li><li>The jQuery code (fetched from the web)</li><li>The jQuery UI code (fetched from the web)</li><li>Part of the script required for the timezone conversion (fetched from the web)</li><li>Part of the script required for the timezone conversion (fetched from the web)</li><li>To setup the moment timezone conversion</li><li>The javaScripts required for the Weather Widget to function</li></ol></p><li>Copy and paste the following into the <span class=\"code\">&lt;body&gt;</span> section your webpage(s).<br>This code can be placed anywhere within the <span class=\"code\">&lt;body&gt;&lt;/body&gt;</span> tags:</li><p class=\"code tab\">&lt;div id=\"widget\"&gt;&lt;/div&gt;</p><p>Explanation of above code<ul><li>Required to load the weather widget onto the webpage</li></ul></p></p>");
}

function notRealXP() {
    alert("Sorry - this is not a real Windows XP emulation!  Therefore the action you were trying to do does not exist in our code!");
}

function notRealFF() {
    alert("Sorry - this is not a real FireFox emulation!  Therefore the action you were trying to do does not exist in our code!");
}

function firefox() {
    alert("The FireFox browser is already open! XP");
}

function showTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (minutes < 10)
    minutes = "0" + minutes;

    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours < 10) {
    hours = "0" + hours;
    }
    if (hours == 0) {
    hours = 12;
    }

    return hours + ":" + minutes + " " + suffix;
}

function TaskbarTime(time) {
    document.getElementById("taskbar-time").innerHTML = time;
}