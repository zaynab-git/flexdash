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
    <v-container  style="height: 100%; width: 100%;" >
    <v-row no-gutters >
        <v-btn 
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(1)"
        >
          1
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(2)"
        >
          2
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(3)"
        >
          3
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed('A')"
        >
          A
        </v-btn>
    </v-row>
    <v-row no-gutters>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(4)"
        >
          4
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(5)"
        >
          5
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(6)"
        >
          6
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed('B')"
        >
          B
        </v-btn>
    </v-row>
    <v-row no-gutters>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(7)"
        >
          7
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(8)"
        >
          8
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(9)"
        >
          9
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed('C')"
        >
          C
        </v-btn>
    </v-row>
    <v-row no-gutters>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed('*')"
        >
          *
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          style="filter: brightness(1.5);"
          @click="keyPressed(0)"
        >
          0
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed('#')"
        >
          #
        </v-btn>
        <v-btn
          class="px-1 py-8 text-h5 ma-1"
          :color="color"
          @click="keyPressed('D')"
        >
          D
        </v-btn>
    </v-row>
  </v-container>
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
    "pin C1": { default: "", dynamic: "GND" },
    "pin C2": { default: "", dynamic: "GND" },
    "pin C3": { default: "", dynamic: "GND" },
    "pin C4": { default: "", dynamic: "GND" },
    "pin R1": { default: "", dynamic: "GND" },
    "pin R2": { default: "", dynamic: "GND" },
    "pin R3": { default: "", dynamic: "GND" },
    "pin R4": { default: "", dynamic: "GND" },

    color: { type: String, default: "grey darken-1", tip: "value color, null->text color" }
  },



  methods: {
    keyPressed(k) {
      let key = this.key(k)
      if (key != '') {
        console.log("hex keypad event:" + key)
        this.$emit('send', key)
      }
    },

    key(k) {
      switch(k) {
        case 1:
          if (this.$props["pin C1"] == 'ON' && this.$props["pin R1"] == 'ON') return k;
          break;
        case 2:
          if (this.$props["pin C2"] == 'ON' && this.$props["pin R1"] == 'ON') return k;
          break;
        case 3:
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R1"] == 'ON') return k;
          break;
        case 'A':
          if (this.$props["pin C4"] == 'ON' && this.$props["pin R1"] == 'ON') return k;
          break;
        case 4:
          if (this.$props["pin C1"] == 'ON' && this.$props["pin R2"] == 'ON') return k;
          break;
        case 5:
          if (this.$props["pin C2"] == 'ON' && this.$props["pin R2"] == 'ON') return k;
          break;
        case 6:
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R2"] == 'ON') return k;
          break;
        case 'B':
          if (this.$props["pin C4"] == 'ON' && this.$props["pin R2"] == 'ON') return k;
          break;
        case 7:
          if (this.$props["pin C1"] == 'ON' && this.$props["pin R3"] == 'ON') return k;
          break;
        case 8:
          if (this.$props["pin C2"] == 'ON' && this.$props["pin R3"] == 'ON') return k;
          break;
        case 9:
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R3"] == 'ON') return k;
          break;
        case 'C':
          if (this.$props["pin C4"] == 'ON' && this.$props["pin R3"] == 'ON') return k;
          break;
        case 7:
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R4"] == 'ON') return k;
          break;
        case 8:
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R4"] == 'ON') return k;
          break;
        case 9:
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R4"] == 'ON') return k;
          break;
        case '*':
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R4"] == 'ON') return k;
          break;
        case 0:
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R1"] == 'ON') return k;
          break;
        case '#':
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R2"] == 'ON') return k;
          break;
        case 'D':
          if (this.$props["pin C3"] == 'ON' && this.$props["pin R3"] == 'ON') return k;
          break;
      }
      return ''
    }
  }

}
</script>
