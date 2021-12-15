import{e as o}from"./vuetify.8dd84506.js";import{n as i}from"./index.e6a850f4.js";import"./vue.87a98c28.js";import"./vue3-sfc-loader.a7c67584.js";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"ma-auto mt-0 pa-0"},[e._m(0),a(o,{staticClass:"mt-0 pa-0",class:e.state?"shake":"",attrs:{large:"",color:e.state?e.color:"grey"}},[e._v(" "+e._s(e.state?"mdi-bell-ring":"mdi-bell"))])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("audio",{staticClass:"mt-0 pa-0",attrs:{id:"myAudio"}},[a("source",{attrs:{src:"http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3"}})])}];const c={name:"buzzer",icon:"mdi-bell",help:`Display colored numeric or text status value.
The Stat widget displays a colored centered numerical or text value. Optionally a unit string
can be appended and is rendered as a superscript. THree colors can be defined: low, normal, high.
The low-color is displayed if the value is below the low-threshold, the high-color if it's above
the high-threshold. For string values low and high colors are selected using regexps.`,props:{inputs:{type:Object,value:["pin VDC","pin GND"]},"pin VDC":{default:"",dynamic:"GND"},"pin GND":{default:"",dynamic:"GND"},color:{default:"#00BCD4"}},computed:{state(){var e=document.getElementById("myAudio");return this.$props["pin GND"]=="OFF"&&this.$props["pin VDC"]=="ON"?(e.play(),!0):(e!=null&&e.pause(),!1)}}},s={};var r=i(c,l,n,!1,u,"50dc0072",null,null);function u(e){for(let t in s)this[t]=s[t]}r.options.__file="src/widgets/buzzer.vue";var h=r.exports;export{h as default};
