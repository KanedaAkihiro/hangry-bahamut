<template>
  <v-row>
    <!-- 自分のカード -->
    <v-col cols="10">
      <v-card class="my-hands" color="grey-lighten-3">
        <v-card-title class="my-hands-title">【相手の手札】</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.my-hands {
  margin-top: 5px;
  height: 110px
}

.my-hands-title {
  color: black;
  text-align: left;
  font-weight: bold;
}
</style>
