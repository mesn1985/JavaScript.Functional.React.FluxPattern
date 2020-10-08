(this.webpackJsonpassignment3fluxpattern=this.webpackJsonpassignment3fluxpattern||[]).push([[0],{110:function(t,e,n){},112:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(17),o=n.n(i),c=n(11),u=n(29),l=n(62);var s={noDataFound:function(){return"No  Data"}};function m(){return s.noDataFound()}var f={city:"Horsens",fromDate:function(){var t=new Date;return t.setHours(0,0,0,0),t.setDate(t.getDate()-5),t}(),toDate:function(){var t=new Date;return t.setHours(0,0,0,0),t}(),twentyFourHoursPredicitions:[],history:{highstTemp:[m()],lowstTemp:[m()],totalPrecip:[m()],dominantWindDirection:[m()],avgCloudCov:"No Data"},latestData:{cloud:[m()],precition:[m()],wind:[m()],temprature:[m()]},isLoadingData:!1,hasError:!1},h=n(2);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(h.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"selectCity":return v({},t,{city:e.city});case"selectFromDate":return v({},t,{fromDate:e.date});case"selectToDate":return v({},t,{toDate:e.date});case"weatherFetchErrorConstant":return v({},t,{hasError:e.hasError,isLoadingData:e.isLoadingData});case"weatherFetchSuccedConstant":return v({},t,{twentyFourHoursPredicitions:e.twentyFourHoursPredicitions,isLoadingData:!1,latestData:e.latest,history:e.history});case"weatherFetchLoadingConstant":return v({},t,{isLoadingData:e.isLoadingData});default:return t}};n(76);var y=function(t){return function(){return{type:"selectCity",city:t}}},b=function(t){return{type:"weatherFetchErrorConstant",hasError:t,isLoadingData:!1}},E=function(t){return{type:"weatherFetchLoadingConstant",isLoadingData:t}},g=function(t,e,n){return{type:"weatherFetchSuccedConstant",twentyFourHoursPredicitions:t,latest:e,history:n}},w=n(16),D=n.n(w),O=n(21),j=n(78),N=n(54),T=n(51),k=n(53),S=n(52),P=n(79),A="http://localhost:8080/";function F(){return(F=Object(O.a)(D.a.mark((function t(){var e,n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(A+"forecast");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.map((function(t){return function(t){if(function(t){return"temperature"===t.type}(t))return new T(t.time,t.place,t.type,t.unit,t.from,t.to);if(function(t){return"precipitation"===t.type}(t))return new S(t.time,t.place,t.type,t.unit,t.from,t.to,t.precipitation_types);if(function(t){return"wind speed"===t.type}(t))return new k(t.time,t.place,t.type,t.unit,t.from,t.to,t.directions);if(function(t){return"cloud coverage"===t.type}(t))return new P(t.time,t.place,t.type,t.unit,t.from,t.to)}(t)})));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=function(){return function(){return F.apply(this,arguments)}().then((function(t){return new j(t)}))},M=n(45),x=n(54),H=n(46),I=n(49),L=n(48),V=n(50),W="http://localhost:8080/";function U(){return(U=Object(O.a)(D.a.mark((function t(){var e,n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(W+"data");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.map((function(t){return function(t){if(function(t){return"temperature"===t.type}(t))return new H(t.time,t.place,t.type,t.unit,t.value);if(function(t){return"precipitation"===t.type}(t))return new L(t.time,t.place,t.type,t.unit,t.value);if(function(t){return"wind speed"===t.type}(t))return new I(t.time,t.place,t.type,t.unit,t.value,t.direction);if(function(t){return"cloud coverage"===t.type}(t))return new V(t.time,t.place,t.type,t.unit,t.value)}(t)})));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(t){return q.apply(this,arguments)}function q(){return(q=Object(O.a)(D.a.mark((function t(e){var n,r,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=[]).push(e),t.prev=2,t.next=5,x(W+"data",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:return r=t.sent,t.next=8,r;case 8:if(!((a=t.sent).status>=300||a.status<200)){t.next=11;break}return t.abrupt("return",!1);case 11:return t.abrupt("return",!0);case 14:return t.prev=14,t.t0=t.catch(2),console.log("post failed:",t.t0),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})))).apply(this,arguments)}var z=function(){return function(){return U.apply(this,arguments)}().then((function(t){return new M(t)}))},B=n(24),$=n(14),_={temperature:"temperature",precipitation:"precipitation",wind:"wind speed",cloud:"cloud coverage"},G={us:"US",SI:"SI"};function K(t,e){var n=e.forPeriod(new $.default(t,Q(t))).forType(_.temperature).avarageFromValue(),r=e.forPeriod(new $.default(t,Q(t))).forType(_.temperature).avarageToValue(),a=e.forPeriod(new $.default(t,Q(t))).forType(_.cloud).avarageFromValue(),i=e.forPeriod(new $.default(t,Q(t))).forType(_.cloud).avarageToValue(),o=e.forPeriod(new $.default(t,Q(t))).forType(_.wind).avarageFromValue(),c=e.forPeriod(new $.default(t,Q(t))).forType(_.wind).avarageToValue(),u=e.forPeriod(new $.default(t,Q(t))).forType(_.precipitation).avarageFromValue(),l=e.forPeriod(new $.default(t,Q(t))).forType(_.precipitation).avarageToValue();return{hour:function(t){return t.toString().length<2?"0"+t:t}(t.getHours()),toTemp:r,fromTemp:n,toCloud:i,fromCloud:a,fromWind:o,toWind:c,fromPrecip:u,toPrecip:l}}function Q(t){return new Date(t.getTime()+36e5)}function R(t,e){return 0===t.forType(e).data().length?s.noDataFound():t.forType(e).data().reduce((function(t,e){return t.time()>e.time()?t:e})).value()}var X={filterForInterval:function(t,e){var n=new $.default(t.fromDate,t.toDate),r=e.forPeriod(n).forPlace(t.city),a=r.forType(_.temperature).data();return{highstTemp:function(t){var e=Math.max.apply(Math,Object(B.a)(t.map((function(t){return t.value()}))));return isNaN(e)||!isFinite(e)?s.noDataFound():e}(a),lowstTemp:function(t){var e=Math.min.apply(Math,Object(B.a)(t.map((function(t){return t.value()}))));return isNaN(e)||!isFinite(e)?s.noDataFound():e}(a),totalPrecip:function(t){return t.data().reduce((function(t,e){return t+parseFloat(e.value())}),0)}(r.forType(_.precipitation)),dominantWindDirection:function(t){var e=t.data().map((function(t){return t.direction()})).reduce((function(t,e){return t[e]=t[e]+1||1,t}),Object(h.a)({},s.noDataFound(),0));return Object.keys(e).reduce((function(t,n){return e[t]>e[n]?t:n}))}(r.forType(_.wind)),avgCloudCov:function(t){var e=t.data();return e.reduce((function(t,e){return t+e.value()}),0)/e.length||s.noDataFound()}(r.forType(_.cloud))}},filterForLatestMeasureMents:function(t,e){var n=t.city,r=new $.default(t.fromDate,t.toDate),a=e.forPlace(n).forPeriod(r);return{temprature:R(a,_.temperature),precition:R(a,_.precipitation),wind:R(a,_.wind),cloud:R(a,_.cloud)}},filterFor24HoursPredictions:function(t,e){for(var n=t.city,r=t.toDate,a=[],i=0;i<24;i++)a.push(K(r,e.forPlace(n))),r=Q(r);return a}};function Y(t){return function(e,n){e(t()),e(E(!0)),C().then((function(t){z().then((function(r){var a=n(),i=X.filterFor24HoursPredictions(a,t),o=X.filterForLatestMeasureMents(a,r),c=X.filterForInterval(a,r);e(g(i,o,c))}))})).catch((function(t){alert("Error Occoured, could not retrieve data from the server"),e(b(!0))}))}}var Z=n(26),tt=(n(27),{Aarhus:"Aarhus",Copenhagen:"Copenhagen",Horsens:"Horsens"}),et=[{value:_.temperature,label:"temperature"},{value:_.precipitation,label:"precipitation"},{value:_.wind,label:"wind speed"},{value:_.cloud,label:"cloud coverage"}],nt=[{value:tt.Copenhagen,label:[tt.Copenhagen]},{value:tt.Horsens,label:[tt.Horsens]},{value:tt.Aarhus,label:[tt.Aarhus]}],rt=[{value:G.SI,label:"SI"},{value:G.us,label:"US"}];var at=function(t,e){return function(n){var r=n.value;e(t(r))}},it=Object(c.b)((function(t){return{isLoading:t.isLoadingData,city:t.city}}),(function(t){return{cityAction:function(t){return y(t)},fetchAction:function(e){return t(Y(e))}}}))(a.a.memo((function(t){var e=t.cityAction,n=t.fetchAction,r=t.isLoading;return t.city,a.a.createElement("div",{id:"predicateSelectComponent",className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm"},a.a.createElement("h1",null,"city:")),a.a.createElement("div",{className:"col-sm"},a.a.createElement(Z.a,{isDisabled:r,onChange:at(e,n),className:"mt-3 col-md-6 col-offset-4",options:nt}))))}))),ot=function(t){return function(){return{type:"selectFromDate",date:t}}},ct=n(35),ut=n.n(ct);var lt=function(t,e,n){return function(r){st(r,e)?alert("from date must be before to date"):n(t(r))}},st=function(t,e){return t>=e},mt=Object(c.b)((function(t){return{fromDate:t.fromDate,toDate:t.toDate}}),(function(t){return{fromDateAction:function(t){return ot(t)},fetchAction:function(e){return t(Y(e))}}}))(a.a.memo((function(t){var e=t.fromDateAction,n=t.fromDate,r=t.toDate,i=t.fetchAction;return a.a.createElement("div",{id:"datePickeroComponent",className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm"},a.a.createElement("h1",null,"From:")),a.a.createElement("div",{className:"col-sm"},a.a.createElement(ut.a,{value:n,onChange:lt(e,r,i),className:"mt-3 col-md-12 col-offset-4"})),a.a.createElement("hr",null)))}))),ft=function(t){return function(){return{type:"selectToDate",date:t}}};var ht=function(t,e,n){return function(r){dt(n,r)?alert("to date must be after from date"):e(t(r))}},dt=function(t,e){return t>=e},vt=Object(c.b)((function(t){return{toDate:t.toDate,fromDate:t.fromDate}}),(function(t){return{toDateAction:function(t){return ft(t)},fetchAction:function(e){return t(Y(e))}}}))(a.a.memo((function(t){var e=t.toDate,n=t.toDateAction,r=t.fromDate,i=t.fetchAction;return a.a.createElement("div",{id:"datePickeroComponent",className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm"},a.a.createElement("h1",null,"To:")),a.a.createElement("div",{className:"col-sm"},a.a.createElement(ut.a,{value:e,onChange:ht(n,i,r),className:"mt-3 col-md-12 col-offset-4"})),a.a.createElement("hr",null)))}))),pt=n(25);var yt=Object(c.b)((function(t){return{fromDate:t.fromDate,toDate:t.toDate,history:t.history}}))(a.a.memo((function(t){var e,n,r=t.fromDate,i=t.toDate,o=t.history,c=Math.round((e=r,n=i,(Date.parse(n)-Date.parse(e))/864e5));return a.a.createElement("div",{className:"container"},a.a.createElement(pt.a,null,a.a.createElement("thead",{className:"thead-dark"},a.a.createElement("tr",{scope:"row"},a.a.createElement("th",{scope:"col"},"Mesaurement"),a.a.createElement("th",{scope:"col"},"value, for ",c," days"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Highst Temprature"),a.a.createElement("td",null,o.highstTemp)),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Lowst Temprature"),a.a.createElement("td",null,o.lowstTemp)),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Total precip"),a.a.createElement("td",null,o.totalPrecip)),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Dominant wind direction"),a.a.createElement("td",null,o.dominantWindDirection)),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Average Cloud coverage"),a.a.createElement("td",null,o.avgCloudCov)))))}))),bt=n(66);var Et=Object(c.b)((function(t){return{twentyFourHoursPredicitions:t.twentyFourHoursPredicitions,toDate:t.toDate}}))(a.a.memo((function(t){var e=t.twentyFourHoursPredicitions,n=t.toDate;if(n<=Date.now())return a.a.createElement("div",null,"Predictions or only available for date in the future, set To for a future date");var r=[],i=!0,o=!1,c=void 0;try{for(var u,l=e.entries()[Symbol.iterator]();!(i=(u=l.next()).done);i=!0){var s=u.value,m=Object(bt.a)(s,2),f=m[0],h=m[1];r.push(a.a.createElement("tr",{key:f},a.a.createElement("td",null,h.hour),a.a.createElement("td",null,h.fromTemp),a.a.createElement("td",null,h.toTemp),a.a.createElement("td",null,h.fromPrecip),a.a.createElement("td",null,h.toPrecip),a.a.createElement("td",null,h.fromWind),a.a.createElement("td",null,h.toWind),a.a.createElement("td",null,h.fromCloud),a.a.createElement("td",null,h.toCloud)))}}catch(d){o=!0,c=d}finally{try{i||null==l.return||l.return()}finally{if(o)throw c}}return a.a.createElement("div",{id:"24predictions"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("h1",null,"24hour predictions for ",n.toDateString())),a.a.createElement(pt.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Hour"),a.a.createElement("th",null,"Temp from"),a.a.createElement("th",null,"Temp to"),a.a.createElement("th",null,"Precip from"),a.a.createElement("th",null,"Precip to"),a.a.createElement("th",null,"Wind from"),a.a.createElement("th",null,"Wind to"),a.a.createElement("th",null,"Cloud Coverage from"),a.a.createElement("th",null,"Cloud Coverage to"))),a.a.createElement("tbody",null,r)))})));function gt(t,e){switch(console.log(e),e){case _.temperature:return function(t){return console.log(t),G.us===t?"F":"C"}(t);case _.precipitation:return function(t){return G.us===t?"Inches":"mm"}(t);case _.wind:return function(t){return G.us===t?"MPH":"m/s"}(t);case _.cloud:return"%";default:throw"unrecognized data type -> getUnitSymbol ".concat(e)}}var wt=function(t){return function(){var e=Object(O.a)(D.a.mark((function e(n){var r,a,i,o,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.city.value,a=n.target.type.value,i=gt(n.target.unit.value,a),o=n.target.dateTime.value,c=n.target.value.value,e.next=8,J({place:r,type:a,unit:i,time:o,value:c});case 8:e.sent?t((function(){return{type:"defaultAction"}})):alert("Data was not submitted to the server, due to error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Dt=Object(c.b)(null,(function(t){return{fetchAction:function(e){return t(Y(e))}}}))(a.a.memo((function(t){var e=t.fetchAction;return a.a.createElement("div",{className:'class="border border-dark'},a.a.createElement("form",{onSubmit:wt(e),name:"SubmitHistory"},a.a.createElement("div",{className:"container",name:"inputs"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col mt-3 col-md-1 col-offset-4"},"Type"),a.a.createElement("div",{className:"col mt-3 col-md-3 col-offset-4"},"City"),a.a.createElement("div",{className:"col mt-3 col-md-1 col-offset-4"},"Unit"),a.a.createElement("div",{className:"col mt-3 col-md-3 col-offset-4"},"Date"),a.a.createElement("div",{className:"col mt-3 col-md-3 col-offset-4"},"Value")),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col mt-3 col-md-2 col-offset-4"},a.a.createElement(Z.a,{name:"type",options:et})),a.a.createElement("div",{className:"col mt-3 col-md-2 col-offset-4"},a.a.createElement(Z.a,{name:"city",options:nt})," "),a.a.createElement("div",{className:"col mt-3 col-md-2 col-offset-4"},a.a.createElement(Z.a,{name:"unit",options:rt})),a.a.createElement("div",{className:"col mt-3 col-md-3 col-offset-4"},a.a.createElement("input",{type:"datetime-local",name:"dateTime",max:new Date,required:!0})),a.a.createElement("div",{className:"col mt-3 col-md-2 col-offset-4"},a.a.createElement("input",{type:"number",name:"value",required:!0})))),a.a.createElement("input",{type:"submit",value:"submit weather history",className:"mt-3 col-md-2 col-offset-4",onSubmit:wt(e)})))})));var Ot=Object(c.b)((function(t){return{latestData:t.latestData}}))(a.a.memo((function(t){var e=t.latestData;return a.a.createElement("div",{className:"container"},a.a.createElement(pt.a,null,a.a.createElement("thead",{className:"thead-dark"},a.a.createElement("tr",{scope:"row"},a.a.createElement("th",{scope:"col"},"Latest Mesaurement"),a.a.createElement("th",{scope:"col"},"value"))),a.a.createElement("tbody",null,a.a.createElement("tr",{scope:"row"},a.a.createElement("th",null,"Temprature"),a.a.createElement("td",null,e.temprature)),a.a.createElement("tr",{scope:"row"},a.a.createElement("th",null,"precip"),a.a.createElement("td",null,e.precition)),a.a.createElement("tr",{scope:"row"},a.a.createElement("th",null,"wind"),a.a.createElement("td",null,e.wind)),a.a.createElement("tr",{scope:"row"},a.a.createElement("th",null,"Cloud coverage"),a.a.createElement("td",null,e.cloud)))))})));n(110);var jt=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(it,null),a.a.createElement(mt,null),a.a.createElement(vt,null),a.a.createElement("hr",null),a.a.createElement(yt,null),a.a.createElement("hr",null),a.a.createElement(Ot,null),a.a.createElement("hr",null),a.a.createElement(Et,null),a.a.createElement("hr",null),a.a.createElement(Dt,null))};n(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(c.a,{store:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return Object(u.c)(p,t,Object(u.a)(l.a))}()},a.a.createElement(jt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},14:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(4),a=n(5),i=function(){function t(e,n){Object(r.a)(this,t),this.fromDate=e.getTime(),this.toDate=n.getTime()}return Object(a.a)(t,[{key:"to",value:function(){return this.toDate}},{key:"from",value:function(){return this.fromDate}},{key:"contains",value:function(t){var e=Date.parse(t);return e>=this.fromDate&&e<=this.toDate}}]),t}()},30:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u){var l;return Object(e.a)(this,n),(l=Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c))).valueNumeric=u,l}return Object(o.a)(n,t),Object(r.a)(n,[{key:"value",value:function(){return this.valueNumeric}}]),n}(n(47));t.exports=c}.call(this,n(12)(t))},31:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u,l){var s;return Object(e.a)(this,n),(s=Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c))).fromNumeric=u,s.toNumeric=l,s}return Object(o.a)(n,t),Object(r.a)(n,[{key:"mathches",value:function(t){return t.time().getTime()===this.timeDate.getTime()&&t.place()===this.placeString&&t.type()===this.typeString&&t.unit()===this.unitString}},{key:"toDelete",value:function(){this.toDate=new Date(2e3,2,2)}},{key:"from",value:function(){return this.fromNumeric}},{key:"to",value:function(){return this.toNumeric}}]),n}(n(47));t.exports=c}.call(this,n(12)(t))},45:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(46),i=n(48),o=n(49),c=(n(50),n(14),function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(e.a)(this,t),this.dataArray=n}return Object(r.a)(t,[{key:"forPlace",value:function(e){return new t(this.dataArray.filter((function(t){return t.place()===e})))}},{key:"forType",value:function(e){return new t(this.dataArray.filter((function(t){return t.type()===e})))}},{key:"forPeriod",value:function(e){return new t(this.dataArray.filter((function(t){return e.contains(t.time())})))}},{key:"including",value:function(e){return new t(this.dataArray.concat(e))}},{key:"convertToUSUnits",value:function(){return this.dataArray.forEach((function(t){switch(t.constructor){case a:t.convertToF();break;case i:t.convertToInches();break;case o:t.convertToMPH()}})),this}},{key:"convertToInternationalUnits",value:function(){return this.dataArray.forEach((function(t){switch(t.constructor){case a:t.convertToC();break;case i:t.convertToMM();break;case o:t.convertToMS()}})),this}},{key:"lowestValue",value:function(){if(0!=this.dataArray.length)return this.dataArray.sort((function(t,e){return t.value()-e.value()}))[0].value()}},{key:"data",value:function(){return this.dataArray}}]),t}());t.exports=c}.call(this,n(12)(t))},46:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u){return Object(e.a)(this,n),Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c,u))}return Object(o.a)(n,t),Object(r.a)(n,[{key:"convertToF",value:function(){"C"===this.unitString&&(this.valueNumeric=1.8*this.valueNumeric+32,this.unitString="F")}},{key:"convertToC",value:function(){"F"===this.unitString&&(this.valueNumeric=(this.valueNumeric-32)/1.8,this.unitString="C")}}]),n}(n(30));t.exports=c}.call(this,n(12)(t))},47:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=function(){function t(n,r,a,i){Object(e.a)(this,t),this.timeDate=n,this.placeString=r,this.typeString=a,this.unitString=i}return Object(r.a)(t,[{key:"type",value:function(){return this.typeString}},{key:"unit",value:function(){return this.unitString}},{key:"time",value:function(){return this.timeDate}},{key:"place",value:function(){return this.placeString}}]),t}();t.exports=a}.call(this,n(12)(t))},48:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u){return Object(e.a)(this,n),Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c,u))}return Object(o.a)(n,t),Object(r.a)(n,[{key:"convertToInches",value:function(){"mm"===this.unitString&&(this.valueNumeric=.0394*this.valueNumeric,this.unitString="Inches")}},{key:"convertToMM",value:function(){"Inches"===this.unitString&&(this.valueNumeric=this.valueNumeric/.0394,this.unitString="mm")}}]),n}(n(30));t.exports=c}.call(this,n(12)(t))},49:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u,l){var s;return Object(e.a)(this,n),(s=Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c,u))).directionString=l,s}return Object(o.a)(n,t),Object(r.a)(n,[{key:"convertToMPH",value:function(){"m/s"===this.unitString&&(this.valueNumeric=2.2369*this.valueNumeric,this.unitString="MPH")}},{key:"convertToMS",value:function(){"MPH"===this.unitString&&(this.valueNumeric=this.valueNumeric/2.2369,this.unitString="m/s")}},{key:"direction",value:function(){return this.directionString}}]),n}(n(30));t.exports=c}.call(this,n(12)(t))},50:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(7),a=n(8),i=n(9),o=function(t){function n(t,i,o,c,u){return Object(e.a)(this,n),Object(r.a)(this,Object(a.a)(n).call(this,t,i,o,c,u))}return Object(i.a)(n,t),n}(n(30));t.exports=o}.call(this,n(12)(t))},51:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u,l){return Object(e.a)(this,n),Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c,u,l))}return Object(o.a)(n,t),Object(r.a)(n,[{key:"convertToF",value:function(){(this.unitString="C")&&(this.fromNumeric=1.8*this.fromNumeric+32,this.toNumeric=1.8*this.toNumeric+32,this.unitString="F")}},{key:"convertToC",value:function(){(this.unitString="F")&&(this.fromNumeric=(this.fromNumeric-32)/1.8,this.toNumeric=(this.toNumeric-32)/1.8,this.unitString="C")}}]),n}(n(31));t.exports=c}.call(this,n(12)(t))},52:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u,l,s){var m;return Object(e.a)(this,n),(m=Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c,u,l))).typesStringArray=s,m}return Object(o.a)(n,t),Object(r.a)(n,[{key:"types",value:function(){return this.typesStringArray}},{key:"convertToInches",value:function(){(this.unitString="mm")&&(this.fromNumeric=this.fromNumeric/25.4,this.toNumeric=this.toNumeric/25.4,this.unitString="Inches")}},{key:"convertToMM",value:function(){(this.unitString="Inches")&&(this.fromNumeric=25.4*this.fromNumeric,this.toNumeric=25.4*this.toNumeric,this.unitString="mm")}}]),n}(n(31));t.exports=c}.call(this,n(12)(t))},53:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=n(7),i=n(8),o=n(9),c=function(t){function n(t,r,o,c,u,l,s){var m;return Object(e.a)(this,n),(m=Object(a.a)(this,Object(i.a)(n).call(this,t,r,o,c,u,l))).directionsStringArray=s,m}return Object(o.a)(n,t),Object(r.a)(n,[{key:"directions",value:function(){return this.directionsStringArray}},{key:"convertToMPH",value:function(){"m/s"===this.unitString&&(this.fromNumeric=2.236936*this.fromNumeric,this.toNumeric=2.236936*this.toNumeric,this.unitString="MPH")}},{key:"convertToMS",value:function(){"MPH"===this.unitString&&(this.fromNumeric=this.fromNumeric/2.236936,this.toNumeric=this.toNumeric/2.236936,this.unitString="m/s")}}]),n}(n(31));t.exports=c}.call(this,n(12)(t))},67:function(t,e,n){t.exports=n(112)},76:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(5),a=(n(45),n(51)),i=n(52),o=n(53),c=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(e.a)(this,t),this.dataArray=n}return Object(r.a)(t,[{key:"forPlace",value:function(e){return new t(this.dataArray.filter((function(t){return t.place()===e})))}},{key:"forType",value:function(e){return new t(this.dataArray.filter((function(t){return t.type()===e})))}},{key:"forPeriod",value:function(e){return new t(this.dataArray.filter((function(t){return e.contains(t.time())})))}},{key:"including",value:function(e){return new t(this.dataArray.concat(e))}},{key:"convertToUSUnits",value:function(){return this.dataArray.forEach((function(t){switch(t.constructor){case a:t.convertToF();break;case i:t.convertToInches();break;case o:t.convertToMPH()}})),this}},{key:"convertToInternationalUnits",value:function(){return this.dataArray.forEach((function(t){switch(t.constructor){case a:t.convertToC();break;case i:t.convertToMM();break;case o:t.convertToMS()}})),this}},{key:"avarageFromValue",value:function(){var t=0;return this.dataArray.forEach((function(e){return t+=e.from()})),t/this.dataArray.length||"No Data"}},{key:"avarageToValue",value:function(){var t=0;return this.dataArray.forEach((function(e){return t+=e.to()})),t/this.dataArray.length||"No Data"}},{key:"data",value:function(){return this.dataArray}}]),t}();t.exports=c}.call(this,n(12)(t))},79:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n(7),a=n(8),i=n(9),o=function(t){function n(t,i,o,c,u,l){return Object(e.a)(this,n),Object(r.a)(this,Object(a.a)(n).call(this,t,i,o,c,u,l))}return Object(i.a)(n,t),n}(n(31));t.exports=o}.call(this,n(12)(t))}},[[67,1,2]]]);
//# sourceMappingURL=main.48e529dd.chunk.js.map