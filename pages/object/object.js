// pages/object/object.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodurl:[
      {
        name:'棉花娃娃',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D.png',
        price:'￥66.0',
        information:'一款将彝族传统刺绣艺术与现代文创设计巧妙融合的可爱玩偶。这款娃娃以彝族的特色元素为灵感，通过精心设计和手工制作，将彝族的传统文化与现代审美完美结合，呈现出一个活泼可爱、充满民族风情的棉花娃娃形象——小彝。',
      },{
        name:'手链',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E6%89%8B%E9%93%BE1.jpg',
        price:'￥16.0',
        information:'一款融合了彝族传统刺绣艺术与现代设计理念的精美文创产品。它采用彝族特有的刺绣工艺和图案，以细腻的线条和丰富的色彩，将彝族的独特风情和文化底蕴巧妙地融入到手链之中，展现出一种别样的艺术魅力。'
      },{
        name:'纯手工包包',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%8C%85%E5%8C%851.jpg',
        price:'￥45.0',
        information:'一种传统的手工制作艺术品，源自中国彝族民族文化。这些手包以其独特的设计和精湛的手工工艺而闻名。彝族手包通常由彩色织物和手工刺绣制成，细致的刺绣图案展现了彝族传统文化的精髓和美学。这些图案包括彝族传统图腾、自然元素、动植物等，富有象征意义和故事性。'
      },{
        name:'小彝贴纸',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%B0%8F%E5%BD%9D%E8%A1%A8%E6%83%85.jpg',
        price:'￥3.0',
        information:'以彝族文化为主题的贴纸产品。这些贴纸印有彝族传统图案和彝族文化符号，展示了彝族文化的独特魅力。它们可以用于装饰手机、电脑、笔记本等物品，让你展示对彝族文化的喜爱和认同。'
      },{
        name:'小彝胶带',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E8%83%B6%E5%B8%A62.jpg',
        price:'￥6.0',
        information:'以彝族文化为设计灵感的胶带产品。这些胶带以彝族传统图案和彝族文化元素为特色，具有独特的艺术美感和装饰效果。它们可以用于包装、手工制作、日记本装饰等，为你的创意项目增添彝族文化的风格和色彩。'
      },{
        name:'手机壳',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E6%89%8B%E6%9C%BA%E5%A3%B31.jpg',
        price:'￥15.0',
        information:'一种独特而精美的手机保护壳，以彝族文化为灵感来源。这些手机壳采用彝族传统图案和元素进行设计，如彝族传统图腾、自然元素、动植物等，体现了彝族独特的艺术美感和文化特色。每个手机壳都经过精心制作，采用高品质材料，提供卓越的保护性能和时尚外观。彝族特色手机壳不仅能为您的手机提供全面的保护，还展示了彝族传统文化的魅力和独特之处，成为彝族文化爱好者和手机配饰追求者的喜爱之选。'
      },{
        name:'挂坠',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E6%8C%82%E5%9D%A0.png',
        price:'￥20.0',
        information:'这些挂坠是由彝族工匠手工制作的饰品，以其精湛的手艺和独特的民族元素而闻名。每个吊坠都经过精心设计和制作，展现了彝族传统图案、符号和文化意义，是彝族文化的珍贵代表。'
      },{
        name:'卡套',
        url:'http://sdw43wqdt.hb-bkt.clouddn.com/%E5%8D%A1%E5%A5%971.png',
        price:'￥10.0',
         information:'一款将彝族刺绣艺术与现代实用设计完美结合的文创产品。卡套采用四川省凉山的优质绣品，由当地绣娘一针一线手工绣制而成，不仅具有极高的艺术价值和审美价值，同时也是一种文化的传承与展现。'
      },
    ],
    cloudID:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var goodsId = options.goodsId
    //  console.log(goodsId);
    var that = this;
    console.log(goodsId);
    that.setData({
      cloudID:goodsId,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})