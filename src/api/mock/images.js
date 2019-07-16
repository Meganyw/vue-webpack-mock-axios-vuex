import image3 from '../../assets/images/ad-003.jpg'

// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const imagesList = [
    {name: Random.csentence(5, 100), newprice: '￥9.9', oldprice:'￥99.9', sale: 30 , img: Random.dataImage('360x200', 'mock轮播图')},
    {name: '商品摄影静物拍摄产品服装平铺食品手表化妆饰品鞋帽箱包淘宝拍摄', newprice: '￥10.0',oldprice:'￥99.9', sale: 47,img: Random.dataImage('360x200', 'mock轮播图第二张呀')},
    {name: 'DR Darry Ring 一克拉钻石戒指定制专柜正品珠宝六爪求婚结婚钻戒', newprice: '￥6999.9', oldprice:'¥ 92169.00', sale: 55 ,img: image3},
    {name: Random.csentence(5, 100), newprice: '￥69.9', oldprice:'¥ 92.00', sale: 59 ,img: Random.dataImage('360x200', '我是mock模拟数据的轮播图呀！')}

    /*let dataList = [];
    

    return {
        dataList: dataList
    }*/
]

// Mock.mock( url, post/get , 返回的数据);
Mock.mock('/images/list', 'post', imagesList);