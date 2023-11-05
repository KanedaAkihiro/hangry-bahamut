<template>
  <v-container class="PlayGame">
    <v-card class="enemy-card-body" color="red-lighten-3">
      <v-card-title class="enemy-card-title">相手のカード</v-card-title>
    </v-card>
    <v-card class="my-card-body" color="green-lighten-3">
      <v-card-title class="my-card-title">自分のカード</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      deck: [],
      myHands: [], // 手札は5枚→初期表示時のcreatedでランダムでカードを取得して格納するので空のリストを定義しておく
      enemyHands: []
    }
  },
  created() {
    // this.getDeckCard();
  },
  methods: {
  }
}
</script>


<style>
.enemy-card-body {
  height: 500px
}

.enemy-card-title {
  color: rgb(255, 255, 255);
  /* 左下に要素を配置する */
  position: absolute;
  bottom: 0;
  left: 0;
  /* 要素を180度回転させる */
  transform: rotate(180deg);
}

.my-card-body {
  margin-top: 15px;
  height: 500px
}

.my-card-title {
  color: rgb(255, 255, 255);
  text-align: left;
}
</style>