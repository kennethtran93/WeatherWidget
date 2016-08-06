# Weather Widget
Weather Widget for websites<br />
ACIT 1620 - Web Development<br />
Assignment 4 - Weather Widget using JavaScript and jQuery<br />

## Team
- Yoseph Jo
- Kenneth Tran

## Demo
You can demo our weather widget by simply opening the demo.html webpage file included!<br />
(Windows XP visuals are just for special effects, and are separate from the actual weather widget!).

## Installation
To install our weather widget on your website:

1. Place the following file into your `JS/JavaScript` folder (from our `js` folder):
  - `WeatherWidget.js`

2. Place the following file into your `CSS/Styles` folder (from our `css` folder):
  - `WeatherWidget.css`

3. Copy and paste the following into the `<head>` section your webpage(s).<br />
  *Change the folder names (Style, JavaScript) to whatever your folder names are:*

  ```html
  <link rel="stylesheet" type="text/css" href="css/WeatherWidget.css">
  <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
  <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
  <script src="http://momentjs.com/downloads/moment.js"></script>
  <script src="http://momentjs.com/downloads/moment-timezone-with-data.js"></script>
  <script>
      moment().format();
  </script>
  <script src="js/WeatherWidget.js"></script>
  ```
  
  Explanation of above code (in order):<br />
  - The CSS Styling Code for the Widget
  ```html
  <link rel="stylesheet" type="text/css" href="css/WeatherWidget.css">
  ```
  - The jQuery code (fetched from the web)
  ```html
  <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
  ```
  - The jQuery UI code (fetched from the web)
  ```html
  <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
  ```
  - Part of the script required for the timezone conversion (fetched from the web)
  ```html
  <script src="http://momentjs.com/downloads/moment.js"></script>
  ```
  - Part of the script required for the timezone conversion (fetched from the web)
  ```html
  <script src="http://momentjs.com/downloads/moment-timezone-with-data.js"></script>
  ```
  - To setup the moment timezone conversion
  ```html
  <script>
      moment().format();
  </script>
  ```
  - The javaScripts required for the Weather Widget to function
  ```html
  <script src="js/WeatherWidget.js"></script>
  ```

4. Copy and paste the following into the `<body>` section your webpage(s).<br />
  *This code can be placed anywhere within the `<body></body>` tags:*

  ```html
  <div id="widget"></div>
  ```
  Explanation of above code
  - Required to load the weather widget onto the webpage.
