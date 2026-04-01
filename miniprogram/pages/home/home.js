var serviceTabs = [
  { key: 'cargo', label: '拉货' },
  { key: 'moving', label: '搬家' },
  { key: 'cross-city', label: '跨城长途' },
  { key: 'travel', label: '小拉出行', badge: '立减20' },
  { key: 'trade', label: '租买车' },
]

var vehicleGroups = [
  { key: 'handling', label: '搬运工' },
  { key: 'errand', label: '跑腿' },
  { key: 'four-wheel', label: '四轮小件' },
  { key: 'micro-van', label: '微面' },
  { key: 'light-van', label: '小面' },
  { key: 'mid-van', label: '中面' },
]

var vehiclePanelMap = {
  handling: {
    heroWord: '搬运',
    heroBadge: '50公斤',
    rows: [
      [
        { key: 'mover-1', label: '搬运工' },
        { key: 'mover-2', label: '家具拆装' },
        { key: 'mover-3', label: '上下楼' },
        { key: 'mover-4', label: '装卸货' },
        { key: 'mover-5', label: '长距离搬运' },
      ],
      [
        { key: 'mover-6', label: '小件搬家' },
        { key: 'mover-7', label: '宿舍搬运' },
        { key: 'mover-8', label: '办公室迁移' },
      ],
    ],
  },
  errand: {
    heroWord: '跑腿',
    heroBadge: '20公斤',
    rows: [
      [
        { key: 'panel-van', label: '大面', variant: 'brand' },
        { key: 'iveco', label: '依维柯' },
        { key: 'mini-truck', label: '微货' },
        { key: 'small-truck', label: '小货' },
        { key: 'truck-38', label: '3米8' },
        { key: 'mid-truck', label: '中货' },
        { key: 'truck-52', label: '5米2' },
      ],
      [
        { key: 'truck-62', label: '6米2' },
        { key: 'truck-68', label: '6米8' },
        { key: 'truck-76', label: '7米6' },
        { key: 'truck-82', label: '8米2' },
        { key: 'truck-86', label: '8米6' },
        { key: 'truck-96', label: '9米6' },
        { key: 'truck-117', label: '11米7' },
      ],
      [
        { key: 'truck-125', label: '12米5' },
        { key: 'truck-130', label: '13米' },
        { key: 'truck-137', label: '13米7' },
        { key: 'truck-150', label: '15米' },
        { key: 'truck-160', label: '16米' },
        { key: 'truck-175', label: '17米5' },
      ],
      [
        { key: 'fresh-van', label: '生鲜面包车' },
        { key: 'cold-chain', label: '冷藏车', variant: 'cold', hasArrow: true },
      ],
    ],
  },
  'four-wheel': {
    heroWord: '小件',
    heroBadge: '80公斤',
    rows: [
      [
        { key: 'four-1', label: '四轮小件' },
        { key: 'four-2', label: '门店配送' },
        { key: 'four-3', label: '同城闪送' },
        { key: 'four-4', label: '小型商超' },
      ],
      [
        { key: 'four-5', label: '生鲜冷配' },
        { key: 'four-6', label: '展会物料' },
        { key: 'four-7', label: '文件票据' },
      ],
    ],
  },
  'micro-van': {
    heroWord: '微面',
    heroBadge: '600公斤',
    rows: [
      [
        { key: 'micro-1', label: '微面' },
        { key: 'micro-2', label: '金杯' },
        { key: 'micro-3', label: '依维柯' },
        { key: 'micro-4', label: '封闭货车' },
      ],
      [
        { key: 'micro-5', label: '生鲜面包车' },
        { key: 'micro-6', label: '冷藏车', variant: 'cold', hasArrow: true },
      ],
    ],
  },
  'light-van': {
    heroWord: '小面',
    heroBadge: '1吨',
    rows: [
      [
        { key: 'light-1', label: '小面' },
        { key: 'light-2', label: '3米8' },
        { key: 'light-3', label: '4米2' },
        { key: 'light-4', label: '高栏' },
      ],
      [
        { key: 'light-5', label: '厢货' },
        { key: 'light-6', label: '冷藏车', variant: 'cold', hasArrow: true },
      ],
    ],
  },
  'mid-van': {
    heroWord: '中面',
    heroBadge: '1.8吨',
    rows: [
      [
        { key: 'mid-1', label: '中面' },
        { key: 'mid-2', label: '5米2' },
        { key: 'mid-3', label: '6米8' },
        { key: 'mid-4', label: '7米6' },
      ],
      [
        { key: 'mid-5', label: '9米6' },
        { key: 'mid-6', label: '11米7' },
        { key: 'mid-7', label: '冷藏车', variant: 'cold', hasArrow: true },
      ],
    ],
  },
}

