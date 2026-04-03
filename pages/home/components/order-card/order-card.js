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

  data: {
    orderData: normalizeOrder(),
    pickerValue: 0,
    currentDropoffLabel: '',
  },

  observers: {
    order: function (order) {
      var orderData = normalizeOrder(order)
      var dropoffState = this.buildDropoffState(orderData, this.properties.selectedDropoffLabel)

      this.setData({
        orderData: orderData,
        pickerValue: dropoffState.pickerValue,
        currentDropoffLabel: dropoffState.currentDropoffLabel,
      })
    },
    selectedDropoffLabel: function (selectedDropoffLabel) {
      var dropoffState = this.buildDropoffState(this.data.orderData, selectedDropoffLabel)

      this.setData({
        pickerValue: dropoffState.pickerValue,
        currentDropoffLabel: dropoffState.currentDropoffLabel,
      })
    },
  },

  methods: {
    buildDropoffState: function (orderData, selectedDropoffLabel) {
      var dropoffOptions = (orderData && orderData.dropoffOptions) || []
      var label = selectedDropoffLabel || ''
      var pickerValue = dropoffOptions.indexOf(label)

      return {
        pickerValue: pickerValue > -1 ? pickerValue : 0,
        currentDropoffLabel: label,
      }
    },

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
