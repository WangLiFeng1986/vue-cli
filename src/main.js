
//要使用“import”命令加载的Vue生成版本
//（仅限运行时或独立）已在webpack.base.conf中设置了别名。
Vue.config.devtools = true;
Vue.config.productionTip = false
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import './assets/lib/mui/css/mui.css'
import './assets/lib/mui/css/icons-extra.css'
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
