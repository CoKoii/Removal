var homeMock = {
  city: '苏州',
  service: {
    label: '装修垃圾清运',
    vehicleTypes: [
      {
        variant: 'dump',
        name: '重型自卸货车',
        desc: '适合大批量装修垃圾，可提供装车服务',
        models: [
          {
            name: '7吨车',
            volume: '约16m³',
            size: '5.6m×2.2m×1.3m',
            capacity: '约80袋',
            price: 940,
            unit: '元/车',
          },
          {
            name: '8吨车',
            volume: '约18m³',
            size: '6.0m×2.2m×1.4m',
            capacity: '约90袋',
            price: 1050,
            unit: '元/车',
          },
          {
            name: '9吨车',
            volume: '约20m³',
            size: '6.5m×2.3m×1.4m',
            capacity: '约100袋',
            price: 1160,
            unit: '元/车',
          },
        ],
      },
      {
        variant: 'hook',
        name: '勾臂车',
        desc: '箱体可放置，不含装车服务',
        models: [
          {
            name: '5吨箱',
            volume: '约12m³',
            size: '3.8m×1.8m×1.8m',
            capacity: '约60袋',
            price: 600,
            unit: '元/车',
          },
          {
            name: '8吨箱',
            volume: '约18m³',
            size: '4.5m×2.0m×2.0m',
            capacity: '约90袋',
            price: 920,
            unit: '元/车',
          },
        ],
      },
    ],
    orderCard: {
      pickupBadge: '装',
      dropoffBadge: '卸',
      pickupTitle: '苏州大学应用技术学院学生公寓-...',
      discountText: '2选1',
      dropoffOptions: ['昆山资源利用中心', '花桥分处置中心'],
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

function showToast(title) {
  wx.showToast({
    title: title,
    icon: 'none',
  })
}

var defaultHeaderLayout = {
  headerSafeTop: 56,
  capsuleHeight: 32,
  capsuleSpaceWidth: 116,
}

var pageData = Object.assign({}, defaultHeaderLayout, {
  city: homeMock.city,
  service: homeMock.service,
})

function getHeaderLayout() {
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
  var capsuleHeight = menuButtonRect.height || defaultHeaderLayout.capsuleHeight
  var menuButtonLeft = menuButtonRect.left || systemInfo.windowWidth - defaultHeaderLayout.capsuleSpaceWidth
  var capsuleSpaceWidth = Math.max(
    systemInfo.windowWidth - menuButtonLeft,
    108
  )

  return {
    headerSafeTop: headerSafeTop,
    capsuleHeight: capsuleHeight,
    capsuleSpaceWidth: capsuleSpaceWidth,
  }
}

Page({
  data: pageData,

  onLoad: function () {
    this.setData(getHeaderLayout())
  },

  onShortcutTap: function (event) {
    showToast(event.detail.label)
  },

  onPromoTap: function (event) {
    showToast(event.detail.title)
  },
})
