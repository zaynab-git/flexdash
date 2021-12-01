<!-- Stat - Status widget that can display a numeric or text value in a color.
     A unit string can optionally be appended and is rendered as a superscript.
     Copyright ©2021 Thorsten von Eicken, MIT license, see LICENSE file
-->
<template>
  <!-- The widget title is rendered by the wrapper, we only render the value. Perhaps confusingly
       the title is rendered as v-card-text while the value is rendered here as v-card-title,
       that's so the value is more prominent than the title... ma-auto applies auto margins all
       around, which centers the value. -->
       
  <v-card-title class=" pa-0 ma-0 " > 
      <!-- <v-icon :color="state">mdi-adjust</v-icon> -->
      <v-icon style="margin-top: -5px;" size="45px" :color="(state ? color : 'grey')" > {{ (state ? 'mdi-led-on' : 'mdi-led-variant-off') }}</v-icon>

  </v-card-title>
</template>

<script scoped>
export default {
  name: 'LED',
  icon: 'mdi-led-variant-on',
  // help displayed in the UI: the first line is used in the widgets menu and is always shown in
  // the edit card. Successive lines can be expanded in the card and are markdown-formatted.
  help: `Display colored numeric or text status value.
The Stat widget displays a colored centered numerical or text value. Optionally a unit string
can be appended and is rendered as a superscript. THree colors can be defined: low, normal, high.
The low-color is displayed if the value is below the low-threshold, the high-color if it's above
the high-threshold. For string values low and high colors are selected using regexps.`,

  // properties are inputs to the widget, these can be set to static values or bound to dynamic
  // data by topic in the FlexDash UI. The type is used to display the appropriate kind of input
  // field and also to convert data (ex: string to number). Dynamic is used to bind an input
  // to a data topic right when the widget is created so it animates tight off the bat.
  props: {
    inputs: { type: Object, value: ["pin VDC", "pin GND"]},
    "pin VDC": { default: "", dynamic: "GND" },
    "pin GND": { default: "", dynamic: "GND" },
    color: { default: "red" }
  },

  computed: {
    state() {
      if (this.$props['pin GND'] == 'OFF' && this.$props['pin VDC'] == 'ON') {
        return true;
      }
      return false
    }
  }    
}
</script>

<style scoped>
.unit { vertical-align: 15%; margin-left: 0.1em; }
</style>
