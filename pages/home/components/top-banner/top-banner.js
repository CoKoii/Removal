Component({
  properties: {
    city: {
      type: String,
      value: '',
    },
    tabs: {
      type: Array,
      value: [],
    },
    activeTabKey: {
      type: String,
      value: '',
    },
    safeTop: {
      type: Number,
      value: 56,
    },
    capsuleHeight: {
      type: Number,
      value: 32,
    },
    capsuleSpaceWidth: {
      type: Number,
      value: 116,
    },
  },

  methods: {
    onTabTap: function (event) {
      var key = event.currentTarget.dataset.key || ''
      var label = event.currentTarget.dataset.label || ''

      this.triggerEvent('tabchange', {
        key: key,
        label: label,
      })
    },
  },
})
