<template>
  <div class = 'star' :class = 'starSize'>
    <span v-for = 'starItem in starItems' :class = 'starItem' class = 'cStarItem' :key = 'starItem'></span>
  </div>
</template>
<script>
const COUNT = 5
const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'
export default {
  props: {
    score: {
      type: Number
    },
    size: {
      type: Number
    }
  },
  data () {
    return {

    }
  },
  computed: {
    starSize: function () {
      return `size-${this.size}`
    },
    starItems: function () {
      let starType = parseInt(this.score * 2) / 2
      let hasDecimal = starType % 1 !== 0
      let starArr = []
      for (let i = 0; i < starType; i++) {
        starArr.push(STAR_ON)
      }
      if (hasDecimal) {
        starArr.push(STAR_HALF)
      }
      while (starArr.length < COUNT) {
        starArr.push(STAR_OFF)
      }
      return starArr
    }
  }
}
</script>
<style lang="scss">
@import '../../common/sass/index.scss';
.star{
  &.size-48{
    .cStarItem{
      width: 20px;
      height: 19px;
      margin-right: 24px;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        @include backImg('star48_on');
      }
      &.half{
        @include backImg('star48_half');
      }
      &.off{
        @include backImg('star48_off');
      }
    }
  }
  &.size-36{
    .cStarItem{
      width: 15px;
      height: 15px;
      margin-right: 16px;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        @include backImg('star48_on');
      }
      &.half{
        @include backImg('star48_half');
      }
      &.off{
        @include backImg('star48_off');
      }
    }
  }
  &.size-24{
    .cStarItem{
      width: 10px;
      height: 10px;
      margin-right: 8px;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        @include backImg('star24_on');
      }
      &.half{
        @include backImg('star24_half');
      }
      &.off{
        @include backImg('star24_off');
      }
    }
  }
}
</style>
