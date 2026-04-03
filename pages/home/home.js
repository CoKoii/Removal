var serviceData = require('../../mock/service-config')
var homeMock = serviceData.cloneData()

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
  activeVehicleTypeIndex: 0,
  activeVehicleModelIndex: -1,
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

  onVehicleChange: function (event) {
    this.setData({
      activeVehicleTypeIndex: event.detail.typeIndex,
      activeVehicleModelIndex: event.detail.modelIndex,
    })
  },

  onDropoffChange: function (event) {
    var detail = event.detail || {}
    var typeIndex = this.data.activeVehicleTypeIndex
    var modelIndex = this.data.activeVehicleModelIndex
    var url =
      '/pages/payment/payment?dropoffLabel=' +
      encodeURIComponent(detail.label || '') +
      '&typeIndex=' +
      typeIndex +
      '&modelIndex=' +
      modelIndex

    wx.navigateTo({
      url: url,
    })
  },
})
