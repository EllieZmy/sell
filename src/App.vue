<template>
  <div id="app">
    <v-header :seller = seller></v-header>
    <nav class = 'nav border-1px'>
      <div class = 'nav-item'>
        <!-- <transition :name = 'slide-left'> -->
          <router-link to = '/goods'>商品</router-link>
        <!-- </transition> -->
      </div>
      <div class = 'nav-item'>
        <router-link to = '/ratings'>评论</router-link>
      </div>
      <div class = 'nav-item'>
        <router-link to = '/seller'>商家</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/header'
const ERRNO = 0
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === ERRNO) {
        this.seller = response.data
        console.log(this.seller)
      }
    })
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang='scss'>
@import './common/sass/index.scss';
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  @include border-1px(rgba(7, 17, 27, 0.1));
  .nav-item {
    flex: 1;
    text-align: center;
    cursor: pointer;
    > a{
      display: block;
      color: rgb(77, 85, 93);
      &.router-link-active{
        color: rgb(240, 20, 20)
      }
    }
  }
}
</style>
