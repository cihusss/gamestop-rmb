var iframeID;
var wrapperWidth;
var wrapperHeight;
var videoHeight;
var expand;

if (self !== top) {

  iframeID = window.frameElement.id;

  parent.document.getElementById(iframeID).style.height = '115px';
  parent.document.getElementById(iframeID).style.width = '100%';
  parent.document.getElementById(iframeID).style.transition = 'height .2s';
}

function resizeIframes() {

  if (self !== top && expand == 1) {

    wrapperWidth = window.innerWidth;
    parent.document.getElementById(iframeID).style.height = videoHeight + "px";
    parent.parent.document.getElementById(iframeID).style.height = videoHeight + "px";
    document.getElementById("ad").style.height = videoHeight + "px";
  }
}

function styleAd(event) {

  videoHeight = document.getElementById("botr_syw5e4l0_SMAdnFJW_div").offsetHeight;
  console.log("videoheight: " + videoHeight);

  resizeIframes();

    switch(true) {

    case (wrapperWidth < 820):
      // document.getElementById("wrapper").style.display = "none";
      break;
    
    case (wrapperWidth >= 768 && wrapperWidth < 1440):
      // document.getElementById("wrapper").style.display = "flex";
      // document.getElementById("ad").style.width = "820px";
      // document.getElementById("panel").style.width = "820px";
      // document.getElementById("expand").style.position = "relative";
      // document.getElementById("expand").style.right = "0";
      // document.getElementById("right").style.display = "none";
      // document.getElementById("left").style.width = "100%";
      // document.getElementById("headline").style.fontSize = "26px";
      // document.getElementById("btnshop").style.left = "28rem";
      // document.getElementById("btnshop").style.bottom = "4.3rem";
      // document.getElementById("btnlearn").style.left = "39.5rem";
      // document.getElementById("btnlearn").style.bottom = "4.3rem";
      // document.getElementById("panelimg").src = "https://staging-staples.triadretail.net/brandpages/2019/hp-rmb/img/panel-tablet.jpg"
      break;
   
    case (wrapperWidth >= 1440):
      // document.getElementById("wrapper").style.display = "flex";
      // document.getElementById("ad").style.width = "1440px";
      // document.getElementById("headline").style.fontSize = "36px";
      // document.getElementById("panel").style.width = "1440px";
      // document.getElementById("expand").style.position = "absolute";
      // document.getElementById("expand").style.right = "4.5rem";
      // document.getElementById("right").style.display = "flex";
      // document.getElementById("left").style.width = "50%";
      // document.getElementById("btnshop").style.left = "12rem";
      // document.getElementById("btnshop").style.bottom = "1.6rem";
      // document.getElementById("btnlearn").style.left = "24.5rem";
      // document.getElementById("btnlearn").style.bottom = "1.6rem";
      // document.getElementById("panelimg").src = "https://staging-staples.triadretail.net/brandpages/2019/hp-rmb/img/panel.jpg";
  }
    document.getElementById("ad").style.opacity = "1";

}

function injectPixel(pixel) {
  var img = document.createElement("img");
  var src = document.createAttribute("src");
  var axel = Math.random();
  var a = Math.round(axel * 10000000000000);
  src.value = 'https://pubads.g.doubleclick.net/activity;xsp=' + pixel + ';ord=' + a; 
  img.setAttributeNode(src);
  img.setAttribute("class", "pixel");
  document.getElementById("ad").appendChild(img);
}

function expandAd(event) {
  parent.document.getElementById(iframeID).style.height = "405px";
  parent.parent.document.getElementById(iframeID).style.height = "405px";
  document.getElementById("ad").style.height = "405px";
  document.getElementById("panel").style.display = "flex";
  jwplayer().play();
  videoHeight = document.getElementById("botr_syw5e4l0_SMAdnFJW_div").offsetHeight;
  injectPixel(4464371);
  expand = 1;
}

function collapseAd(event) {
  parent.document.getElementById(iframeID).style.height = "115px";
  parent.parent.document.getElementById(iframeID).style.height = "115px";
  document.getElementById("ad").style.height = "115px";
  document.getElementById("panel").style.display = "none";
  jwplayer().pause();
  injectPixel(4464953);
  expand = 0;
}

window.addEventListener("resize", styleAd);

document.getElementById("expand").addEventListener('click', expandAd);
document.getElementById("close").addEventListener('click', collapseAd);

styleAd();