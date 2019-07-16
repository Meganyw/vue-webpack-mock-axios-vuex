import Vue from 'vue';//这里为固定格式照抄

import Vuex from 'vuex';//这里为固定格式照抄

Vue.use(Vuex);//此为引用Vuex


const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
 //注册时间，type:increment，handler第一个参数是state；
        increment (state) {
            // 变更状态
            state.count++
        }
    }
})
