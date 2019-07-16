import image1 from '../../assets/images/ad-001.jpg'
import image2 from '../../assets/images/ad-002.jpg'
import image3 from '../../assets/images/ad-003.jpg'

// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const dataList = [
    {name: Random.csentence(5, 100), newprice: '￥'+ Random.natural( 0 ,9999), oldprice:'￥'+ Random.natural( 0 ,9999), sale: 30 , img: image1},
    {name: Random.csentence(5, 100), newprice: '￥'+ Random.natural( 0 ,9999),oldprice:'￥'+ Random.natural( 0 ,9999), sale: 47,img: image2},
    {name: Random.csentence(5, 100), newprice: '￥'+ Random.natural( 0 ,9999), oldprice:'¥ '+ Random.natural( 0 ,9999), sale: 55 ,img: image3},
    {name: Random.csentence(5, 100), newprice: '￥'+ Random.natural( 0 ,9999), oldprice:'¥'+ Random.natural( 0 ,9999), sale: 59 ,img: Random.dataImage('100x100', '商品图片')}

    /*let dataList = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            name: Random.csentence(5, 100), //  Random.csentence( min, max )
            img: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            sale: Random.number
        }
        dataList.push(newArticleObject)
    }

    return {
        dataList: dataList
    }*/
]

// Mock.mock( url, post/get , 返回的数据);
Mock.mock('/shop/detailList', 'post', dataList);