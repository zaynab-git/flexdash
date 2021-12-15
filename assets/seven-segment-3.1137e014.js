import{b as o}from"./vuetify.8dd84506.js";import{n as a}from"./index.e6a850f4.js";import"./vue.87a98c28.js";import"./vue3-sfc-loader.a7c67584.js";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(o,{staticClass:"headline pa-0 flex-grow-1"},[i("span",{staticClass:"ma-auto",style:t.statStyle},[i("div",{staticClass:"d-inline-block mx-1",staticStyle:{position:"relative",width:"60px",height:"98px"}},[i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"46px",top:"10px",background:t.state("pin B","digit 1"),borderRadius:"10px 0px 0px 10px"}}),i("div",{class:t.state,style:{position:"absolute",width:"9px",height:"36px",left:"6px",top:"10px",background:t.state("pin F","digit 1"),borderRadius:"0px 10px 10px 0px"}}),i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"6px",top:"53px",background:t.state("pin E","digit 1"),borderRadius:"0px 10px 10px 0px"}}),i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"46px",top:"53px",background:t.state("pin C","digit 1"),borderRadius:"10px 0px 0px 10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"5px",background:t.state("pin A","digit 1"),borderRadius:"0px 0px 10px 10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"45px",background:t.state("pin G","digit 1"),borderRadius:"10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"84px",background:t.state("pin D","digit 1"),borderRadius:"10px 10px 0px 0px"}})]),i("div",{staticClass:"d-inline-block",style:{position:"relative",width:"12px",height:"12px",bottom:"15px",background:t.state("pin DP 1"),borderRadius:"5px"}}),i("div",{staticClass:"d-inline-block mx-1",staticStyle:{position:"relative",width:"60px",height:"98px"}},[i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"46px",top:"10px",background:t.state("pin B","digit 2"),borderRadius:"10px 0px 0px 10px"}}),i("div",{class:t.state,style:{position:"absolute",width:"9px",height:"36px",left:"6px",top:"10px",background:t.state("pin F","digit 2"),borderRadius:"0px 10px 10px 0px"}}),i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"6px",top:"53px",background:t.state("pin E","digit 2"),borderRadius:"0px 10px 10px 0px"}}),i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"46px",top:"53px",background:t.state("pin C","digit 2"),borderRadius:"10px 0px 0px 10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"5px",background:t.state("pin A","digit 2"),borderRadius:"0px 0px 10px 10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"45px",background:t.state("pin G","digit 2"),borderRadius:"10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"84px",background:t.state("pin D","digit 2"),borderRadius:"10px 10px 0px 0px"}})]),i("div",{staticClass:"d-inline-block",style:{position:"relative",width:"12px",height:"12px",bottom:"15px",background:t.state("pin DP 2"),borderRadius:"5px"}}),i("div",{staticClass:"d-inline-block mx-1",staticStyle:{position:"relative",width:"60px",height:"98px"}},[i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"46px",top:"10px",background:t.state("pin B","digit 3"),borderRadius:"10px 0px 0px 10px"}}),i("div",{class:t.state,style:{position:"absolute",width:"9px",height:"36px",left:"6px",top:"10px",background:t.state("pin F","digit 3"),borderRadius:"0px 10px 10px 0px"}}),i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"6px",top:"53px",background:t.state("pin E","digit 3"),borderRadius:"0px 10px 10px 0px"}}),i("div",{style:{position:"absolute",width:"9px",height:"36px",left:"46px",top:"53px",background:t.state("pin C","digit 3"),borderRadius:"10px 0px 0px 10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"5px",background:t.state("pin A","digit 3"),borderRadius:"0px 0px 10px 10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"45px",background:t.state("pin G","digit 3"),borderRadius:"10px"}}),i("div",{style:{position:"absolute",width:"36px",height:"9px",left:"12px",top:"84px",background:t.state("pin D","digit 3"),borderRadius:"10px 10px 0px 0px"}})])])])},d=[];const n={name:"seven-segment-3",icon:"$sevseg3",help:`Display colored numeric or text status value.
The Stat widget displays a colored centered numerical or text value. Optionally a unit string
can be appended and is rendered as a superscript. THree colors can be defined: low, normal, high.
The low-color is displayed if the value is below the low-threshold, the high-color if it's above
the high-threshold. For string values low and high colors are selected using regexps.`,props:{inputs:{type:Object,value:["pin A","pin B","pin C","pin D","pin E","pin G","pin DP 1","pin DP 2","pin COM","digit 1","digit 2","digit 3"]},"pin A":{default:"",dynamic:"GND"},"pin B":{default:"",dynamic:"GND"},"pin C":{default:"",dynamic:"GND"},"pin D":{default:"",dynamic:"GND"},"pin E":{default:"",dynamic:"GND"},"pin F":{default:"",dynamic:"GND"},"pin G":{default:"",dynamic:"GND"},"pin DP 1":{default:"",dynamic:"GND"},"pin DP 2":{default:"",dynamic:"GND"},"pin COM":{default:"",dynamic:"GND"},"digit 1":{default:"",dynamic:"GND"},"digit 2":{default:"",dynamic:"GND"},"digit 3":{default:"",dynamic:"GND"},color:{type:String,default:"#00BCD4",tip:"value color, null->text color"}},computed:{unitTxt(){return this.valTxt==="--"?"":this.unit},valTxt(){return typeof this.value=="number"?Math.round(this.value*10)/10:this.value===null?"--":this.value},val(){this.value},numColor(){return typeof this.value!="number"?this.color:this.low_threshold!==null&&this.value<=this.low_threshold?this.low_color:this.high_threshold!==null&&this.value>=this.high_threshold?this.high_color:this.color},lowRegexp(){return this.low_regexp&&new RegExp(this.low_regexp)},highRegexp(){return this.high_regexp&&new RegExp(this.high_regexp)},textColor(){return typeof this.value!="string"?this.color:this.lowRegexp&&this.lowRegexp.text(this.value)?this.low_color:this.highRegexp&&this.highRegexp.test(this.value)?this.low_color:this.color},finalColor(){return typeof this.value=="number"?this.numColor:this.textColor},statStyle(){return this.finalColor?{color:this.finalColor}:{}}},methods:{state(t,e){return this.$props["pin COM"]=="ON"?this.$props[t]!="ON"&&(this.$props[e]=="ON"||t=="pin DP 1"||t=="pin DP 2")?this.color:"grey":this.$props[t]=="ON"&&(this.$props[e]=="ON"||t=="pin DP 1"||t=="pin DP 2")?this.color:"grey"}}},p={};var s=a(n,l,d,!1,x,"672afb9d",null,null);function x(t){for(let e in p)this[e]=p[e]}s.options.__file="src/widgets/seven-segment-3.vue";var c=s.exports;export{c as default};
