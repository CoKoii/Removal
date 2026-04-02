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
    dropoffPrimaryText: {
      type: String,
      value: '',
    },
    dropoffSecondaryText: {
      type: String,
      value: '',
    },
  },

  data: {
    isSwapped: false,
  },

  methods: {
    onSwapTap: function () {
      this.setData({
        isSwapped: !this.data.isSwapped,
      })
    },

    onAddressTap: function (event) {
      var role = event.currentTarget.dataset.role || 'pickup'
      var eventName = role === 'entry' ? 'entrytap' : 'pickuptap'

      this.triggerEvent(eventName)
    },
  },
})
