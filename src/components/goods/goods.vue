<template>
  <div id = 'goods' class = 'goods'>
    <div class = 'left-continer' ref = 'lists'>
      <ul class = 'list-wrapper'>
        <li class = 'good-list' v-for = '(item, index) in goods'
            :key = 'item.name'
            :class = '{active: currentIndex === index}'
            @click = 'selectMenu(index, $event)'>
          <div class = 'center-box'>
            <span v-if = 'item.type > 0' class = 'activity' :class = 'activity[item.type]'></span>{{item.name}}
          </div>
        </li>
      </ul>
    </div>
    <div  class = 'right-continer' ref = 'foodies'>
      <div class = 'all'>
        <dl class = 'goods-wrapper' v-for = '(goodsItem, index) in goods' :key = 'index' ref = 'goods'>
          <dt>
            <h1 class = 'foods-tt'>{{goodsItem.name}}</h1>
          </dt>
          <dd class = 'foods-content' v-for = 'goodsList in goodsItem.foods' :key = 'goodsList.name'>
            <div class = 'foods-main'>
              <img class = 'food-img' :src = 'goodsList.image'/>
              <div class = 'food-content'>
                <h2 class = 'food-tt'>{{goodsList.name}}</h2>
                <p class = 'food-desc'>{{goodsList.description}}</p>
                <p class = 'food-sell'>
                  <span class = 'food-sell-count'>{{'月售' + goodsList.sellCount + '份'}}</span>
                  <span>{{'好评率' + goodsList.rating + '%'}}</span>
                </p>
                <p class = 'food-price'>
                  <span class = 'price'>¥<span class = 'now'>{{goodsList.price}}</span></span>
                  <span class = 'price-old' v-if = 'goodsList.oldPrice'>¥<span class = 'old'>{{goodsList.oldPrice}}</span></span>
                </p>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
const ERRNO = 0
export default {
  name: 'Goods',
  data () {
    return {
      goods: {},
      activity: [],
      position: [],
      scrollY: 0
    }
  },
  created () {
    this.activity = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === ERRNO) {
        this.goods = response.data
        this.$nextTick(() => {
          this._scrollInit()
          this._caclPosition()
        })
        console.log(this.goods)
      }
    })
  },
  computed: {
    // 计算当前在哪个数据上
    currentIndex: function () {
      console.log('inn')
      let pos = this.position
      for (let i = 0; i < pos.length; i++) {
        let current = pos[i]
        let next = pos[i + 1]
        if (!next || (this.scrollY >= current && this.scrollY < next)) {
          console.log('---', i)
          return i
        }
      }
      return 0
    }
  },
  methods: {
    selectMenu: function (index, event) {
      debugger
      if (!event._constructed) {
        return
      }
      let goods = this.$refs.goods
      let currentEl = goods[index]
      this.rScroll.scrollToElement(currentEl, 300)
    },
    _scrollInit: function () {
      let leftScroll = this.$refs.lists
      let rightScroll = this.$refs.foodies
      this.lScroll = new BScroll(leftScroll, {})
      this.rScroll = new BScroll(rightScroll, {
        probeType: 3
      })
      // 初始化的时候为它实时绑定一个滚动的数据，知道当前滚动的位置
      this.rScroll.on('scroll', (pos) => {
        console.log(pos.y)
        if (pos.y < 0) {
          this.scrollY = Math.abs(parseInt(pos.y))
        }
      })
    },
    _caclPosition: function () {
      let goods = this.$refs.goods
      let position = 0
      goods.forEach((pos) => {
        this.position.push(position)
        position += pos.clientHeight
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/sass/index.scss';
.goods{
  position: absolute;
  top: 176px;
  bottom: 48px;
  display: flex;
  width: 100%;
  overflow: hidden;
}
.left-continer{
  flex: 0 0 80px;
  background-color: #f3f5f7;
  .good-list{
    display: table;
    box-sizing: border-box;
    width: 100%;
    padding: 0 12px;
    line-height: 12px;
    font-size: 12px;
    &.active{
      background-color: #ffffff;
      .center-box{
        @include border-none();
      }
    }
    &:last-child .center-box{
      @include border-none();
    }
    .center-box{
      height: 54px;
      line-height: 14px;
      display:table-cell;
      vertical-align: middle;
      @include border-1px(rgba(7, 17, 27, .1));
      &:last-child{
        @include border-none();
      }
    }
    .activity{
      width: 12px;
      height: 12px;
      margin-right: 2px;
      &.directory{
        @include backImg('decrease_3')
      }
      &.discount{
        @include backImg('discount_3')
      }
      &.special{
        @include backImg('special_3')
      }
      &.invoice{
        @include backImg('invoice_3')
      }
      &.guarantee{
        @include backImg('guarantee_3')
      }
    }
  }
}
.right-continer{
  flex: 1;
  .foods-tt{
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    padding-left: 14px;
    color: rgb(147, 153, 159);
    background-color: #f3f5f7;
    font-size: 12px;
  }
  .foods-content{
    margin: 18px;
    margin-bottom: 0;
    @include border-1px(rgba(7, 17, 27, .1));
    .foods-main{
      display: flex;
      padding-bottom: 18px;
      &:last-child{
        @include border-none();
      }
      .food-img{
        flex: 0 0 57px;
        width: 57px;
        height: 57px;
        border-radius: 2px;
      }
      .food-content{
        flex: 1;
        padding-left: 10px;
        .food-tt{
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          margin-bottom: 8px;
        }
        .food-desc, .food-sell{
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
          margin-bottom: 8px;
        }
        .food-desc{
          line-height: 12px;
        }
        .food-sell{
          &-count{
            margin-right: 12px;
          }
        }
        .food-price{
          font-size: 10px;
          color: rgb(147, 153,159);
          font-weight: normal;
          line-height: 24px;
          .price{
            margin-right: 8px;
            color: #f01414;
            .now{
              font-size: 14px;
              font-weight: 700;
            }
          }
          .price-old{
            text-decoration: line-through;
            .old{
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
