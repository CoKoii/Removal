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
  },

  data: {
    orderData: normalizeOrder(),
    pickerValue: 0,
    selectedDropoffLabel: '',
  },

  observers: {
    order: function (order) {
      this.setData({
        orderData: normalizeOrder(order),
        pickerValue: 0,
        selectedDropoffLabel: '',
      })
    },
  },

  methods: {
    onDropoffChange: function (event) {
      var index = Number(event.detail.value || 0)
      var dropoffOptions = this.data.orderData.dropoffOptions || []

      this.setData({
        pickerValue: index,
        selectedDropoffLabel: dropoffOptions[index] || '',
      })
    },
  },
})
