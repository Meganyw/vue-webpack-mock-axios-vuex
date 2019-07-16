// 配置 store
import Vue from 'vue';
import Vuex from 'vuex';

// 通过 Vue.use() 安装 Vuex
Vue.use(Vuex);


import mutations from "./mutations.js"

const state = {
    // 应用启动时， count置为0
    count:10,
    num:20
}
export default new Vuex.Store({
    state,
    mutations
})
