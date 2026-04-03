var serviceData = require('../../mock/service-config')
var app = getApp()

var initialPageData = Object.assign({}, app.globalData.defaultCapsuleLayout, {
  safeBottom: app.globalData.defaultSafeBottom,
}, serviceData.createPaymentPageState())

Page({
  data: initialPageData,

  onLoad: function (options) {
    this.setData(Object.assign({}, app.getPageChromeLayout(), serviceData.createPaymentPageState(options)))
  },

  onBackTap: function () {
    if (getCurrentPages().length > 1) {
      wx.navigateBack({
        delta: 1,
      })

      return
    }

    wx.switchTab({
      url: '/pages/home/home',
    })
  },

  onHomeTap: function () {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },

  onDropoffChange: function (event) {
    this.setData(serviceData.buildDropoffPatch(event.detail))
  },

  onVehicleChange: function (event) {
    this.setData(serviceData.buildVehicleSelectionPatch(event.detail))
  },

  onOptionChange: function (event) {
    this.setData(serviceData.buildPaymentOptionPatch(this.data.paymentOptions, event.detail.key))
  },

  onToggleChange: function (event) {
    this.setData(serviceData.buildToggleItemsPatch(this.data.toggleItems, event.detail.key))
  },

  onFieldTap: function (event) {
    var label = event.currentTarget.dataset.label

    if (label) {
      app.showToast(label)
    }
  },

  onScheduleTap: function () {
    app.showToast('预约下单')
  },

  onPayTap: function (event) {
    app.showToast(event.detail.mode === 'deferred' ? '到付' : '现付')
  },
})
