Component({
  properties: {
    pickupBadge: {
      type: String,
      value: '装',
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
    viaPointLabel: {
      type: String,
      value: '',
    },
  },

  methods: {
    onPickupTap: function () {
      this.triggerEvent('pickuptap')
    },

    onEntryTap: function () {
      this.triggerEvent('entrytap')
    },

    onViaTap: function () {
      this.triggerEvent('viatap')
    },
  },
})