var quickActions = [
  { key: 'business', label: '企业用车', icon: 'enterprise' },
  { key: 'logistics', label: '发物流', icon: 'logistics' },
  { key: 'bulky', label: '搬大件', icon: 'bulky' },
  { key: 'driver', label: '司机加入', icon: 'driver' },
  { key: 'fuel', label: '加油充电', icon: 'fuel' },
]

var promoCards = [
  { key: 'cross-logistics', title: '跨城货物', highlight: '物流', theme: 'mint' },
  { key: 'task-center', title: '任务中心', highlight: '领券赚红包', theme: 'warm' },
]

var bottomNavItems = [
  { key: 'home', label: '首页', icon: 'home' },
  { key: 'order', label: '订单', icon: 'order' },
  { key: 'message', label: '消息', icon: 'message' },
  { key: 'savings', label: '省钱', icon: 'savings' },
  { key: 'mine', label: '我的', icon: 'mine' },
]

var defaultVehicleGroupKey = 'errand'

function showToast(title) {
  wx.showToast({
    title: title,
    icon: 'none',
  })
}

Page({
  data: {
    city: '苏州',
    headerSafeTop: 56,
    capsuleHeight: 32,
    capsuleSpaceWidth: 116,
    serviceTabs: serviceTabs,
    activeServiceKey: 'cargo',
    vehicleGroups: vehicleGroups,
    activeVehicleGroupKey: defaultVehicleGroupKey,
    heroWord: vehiclePanelMap[defaultVehicleGroupKey].heroWord,
    heroBadge: vehiclePanelMap[defaultVehicleGroupKey].heroBadge,
    vehicleRows: vehiclePanelMap[defaultVehicleGroupKey].rows,
    moreTransportLabel: '更多运输方式：',
    transportTags: [{ key: 'carpool', label: '零担拼车' }],
    pickupBadge: '装',
    pickupTitle: '苏州大学应用技术学院学生公寓-...',
    discountText: '立享8.5折',
    dropoffPrimaryText: '输入卸货地下单',
    dropoffSecondaryText: '（可选跨城）',
    viaPointLabel: '加途经点',
    quickActions: quickActions,
    promoCards: promoCards,
    bottomNavItems: bottomNavItems,
  },

  onLoad: function () {
    var systemInfo = wx.getSystemInfoSync()
    var menuButtonRect =
      typeof wx.getMenuButtonBoundingClientRect === 'function'
        ? wx.getMenuButtonBoundingClientRect()
        : {}
    var statusBarHeight =
      systemInfo.statusBarHeight !== undefined && systemInfo.statusBarHeight !== null
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

  onShow: function () {
    wx.hideTabBar({})
  },

  onHide: function () {
    wx.showTabBar({})
  },

  onUnload: function () {
    wx.showTabBar({})
  },

  onServiceChange: function (event) {
    var key = event.detail.key

    this.setData({
      activeServiceKey: key,
    })
  },

  onVehicleGroupChange: function (event) {
    var key = event.detail.key
    var nextConfig = vehiclePanelMap[key] || vehiclePanelMap[defaultVehicleGroupKey]

    this.setData({
      activeVehicleGroupKey: key,
      heroWord: nextConfig.heroWord,
      heroBadge: nextConfig.heroBadge,
      vehicleRows: nextConfig.rows,
    })
  },

  onTransportTagTap: function (event) {
    var key = event.detail.key
    showToast(key === 'carpool' ? '零担拼车' : '更多方式')
  },

  onPickupTap: function () {
    showToast('起点信息')
  },

  onOrderEntryTap: function () {
    showToast('选择卸货地')
  },

  onViaPointTap: function () {
    showToast('添加途经点')
  },

  onShortcutTap: function (event) {
    showToast(event.detail.label)
  },

  onPromoTap: function (event) {
    showToast(event.detail.title)
  },

  onBottomNavTap: function (event) {
    var key = event.detail.key
    var label = event.detail.label

    if (key === 'home') {
      return
    }

    if (key === 'mine') {
      wx.switchTab({
        url: '/pages/mine/mine',
      })
      return
    }

    showToast(label)
  },
})
