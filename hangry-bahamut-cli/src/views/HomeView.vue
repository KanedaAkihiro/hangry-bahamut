<template>
  <div class="home">
    <v-img :src="require('@/assets/haraPecoMain.png')" />
    <PlayButton mt="100px"></PlayButton>
  </div>
</template>

<script>

import PlayButton from '@/components/PlayButton.vue'

export default {
  name: 'HomeView',
  components: {
    /* eslint-disable */
    PlayButton
  }
}
</script>

<style>
.PlayButton {
  left: 20px;
  /* 左から20px */
}
</style>