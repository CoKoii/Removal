var serviceData = require('../../mock/service-config')
var app = getApp()

var initialPageData = Object.assign({
  safeBottom: app.globalData.defaultSafeBottom,
}, serviceData.createPaymentPageState())

Page({
  data: initialPageData,

  onLoad: function (options) {
    this.setData(Object.assign({
      safeBottom: app.getSafeBottom(),
    }, serviceData.createPaymentPageState(options)))
  },

  onDropoffChange: function (event) {
    this.setData(serviceData.buildDropoffPatch(event.detail))
  },

  onVehicleChange: function (event) {
    this.setData(serviceData.buildPaymentVehiclePatch(this.data.service, event.detail))
  },

  onFieldTap: function (event) {
    var label = (event.detail && event.detail.label) || event.currentTarget.dataset.label

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
