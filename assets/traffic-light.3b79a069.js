import{b as l}from"./vuetify.8dd84506.js";import{n as s}from"./index.e6a850f4.js";import"./vue.87a98c28.js";import"./vue3-sfc-loader.a7c67584.js";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(l,{staticClass:"headline pa-0 flex-grow-1"},[i("span",{staticClass:"ma-auto",style:e.statStyle},[i("div",{staticClass:"d-inline-block mx-1",style:{position:"relative",width:"70px",height:"180px",borderRadius:"20px",background:this.$vuetify.theme.dark?"#eeeeee":"#212121"}},[i("div",{style:{position:"absolute",width:"50px",height:"50px",left:"10px",top:"10px",background:e.state("pin red","#FF5722"),borderRadius:"25px"}}),i("div",{style:{position:"absolute",width:"50px",height:"50px",left:"10px",top:"65px",background:e.state("pin yellow","#FFEB3B"),borderRadius:"25px"}}),i("div",{style:{position:"absolute",width:"50px",height:"50px",left:"10px",top:"120px",background:e.state("pin green","#4CAF50"),borderRadius:"25px"}})])])])},a=[];const h={name:"traffic-light",icon:"mdi-traffic-light",help:`Display colored numeric or text status value.
The Stat widget displays a colored centered numerical or text value. Optionally a unit string
can be appended and is rendered as a superscript. THree colors can be defined: low, normal, high.
The low-color is displayed if the value is below the low-threshold, the high-color if it's above
the high-threshold. For string values low and high colors are selected using regexps.`,props:{inputs:{type:Object,value:["pin red","pin yellow","pin green","pin GND"]},"pin red":{default:"",dynamic:"GND"},"pin yellow":{default:"",dynamic:"GND"},"pin green":{default:"",dynamic:"GND"},"pin GND":{default:"",dynamic:"GND"},color:{default:"cyan"}},computed:{unitTxt(){return this.valTxt==="--"?"":this.unit},valTxt(){return typeof this.value=="number"?Math.round(this.value*10)/10:this.value===null?"--":this.value},val(){this.value},numColor(){return typeof this.value!="number"?this.color:this.low_threshold!==null&&this.value<=this.low_threshold?this.low_color:this.high_threshold!==null&&this.value>=this.high_threshold?this.high_color:this.color},lowRegexp(){return this.low_regexp&&new RegExp(this.low_regexp)},highRegexp(){return this.high_regexp&&new RegExp(this.high_regexp)},textColor(){return typeof this.value!="string"?this.color:this.lowRegexp&&this.lowRegexp.text(this.value)?this.low_color:this.highRegexp&&this.highRegexp.test(this.value)?this.low_color:this.color},finalColor(){return typeof this.value=="number"?this.numColor:this.textColor},statStyle(){return this.finalColor?{color:this.finalColor}:{}}},methods:{state(e,t){return this.$props["pin GND"]=="OFF"?this.$props[e]=="ON"?t:"#bdbdbd":"grey"}}},r={};var o=s(h,n,a,!1,p,"ed454614",null,null);function p(e){for(let t in r)this[t]=r[t]}o.options.__file="src/widgets/traffic-light.vue";var g=o.exports;export{g as default};