var serviceData = require('../../mock/service-config')
var app = getApp()

var pageData = Object.assign({}, app.globalData.defaultCapsuleLayout, serviceData.createHomePageState())

Page({
  data: pageData,

  onLoad: function () {
    this.setData(app.getCapsuleLayout())
  },

  onShow: function () {
    if (!this.shouldRefreshOnShow) {
      return
    }

    this.shouldRefreshOnShow = false
    this.setData(serviceData.createHomePageState())
  },

  onShortcutTap: function (event) {
    app.showToast(event.detail.label)
  },

  onPromoTap: function (event) {
    app.showToast(event.detail.title)
  },

  onVehicleChange: function (event) {
    this.setData(serviceData.buildVehicleSelectionPatch(event.detail))
  },

  onDropoffChange: function (event) {
    this.setData(serviceData.buildDropoffPatch(event.detail))
    this.shouldRefreshOnShow = true

    wx.navigateTo({
      url: serviceData.buildPaymentUrl(this.data, event.detail),
    })
  },
})
