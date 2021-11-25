<!-- PushButton - Simple button that sends a message when clicked
     Copyright ©2021 Thorsten von Eicken, MIT license, see LICENSE file
-->
<template>
  <div class="pushbutton d-flex align-center justify-center mt-1">
    
    <v-btn-toggle> 
      <v-btn input-value="press" @click="clickEv($event)" depressed small :color="this.color">
      <span class="white--text">{{ (press ? 'pressed' : 'unpressed') }}</span>
    </v-btn>
    <!-- <v-btn large dense class="ma-auto" max-width="95%"
               v-bind="Object.assign(bindings, attrs)" v-on="on" @click="clickEv($event)">
          <v-icon :large="!title"  v-if="icon">mdi-{{icon}}</v-icon> <span>{{ title }}</span>
    </v-btn> -->
    </v-btn-toggle>
  </div>
</template>

<script scoped>
export default {
  name: 'push-button',

  help: `Button to send an event.
Pressing the button sends a message with a specified payload to a topic.
The button may contain an icon and/or a title string and is centered in the widget.`,

  props: {
    inputs: { type: Object, value: ["pin VCD", " pin GND"]},
    "pin VDC": { default: "", dynamic: "GND" },
    "pin GND": { default: "", dynamic: "GND" },
    outputs: { type: Object, value: ["output"]},
    color: { default: "primary" }
  },


  data() { return {
      press: false,
    }
  },

  methods: {
    clickEv(ev) {
      this.press = !this.press
      console.log("PushButton event:", (this.press ? 'ON' : 'OFF'))
      this.$emit('send', (this.press ? 'ON' : 'OFF'))
    },
  },

}
</script>
