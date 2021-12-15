import{D as n}from"./vuetify.8dd84506.js";import{n as i}from"./index.e6a850f4.js";import"./vue.87a98c28.js";import"./vue3-sfc-loader.a7c67584.js";var u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"d-flex"},[o(n,e._b({staticClass:"ma-auto",on:{change:function(a){return e.change(a)}}},"v-switch",e.bindings,!1))],1)},r=[];const c={name:"Toggle",icon:"mdi-toggle-switch",help:`Simple on/off toggle switch.
Sends a pre-determined value when toggled on or off. The current state can be set via the
value input: the toggle will be "on" if the value is equal to the "on_value" input.`,props:{outputs:{type:Object,value:["output"]},output:{default:"",static:""},color:{type:String,default:"#00BCD4"}},data(){return{val:0,show_value:!0,off_value:"OFF",on_value:"ON",enabled:!0}},computed:{bindings(){return{inputValue:this.val,disabled:!this.enabled,color:this.color,trueValue:this.on_value,falseValue:this.off_value,label:this.show_value?this.label:void 0}},label(){return`${this.val==this.on_value?this.on_value:this.off_value}`}},methods:{change(e){console.log(this.$props),this.$emit("send",{title:this.$props.output.toString(),value:e}),console.log(e),this.val=e}}},l={};var s=i(c,u,r,!1,v,null,null,null);function v(e){for(let t in l)this[t]=l[t]}s.options.__file="src/widgets/toggle.vue";var g=s.exports;export{g as default};
