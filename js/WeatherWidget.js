$(document).ready(function(){
    
    // Checks if using Windows XP Visuals
    // Delays script if being used.
    if (typeof window.winXP == "boolean") {
        setTimeout(function() {
        widget();
        }, 5500);
    } else {
        widget();
    }
    
    function widget() {
        document.getElementById("widget").className = "noselect";
        startUp();
        changeBackground();
        getData();
        $("#widget-box").fadeIn();
        
        // JQuery-UI function to set the div as draggable, but within screen only.
        //noinspection JSJQueryEfficiency
        $( "#widget-box" ).draggable({ opacity: 0.70, containment: "#containment-wrapper", scroll: false});

        container();
        $(window).resize(container);
        
        $(".refresh-button").click(function() {
            getData();
        });

        $(".detail").click(function(){
            $("#details").slideToggle();
            if ($(".detail").html() == "More..."){
                $("#widget-box").animate({
                    height: '200px'
                });
                $(this).html("Less...");
                $("#temp-head").fadeOut();
            } else {
                $("#widget-box").animate({
                    height: '30px'
                });
                $(this).html("More...");
                $("#temp-head").fadeIn();
            }
        });
        
        function loading(){
            if ($(".detail").html() == "Less...") {
                $("#load").fadeIn();
            }
            $("#noData").hide();
            $("#widget-body").hide();
            $("#city").hide();
            $("#temp-head").hide();
            $("#info").hide();
            $("#more-info").hide();
            $("#weather").hide();
            $("#widget-footer").hide();
            $("#loaded").hide();
            $("#received").hide();
            $("#widget-credits").hide();
            $("#city").empty();
            $("#temp-head").empty();
            $("#info").empty();
            $("#more-info").empty();
            $("#weather").empty();
            $("#loaded").empty();
            $("#received").empty();
            $("#widget-credits").empty();
            }

        function loadDone(){
            if ($(".detail").html() == "Less...") {
                $("#load").hide();
            }
            
            $("#widget-body").fadeIn();
            $("#city").fadeIn();
            if ($(".detail").html() == "More...") {
                $("#temp-head").fadeIn();
            }
            $("#info").fadeIn();
            $("#more-info").fadeIn();
            $("#weather").fadeIn();
            $("#widget-footer").fadeIn();
            $("#loaded").fadeIn();
            $("#received").fadeIn();
            $("#widget-credits").fadeIn();
            }
            
        function startUp() {
            $("#widget").append("<div id=\"containment-wrapper\"></div>");
            $("#containment-wrapper").append("<div id=\"widget-box\"></div>");
            $("#widget-box").append("<div id=\"widget-head\"></div>");
            $("#widget-head").append("<div id=\"city\"></div>");
            $("#widget-head").append("<div id=\"temp-head\" hidden=\"hidden\"></div>");
            $("#widget-box").append("<button class=\"detail button\">Less...</button>");
            $("#widget-box").append("<button class=\"refresh-button button\"></button>");
            $(".refresh-button").append("<img id=\"refresh\" src=\"Images/refresh.png\" alt=\"Refresh Data\"></img>");
            $("#widget-box").append("<div class=\"clear\"></div>");
            $("#widget-box").append("<div id=\"noData\"></div>");
            $("#noData").append("<p>Weather Data is currently unavailable.  Please try refreshing the page later.</p>");
            $("#noData").hide();
            $("#widget-box").append("<div id=\"load\"></div>");
            $("#load").append("<img id=\"loading\" src=\"Images/loading1.gif\"></img>");
            $("#widget-box").append("<div id=\"details\"></div>");
            $("#details").append("<div id=\"widget-body\"></div>");
            $("#widget-body").append("<div id=\"text\"></div>");
            $("#text").append("<div id=\"info\"></div>");
            $("#text").append("<div id=\"more-info\"></div>");
            $("#text").append("<div class=\"clear\"></div>");
            $("#text").append("<div id=\"weather\"></div>");
            $("#details").append("<div id=\"widget-footer\"></div>");
            $("#widget-footer").append("<div id=\"loaded\"></div>");
            $("#widget-footer").append("<div id=\"received\"></div>");
            $("#widget-footer").append("<div id=\"widget-credits\"></div>");
            }
        
        function getData() {
            //  jQuery ajax function to retrieve json data
            $.ajax({
                beforeSend: function() {
                    loading();
                    $(".refresh-button").attr( "disabled", "disabled");
                    $(".refresh-button").attr( "id", "refreshing");
                    $(".detail").attr( "disabled", "disabled");
                    $(".detail").attr( "id", "detail");
                    document.getElementById("refresh").src = "Images/loading.gif";
                },
                cache: false,
                url: "http://api.openweathermap.org/data/2.5/weather?id=6173331",
                error: function() {
                    if ($(".detail").html() == "More..."){
                        $(".detail").trigger("click");
                    }
                    $("#noData").show();
                    document.getElementById("widget-box").style.backgroundImage = "";
                },
                success: function(result) {
                    handleSuccess(result);
                    $(".detail").removeAttr("disabled");
                    $(".detail").removeAttr("id");
                    changeBackground();
                },
                complete: function() {
                    loadDone();
                    $(".refresh-button").removeAttr("disabled");
                    $(".refresh-button").removeAttr("id");
                    document.getElementById("refresh").src = "Images/refresh.png";
                }
            });
            }
        }
    });

