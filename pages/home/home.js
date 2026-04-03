var serviceData = require('../../mock/service-config')
var app = getApp()

var pageData = Object.assign({}, app.globalData.defaultCapsuleLayout, serviceData.createHomePageState())

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
    this.setData(serviceData.buildVehicleSelectionPatch(event.detail))
  },

  onDropoffChange: function (event) {
    wx.navigateTo({
      url: serviceData.buildPaymentUrl(this.data, event.detail),
    })
  },
})
