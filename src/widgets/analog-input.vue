<!-- Toggle - Simple switch/toggle widget that can show the state of a toggle and/or let
     the user change a value.
     Note that this is called toggle instead of switch 'cause switch is an html element
     and causes a conflict.
     Copyright ©2021 Thorsten von Eicken, MIT license, see LICENSE file
-->
<template>
    <v-card-text  class="pa-3">
          <v-slider
              v-model="slider"
              max= 255
              min= 0
              track-color="gery"
              :color="color"
              hide-details
              @end='change($event)'
            >
              <template v-slot:append>
                <v-text-field
                @input="change($event)"
                  v-model="slider"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 50px"
                ></v-text-field>
              </template>
            </v-slider>   
    </v-card-text>  
</template>

<script scoped>
export default {
  name: 'analog-input',

  help: `Simple on/off toggle switch.
Sends a pre-determined value when toggled on or off. The current state can be set via the
value input: the toggle will be "on" if the value is equal to the "on_value" input.`,

  props: {
    outputs: { type: Object, value: ["value"]},
    color: { type: String, default: "primary" },
  },


  data() { return {
    off_value: 'OFF',
    on_value: 'ON',
    slider: 0,
  }},

  methods: {
    // change from v-switch is only emitted when the user toggles, not when input value changes
    change(ev) {
      console.log("toggle event:", ev)
      this.$emit('send', ev)
    },
  },

}
</script>
