var defaultOrder = {
  pickupBadge: '装',
  dropoffBadge: '卸',
  pickupTitle: '',
  discountText: '',
  dropoffOptions: [],
}

function normalizeOrder(order) {
  var data = order || {}

  return {
    pickupBadge: data.pickupBadge || defaultOrder.pickupBadge,
    dropoffBadge: data.dropoffBadge || defaultOrder.dropoffBadge,
    pickupTitle: data.pickupTitle || defaultOrder.pickupTitle,
    discountText: data.discountText || defaultOrder.discountText,
    dropoffOptions: Array.isArray(data.dropoffOptions) ? data.dropoffOptions : [],
  }
}

function buildOrderState(order, selectedDropoffLabel) {
  var orderData = normalizeOrder(order)
  var dropoffOptions = orderData.dropoffOptions || []
  var label = selectedDropoffLabel || ''
  var pickerValue = dropoffOptions.indexOf(label)

  return {
    orderData: orderData,
    pickerValue: pickerValue > -1 ? pickerValue : 0,
    currentDropoffLabel: label,
  }
}

Component({
  properties: {
    order: {
      type: Object,
      value: null,
    },
    selectedDropoffLabel: {
      type: String,
      value: '',
    },
    embedded: {
      type: Boolean,
      value: false,
    },
  },

  data: buildOrderState(),

  observers: {
    'order, selectedDropoffLabel': function (order, selectedDropoffLabel) {
      this.setData(buildOrderState(order, selectedDropoffLabel))
    },
  },

  methods: {
    onDropoffChange: function (event) {
      var index = Number(event.detail.value || 0)
      var dropoffOptions = this.data.orderData.dropoffOptions || []
      var selectedLabel = dropoffOptions[index] || ''

      this.setData({
        pickerValue: index,
        currentDropoffLabel: selectedLabel,
      })

      this.triggerEvent('dropoffchange', {
        index: index,
        label: selectedLabel,
      })
    },
  },
})
