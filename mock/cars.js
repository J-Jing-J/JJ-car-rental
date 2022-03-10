export default {
  'post /api/cars/search': (req, res) => {
    let data;
    if (req.body.pageNum < 4) {
      data = [
        {
          id: 1,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210730ac%2F600%2Fw1920h1080%2F20210730%2Faa59-8e4c4958828a1cbbd83c20510e0daa6f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631787&t=cfdcd09e558dd71bf8246c18a609fec8',
          brand: '奥迪',
          model: 'A6L',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '750',
          priceByMonth: '12000',
        },
        {
          id: 2,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d',
          brand: '奔驰',
          model: 'E级',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '750',
          priceByMonth: '12000',
        },
        {
          id: 3,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fauto-pic.china.com%2F202104%2F01%2F606593df18f2c.jpg&refer=http%3A%2F%2Fauto-pic.china.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631857&t=4c831c7bb11074aecc8477dee3772ea6',
          brand: '雪佛兰',
          model: '迈锐宝',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '110',
          priceByMonth: '2000',
        },
        {
          id: 4,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.cheshi-img.com%2Fcenter%2F680%2Faf%2Fcd%2Fe1%2F3167969048c2ba6d33cd1ffaed.jpeg&refer=http%3A%2F%2Fimg.cheshi-img.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631883&t=4adfecc669859f87a28c87f6548cc77c',
          brand: '宾利',
          model: '飞驰',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '1738',
          priceByMonth: '150000',
        },
        {
          id: 5,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210730ac%2F600%2Fw1920h1080%2F20210730%2Faa59-8e4c4958828a1cbbd83c20510e0daa6f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631787&t=cfdcd09e558dd71bf8246c18a609fec8',
          brand: '奥迪',
          model: 'A6L',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '750',
          priceByMonth: '12000',
        },
        {
          id: 6,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d',
          brand: '奔驰',
          model: 'E级',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '750',
          priceByMonth: '12000',
        },
        {
          id: 7,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fauto-pic.china.com%2F202104%2F01%2F606593df18f2c.jpg&refer=http%3A%2F%2Fauto-pic.china.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631857&t=4c831c7bb11074aecc8477dee3772ea6',
          brand: '雪佛兰',
          model: '迈锐宝',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '110',
          priceByMonth: '2000',
        },
        {
          id: 8,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.cheshi-img.com%2Fcenter%2F680%2Faf%2Fcd%2Fe1%2F3167969048c2ba6d33cd1ffaed.jpeg&refer=http%3A%2F%2Fimg.cheshi-img.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631883&t=4adfecc669859f87a28c87f6548cc77c',
          brand: '宾利',
          model: '飞驰',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '1738',
          priceByMonth: '150000',
        },
        {
          id: 9,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210730ac%2F600%2Fw1920h1080%2F20210730%2Faa59-8e4c4958828a1cbbd83c20510e0daa6f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631787&t=cfdcd09e558dd71bf8246c18a609fec8',
          brand: '奥迪',
          model: 'A6L',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '750',
          priceByMonth: '12000',
        },
        {
          id: 10,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d',
          brand: '奔驰',
          model: 'E级',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '750',
          priceByMonth: '12000',
        },
        {
          id: 11,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fauto-pic.china.com%2F202104%2F01%2F606593df18f2c.jpg&refer=http%3A%2F%2Fauto-pic.china.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631857&t=4c831c7bb11074aecc8477dee3772ea6',
          brand: '雪佛兰',
          model: '迈锐宝',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '110',
          priceByMonth: '2000',
        },
        {
          id: 12,
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.cheshi-img.com%2Fcenter%2F680%2Faf%2Fcd%2Fe1%2F3167969048c2ba6d33cd1ffaed.jpeg&refer=http%3A%2F%2Fimg.cheshi-img.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631883&t=4adfecc669859f87a28c87f6548cc77c',
          brand: '宾利',
          model: '飞驰',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '1738',
          priceByMonth: '150000',
        }
      ]
    } else {
      data = []
    }
    res.json({
      status: 200,
      data
    })
  },

  'post /api/cars/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        banner: [
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0915%2Fa23f47d9j00qzg8xo001dc000hs00c7g.jpg%26thumbnail%3D690x10000%26quality%3D75%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649135270&t=7cdeb952e3280a2ce5962ba662e81977',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2021%2F8C4CB518E1EBA186735D8395422C9C69710D79D8_size595_w1027_h560.png&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649135270&t=239013e46b6995aa0d5529cdd944f6ec',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp.xincheping.com%2F202106%2F81%2Fdim1361x1020_04136741aa4e5c97353329e51d8bb5.jpg&refer=http%3A%2F%2Fp.xincheping.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649135270&t=7c173f73336fc94b0e24b71b331c3cdf',
        ],
        info: {
          brand: '奥迪',
          model: 'A6L',
          info: ['自动', '5座', '2.0T', '汽油', '95号'],
          priceByDay: '750',
          priceByMonth: '12000',
          publishTime: 1595238771000,
          startTime: 1595238771000,
          endTime: 1597917171000,
        }
      }
    });
  },

  'post /api/comments/lists': (req, res) => {
    res.json({
      status: 200,
      data: [
        {
          id: 0,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
        {
          id: 1,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
        {
          id: 2,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
        {
          id: 3,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
        {
          id: 4,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
        {
          id: 5,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
        {
          id: 6,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
        {
          id: 7,
          avatar: 'https://img0.baidu.com/it/u=3672359598,2336892088&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          username: 'JJ',
          createTime: 1595238771000,
          info: '卖家态度很好'
        },
      ]
    });
  },

  'post /api/comments/add': (req, res) => {
    res.json({
      status: 200,
      data: 'ok'
    })
  }
}