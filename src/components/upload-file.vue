<template>
            <v-btn large icon class="mx-3">
                <div style="margin-left: 0.6rem"></div>
                  <v-file-input accept="image/*" hide-input @change="selectFile" prepend-icon="mdi-upload" ></v-file-input>
            </v-btn>
</template>

<script>

export default {
  name: 'Dash',
  inject: [ '$store' ],
  data: () => ({
      filename: ''
  }),

  methods: {
      selectFile(file) {
          this.filename = file.name
          console.log(file)
          this.$root.serverSendFile('file', file)      
      }
  }
}

</script>
