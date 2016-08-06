Welcome!

Weather Widget Readme
ACIT 1620 - Web Development
Assignment 4 - Weather Widget using JavaScript and jQuery
By: Yoseph Jo and Kenneth Tran

You can demo our weather widget by simply opening the demo.html webpage file included! (Windows XP visuals are just for special effects, and are separate from the actual weather widget!).

To install our weather widget on your website:

    1. Place the following file into your JS/JavaScript folder (from our js folder):
            WeatherWidget.js
			
    2. Place the following file into your CSS/Styles folder (from our css folder):
            WeatherWidget.css
			
    3. Copy and paste the following into the <head> section your webpage(s).
       Change the folder names (Style, JavaScript) to whatever your folder names are:

        <link rel="stylesheet" type="text/css" href="css/WeatherWidget.css">
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
        <script src="http://momentjs.com/downloads/moment.js"></script>
        <script src="http://momentjs.com/downloads/moment-timezone-with-data.js"></script>
        <script>
            moment().format();
        </script>
        <script src="js/WeatherWidget.js"></script>

      Explanation of above code (in order):
          The CSS Styling Code for the Widget
          The jQuery code (fetched from the web)
          The jQuery UI code (fetched from the web)
          Part of the script required for the timezone conversion (fetched from the web)
          Part of the script required for the timezone conversion (fetched from the web)
          To setup the moment timezone conversion
          The javaScripts required for the Weather Widget to function

    4. Copy and paste the following into the <body> section your webpage(s).
       This code can be placed anywhere within the <body></body> tags:

        <div id="widget"></div>

      Explanation of above code
          Required to load the weather widget onto the webpage