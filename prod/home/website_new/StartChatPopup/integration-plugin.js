try {
  // const widgetId = document.getElementById("whatstool-wa-widget").getAttribute("widget-id");
  // if (!widgetId || widgetId == null) {
  //   throw new Error("Widget is invalid");
  // }
  console.log("Loading script")
  const s = document.createElement('script');
  // s.src = "https://d3mkw6s8thqya7.cloudfront.net/widget-plugin.js";
  s.src = "http://localhost:3000/widget-plugin.js";
  s.type = 'text/javascript';
  s.async = true;
  s.id = "df-script";
  // console.log(s);
  
  // Load Poppins font;
  const url = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap";
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
  
  // Fetch widget details
  var whatstoolLink = null;
  var whatstoolWidgetOptions = null;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://raw.githubusercontent.com/love-building-app/letsserve/master/prod/home/website_new/StartChatPopup/wt_id_get_req.json", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  xhr.onload = function () {
    
    whatstoolWidgetOptions = {
      "linkid": "",
      "phoneNumber": "916200856560",
      "variant": "WhatsAppBtnAndChatWidget",
      "btnBackground": "#4dc247",
      "btnCTA": "",
      "mb": "30",
      "ml": "30",
      "mr": "30",
      "borderRadius": "24",
      "prefilledMsg": "Hi",
      "position": "Bottom-Left",
      "brandName": "WhatsTool",
      "brandSub": "online",
      "brandColor": "#0A5F54",
      "brandImgUrl": "https://whatstool.in/data_whatstool_web/navlogo.png",
      "widgetBtnCTA": "Start chat",
      "openWidgetByDefault": "true",
      "openWidgetSessionWindow": "ALWAYS",
      "onscreenMsg": "Hi,\nHow can I help you ?",
      "onscreenImg": "",
      "widgetOnMobile": "true",
      "personalizedUrls": []			
    }
    
    s.onload = function() {
      console.log("Loaded script");
      console.log({whatstoolWidgetOptions});
  
      if (whatstoolWidgetOptions != null) {
        console.log({whatstoolWidgetOptions});
        window.CreateWhatsAppButtonAndWidget(whatstoolWidgetOptions);
      }
      
    }
    document.body.appendChild(s);
  };
} catch(err) {
  console.log(err);
}
