"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3673],{62021:function(e,t,n){var r=n(1055),o=n(72893),a=n(40824),i=n(64469),s=n(81625),p=n(91027);const c="get_your_own_D6rA4zTHduk6KOKTXzGB",u='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',l=new o.Z({source:new i.Z({attributions:u,url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key="+c,tileSize:512,maxZoom:22})}),m=new o.Z({source:new i.Z({attributions:u,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+c,maxZoom:20})}),w=document.getElementById("map"),h=new r.Z({layers:[l,m],target:w,view:new a.ZP({center:(0,s.mi)([-109,46.5]),zoom:6})});let d=75;document.addEventListener("keydown",(function(e){"ArrowUp"===e.key?(d=Math.min(d+5,150),h.render(),e.preventDefault()):"ArrowDown"===e.key&&(d=Math.max(d-5,25),h.render(),e.preventDefault())}));let y=null;w.addEventListener("mousemove",(function(e){y=h.getEventPixel(e),h.render()})),w.addEventListener("mouseout",(function(){y=null,h.render()})),m.on("prerender",(function(e){const t=e.context;if(t.save(),t.beginPath(),y){const n=(0,p.CR)(e,y),r=(0,p.CR)(e,[y[0]+d,y[1]]),o=Math.sqrt(Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2));t.arc(n[0],n[1],o,0,2*Math.PI),t.lineWidth=5*o/d,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()}t.clip()})),m.on("postrender",(function(e){e.context.restore()}))}},function(e){var t;t=62021,e(e.s=t)}]);
//# sourceMappingURL=layer-spy.js.map