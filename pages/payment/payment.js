var serviceData = require('../../mock/service-config')
var app = getApp()

function normalizeIndex(index, fallback) {
  var parsedIndex = parseInt(index, 10)

  if (isNaN(parsedIndex) || parsedIndex < 0) {
    return fallback
  }

  return parsedIndex
}

function buildFieldGroups(groups) {
  return (Array.isArray(groups) ? groups : []).map(function (group, groupIndex) {
    return {
      groupKey: 'group-' + groupIndex,
      items: (Array.isArray(group) ? group : []).map(function (item, itemIndex) {
        return Object.assign({}, item, {
          rowKey: item.key || 'row-' + groupIndex + '-' + itemIndex,
        })
      }),
    }
  })
}

function getSelectedOption(options, selectedKey) {
  var optionList = Array.isArray(options) ? options : []
  var matchedOption = null

  optionList.some(function (item) {
    if (item.key === selectedKey) {
      matchedOption = item

      return true
    }

    return false
  })

  return matchedOption || optionList[0] || { price: '0.00', deferredPrice: '0.00' }
}

Page({
  data: Object.assign({}, app.globalData.defaultCapsuleLayout, {
    safeBottom: app.globalData.defaultSafeBottom,
    service: {},
    paymentOptions: [],
    toggleItems: [],
    fieldGroups: [],
    selectedOptionKey: '',
    selectedDropoffLabel: '',
    activeVehicleTypeIndex: 0,
    activeVehicleModelIndex: 0,
    instantPrice: '0.00',
    deferredPrice: '0.00',
    scheduleLabel: '',
  }),

  onLoad: function (options) {
    var mockData = serviceData.cloneData()
    var paymentData = mockData.payment || {}
    var selectedOptionKey = paymentData.defaultOptionKey || ''
    var selectedOption = getSelectedOption(paymentData.options, selectedOptionKey)
    var typeIndex = normalizeIndex(options.typeIndex, 0)
    var modelIndex = normalizeIndex(options.modelIndex, 0)
    var dropoffLabel = options.dropoffLabel ? decodeURIComponent(options.dropoffLabel) : ''

    this.setData(
      Object.assign({}, app.getPageChromeLayout(), {
        service: mockData.service,
        paymentOptions: paymentData.options || [],
        toggleItems: paymentData.toggles || [],
        fieldGroups: buildFieldGroups(paymentData.fieldGroups),
        selectedOptionKey: selectedOptionKey,
        selectedDropoffLabel: dropoffLabel,
        activeVehicleTypeIndex: typeIndex,
        activeVehicleModelIndex: modelIndex,
        instantPrice: selectedOption.price || '0.00',
        deferredPrice: selectedOption.deferredPrice || selectedOption.price || '0.00',
        scheduleLabel: paymentData.scheduleLabel || '选预约',
      })
    )
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
    this.setData({
      selectedDropoffLabel: event.detail.label || '',
    })
  },

  onVehicleChange: function (event) {
    this.setData({
      activeVehicleTypeIndex: event.detail.typeIndex,
      activeVehicleModelIndex: event.detail.modelIndex,
    })
  },

  onOptionChange: function (event) {
    var selectedOptionKey = event.detail.key || ''
    var selectedOption = getSelectedOption(this.data.paymentOptions, selectedOptionKey)

    this.setData({
      selectedOptionKey: selectedOptionKey,
      instantPrice: selectedOption.price || '0.00',
      deferredPrice: selectedOption.deferredPrice || selectedOption.price || '0.00',
    })
  },

  onToggleChange: function (event) {
    var changedKey = event.detail.key
    var nextToggleItems = (this.data.toggleItems || []).map(function (item) {
      if (item.key !== changedKey) {
        return item
      }

      return Object.assign({}, item, {
        checked: !item.checked,
      })
    })

    this.setData({
      toggleItems: nextToggleItems,
    })
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
