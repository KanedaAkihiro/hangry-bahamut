<template>
  <v-container class="PlayGame">
    <!-- 相手のカードゾーン -->
    <EnemyHands></EnemyHands>
    <v-card class="enemy-card-body" color="red-lighten-3">
      <v-card-title class="enemy-card-title">相手のクリーチャー</v-card-title>
    </v-card>
    <v-row>
      <!-- 自分のカードゾーン -->
      <v-col cols="10">
        <v-card class="my-card-body" color="green-lighten-3">
          <v-card-title class="my-card-title">自分のクリーチャー</v-card-title>
        </v-card>
      </v-col>
      <!-- マージンの設定方法↓便利だから覚える！ -->
      <v-col class="mt-4">
        <Deck></Deck>
      </v-col>
      <v-col class="mt-4">
        <Discard></Discard>
      </v-col>
    </v-row>
    <!-- 手札・自分の打消しチップ・自分のライフ -->
    <MyHands></MyHands>
  </v-container>
</template>

<script>
import Deck from './Deck.vue'
import Discard from './Discard.vue'
import MyHands from './MyHands.vue'
import EnemyHands from './EnemyHands.vue'
/* eslint-disable */
export default {
  components: {
    Deck,
    Discard,
    EnemyHands,
    MyHands
  },
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
.enemy-card-title {
  color: rgb(255, 255, 255);
  /* 左下に要素を配置する */
  position: absolute;
  bottom: 0;
  left: 0;
  /* 要素を180度回転させる */
  transform: rotate(180deg);
}

.enemy-card-body {
  margin-top: 15px;
  height: 250px;
}

.my-card-body {
  margin-top: 15px;
  height: 250px
}

.my-card-title {
  color: rgb(255, 255, 255);
  text-align: left;
}
</style>