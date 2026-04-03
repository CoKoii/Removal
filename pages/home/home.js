var serviceData = require('../../mock/service-config')
var app = getApp()
var homeMock = serviceData.cloneData()

var pageData = Object.assign({}, app.globalData.defaultCapsuleLayout, {
  city: homeMock.city,
  service: homeMock.service,
  activeVehicleTypeIndex: 0,
  activeVehicleModelIndex: -1,
})

Page({
  data: pageData,

  onLoad: function () {
    this.setData(app.getCapsuleLayout())
  },

  onShortcutTap: function (event) {
    app.showToast(event.detail.label)
  },

  onPromoTap: function (event) {
    app.showToast(event.detail.title)
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
