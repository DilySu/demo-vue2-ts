<template>
  <div class="mapView">
    <div id="main"></div>
  </div>
</template>

<script lang="ts">
import mapJson from "@/assets/map.json";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class extends Vue {
  $echarts: any;
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main"));
    this.$echarts.registerMap("china", mapJson); // 注册可用的图，必须包括geo组件或者map图表类型时才可以
    let option = {
      backgroundColor: "rgb(121,145,209)",
      geo: {
        map: "china",
        aspectScale: 0.75, // 地图缩放长宽比
        zoom: 1.1, // 缩放比
        regions: [
          {
            name: "南海诸岛",
            itemStyle: {
              opacity: 0.5,
            },
          },
        ],
        itemStyle: {
          normal: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                { offset: 0, color: "#09132c" },
                { offset: 1, color: "#274d68" },
              ],
            },
            globalCoord: true,
          },
        },
      },
      series: [
        {
          //配置地图相关参数，绘制地图，该对象是关于地图图标的相关配置
          type: "map",
          label: {
            // 文字
            normal: {
              show: true,
              textStyle: {
                color: "#1DE9B6",
              },
            },
            emphasis: {
              // 鼠标悬停
              textStyle: {
                color: "rgb(183,185,14)",
              },
            },
          },
          zoom: 1.1,
          map: "china",
          itemStyle: {
            normal: {
              backgroundColor: "rgb(147,235,248)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  { offset: 0, color: "rgb(31,54,150)" },
                  { offset: 1, color: "rgb(89,128,142)" },
                ],
              },
              globalCoord: true,
              shadowColor: "rgb(58,115,192)", //阴影
              shadowOffsetX: 10,
              shadowOffsetY: 11,
            },
            emphasis: {
              // 鼠标悬停
              areaColor: "rgb(46,229,206)",
              borderWidth: 0.1,
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }
}
</script>

<style scoped lang="scss">
.mapView {
  width: 100%;

  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
