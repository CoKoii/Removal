Component({
  properties: {
    tools: {
      type: Object,
      value: {
        items: [],
      },
    },
  },

  methods: {
    onItemTap: function (event) {
      var itemIndex = event.currentTarget.dataset.index
      var items = (this.properties.tools && this.properties.tools.items) || []
      var item = items[itemIndex] || {}

      this.triggerEvent('itemtap', item)
    },
  },
})
