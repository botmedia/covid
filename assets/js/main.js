function showPopup() {
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
}

function showSample() {
    document.getElementById("sample").innerHTML = "<iframe\n" +
        "    style=\"border:0;width:100%;max-width:400px;height:430px;\"\n" +
        "    src=\"https://covid.chat/chat/?history=0&ref=welcome\"></iframe>";
}

function showSampleCustom(url,height) {
    document.getElementById("sample").innerHTML = "<iframe\n" +
        "    style=\"border:0;width:100%;height:"+height+"px;\"\n" +
        "    src=\"" + url + "\"></iframe>";
}

function showSampleSource() {
    document.getElementById("sample-source").style.display = 'block';
}
