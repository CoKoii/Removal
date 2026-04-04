Component({
  properties: {
    scheduleLabel: {
      type: String,
      value: '选预约',
    },
    payPrice: {
      type: String,
      value: '0.00',
    },
    payLabel: {
      type: String,
      value: '确认预约并支付',
    },
    safeBottom: {
      type: Number,
      value: 18,
    },
  },

  methods: {
    onScheduleTap: function () {
      this.triggerEvent('scheduletap')
    },

    onPayTap: function () {
      this.triggerEvent('paytap')
    },
  },
})
