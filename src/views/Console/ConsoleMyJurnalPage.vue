<script>
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import axios from 'axios'
import {onMounted, ref} from 'vue'

export default{
    setup(){
      let jurnal = ref([]);

      onMounted(() => {
        //  get data from api endpoint
        // axios.defaults.baseURL = 'https://api.jourid.aldrico.com/v1/'

        axios.get('/journals')
        .then((result) => {
          console.log(result);
            jurnal.value = result.data
        }).catch((err) => {
            console.log(err.response)
        });
      });

      return{
        jurnal
      }
    }
}
</script>

<template>
  <console-title>Jurnal Saya</console-title>
  <p></p>
</template>
