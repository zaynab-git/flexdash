import{n as u,w as X,W as K}from"./index.e6a850f4.js";import{a as c,f as h,C as O,d as o,e as l,n as Q,o as _,p as m,q as v,r as b,b as d,i as y,c as $,l as k,m as C,w,k as S,h as E,J as Y,K as Z,L as ee,_ as te,F as W}from"./vuetify.8dd84506.js";import"./vue.87a98c28.js";import"./vue3-sfc-loader.a7c67584.js";var ie=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t(c,{staticStyle:{overflow:"hidden"},attrs:{flat:"",color:e.color,elevation:e.no_border?0:void 0,outlined:e.no_border&&e.$root.editMode}},[!("title"in e.child_props)&&e.title?t(h,{staticClass:"d-flex pa-0 py-2"},[e.title?t("span",{staticClass:"mx-auto text-no-wrap"},[e._v(e._s(e.title))]):e._e(),t(O,{attrs:{"offset-y":"",bottom:"",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(n){var s=n.on,a=n.attrs;return[t(o,e._g(e._b({staticClass:"edit-btn",attrs:{icon:""}},"v-btn",a,!1),s),[t(l,[e._v("mdi-dots-vertical")])],1)]}}],null,!1,329363263)},[t(Q,[t(_,{attrs:{dense:""},on:{click:function(n){return e.handleEdit()}}},[t(m,[t(l,{attrs:{size:"20px",color:"cyan darken-1"}},[e._v("mdi-pencil")])],1),t(v,[t(b,{staticClass:"cyan--text text--darken-1"},[e._v(e._s(e.$t("editmenu.edit")))])],1)],1),t(_,{attrs:{dense:""},on:{click:function(n){return e.handleColor()}}},[t(m,[t(l,{attrs:{size:"20px"}},[e._v("mdi-palette")])],1),t(v,[t(b,[e._v(e._s(e.$t("editmenu.appearance")))])],1)],1),t(_,{attrs:{dense:""},on:{click:function(n){return e.handleClone()}}},[t(m,[t(l,{attrs:{size:"20px"}},[e._v("mdi-content-copy")])],1),t(v,[t(b,[e._v(e._s(e.$t("editmenu.clone")))])],1)],1),t(_,{attrs:{dense:""},on:{click:function(n){return e.handleHelp()}}},[t(m,[t(l,{attrs:{size:"20px"}},[e._v("mdi-help-circle")])],1),t(v,[t(b,[e._v(e._s(e.$t("editmenu.help")))])],1)],1),t(_,{attrs:{dense:""},on:{click:function(n){return e.handleDelete()}}},[t(m,[t(l,{attrs:{size:"20px",color:"pink darken-1"}},[e._v("mdi-trash-can")])],1),t(v,[t(b,{staticClass:"red--text text--darken-1"},[e._v(e._s(e.$t("editmenu.delete")))])],1)],1)],1)],1)],1):e._e(),e.can_full_page&&!e.$root.editMode?t("div",{staticClass:"full-page-btn",staticStyle:{position:"absolute",right:"0",top:"0.5ex"}},[t(o,{staticClass:"justify-center align-center mt-n1",attrs:{small:"",icon:""},on:{click:e.toggleFullPage}},[t(l,{attrs:{small:""}},[e._v(e._s(e.full_page?"mdi-arrow-collapse":"mdi-arrow-expand"))])],1)],1):e._e(),t(e.config.kind,e._b({ref:"comp",tag:"component",staticClass:"ma-0 pa-0",attrs:{id:e.config.id},on:{send:function(n){return e.sendData(n)}}},"component",e.bindings,!1))],1)},ne=[];const se={name:"WidgetWrap",props:{color:{type:String,default:"cyan"},no_border:{type:Boolean,default:!1},config:{type:Object,required:!0}},data(){return{watchers:[],bindings:{},full_page:!1}},computed:{title(){return this.bindings.title||""},child_props(){const e=this.palette.widgets;return this.config.kind in e?e[this.config.kind].props||{}:{}},can_full_page(){const e=this.palette.widgets;return this.config.kind in e?e[this.config.kind].full_page:!1}},watch:{config:{immediate:!0,deep:!0,handler(e){this.genBindings(e)}}},inject:["$store","palette"],methods:{addDynBinding(e,i){const t=this;if(!i)return()=>{};let n=i.split("/").filter(r=>r.length>0);if(n.length==0)return null;const s=n.pop();return this.$watch(()=>X(this.$store.sd,n)[s],(r,f)=>{r!=f&&t.updateBindingValue(e,r)},{deep:!0,immediate:!0})},removeWatchers(){this.watchers.forEach(e=>{e()}),this.watchers.length=0},genBindings(e){this.removeWatchers(),this.bindings={},e&&(Object.keys(e.static||{}).forEach(i=>{e.static[i]!==void 0&&e.dynamic[i]===void 0&&this.$set(this.bindings,i,e.static[i])}),Object.keys(e.dynamic||{}).forEach(i=>{e.dynamic[i]!==void 0&&this.watchers.push(this.addDynBinding(i,e.dynamic[i]))}))},updateBindingValue(e,i){if(!(e in this.child_props)){console.log(`Warning: updating value for ${e}, but ${this.config.kind} has no ${e}:`,JSON.stringify(this.child_props));return}let t=this.child_props[e].type;if(t===Boolean)typeof i=="number"?i=!!i:typeof i=="string"?(i=i.toLowerCase(),i=["true","ok","1","yes"].includes(i)):typeof i!="boolean"&&(i=void 0);else if(t===Number)typeof i=="string"?i=parseFloat(i):typeof i=="boolean"?i=i?1:0:typeof i!="number"&&(i=void 0),i!==void 0&&(i=Number.parseFloat(i.toPrecision(4)));else if(t===String)typeof i=="number"?i=i.toString():typeof i!="string"&&(i=JSON.stringify(i));else if((t===Array||t===Object)&&typeof i=="string")try{i=JSON.parse(i)}catch{i=void 0,console.log(`Cannot convert string value for ${e} to ${t.name}`)}this.$set(this.bindings,e,i)},handleEdit(){console.log("handleEdit() in widget-wrap"),this.$emit("edit","toggle")},handleDelete(){console.log("handleDelete() in widget-wrap"),this.$emit("delete")},handleClone(){console.log("handleClone() in widget-wrap"),this.$emit("clone")},handleHelp(){console.log("handleHelp() in widget-wrap"),this.$emit("help")},handleMoveUp(){console.log("handleMoveUp() in widget-wrap"),this.$emit("moveup")},handleMoveDown(){console.log("handleMoveDown() in widget-wrap"),this.$emit("movedown")},handleColor(){console.log("handleColor() in widget-wrap"),this.$emit("color")},toggleFullPage(){this.full_page=!this.full_page},sendData(e){console.log(e),e.title&&this.$root.serverSend(e.title,e.value)}}},D={};var F=u(se,ie,ne,!1,ae,"6578cb40",null,null);function ae(e){for(let i in D)this[i]=D[i]}F.options.__file="src/components/widget-wrap.vue";var T=F.exports,re=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("span",{staticClass:"md",domProps:{innerHTML:e._s(e.md_render)}})},le=[];const oe={name:"md",data(){return{md_render:""}},mounted(){const e=this.$slots.default[0].text.trim()||"";this.md_render=z(e,!0)},beforeUpdate(){const e=this.$slots.default[0].text.trim()||"";this.md_render=z(e,!0)}};function z(e,i){if(i){var t=document.createElement("div");t.innerText=e,e=t.innerHTML,e=e.replace(/<br>/g,`
`)}return e=e.replace(/^(#+)\s(.*)/gm,function(n,s,a){var r=s.length;return"<h"+r+">"+a+"</h"+r+">"}),e=e.replace(/^(.*)\n([=-]{2,})/gm,function(n,s,a){var r=a[0]==="="?"1":"2";return"<h"+r+">"+s+"</h"+r+">"}),e=e.replace(/^>\s((.+\n{0,1})+)/gm,function(n,s){return s=s.replace(/(\n>\s|\n)/g,`<br />
`),"<blockquote>"+s+"</blockquote>"}),e=e.replace(/^(((\t+|\s{2,}).*\n)+)/gm,function(n,s){return s=s.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=s.replace(/\n/g,`<br />
`),"<code>"+s+`</code>
`}),e=e.replace(/^([-*]\s.+\n?)+/gm,function(n){return n=n.replace(/^[-*]\s(.*)\n?/gm,"<li>$1</li>"),"<ul>"+n+"</ul>"}),e=e.replace(/^([0-9]+\.\s.+\n?)+/gm,function(n){return n=n.replace(/^[0-9]+\.\s(.*)\n?/gm,"<li>$1</li>"),"<ol>"+n+"</ol>"}),e=e.replace(/^(\|.*\n)+/gm,function(n){for(var s=n.split(/\n/g),a=["<table>"],r=0;r<s.length-1;r++){a.push("<tr>");for(var f=s[r].split(/\|/g),p=1;p<f.length;p++)a.push("<td>"),a.push(f[p]),a.push("</td>");a.push("</tr>")}return a.push(`</table>
`),a.join("")}),e=e.split(/\n{2,}/).map(n=>n.replace(/^([^<].*[^>])$/s,"<p>$1</p>")).join(`
`),e=e.replace(/`(.*?)`/g,function(n,s){return s==""?"&#96;":(s=s.replace(/_/g,"&#95;"),s=s.replace(/\*/g,"&#42;"),s=s.replace(/\[/g,"&#91;"),"<code>"+s+"</code>")}),e=e.replace(/(\*\*|__)(.*?)(\*\*|__)/g,"<b>$2</b>"),e=e.replace(/[*_](.*?)[*_]/g,"<i>$1</i>"),e=e.replace(/([^\]][^(])(https?:\/\/.*?)([\s<]|[.,);][\s<])/g,'$1<a href="$2">$2</a>$3'),e=e.replace(/!\[(.*?)\]\((.*?)\)/g,'<img src="$2" alt="$1">'),e=e.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'),e=e.replace(/\[(.*?)\]\s*\[(.*?)\]/g,function(n,s,a){var r="";return a=a.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),e.replace(new RegExp("\\["+a+"\\]:\\s*(.*)"),function(f,p){r=p}),'<a href="'+r+'">'+s+"</a>"}),e=e.replace(/\[.*\]:.*/g,""),e=e.replace("<code><br />","<code>"),e}const M={};var B=u(oe,re,le,!1,ce,null,null,null);function ce(e){for(let i in M)this[i]=M[i]}B.options.__file="src/components/md.vue";var P=B.exports,de=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"panel-edit",style:e.widgetStyle},[t(O,{attrs:{value:e.edit_active&&e.reposition,"offset-y":"","allow-overflow":"","min-width":"80%","content-class":"popup-spacer","close-on-content-click":!1,"close-on-click":!1},scopedSlots:e._u([{key:"activator",fn:function(n){return[t("widget-wrap",{attrs:{config:e.widget,color:e.edit_active?"highlight":"","not-used":n},on:{edit:e.toggleEdit}})]}}])},[t(c,{attrs:{color:"panel"}},[t(d,{staticClass:"d-flex align-baseline pb-6"},[t("span",[e._v("Edit "+e._s(e.widget.kind)+" Panel")]),t(y,{staticClass:"ml-3 mt-0 text-h6 flex-grow-0",attrs:{dense:"",value:e.widget.static.title,"hide-details":!0},on:{input:function(n){return e.handleTitleEdit(n)}}}),t($),t(o,{attrs:{elevation:"0",icon:""},on:{click:e.endEdit}},[t(l,[e._v("mdi-close")])],1)],1),e.child_help?t(h,{staticClass:"pb-0"},[e.child_help_title?t("h3",[e._v(e._s(e.child_help_title)+" "),e.child_help_text?t(o,{staticClass:"ml-1",attrs:{"x-small":"",text:"",value:e.edit_help},on:{click:function(n){e.edit_help=!e.edit_help}}},[e._v(" "+e._s(e.edit_help?"less...":"more..."))]):e._e()],1):e._e(),e.edit_help?t("md",[e._v(e._s(e.child_help_text))]):e._e()],1):e._e(),e.edit_active?t(h,[t(k,{staticClass:"pa-0",attrs:{fluid:""}},[t(C,{attrs:{align:"center"}},[t(w,{staticClass:"d-flex",attrs:{cols:"6",sm:"4"}},[t(o,{attrs:{small:""},on:{click:function(n){return e.$emit("delete")}}},[e._v("Delete panel")])],1),t(w,{staticClass:"d-flex",attrs:{cols:"6",sm:"2"}},[t(o,{attrs:{small:""},on:{click:function(n){return e.$emit("clone")}}},[e._v("Clone")]),t(S,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var s=n.on;return[t(o,e._g({staticClass:"ml-2",attrs:{small:"",icon:""},on:{click:function(a){return e.moveWidget(-1)}}},s),[t(l,[e._v("mdi-arrow-up-bold")])],1)]}}],null,!1,4110266859)},[t("span",[e._v("Move panel towards the top-left of the grid")])]),t(S,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var s=n.on;return[t(o,e._g({attrs:{small:"",icon:""},on:{click:function(a){return e.moveWidget(1)}}},s),[t(l,[e._v("mdi-arrow-down-bold")])],1)]}}],null,!1,171324591)},[t("span",[e._v("Move panel towards the bottom-right of the grid")])])],1),t(w,{staticClass:"d-flex",attrs:{cols:"12",sm:"6",md:"4"}},[t(o,{staticClass:"ml-2",attrs:{small:"",icon:""},on:{click:function(n){return e.adjustRows(-1)}}},[t(l,[e._v("mdi-minus")])],1),t(E,{attrs:{small:""}},[e._v(e._s(e.widget.rows)+" row"+e._s(e.widget.rows>1?"s":""))]),t(o,{attrs:{small:"",icon:""},on:{click:function(n){return e.adjustRows(1)}}},[t(l,[e._v("mdi-plus")])],1),t(o,{staticClass:"ml-2",attrs:{small:"",icon:""},on:{click:function(n){return e.adjustCols(-1)}}},[t(l,[e._v("mdi-minus")])],1),t(E,{attrs:{small:""}},[e._v(e._s(e.widget.cols)+" col"+e._s(e.widget.cols>1?"s":""))]),t(o,{attrs:{small:"",icon:""},on:{click:function(n){return e.adjustCols(1)}}},[t(l,[e._v("mdi-plus")])],1)],1)],1)],1)],1):e._e()],1)],1)],1)},fe=[];const he={name:"PanelEdit",components:{WidgetWrap:T,md:P},inject:["$store","palette"],props:{id:{type:String,required:!0},edit_active:{type:Boolean,default:!1}},data(){return{reposition:!0,edit_help:!1}},created(){console.log("Created panel",this.id);const e=this.$store.widgetByID(this.id);"widgets"in e.static||this.$store.updateWidgetProp(this.id,"static","widgets",[])},computed:{child_help(){const e=this.palette.widgets;if(this.widget.kind in e)return e[this.widget.kind].help},child_help_title(){return this.child_help?this.child_help.replace(/[.\n].*/s,""):null},child_help_text(){return this.child_help?this.child_help.replace(/^.*?[.\n]\s/s,""):null},widgetStyle(){const e=`grid-row-start: span ${this.widget.rows||1}`,i=`grid-column-start: span ${this.widget.cols||1}`;return`${e}; ${i};`},widget(){return this.$store.widgetByID(this.id)}},methods:{toggleEdit(){this.$emit("edit",!this.edit_active)},endEdit(){this.$emit("edit",!1)},handleTitleEdit(e){this.$store.updateWidgetProp(this.id,"static","title",e)},adjustRows(e){let t=(this.widget.rows||1)+e;t<1&&(t=1),t>16&&(t=16),this.$store.updateWidget(this.id,{rows:t}),this.reposition=!1,this.$nextTick(()=>{this.reposition=!0})},adjustCols(e){let t=(this.widget.cols||1)+e;t<1&&(t=1),t>16&&(t=16),this.$store.updateWidget(this.id,{cols:t}),this.reposition=!1,this.$nextTick(()=>{this.reposition=!0})},moveWidget(e){this.$emit("move",e),this.reposition=!1,this.$nextTick(()=>{this.reposition=!0})}}},N={};var I=u(he,de,fe,!1,pe,null,null,null);function pe(e){for(let i in N)this[i]=N[i]}I.options.__file="src/components/panel-edit.vue";var ue=I.exports,x={};Object.defineProperty(x,"__esModule",{value:!0});var j=x.default=void 0,ge=Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"}),_e=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),me=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),ve=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),be=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),$e=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),we=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),ke=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),ye=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),Ce=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),xe=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),je=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),Oe=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),Se=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),Ee=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),We=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),De=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),Fe=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),Te=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),ze=Object.freeze({black:"#000000",white:"#ffffff",transparent:"transparent"}),Me=Object.freeze({red:ge,pink:_e,purple:me,deepPurple:ve,indigo:be,blue:$e,lightBlue:we,cyan:ke,teal:ye,green:Ce,lightGreen:xe,lime:je,yellow:Oe,amber:Se,orange:Ee,deepOrange:We,brown:De,blueGrey:Fe,grey:Te,shades:ze});j=x.default=Me;var Be=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t(c,{staticClass:"mx-3 mb-0 mt-3 rounded-lg",style:{backgroundColor:this.$vuetify.theme.dark?"#424242":"#F5F5F5"},attrs:{flat:""}},[t(d,{staticClass:"ma-0 py-1 px-4"},[e._v(" Color ")]),t(h,{staticClass:"ma-0 pa-0"},[t(Y,{staticClass:"py-3 px-2 ma-0 rounded-xl",style:{backgroundColor:this.$vuetify.theme.dark?"#424242":"#F5F5F5"},attrs:{"hide-inputs":"","hide-canvas":"","hide-sliders":"",mode:"hexa","show-swatches":"","swatches-max-height":"auto",swatches:e.swatches,value:e.value},on:{"update:color":e.changeColor}})],1)],1)},Pe=[];const Ne={name:"ColorPicker",props:{label:{default:null},hint:{default:null},value:{default:"#00BCD4"}},data(){const e=[];for(let i in j){const t=j[i];if("black"in t||t.base=="#9e9e9e")break;i=="shades"?e.push(Object.values(t)):e.push(["lighten3","base","darken3"].map(n=>t[n]))}return{show_picker:!1,swatches:e}},methods:{changeColor(e){e&&e.hexa=="#00000000"?this.$emit("input",""):this.$emit("input",e.hex)}}},J={};var R=u(Ne,Be,Pe,!1,Ie,"5cd67670",null,null);function Ie(e){for(let i in J)this[i]=J[i]}R.options.__file="src/components/color-picker.vue";var Je=R.exports,Re=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticStyle:{display:"content"}},[t(y,{attrs:{dense:"",clearable:"","persistent-hint":"",label:e.label,hint:e.hint,value:e.value},on:{input:function(n){return e.$emit("input",n)}},scopedSlots:e._u([{key:"append-outer",fn:function(){return[t(o,{attrs:{icon:"","x-small":""},on:{click:function(n){e.show_tree=!e.show_tree}}},[t(l,[e._v("mdi-file-tree")])],1)]},proxy:!0}])}),t(Z,{staticClass:"topic-tree",attrs:{dark:!1},model:{value:e.show_tree,callback:function(n){e.show_tree=n},expression:"show_tree"}},[t(c,{staticClass:"d-flex flex-column"},[t(d,{staticClass:"d-flex align-baseline width100 pt-0 pb-0"},[t("span",[e._v(e._s(e.label))]),t($),t(o,{attrs:{elevation:"0",icon:""},on:{click:function(n){e.tree=e.calcTree()}}},[t(l,[e._v("mdi-refresh")])],1),t(o,{attrs:{elevation:"0",icon:""},on:{click:function(n){e.show_tree=!1}}},[t(l,[e._v("mdi-close")])],1)],1),t(ee,{attrs:{dense:"",activatable:"","open-on-click":"",open:e.path,items:e.tree},on:{"update:active":e.treeSelect}})],1)],1)],1)},Ge=[];const qe={name:"TopicTree",props:{label:{default:"path"},hint:{default:""},value:{default:""}},inject:["$store"],data(){return{show_tree:!1,tree:[]}},computed:{path(){if(!this.value)return[];let e=this.value.split("/");e.pop();let i=e.map(()=>e);return i=i.map((t,n)=>t.slice(0,n+1).join("/")),i}},mounted(){this.tree=this.calcTree()},methods:{calcTree(){function e(i,t,n){let s=null;return t=t===null?i:t+"/"+i,n==null?s={name:`${i}: ${n}`,id:t}:Array.isArray(n)?s={name:i,id:t,children:n.sort().map((a,r)=>e(r.toString(),t,a))}:typeof n=="object"?s={name:i,id:t,children:Object.entries(n).sort().map(([a,r])=>e(a,t,r))}:s={name:`${i}: ${n}`,id:t},s}return Object.entries(this.$store.sd).sort().map(([i,t])=>e(i,null,t))},treeSelect(e){this.show_tree=!1,console.log(`treeview ev=${JSON.stringify(e)}`),this.$emit("input",e[0])}}},G={};var q=u(qe,Re,Ge,!1,Ae,null,null,null);function Ae(e){for(let i in G)this[i]=G[i]}q.options.__file="src/components/topic-tree.vue";var Le=q.exports;function He(e){if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var i=document.createElement("textarea");i.textContent=e,i.style.position="fixed",document.body.appendChild(i),i.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(i)}}}var Ve=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"widget-edit",style:e.widgetStyle},[t(te,{attrs:{"disable-resize-watcher":"",color:this.$vuetify.theme.dark?"#212121":"white",right:!e.$vuetify.rtl,clipped:"",app:"","mobile-breakpoint":"960",width:"400"},model:{value:e.edit_active,callback:function(n){e.edit_active=n},expression:"edit_active"}},[e.color?t(c,{staticClass:"pb-3",attrs:{flat:""}},[t(d,{staticClass:"text-h5 font-weight-medium pt-0 pb-2"},[e._v(" Appearance "),t($),t(o,{attrs:{icon:""},on:{click:e.endEdit}},[t(l,[e._v("mdi-close")])],1)],1),t(c,{staticClass:"mx-3 mb-0 mt-3 rounded-lg",style:{backgroundColor:this.$vuetify.theme.dark?"#424242":"#F5F5F5"},attrs:{flat:""}},[t(d,{staticClass:"ma-0 py-2 px-4"},[e._v(" Name ")]),t(h,{staticClass:" ma-0 pa-4"},[t(y,{staticClass:"ma-0 pa-0",attrs:{value:e.widget.static.title,"hide-details":!0},on:{input:function(n){return e.handleEdit("static","title",n)}}})],1)],1),t(c,{staticClass:"mx-3 mb-0 mt-3 rounded-lg",style:{backgroundColor:this.$vuetify.theme.dark?"#424242":"#F5F5F5"},attrs:{flat:""}},[t(d,{staticClass:"ma-0 py-1 px-4"},[e._v(" Order ")]),t(h,{staticClass:"d-inline mx-3 pa-0"},[t(o,{staticClass:"text-body-2 pl-1 pr-2 mx-1 my-4",on:{click:function(n){return e.moveWidget(-1)}}},[t(l,{attrs:{large:""}},[e._v("mdi-arrow-left-bold")]),e._v(" Move To Left ")],1),t(o,{staticClass:"text-body-2 pl-2 pr-1 mx-1 my-4",on:{click:function(n){return e.moveWidget(1)}}},[e._v(" Move To Right "),t(l,{attrs:{large:""}},[e._v("mdi-arrow-right-bold")])],1)],1)],1),e.widget.kind!="traffic-light"?t("color-picker",{attrs:{label:"color",hint:e.prop_info.color.hint,value:e.widget.static.color},on:{input:function(n){return e.handleColorEdit("color",n)}}}):e._e()],1):e.help?t(c,{staticClass:"pb-3",attrs:{flat:"",color:"wight"}},[t(d,{staticClass:"text-h5 font-weight-medium pt-0 pb-2"},[e._v(" Help "),t($),t(o,{attrs:{icon:""},on:{click:e.endEdit}},[t(l,[e._v("mdi-close")])],1)],1),t(c,{staticClass:"mx-3 mb-0 mt-3 rounded-lg",style:{backgroundColor:this.$vuetify.theme.dark?"#424242":"#F5F5F5"},attrs:{flat:""}},[t(d,{staticClass:"ma-0 pb-0 px-4"},[e._v(" What Is "+e._s(e.widget.kind)+" ? ")]),t(h,{staticClass:"d-inline mx-3"},[t("h3",{staticClass:"px-4 ma-0"},[e._v(e._s(e.child_help_text))])])],1)],1):e.edit?t(c,{staticClass:"pb-3",attrs:{color:"wight",flat:""}},[t(d,{staticClass:"text-h5 font-weight-medium pt-0 pb-2"},[e._v(" Edit "),t($),t(o,{attrs:{icon:""},on:{click:e.endEdit}},[t(l,[e._v("mdi-close")])],1)],1),Object.keys(this.child_props).includes("inputs")?t(c,{staticClass:"mx-3 mb-0 mt-3 rounded-lg",style:{backgroundColor:this.$vuetify.theme.dark?"#424242":"#F5F5F5"},attrs:{flat:""}},[t(d,{staticClass:"ma-0 py-1 px-4"},[e._v(" Inputs ")]),t(h,{staticClass:" ma-0 pa-4"},[t(k,{staticClass:"ma-0 pa-1 mt-3"},[t(C,{attrs:{align:"center"}},e._l(this.child_props.inputs.value,function(n){return t(w,{key:n,staticClass:"d-flex",attrs:{cols:"6"}},[t(W,{staticClass:"ma-0 pa-0",attrs:{clearable:"",dense:"","persistent-hint":"",label:n,hint:"will add later",items:e.sd_keys,value:e.widget.dynamic[n]},on:{input:function(s){return e.handleEdit("dynamic",n,s)}}})],1)}),1)],1)],1)],1):e._e(),Object.keys(this.child_props).includes("outputs")?t(c,{staticClass:"mx-3 mb-0 mt-3 rounded-lg",style:{backgroundColor:this.$vuetify.theme.dark?"#424242":"#F5F5F5"},attrs:{flat:""}},[t(d,{staticClass:"ma-0 py-1 px-4"},[e._v(" Outputs ")]),t(h,{staticClass:" ma-0 pa-4"},[t(k,{staticClass:"ma-0 pa-1 mt-3"},[t(C,{attrs:{align:"center"}},e._l(this.child_props.outputs.value,function(n){return t(w,{key:n,staticClass:"d-flex",attrs:{cols:"6"}},[t(W,{staticClass:"ma-0 pa-0",attrs:{clearable:"",dense:"","persistent-hint":"",hint:"will add later",label:n,items:e.sd_keys,value:e.widget.static[n]},on:{input:function(s){return e.handleEdit("static",n,s)}}})],1)}),1)],1)],1)],1):e._e()],1):e._e()],1),t("widget-wrap",{attrs:{config:e.widget,no_border:e.no_border,color:e.selected},on:{edit:e.toggleEdit,delete:function(n){return e.$emit("delete")},clone:function(n){return e.$emit("clone")},help:e.toggleHelp,color:e.toggleColor}})],1)},Ue=[];const Xe={name:"WidgetEdit",components:{WidgetWrap:T,md:P,ColorPicker:Je,TopicTree:Le},inject:["$store","palette"],props:{id:{type:String,required:!0},edit_active:{type:Boolean,default:!1},no_border:{type:Boolean,default:!1}},data(){return{prop_static:{},sd_keys:[],reposition:!0,edit:!1,color:!1,help:!1,child_props:{},prop_info:{},output_tip:"",dialog:!1,dialog_prop:null}},created(){const e=JSON.parse(JSON.stringify(this.$store.widgetByID(this.id)));let i=!1;e.static===void 0&&(e.static={},i=!0),e.dynamic===void 0&&(e.dynamic={},i=!0);let t={};const n=this.palette.widgets;e.kind in n&&(t=n[e.kind].props||{});const s={String:"mdi-format-quote-close",Number:"mdi-numeric",Boolean:"mdi-yin-yang",Array:"mdi-code-brackets",Object:"mdi-code-braces"};let a={};for(let r in t){let f=t[r].type||String;[String,Number,Boolean,Array,Object].includes(f)||(f=String);let p=t[r].tip||f.name,g=t[r].default;typeof g=="function"&&(g=g()),g!==void 0&&(p+=`, default: ${g}`);let U=s[f.name];a[r]={type:f,default:g,validator:t[r].validator,hint:p,icon:U,dynamic:t[r].dynamic}}for(const r in a)a[r].dynamic&&!(r in e.dynamic)&&!(r in e.static)&&(e.dynamic[r]=a[r].dynamic,i=!0);if(e.kind in n&&n[e.kind].output){const r=n[e.kind].output;typeof r=="string"?"output"in e||(e.output=r):("output"in e||(e.output=n[e.kind].output.default||null),n[e.kind].output.tip&&(this.output_tip+=", "+n[e.kind].output.tip))}e.output_hint&&(e.output_hint=null,i=!0),i&&this.$store.updateWidget(this.id,e),this.child_props=t,this.prop_info=a,this.edit_active&&this.propStatic()},computed:{child_help(){const e=this.palette.widgets;if(this.widget.kind in e)return e[this.widget.kind].help},child_help_title(){return this.child_help?this.child_help.replace(/[.\n].*/s,""):null},child_help_text(){return this.child_help?this.child_help.replace(/^.*?[.\n]\s/s,""):null},selected(){return this.edit_active?this.$vuetify.theme.dark?"cyan darken-4":"cyan lighten-5":this.$vuetify.theme.dark?"grey darken-4":"wight"},widgetStyle(){const e=`grid-row-start: span ${this.widget.rows||1}`,i=`grid-column-start: span ${this.widget.cols||1}`;return`${e}; ${i};`},widget(){return this.$store.widgetByID(this.id)}},watch:{edit_active(e){e&&(this.propStatic(),this.sd_keys=Object.keys(this.$store.sd)),console.log("in")}},methods:{propStatic(){this.prop_static=Object.fromEntries(Object.keys(this.child_props).map(e=>[e,e in this.widget.dynamic?0:1]))},propVal(e){return this.widget.static[e]!==void 0?this.widget.static[e]:this.prop_info[e].default},toggleStatic(e,i){this.prop_static[e]=i,i&&(this.widget.dynamic[e]=void 0)},toggleEdit(){this.$emit("edit",!1),this.$emit("edit",!0),this.edit=!0,this.help=!1,this.color=!1},toggleHelp(){this.$emit("edit",!1),this.$emit("edit",!0),this.help=!0,this.edit=!1,this.color=!1},toggleColor(){this.$emit("edit",!1),this.$emit("edit",!0),this.color=!0,this.help=!1,this.edit=!1},endEdit(){this.$emit("edit",!1),this.help=!1,this.color=!1,this.edit=!1},handleEdit(e,i,t){if(console.log(this.widget),e in this.widget){if(i!="title"){if(!(i in this.child_props))return;if(console.log("edit:",e,i,t),e=="static"){const n=this.child_props[i].type;if(n===Number&&typeof t=="string")t=Number.parseFloat(t);else if(n===Array||n===Object)try{t=JSON.parse(t)}catch{return}}}this.$store.updateWidgetProp(this.id,e,i,t)}},handleColorEdit(e,i){(i==""||i=="#FF0000")&&(i="#00838F"),this.handleEdit("static",e,i)},handleEditOutput(e,i){console.log(this.widget);let t={};t[`outputs/${e}`]=i,console.log("edit: output:",i),this.$store.updateWidget(this.id,t)},validateArray(e){let i;try{i=JSON.parse(e)}catch(t){return t.toString().replace(/^.*?parse:/,"")}return Array.isArray(i)?!0:"array required"},validateObject(e){let i;try{i=JSON.parse(e)}catch(t){return t.toString().replace(/^.*?parse:/,"")}return typeof i!="object"?"object required":!0},popupTextField(e){this.dialog?this.dialog=!1:(this.dialog_prop=e,this.dialog=!0)},adjustRows(e){let t=(this.widget.rows||1)+e;t<1&&(t=1),t>16&&(t=16),this.$store.updateWidget(this.id,{rows:t}),this.reposition=!1,this.$nextTick(()=>{this.reposition=!0})},adjustCols(e){let t=(this.widget.cols||1)+e;t<1&&(t=1),t>16&&(t=16),this.$store.updateWidget(this.id,{cols:t}),this.reposition=!1,this.$nextTick(()=>{this.reposition=!0})},moveWidget(e){this.$emit("move",e),this.reposition=!1,this.$nextTick(()=>{this.reposition=!0})},copyWidget(e){He(JSON.stringify(this.$store.widgetByID(this.id)))}}},A={};var L=u(Xe,Ve,Ue,!1,Ke,null,null,null);function Ke(e){for(let i in A)this[i]=A[i]}L.options.__file="src/components/widget-edit.vue";var Qe=L.exports,Ye=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"u-tooltip-attach"},[t("widget-menu",{attrs:{drawer:e.drawer},on:{select:e.addWidget}}),e.rolledup?e._e():t(k,{staticClass:"g-grid-small py-5 ",attrs:{fluid:""}},[e.webcam?t(c,{style:e.webcamcardstyle},[t(d,[t("span",{staticClass:"mx-auto"},[e._v("FPGA board Webcam")])]),t(h,[t("video",{ref:"camera",style:e.webcamstyle,attrs:{width:"100%",height:"auto",autoplay:""}})])],1):e._e(),e._l(e.grid.widgets,function(n,s){return t(e.editComponent[n],{key:n,tag:"component",attrs:{id:n,edit_active:s==e.edit_ix},on:{edit:function(a){return e.toggleEdit(s,a)},move:function(a){return e.moveWidget(s,a)},delete:function(a){return e.deleteWidget(s)},clone:function(a){return e.cloneWidget(s)}}})})],2)],1)},Ze=[];const et={name:"FixedGrid",components:{PanelEdit:ue,WidgetEdit:Qe,WidgetMenu:K},inject:["$store","$config","palette"],props:{id:{type:String},drawer:{default:!1},webcam:{default:!0},leftDrawer:{default:!1}},data(){return{edit_ix:null,rolledup:!1,pasting:!1}},computed:{webcamcardstyle(){let e=this.$vuetify.breakpoint.xs?" grid-column: span 5; grid-row: span 5;":" grid-column: span 5; grid-row: span 6;",i=this.$vuetify.theme.dark?" background-color: #212121;":" background-color: #ffffff;";return e+i},webcamstyle(){return this.$vuetify.breakpoint.xs?"max-height: 300px;":"max-height: 440px;"},grid(){return this.$store.gridByID(this.id)},rollupMini(){return!this.$root.editMode&&!this.grid.title},rollupMaxi(){return!this.$root.editMode&&this.grid.title},rollerClasses(){const e=this.grid.widgets.length>0&&!this.rolledup&&"roller__minimal";return["d-flex","roller",e]},editComponent(){return Object.fromEntries(this.grid.widgets.map(e=>[e,this.$store.widgetByID(e).kind.endsWith("Panel")?"PanelEdit":"WidgetEdit"]))}},watch:{pasting(e){e?(this.$refs.pasteDiv.addEventListener("paste",this.pasteWidget),this.$nextTick(()=>this.$refs.pasteDiv.firstChild.focus())):this.$refs.pasteDiv.removeEventListener("paste",this.pasteWidget)},leftDrawer(e){e&&(this.edit_ix=null)},webcam(e){let i=this.$refs;e?navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){i.camera.srcObject=t}).catch(function(t){console.log(t)}):i.camera.srcObject=null}},methods:{toggleEdit(e,i){this.$emit("dialog",!1),this.edit_ix=i?e:null},addWidget(e){this.$store.addWidget(this.id,e)},deleteWidget(e){this.$store.deleteWidget(this.id,e),this.edit_ix=null},cloneWidget(e){const i=this.$store.widgetByID(this.$store.widgetIDByIX(this.grid,e)),t=this.$store.addWidget(this.id,i.kind),n=this.$store.widgetIDByIX(this.grid,t),s=JSON.parse(JSON.stringify(i));if(delete s.id,this.$store.updateWidget(n,s),t!=e+1){let a=[...this.grid.widgets];a.copyWithin(e+2,e+1),a[e+1]=n,this.$store.updateGrid(this.id,{widgets:a})}this.edit_ix=e+1},moveWidget(e,i){if(console.log(`Moving widget #${e} by ${i}`),!(e+i>=0&&e+i<this.grid.widgets.length))return;let t=[...this.grid.widgets],n=t[e];t[e]=t[e+i],t[e+i]=n,this.$store.updateGrid(this.id,{widgets:t}),this.edit_ix+=i},pasteWidget(e){e.stopPropagation(),e.preventDefault();let t=(e.clipboardData||window.clipboardData).getData("Text");this.pasting=!1,console.log(t);try{let n=JSON.parse(t);if("id"in n&&"kind"in n)if(n.kind in this.palette.widgets){const s=this.$store.addWidget(this.id,n.kind);delete n.id,delete n.kind,this.$store.updateWidget(this.$store.widgetIDByIX(this.grid,s),n)}else console.log(`Widget kind '${n.kind}' not found`)}catch(n){console.log(n)}},clearPasteDiv(){this.$refs.pasteDiv.firstChild.innerHTML=""},toggleRoll(){this.rolledup=!this.rolledup},changeTitle(e){this.$store.updateGrid(this.id,{title:e})}}},H={};var V=u(et,Ye,Ze,!1,tt,"41779aa8",null,null);function tt(e){for(let i in H)this[i]=H[i]}V.options.__file="src/grids/fixed-grid.vue";var rt=V.exports;export{rt as default};