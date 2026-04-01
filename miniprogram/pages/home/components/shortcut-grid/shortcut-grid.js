Component({
  properties: {
    items: {
      type: Array,
      value: [],
    },
  },

  methods: {
    onItemTap: function (event) {
      var key = event.currentTarget.dataset.key || ''
      var label = event.currentTarget.dataset.label || ''

      this.triggerEvent('itemtap', {
        key: key,
        label: label,
      })
    },
  },
})
