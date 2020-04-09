---
title: "Tag"
layout: "default"
---
Vloženie do stránky vo forme vyskakovacieho modulu. Skopírujte a vložte tento kód do &lt;head&gt; tagu každej stránky na ktorej chcete mať covid.chat 

<button onclick="showPopup()">Ukážka</button>

<pre>&lt;script&gt;
window.bChat = {
    "showChatNote": false,
    'image': 'https://cdn.covid.chat/logo.png',
    'text': 'Dôležité informácie o koronavíruse (COVID-19)',
    "autoOpen": false,
    "noAutoInit": false,
    "noHistory": true,
    "exitButton": true,
    "skipWelcome": true,
    "force": true,
    "ref": "welcome"
};
(function(d, s, id) {
    var js, bjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.async = true; js.id = id;
    js.src = "https://cdn.covid.chat/chat.js";
    bjs.parentNode.insertBefore(js, bjs);
}(document, 'script', 'bmedia'));
&lt;/script&gt;
</pre>

Druhá možnosť: Vloženie do stránky vo forme banera (odporúčaná výška minimálne 430px) 

<button onclick="showSampleSource()">Zobraziť</button> 
<button onclick="showSample()">Ukážka</button>

<div id="sample"></div>
<pre id="sample-source" style="display:none">&lt;iframe
    style="border:0;width:100%;height:430px;display:block"
    src="https://covid.chat/chat/?history=0&amp;ref=welcome"&gt;&lt;/iframe&gt;</pre>
