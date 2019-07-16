// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const goodsList = [
    //假数据
    {name:"三星Galaxy Note8",price:5200,sales:2.6},
    {name:"iphone5s",price:2500,sales:2.2},
    {name:"iphone6",price:2800,sales:1.6},
    {name:"iphone6s",price:3200,sales:2.9},
    {name:"iphone7",price:3800,sales:12.6},
    {name:"iphone7plus",price:4200,sales:2.1},
    {name:"iphone8",price:5500,sales:10.6},
    {name:"华为",price:4600,sales:7.6},
    {name:"小米",price:1200,sales:32.6},
    {name:"OPPOR11",price:3000,sales:1.2},
    {name:"vivoX20",price:3250,sales:2.9}
]

// Mock.mock( url, post/get , 返回的数据);
Mock.mock('/shop/goodsList', 'post', goodsList);