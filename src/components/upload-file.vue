<template>
      <v-navigation-drawer disable-resize-watcher :color="this.$vuetify.theme.dark ? '#212121' : 'white'" :right="!$vuetify.rtl" v-model="uploadDrawer" clipped app mobile-breakpoint="960" width="400" >

            <!-- <v-dialog width="45rem" v-model="dialog"> -->
                <v-card flat >
                    <v-card-title class="d-flex text-h5">
                    <span>Send File To FPGA</span>
                    <v-spacer></v-spacer>
                    <v-btn elevation=0 icon @click="$emit('dialog',false)">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <span>here you can upload your executable or bit files to the board</span>
                        <v-card flat >
                            <v-card-title>BIT File</v-card-title>
                            <v-card-text class="d-flex justify-space-between pb-0">
                                <v-file-input dense :error="biterr" outlined accept=".bit/.bin" @change="selectbit"  ></v-file-input>
                                <v-btn @click="sendbit()" color="cyan darken-1" dark class="py-5 px-5 mx-2">SEND</v-btn>
                            </v-card-text>
                        </v-card>
                         <v-card flat >
                            <v-card-title>Executable  File</v-card-title>
                            <v-card-text class="d-flex">
                                <v-file-input dense :error="exeerr" outlined  @change="selectexe"  ></v-file-input>
                                <v-btn @click="sendexe()" color="cyan darken-1" dark class=" py-5 px-5 mx-2">SEND</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-card-text>
                </v-card>
            <!-- </v-dialog> -->
      </v-navigation-drawer>
</template>
<!-- <div style="margin-left: 0.6rem"></div> -->
                  <!-- <v-file-input accept="image/*" hide-input @change="selectFile" prepend-icon="mdi-upload" ></v-file-input> -->
        
<script>

export default {
  name: 'Dash',
  inject: [ '$store' ],
  props: ['uploadDrawer'],
  data: () => ({
      exefile: '',
      bitfile: '',
      exeerr: false,
      biterr: false,
  }),

//   computed: {
//       dialog: {
//           get() {
//               return this.uploadDrawer
//           },
//           set(val) {
//           }
//       }
//   },

  methods: {
      selectbit(file) {
          this.biterr = false
          this.bitfile = file
          console.log(file)
          this.$root.serverSendFile('bit', file)      
      },

      selectexe(file) {
          this.exeerr = false
          this.exefile = file
          console.log(file)      
      },

      sendbit() {
          if(this.bitfile) this.$root.serverSendFile('bit', this.bitfile)
          else this.biterr = true
      },

      sendexe() {
          if(this.exefile) this.$root.serverSendFile('exe', this.exefile)
          else this.exeerr = true
      }
  }
}

</script>
