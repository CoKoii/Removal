var serviceData = require('../../mock/service-config')
var app = getApp()

var pageData = Object.assign({}, app.globalData.defaultCapsuleLayout, serviceData.createHomePageState())

Page({
  data: pageData,

  onLoad: function () {
    this.setData(app.getCapsuleLayout())
  },

  onReportTap: function () {
    wx.navigateTo({
      url: '/pages/report/report',
    })
  },

  onMissionActionTap: function (event) {
    var detail = event.detail || {}

    app.showToast(detail.label || '处理中')
  },

  onToolTap: function (event) {
    var detail = event.detail || {}

    app.showToast(detail.label || '处理中')
  },

  onQueueTap: function (event) {
    var detail = event.detail || {}
    var item = detail.item || {}

    app.showToast(item.title || '查看任务')
  },

  onQueuePrimaryTap: function (event) {
    var detail = event.detail || {}
    var item = detail.item || {}

    app.showToast(item.primaryLabel || '查看详情')
  },

  onQueueSecondaryTap: function (event) {
    var detail = event.detail || {}
    var item = detail.item || {}

    app.showToast(item.secondaryLabel || '联系调度')
  },
})
