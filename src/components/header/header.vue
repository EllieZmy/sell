<template>
  <div id = 'header' class = 'header'>
    <div class = 'h-content clearfix'>
      <img class = 'h-backImg' :src = 'seller.avatar'>
      <div class = 'h-left-content'>
        <img class = 'h-img' :src = 'seller.avatar'>
      </div>
      <div class = 'h-right-content'>
        <p class = 'h-tt'>
          <span class = 'brand-icon'></span>{{seller.name}}
        </p>
        <p class = 'font-normal h-desc'>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
        <p class = 'font-normal activity-container h-disc' v-if='seller.supports'>
          <span class = 'activity' :class = '"activity-" + seller.supports[0].type + "-icon"'></span>{{seller.supports[0].description}}
        </p>
      </div>
      <div class = 'activity-detail' v-if='seller.supports'  @click = 'supportsShow()'>
        {{seller.supports.length}}个
        <i class = 'icon-keyboard_arrow_right'></i>
      </div>
    </div>
    <div class = 'notice' @click = 'supportsShow()'>
      <p><span class = 'notice-icon'></span>{{seller.bulletin}}</p>
      <i class = 'icon-keyboard_arrow_right'></i>
    </div>
    <!-- supports detail popup -->
    <div class = 'supports-detail' v-show='showSupportsDetail'>
      <div class = 'supports-wrapper clearfix'>
        <div class = 'content'>
          <div class = 'tt'>{{seller.name}}</div>
          <div class = 'star'></div>
          <div class = 'favour'>
            <div class = 'favour-tt line-tt'>
              <span>优惠信息</span>
            </div>
            <ul class = 'supports-list'>
              <li v-for = 'item in seller.supports' :key = 'item' >
                <span class = 'activity' :class = '"activity-" + item.type + "-icon"'></span>
                {{item.description}}
              </li>
            </ul>
          </div>
          <div class = 'd-notice'>
            <div class = 'd-notice-tt line-tt'>
              <span>商家公告</span>
            </div>
            <div class = 'notice-content'>{{seller.bulletin}}</div>
          </div>
        </div>
      </div>
      <div class = 'footer'>
        <i class = 'icon-close' @click = 'supportsHide()'></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: Object
  },
  data () {
    return {
      showSupportsDetail: false
    }
  },
  methods: {
    supportsShow: function () {
      this.showSupportsDetail = true
    },
    supportsHide: function () {
      this.showSupportsDetail = false
    }
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
  position: relative;
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
  .activity-container{
    position: relative;
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
  .activity-3-icon{
    @include backImg('invoice_1')
  }
  .activity-4-icon{
    @include backImg('guarantee_1')
  }
}
.activity-detail{
  position: absolute;
  right: 12px;
  bottom: 0;
  height:24px;
  line-height: 24px;
  padding: 0 8px;
  border-radius: 19px;
  background: rgba(0,0,0,.2);
  font-size: 12px;
  color: rgb(255,255,255);
}
.notice{
  position: relative;
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
  .icon-keyboard_arrow_right{
    position: absolute;
    top: 7px;
    right: 12px;
  }
}
.supports-detail{
  background-color: rgba(7,17,27,0.8);
  position: fixed;
  z-index: 100;
  top:0;
  left: 0;
  right:0;
  bottom: 0;
  overflow: auto;
  color: rgb(255,255,255);
  .supports-wrapper{
    width: 100%;
    min-height: 100%;
    .content{
      padding: 64px 36px 64px 36px;
      .tt{
        font-size: 16px;
        font-weight: 350px;
        line-height: 16px;
        text-align: center;
        margin-bottom: 16px;
        margin-bottom: 16px;
      }
      .star{
        margin-bottom: 28px;
      }
      .supports-list{
        margin-bottom: 28px;
        > li {
          font-size: 12px;
          font-weight: 100;
          line-height: 12px;
          margin-bottom: 12px;
        }
      }
      .d-notice{
        .notice-content{
          padding: 0 12px;
          font-size: 12px;
          font-weight: 100;
          line-height: 24px;
        }
      }
    }
  }
  .footer{
    position: relative;
    margin-top: -64px;
    font-size: 32px;
    text-align: center;
  }
  .activity{
    width: 16px;
    height: 16px;
    border-radius: 2px;
    margin-right: 6px;
  }
  .activity-0-icon{
    @include backImg('decrease_2')
  }
  .activity-1-icon{
    @include backImg('discount_2')
  }
  .activity-2-icon{
    @include backImg('special_2')
  }
  .activity-3-icon{
    @include backImg('invoice_2')
  }
  .activity-4-icon{
    @include backImg('guarantee_2')
  }
}
</style>
