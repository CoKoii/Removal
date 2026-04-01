Component({
  properties: {
    items: {
      type: Array,
      value: [],
    },
    activeOptionKey: {
      type: String,
      value: '',
    },
  },

  methods: {
    onOptionTap: function (event) {
      var key = event.currentTarget.dataset.key || ''

      this.triggerEvent('optiontap', { key: key })
    },
  },
})
