<!-- Stat - Status widget that can display a numeric or text value in a color.
     A unit string can optionally be appended and is rendered as a superscript.
     Copyright ©2021 Thorsten von Eicken, MIT license, see LICENSE file
-->
<template>
  <!-- The widget title is rendered by the wrapper, we only render the value. Perhaps confusingly
       the title is rendered as v-card-text while the value is rendered here as v-card-title,
       that's so the value is more prominent than the title... ma-auto applies auto margins all
       around, which centers the value. -->
  <v-card-title class="headline pa-0 flex-grow-1">
    <span class="ma-auto" :style="statStyle">
    <v-container  style="height: 100%; width: 100%;" >
    <v-row no-gutters >
        <v-btn 
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(1,1)"
        >
          1
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(1,2)"
        >
          2
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(1,3)"
        >
          3
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed(1,4)"
        >
          A
        </v-btn>
    </v-row>
    <v-row no-gutters>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(2,1)"
        >
          4
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(2,2)"
        >
          5
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(2,3)"
        >
          6
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed(2,4)"
        >
          B
        </v-btn>
    </v-row>
    <v-row no-gutters>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(3,1)"
        >
          7
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(3,2)"
        >
          8
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(3,3)"
        >
          9
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed(3,4)"
        >
          C
        </v-btn>
    </v-row>
    <v-row no-gutters>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed(4,1)"
        >
          *
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(4,2)"
        >
          0
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed(4,3)"
        >
          #
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed(4,4)"
        >
          D
        </v-btn>
    </v-row>
  </v-container>
    </span>
  </v-card-title>
</template>

<style scoped>
.unit { vertical-align: 15%; margin-left: 0.1em; }
</style>

<script scoped>
export default {
  name: 'hex-keypad',
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
    color: { type: String, default: "grey darken-1", tip: "value color, null->text color" }
  },



  methods: {

    keyPressed(row, col) {
      console.log('pin R'+ row + ' & pin C' + col)
    }
  }

}
</script>
