---
title: "Tag - Mapa"
layout: "default"
---

<pre>&lt;iframe
style="border:0;width:100%;height:500px;display:block"
src="https://mapa.covid.chat/embed"&gt;&lt;/iframe&gt;</pre>
<button onclick="showSampleCustom('https://mapa.covid.chat/embed', 500)">Ukážka</button>
                
pre konkrétne mesto pridajte za <strong>/embed</strong> <strong>/city-[názov mesta]</strong> napríklad:

<pre>&lt;iframe
style="border:0;width:100%;height:500px;display:block"
src="https://mapa.covid.chat/embed/city-Banska%20Bystrica"&gt;&lt;/iframe&gt;</pre>
<button onclick="showSampleCustom('https://mapa.covid.chat/embed/city-Banska%20Bystrica', 500)">Ukážka</button>

pre tabuľku miest <strong>/table</strong> napríklad:

<pre>&lt;iframe
style="border:0;width:100%;height:300px;display:block"
src="https://mapa.covid.chat/table"&gt;&lt;/iframe&gt;</pre>
<button onclick="showSampleCustom('https://mapa.covid.chat/table', 300)">Ukážka</button>

pre grafy <strong>/chart</strong>, <strong>/chart/median</strong> alebo <strong>/chart/daily</strong> napríklad:

<pre>&lt;iframe
style="border:0;width:100%;height:300px;display:block"
src="https://mapa.covid.chat/chart"&gt;&lt;/iframe&gt;</pre>

<button onclick="showSampleCustom('https://mapa.covid.chat/chart', 300)">Ukážka /chart</button>
<button onclick="showSampleCustom('https://mapa.covid.chat/chart/daily', 300)">Ukážka /chart/daily</button>

<div id="sample"></div>

[_Späť na mapa.covid.chat_](https://mapa.covid.chat)
