(this["webpackJsonpgoit-react14-hw-01"]=this["webpackJsonpgoit-react14-hw-01"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"ProfileCard_profile__2_Ub5",description:"ProfileCard_description__3Wfql",avatar:"ProfileCard_avatar__3THmh",name:"ProfileCard_name__2mJlQ",stats:"ProfileCard_stats__1LfQG",tag:"ProfileCard_tag__-A1XN",location:"ProfileCard_location__1Byi7",label:"ProfileCard_label__23ctJ"}},function(a,e,t){a.exports={statsSection:"Stats_statsSection__3HvU-",title:"Stats_title__aB3Q7",statList:"Stats_statList__3HWZI",item:"Stats_item__2QpMP",label:"Stats_label__36Yle"}},,,function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(a){a.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(a,e,t){a.exports=t(12)},,,,,function(a,e,t){"use strict";t.r(e);var s=t(0),l=t.n(s),n=t(4),r=t.n(n),i=t(5),c=t(1),m=t.n(c),o=function(a){var e=a.user,t=e.avatar,s=e.name,n=e.tag,r=e.location,i=e.stats;return l.a.createElement("div",{className:m.a.profile},l.a.createElement("div",{className:m.a.description},l.a.createElement("img",{src:t,alt:"avatar",className:m.a.avatar}),l.a.createElement("p",{className:m.a.name},s),l.a.createElement("p",{className:m.a.tag},n),l.a.createElement("p",{className:m.a.location},r)),l.a.createElement("ul",{className:m.a.stats},l.a.createElement("li",null,l.a.createElement("span",{className:m.a.label},"followers"),l.a.createElement("span",{className:m.a.quantity},i.followers)),l.a.createElement("li",null,l.a.createElement("span",{className:m.a.label},"Views"),l.a.createElement("span",{className:m.a.quantity},i.views)),l.a.createElement("li",null,l.a.createElement("span",{className:m.a.label},"Likes"),l.a.createElement("span",{className:m.a.quantity},i.likes))))},p=t(2),u=t.n(p),f=function(a){var e=a.title,t=void 0===e?"":e,s=a.stats;return l.a.createElement("section",{className:u.a.statsSection},t.length>0&&l.a.createElement("h2",{className:u.a.title},t),l.a.createElement("ul",{className:u.a.statList},s.map((function(a){return l.a.createElement("li",{className:u.a.item,key:a.id},l.a.createElement("span",{className:u.a.label},a.label),l.a.createElement("span",{className:u.a.percentage},a.percentage))}))))};f.defaultProps={title:""},f.defaultProps={stats:[]};var d=f,_=t(6),E=function(a){var e=a.avatar,t=a.name,s=a.isOnline,n=a.id;return console.log(n),l.a.createElement("li",{key:n,className:"item"},l.a.createElement("span",{className:"status"},s),l.a.createElement("img",{className:"avatar",src:e,alt:t,width:"48"}),l.a.createElement("p",{className:"name"},t))},g=function(a){var e=a.friends,t=void 0===e?[]:e;return l.a.createElement("ul",{className:"friendList"},t.map((function(a){return l.a.createElement(E,a)})))},v=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}];var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{user:i}),l.a.createElement(d,{title:"Upload stats",stats:v}),l.a.createElement(g,{friends:_}))};r.a.render(l.a.createElement(N,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.1a4e4ec2.chunk.js.map