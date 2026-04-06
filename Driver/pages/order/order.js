var serviceData = require('../../mock/service-config')
var app = getApp()

var pageData = Object.assign({}, app.globalData.defaultCapsuleLayout, serviceData.createOrderPageState('all'))

Page({
  data: pageData,

  onLoad: function () {
    this.setData(app.getCapsuleLayout())
  },

  onTabTap: function (event) {
    var key = event.currentTarget.dataset.key || 'all'

    this.setData(serviceData.buildOrderTabPatch(key))
  },

  onPrimaryActionTap: function (event) {
    var orderIndex = event.currentTarget.dataset.index
    var orders = this.data.visibleOrders || []
    var order = orders[orderIndex] || {}

    app.showToast(order.primaryActionLabel || '处理中')
  },

  onSecondaryActionTap: function (event) {
    var orderIndex = event.currentTarget.dataset.index
    var orders = this.data.visibleOrders || []
    var order = orders[orderIndex] || {}

    app.showToast(order.secondaryActionLabel || '处理中')
  },
})
