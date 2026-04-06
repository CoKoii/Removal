var serviceData = require('../../mock/service-config')
var app = getApp()

var initialPageData = Object.assign({
  safeBottom: app.globalData.defaultSafeBottom,
}, serviceData.createPaymentPageState())

function buildGarbagePhotoItems(filePaths) {
  var paths = Array.isArray(filePaths) ? filePaths : []
  var timestamp = Date.now()

  return paths.map(function (url, index) {
    return {
      key: 'garbage-photo-' + timestamp + '-' + index,
      url: url,
    }
  })
}

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

  onServiceToggle: function () {
    this.setData({
      needsLoadingService: !this.data.needsLoadingService,
    })
  },

  onAddGarbagePhoto: function () {
    var that = this
    var currentPhotos = this.data.garbagePhotos || []
    var photoConfig = this.data.garbagePhotoConfig || {}
    var maxCount = photoConfig.maxCount || 6
    var remainingCount = maxCount - currentPhotos.length

    if (remainingCount <= 0) {
      app.showToast('最多上传' + maxCount + '张')
      return
    }

    wx.chooseImage({
      count: remainingCount,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var nextPhotos = currentPhotos.concat(buildGarbagePhotoItems(res.tempFilePaths))

        that.setData({
          garbagePhotos: nextPhotos.slice(0, maxCount),
        })
      },
      fail: function (err) {
        if (err && err.errMsg && err.errMsg.indexOf('cancel') === -1) {
          app.showToast('上传失败')
        }
      },
    })
  },

  onPreviewGarbagePhoto: function (event) {
    var photos = this.data.garbagePhotos || []
    var currentUrl = event.currentTarget.dataset.url
    var urls = photos.map(function (item) {
      return item.url
    })

    if (!currentUrl || !urls.length) {
      return
    }

    wx.previewImage({
      current: currentUrl,
      urls: urls,
    })
  },

  onRemoveGarbagePhoto: function (event) {
    var targetKey = event.currentTarget.dataset.key
    var photos = this.data.garbagePhotos || []

    this.setData({
      garbagePhotos: photos.filter(function (item) {
        return item.key !== targetKey
      }),
    })
  },

  onScheduleTap: function () {
    app.showToast('预约下单')
  },

  onPayTap: function () {
    var photoConfig = this.data.garbagePhotoConfig || {}
    var requiredTag = photoConfig.requiredTag
    var photos = this.data.garbagePhotos || []

    if (requiredTag && !photos.length) {
      app.showToast('请上传垃圾照片')
      return
    }

    app.showToast('确认预约并支付')
  },
})