function handleSuccess(result){
    console.log(result);
    $("#city").append("" + result.name + ", " + result.sys.country + "&nbsp;&nbsp;");
    $("#temp-head").append("&nbsp;&nbsp;" + parseInt(result.main.temp - 273.15) + "&deg;C");
    $("#info").append(showDate());
    $("#info").append("<br/><img src=\"http://openweathermap.org/img/w/" + result.weather[0].icon + ".png\" alt=\"Weather Icon for " + result.weather[0].main + " - " + result.weather[0].description + "\"></img>");
    $("#more-info").append("Current: " + parseInt(result.main.temp - 273.15) + "&deg;C" + "<br/>");
    $("#more-info").append("High: " + parseInt(result.main.temp_max - 273.15) + "&deg;C" + "<br/>");
    $("#more-info").append("Low: " + parseInt(result.main.temp_min - 273.15) + "&deg;C" + "<br/>");
    $("#more-info").append("Humidity: " + parseInt(result.main.humidity) + "%");
    $("#weather").append(result.weather[0].main + " - (" + result.weather[0].description + ")<br/>");
    $("#loaded").append("<p>Time widget loaded:&nbsp;&nbsp;<b><u>" + show24Time() + " ( " + showTime() + " )</u></b></p>");
    $("#received").append("<p>Data Last Updated:&nbsp;&nbsp;&nbsp;<b><u>" + dataReceived(result.dt) + "</u></b></p>");
    $("#widget-credits").append("<p>Weather Data provided by <a href=\"http://openweathermap.org/city/6173331\" target=\"_blank\">openweathermap.org</a></p>");
    }

function container() {
    var winHeight = $(window).innerHeight();
    var winWidth = $(window).innerWidth();
    // Checks if using Windows XP Visuals
    if (typeof window.winXP == "boolean") {
        document.getElementById("containment-wrapper").style.height = (winHeight - 30) + "px";
    } else {
        document.getElementById("containment-wrapper").style.height = (winHeight - 16) + "px";
    }
}

function changeBackground(){
        var time = new Date().getHours();
    if (5 <= time && time < 9) {
        document.getElementById("widget-box").style.backgroundImage = "url('Images/dawn.jpg')";
    }
    else if (9 <= time && time < 17) {
        document.getElementById("widget-box").style.backgroundImage = "url('Images/day.jpg')";
    }
    else{
        document.getElementById("widget-box").style.backgroundImage = "url('Images/night.jpg')";
    }
}

function dataReceived(num) {
    var fmt = "YYYY-MMM-DD  HH:mm:ss  (Z z)";
    return moment.unix(num).tz("America/Vancouver").format(fmt);
}

function showTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (minutes < 10) {
    minutes = "0" + minutes;
    }
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

function show24Time(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (minutes < 10) {
    minutes = "0" + minutes;
    }
    if (hours < 10) {
    hours = "0" + hours;
    }

    return hours + ":" + minutes;
}

function showDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var dayOfWeek = date.getDay();
    var returnDate;
    var returnMonth;

    switch (dayOfWeek) {
        case 0: returnDate = "SUN"; break;
        case 1: returnDate = "MON"; break;
        case 2: returnDate = "TUE"; break;
        case 3: returnDate = "WED"; break;
        case 4: returnDate = "THR"; break;
        case 5: returnDate = "FRI"; break;
        case 6: returnDate = "SAT"; break;
        default: break;
    }
    
    switch (month) {
        case 1: returnMonth = "Jan"; break;
        case 2: returnMonth = "Feb"; break;
        case 3: returnMonth = "Mar"; break;
        case 4: returnMonth = "Apr"; break;
        case 5: returnMonth = "May"; break;
        case 6: returnMonth = "Jun"; break;
        case 7: returnMonth = "Jul"; break;
        case 8: returnMonth = "Aug"; break;
        case 9: returnMonth = "Sep"; break;
        case 10: returnMonth = "Oct"; break;
        case 11: returnMonth = "Nov"; break;
        case 12: returnMonth = "Dec"; break;
        default: break;
    }
    return returnDate + ", " + day + " " + returnMonth;
}


/*{"coord":{"lon":-123.12,
"lat":49.25},

"sys":{"type":1,
"id":3359,
"message":0.0293,
"country":"CA",
"sunrise":1417708243,
"sunset":1417738515},

"weather":[{"id":801,"main":"Clouds",
"description":"few clouds","icon":"02n"}],
"base":"cmc stations", */

/* "main":
{"temp":274.75,
"pressure":1009,
"humidity":86,
"temp_min":272.15,
"temp_max":278.15},

"wind":{"speed":0.17,"deg":28.0007},

"clouds":{"all":20},"dt":1417658400,
"id":6173331,
"name":"Vancouver",
"cod":200}*/