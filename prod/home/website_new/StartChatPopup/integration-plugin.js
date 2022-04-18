try {

  console.log("Loading script")
  const s = document.createElement('script');
  s.src = "https://raw.githubusercontent.com/love-building-app/letsserve/master/prod/home/website_new/StartChatPopup/widget-plugin.js";
  // s.src = "http://localhost:3000/widget-plugin.js";
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
  // xhr.open("GET", "http://localhost:3000/wt_id_get_req.json", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  xhr.onload = function () {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
      if (data.link) {
        whatstoolLink = data.link;
      }
      if (whatstoolLink != null) {
        // var btn = whatstoolLink.whatsappBtnSettings;
        whatstoolWidgetOptions = {
          "linkid": "",
          "phoneNumber": "918987452513",
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
      } else {
        // Req successful but empty data is returned
        throw new Error("Invalid widget details");
      }

      
    } else {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    
    
    s.onload = function() {
      console.log("Loaded script");
      console.log({whatstoolWidgetOptions});
  
      if (whatstoolWidgetOptions != null) {
        console.log({whatstoolWidgetOptions});
        window.CreateWhatsAppButtonAndWidget(whatstoolWidgetOptions);
      }
      
      // Register event listener for url change
      history.pushState = ( f => function pushState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
      })(history.pushState);
    
      history.replaceState = ( f => function replaceState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
      })(history.replaceState);
    
      window.addEventListener('popstate',()=>{
        window.dispatchEvent(new Event('locationchange'))
      });
    
      // Listen for url change 
      window.addEventListener('locationchange', () => {
        console.log("Location changed");
        if(whatstoolWidgetOptions != null ) {
          window.CreateWhatsAppButtonAndWidget({...whatstoolWidgetOptions, env:"dev" });
        }
      });
    }
    document.body.appendChild(s);
  };
} catch(err) {
  console.log(err);
}
