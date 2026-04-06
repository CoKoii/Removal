var serviceData = require('../../mock/service-config')
var app = getApp()

var pageData = Object.assign({}, app.globalData.defaultCapsuleLayout, serviceData.createMinePageState())

Page({
  data: pageData,

  onLoad: function () {
    this.setData(app.getCapsuleLayout())
  },

  onVehicleTap: function () {
    app.showToast(this.data.mine.vehicleCard.actionLabel || '查看车况')
  },

  onMenuTap: function (event) {
    var label = event.currentTarget.dataset.label || '处理中'

    app.showToast(label)
  },

  onSupportTap: function () {
    app.showToast(this.data.mine.supportCard.actionLabel || '联系支持')
  },
})
