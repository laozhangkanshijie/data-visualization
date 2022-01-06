<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import { wordcloud, screenData, mapScatter } from '../api'

export default {
  name: 'homeView',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.mapData
    }
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  mounted() {
    screenData().then((data) => {
      this.reportData = {
        salesToday: 12124,
        salesGrowthLastDay: 99,
        salesGrowthLastMonth: 90,
        salesLastDay: 11111,
        orderToday: 11123,
        orderTrend: [
          620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 843, 690, 530, 220,
          620
        ],
        orderLastDay: 2313,
        orderUser: 33334,
        orderUserTrend: [
          410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150
        ],
        orderUserTrendAxis: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00'
        ],
        returnRate: 10,
        userToday: 2500,
        userLastMonth: 200,
        userTodayNumber: 250,

        userGrowthLastDay: 8.73,
        userGrowthLastMonth: 35.91
      }
    })
    wordcloud().then((data) => {
      this.wordCloud = data
    })
    mapScatter().then((data) => {
      this.mapData = data
    })
  }
}
</script>

<style>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
