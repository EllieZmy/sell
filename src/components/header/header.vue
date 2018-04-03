<template>
  <div id = 'header' class = 'header'>
    <div class = 'h-content'>
      <img class = 'h-backImg' :src = 'seller.avatar'>
      <div class = 'h-left-content'>
        <img class = 'h-img' :src = 'seller.avatar'>
      </div>
      <div class = 'h-right-content'>
        <p class = 'h-tt'>
          <span class = 'brand-icon'></span>{{seller.name}}
        </p>
        <p class = 'font-normal h-desc'>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
        <p class = 'font-normal h-disc' v-if='seller.supports'>
          <span class = 'activity' :class = '"activity-" + seller.supports[0].type + "-icon"'></span>{{seller.supports[0].description}}
        </p>
      </div>
    </div>
    <div class = 'notice'>
      <p><span class = 'notice-icon'></span>{{seller.bulletin}}</p>
      <span class = 'icon-keyboard_arrow_right'></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: Object
  }
}
</script>

<style lang="scss">
@import '../../common/sass/index.scss';
.font-normal{
  font-weight: 200;
  line-height: 12px;
}
.header{
  overflow: hidden;
  padding-top: 24px;
  position: relative;
  background-color: rgba(7,17,27,.5);
  .h-backImg{
    position: absolute;
    top:0;
    left: 0;
    z-index: -1;
    width: 100%;
    filter: blur(10px);
  }
}
.h-content{
  overflow: hidden;
  margin-bottom: 18px;
}
.h-left-content{
  float: left;
  padding-left: 24px;
  .h-img{
    width: 64px;
    height: 64px;
    border-radius: 2px;
  }
}
.h-right-content{
  float: left;
  padding-left: 16px;
  color: rgb(255,255,255);
  .h-tt{
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: blod;
    line-height: 18px;
  }
  .h-desc{
    margin-bottom: 10px;
    font-size: 12px;
  }
  .h-disc{
    font-size: 10px;
  }
  .brand-icon{
    width: 30px;
    height: 18px;
    @include backImg('brand');
    border-radius: 2px;
    margin-right: 6px;
  }
  .activity{
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin-right: 4px;
  }
  .activity-0-icon{
    @include backImg('decrease_1')
  }
  .activity-1-icon{
    @include backImg('discount_1')
  }
  .activity-2-icon{
    @include backImg('special_1')
  }
}
.notice{
    height: 28px;
    padding: 0 12px;
    line-height: 28px;
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 200px;
    background-color: rgba(7,17,27,0.2);
    > p {
      padding-right: 16px;
      @include oneLine();
    }
    .notice-icon{
      display: inline-block;
      vertical-align: middle;
      width: 22px;
      height: 12px;
      margin-right: 4px;
      @include backImg('bulletin');
    }
  }

</style>
