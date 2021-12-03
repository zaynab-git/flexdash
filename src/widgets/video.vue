<!-- Stat - Status widget that can display a numeric or text value in a color.
     A unit string can optionally be appended and is rendered as a superscript.
     Copyright ©2021 Thorsten von Eicken, MIT license, see LICENSE file
-->
<template>
  <video height="380px" ref="camera" autoplay ></video>
</template>

<script scoped>
export default {
  name: 'myvideo',
  icon: 'mdi-video',
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

  mounted() {
    let refs = this.$refs
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            refs.camera.srcObject = stream;
          })
          .catch(function (error) {
            console.log(error);
          });
  },
}
</script>
