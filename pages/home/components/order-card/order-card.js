Component({
  properties: {
    pickupBadge: {
      type: String,
      value: '装',
    },
    dropoffBadge: {
      type: String,
      value: '卸',
    },
    pickupTitle: {
      type: String,
      value: '',
    },
    discountText: {
      type: String,
      value: '',
    },
    dropoffOptions: {
      type: Array,
      value: [],
    },
  },

  data: {
    pickerValue: 0,
    selectedDropoffLabel: '',
  },

  observers: {
    dropoffOptions: function () {
      this.setData({
        pickerValue: 0,
        selectedDropoffLabel: '',
      })
    },
  },

  methods: {
    onDropoffChange: function (event) {
      var index = Number(event.detail.value || 0)
      var dropoffOptions = this.properties.dropoffOptions || []

      this.setData({
        pickerValue: index,
        selectedDropoffLabel: dropoffOptions[index] || '',
      })
    },
  },
})
