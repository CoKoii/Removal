Page({
  data: {
    quickLinks: [
      {
        key: 'orders',
        label: '我的订单',
        value: '查看进行中的清运服务',
      },
      {
        key: 'address',
        label: '常用地址',
        value: '统一管理装货点与卸货点',
      },
      {
        key: 'invoice',
        label: '开票资料',
        value: '保留企业抬头与税号信息',
      },
    ],
    tips: [
      '页面已经接入统一间距、字号和卡片样式。',
      '后续新增功能建议继续拆分为独立区块。',
    ],
  },

  onShow: function () {
    wx.showTabBar({})
  },
})
