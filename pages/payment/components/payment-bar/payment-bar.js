Component({
  properties: {
    scheduleLabel: {
      type: String,
      value: '选预约',
    },
    deferredPrice: {
      type: String,
      value: '0.00',
    },
    instantPrice: {
      type: String,
      value: '0.00',
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

    onPayTap: function (event) {
      this.triggerEvent('paytap', {
        mode: event.currentTarget.dataset.mode,
      })
    },
  },
})
