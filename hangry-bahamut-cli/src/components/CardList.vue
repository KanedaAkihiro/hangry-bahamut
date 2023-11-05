<template>
  <v-container class="cardType">
    <v-row>
      <!-- img変数を作成し、imgListないの画像目（文字列）を格納し繰り返し表示 -->
      <v-col v-for="img in imgList" :key="img" cols="2">
        <v-card>
          <!--
        ・'@/assets/'という文字列＋img(カード名)+'.png'という文字列を結合し、requireでアセット内のリソースに該当のパスと合致した画像を要求
        ・つまリ表示させたい「パスを作成」→requireでアセットに要求→V-forで取得したパスの画像を繰り返し表示
        -->
          <v-img :src="require('@/assets/' + img + '.png')" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      imgList: [
        '01.harapekobahamuto',
        '02.kodomobahamuto',
        '03.hanekaesigoburin',
        '04.soratobunaihu',
        '05.owaka-re',
        '06.ideyoshi',
        '07.yomigae-ru',
        '08.irekae-ru',
        '09.kuronekonoshippo',
        '10.ginnekonoshippo',
        '11.karasunootsukai',
        '12.youseinomegane',
        '13.akumanohukiya',
        '14.hiramekisuisyou',
        '15.hoshihurusunadokei',
        '16.majonootodokemono'
      ]
    }
  }
}
</script>