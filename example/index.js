const vueSwipe = VueSwipe.Swipe;
const vueSwipeItem = VueSwipe.SwipeItem;

swipeEle = new Vue({
  el: '#container',
  components: {
    'swipe': vueSwipe,
    'swipe-item': vueSwipeItem
  },
  methods: {
    indexChange: function () {
      alert("indexChange");
    }
  }
}).$children[0];
