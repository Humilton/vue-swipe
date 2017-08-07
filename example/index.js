const vueSwipe = VueSwipe.Swipe;
const vueSwipeItem = VueSwipe.SwipeItem;

swipeEle = new Vue({
  el: '#container',
  components: {
    'swipe': vueSwipe,
    'swipe-item': vueSwipeItem
  }
}).$children[0];
