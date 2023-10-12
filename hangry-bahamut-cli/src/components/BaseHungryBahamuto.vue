<template>
  <v-container class="hello">
    <v-row>
      <v-col v-for="n in 12" :key="n" cols="2">
        <div>
          <img src="@/assets/cardList/01.harapekobahamuto.png.png" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      imgSrc: require('@/assets/cardList/01.harapekobahamuto.png.png')
    }
  }
}
</script>
