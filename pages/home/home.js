var homeMock = {
  city: '苏州',
  serviceTabs: [
    { key: 'cargo', label: '拉货' },
    { key: 'moving', label: '搬家' },
    { key: 'cross-city', label: '跨城长途' },
    { key: 'travel', label: '小拉出行' },
    { key: 'trade', label: '租买车' },
  ],
  cargo: {
    vehicleOptions: [
      { key: 'handling', label: '搬运工' },
      { key: 'errand', label: '跑腿' },
      { key: 'four-wheel', label: '四轮小件' },
      { key: 'micro-van', label: '微面' },
      { key: 'light-van', label: '小面' },
      { key: 'mid-van', label: '中面' },
      { key: 'panel-van', label: '大面' },
      { key: 'iveco', label: '依维柯' },
      { key: 'mini-truck', label: '微货' },
      { key: 'small-truck', label: '小货' },
      { key: 'truck-38', label: '3米8' },
      { key: 'mid-truck', label: '中货' },
      { key: 'truck-52', label: '5米2' },
      { key: 'truck-62', label: '6米2' },
      { key: 'truck-68', label: '6米8' },
      { key: 'truck-76', label: '7米6' },
      { key: 'truck-82', label: '8米2' },
      { key: 'truck-86', label: '8米6' },
      { key: 'truck-96', label: '9米6' },
      { key: 'truck-117', label: '11米7' },
      { key: 'truck-125', label: '12米5' },
      { key: 'truck-130', label: '13米' },
      { key: 'truck-137', label: '13米7' },
      { key: 'truck-150', label: '15米' },
      { key: 'truck-160', label: '16米' },
      { key: 'truck-175', label: '17米5' },
    ],
    orderCard: {
      pickupBadge: '装',
      pickupTitle: '苏州大学应用技术学院学生公寓-...',
      discountText: '立享8.5折',
      dropoffPrimaryText: '输入卸货地下单',
      dropoffSecondaryText: '（可选跨城）',
    },
    quickActions: [
      { key: 'business', label: '企业用车', icon: 'enterprise' },
      { key: 'logistics', label: '发物流', icon: 'logistics' },
      { key: 'bulky', label: '搬大件', icon: 'bulky' },
      { key: 'driver', label: '司机加入', icon: 'driver' },
      { key: 'fuel', label: '加油充电', icon: 'fuel' },
    ],
    promoCards: [
      { key: 'cross-logistics', title: '跨城货物', highlight: '物流', theme: 'blue' },
      { key: 'task-center', title: '任务中心', highlight: '领券赚红包', theme: 'red' },
    ],
  },
}

var defaultServiceTab = homeMock.serviceTabs[0]
var defaultCargoOptionKey = homeMock.cargo.vehicleOptions[0].key

function showToast(title) {
  wx.showToast({
    title: title,
    icon: 'none',
  })
}

Page({
  data: {
    city: homeMock.city,
    headerSafeTop: 56,
    capsuleHeight: 32,
    capsuleSpaceWidth: 116,
    serviceTabs: homeMock.serviceTabs,
    activeServiceKey: defaultServiceTab.key,
    activeServiceLabel: defaultServiceTab.label,
    cargo: homeMock.cargo,
    activeCargoOptionKey: defaultCargoOptionKey,
  },

  onLoad: function () {
    var systemInfo = wx.getSystemInfoSync()
    var menuButtonRect =
      typeof wx.getMenuButtonBoundingClientRect === 'function'
        ? wx.getMenuButtonBoundingClientRect()
        : {}
    var statusBarHeight =
      systemInfo.statusBarHeight !== undefined &&
      systemInfo.statusBarHeight !== null
        ? systemInfo.statusBarHeight
        : 20
    var headerSafeTop = menuButtonRect.top || statusBarHeight + 12
    var capsuleHeight = menuButtonRect.height || 32
    var menuButtonLeft = menuButtonRect.left || systemInfo.windowWidth - 116
    var capsuleSpaceWidth = Math.max(systemInfo.windowWidth - menuButtonLeft, 108)

    this.setData({
      headerSafeTop: headerSafeTop,
      capsuleHeight: capsuleHeight,
      capsuleSpaceWidth: capsuleSpaceWidth,
    })
  },

  onServiceChange: function (event) {
    var key = event.detail.key
    var label = event.detail.label || defaultServiceTab.label

    this.setData({
      activeServiceKey: key,
      activeServiceLabel: label,
    })
  },

  onPickupTap: function () {
    showToast('起点信息')
  },

  onCargoOptionTap: function (event) {
    var key = event.detail.key || defaultCargoOptionKey

    this.setData({
      activeCargoOptionKey: key,
    })
  },

  onOrderEntryTap: function () {
    showToast('选择卸货地')
  },

  onShortcutTap: function (event) {
    showToast(event.detail.label)
  },

  onPromoTap: function (event) {
    showToast(event.detail.title)
  },
})
