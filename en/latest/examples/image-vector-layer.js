"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6220],{93429:function(e,n,t){var o=t(54805),r=t(1055),c=t(16248),i=t(1733),a=t(4711),s=t(40824);const u=new c.Z({background:"#1a2b39",imageRatio:2,source:new a.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new o.Z}),style:{"fill-color":["string",["get","COLOR"],"#eee"]}}),l=new r.Z({layers:[u],target:"map",view:new s.ZP({center:[0,0],zoom:1})}),g=new i.Z({source:new a.Z,map:l,style:{"stroke-color":"rgba(255, 255, 255, 0.7)","stroke-width":2}});let f;const w=function(e){const n=l.forEachFeatureAtPixel(e,(function(e){return e})),t=document.getElementById("info");t.innerHTML=n&&n.get("ECO_NAME")||"&nbsp;",n!==f&&(f&&g.getSource().removeFeature(f),n&&g.getSource().addFeature(n),f=n)};l.on("pointermove",(function(e){if(e.dragging)return;const n=l.getEventPixel(e.originalEvent);w(n)})),l.on("click",(function(e){w(e.pixel)}))}},function(e){var n;n=93429,e(e.s=n)}]);
//# sourceMappingURL=image-vector-layer.js.map