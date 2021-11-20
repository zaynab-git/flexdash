<!-- ColorPicker - Color picker used when editing widget properties.
     Can show material-design colors, 20-distinct colors, and arbitrary colors.
     Copyright ©2021 Thorsten von Eicken, MIT license, see LICENSE file
-->

<template>
  <div style="display: content;">
    <!-- <v-text-field dense :label="label" :hint="hint" :value="value"
                  @input="$emit('input',$event.hex)">
      <template v-slot:append-outer>
        <v-btn icon x-small @click="show_picker=!show_picker">
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </template>
    </v-text-field> -->
    
      <v-card elevation="1" shaped outlined>
        <v-card-title >
          color
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-0 ma-0">
          <v-color-picker hide-inputs hide-canvas hide-sliders mode="hexa" show-swatches swatches-max-height="auto"
                        :swatches="swatches" :value="value" @update:color="changeColor">
          </v-color-picker>
        </v-card-text>
        
      </v-card>
    
  </div>
</template>

<style scoped>
.v-overlay__content { width: 95%; max-width: 500px;  }
.v-card {  width: 100%; padding: 0px; margin: 0px; padding-bottom: 1rem;}
.v-color-picker {
  padding: 0px; margin: 0px;
  flex-grow: 1;  min-height: 0px;
  display: flex; flex-direction: column; margin: auto;
}
.v-color-picker .v-sheet {min-width: 350px;}
.v-color-picker__edit { margin-top: 0px; padding-top: 0px; }
.v-color-picker__controls { padding: 0px;  margin: 0px;}
.v-color-picker__input > input { margin-bottom: 0px; }
.v-color-picker__swatches { min-height: 0px; max-height: 90% !important; padding: 0px; margin: 0px;}
</style>

<script scoped>
import md_colors from 'vuetify/es5/util/colors.js'

export default {
  name: "ColorPicker",

  props: {
    label: { default: null },
    hint: { default: null },
    value: { default: null },
  },

  data() {
    const swatches = []
    for (let c in md_colors) {
      const color = md_colors[c]
      if (c == 'shades') {
        swatches.push( Object.values(color) )
      } else {
        swatches.push( ['lighten3', 'base', 'darken3'].map(l => color[l]) )
      }
    }
    swatches[swatches.length-1][2] = '#00000000' // transparent -> text color

    return {
      show_picker: false,
      swatches,
    }
  },

  methods: {
    changeColor(c) {
      if (c && c.hexa == "#00000000") {
        this.$emit('input', "") // gives us text color with theme support
      } else {
        this.$emit('input', c.hex)
      }
    },
  },

}
</script>
