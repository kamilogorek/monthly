/*! (c) Andrea Giammarchi (ISC) */var monthly=function(){"use strict";var d=2;try{/\bMicrosoft\b/.test(require("os").release())&&(d=90)}catch(t){}return function(t){var e,a,n=t.date,r=[].concat(null==t.highlight?(e=n,a=new Date,a.getMonth()===e.getMonth()&&a.getFullYear()===e.getFullYear()?[e.getDate()]:[]):t.highlight).concat(t.invert||[]).map(F,n),o=[].concat(t.blink||[]).map(F,n),s=[].concat(t.bold||[]).map(F,n),l=[].concat(t.dim||[]).map(F,n),u=[].concat(t.underline||[]).map(F,n),h=t.locale||"en",i=[].concat(null==t.freeDay?[0,6]:t.freeDay),g=null==t.startDay?1:t.startDay,c=!!t.table,D=c?16:10,f=n.toLocaleDateString(h,{month:"long"})+(t.year?" "+n.getFullYear():""),m=[" ".repeat(D-Math.ceil(f.length/2))," ".repeat(D-Math.floor(f.length/2))].join(f),p=[];c&&p.push(w(d,"┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")),p.push((c?w(d,"┃ "):"")+w(7,m)+(c?w(d," ┃"):"")),c&&p.push(w(d,"┣━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┫"));var y=new Date("1978-05-17");Y(y,0),y.setDate(y.getDate()+g);for(var v,M=[],b=0;b<7;b++)M.push(w(d,(v=h,y.toLocaleDateString(v,{weekday:"short"}).slice(0,2)))),y.setDate(y.getDate()+1);p.push((c?w(d,"┃ "):"")+M.join(c?w(d," ┃ "):" ")+(c?w(d," ┃"):"")),c&&p.push(w(d,"┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫")),y.setTime(n.getTime()),y.setDate(1),Y(y,g);for(b=0;b<6;b++)p.push((c?w(d,"┃ "):"")+j(y,n,i,r,o,s,l,u).join(c?w(d," ┃ "):" ")+(c?w(d," ┃"):"")),5!==b&&c&&p.push(w(d,"┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫"));return c&&p.push(w(d,"┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛")),p};function F(t){if("number"==typeof t){var e=new Date(this.getTime());return e.setDate(t),e}return t}function Y(t,e){for(;t.getDay()!==e;)t.setDate(t.getDate()-1)}function i(t){return this.getDate()===t.getDate()&&this.getMonth()===t.getMonth()&&this.getFullYear()===t.getFullYear()}function w(t,e){return"["+t+"m"+e+"[0m"}function j(t,e,a,n,r,o,s,l){for(var u=[];u.length<7;){if(e.getMonth()===t.getMonth()){var h=(" "+t.getDate()).slice(-2);o.some(i,t)&&(h=w(1,h)),(-1<a.indexOf(t.getDay())||s.some(i,t))&&(h=w(d,h)),l.some(i,t)&&(h=w(4,h)),r.some(i,t)&&(h=w(5,h)),n.some(i,t)&&(h=w(7,h)),u.push(h)}else u.push("  ");t.setDate(t.getDate()+1)}return u}}();
