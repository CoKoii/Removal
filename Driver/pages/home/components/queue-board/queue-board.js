Component({
  properties: {
    queue: {
      type: Object,
      value: {
        items: [],
      },
    },
  },

  methods: {
    onItemTap: function (event) {
      var itemIndex = event.currentTarget.dataset.index
      var items = (this.properties.queue && this.properties.queue.items) || []
      var item = items[itemIndex] || {}

      this.triggerEvent('itemtap', {
        item: item,
      })
    },

    onPrimaryTap: function (event) {
      var itemIndex = event.currentTarget.dataset.index
      var items = (this.properties.queue && this.properties.queue.items) || []
      var item = items[itemIndex] || {}

      this.triggerEvent('primarytap', {
        item: item,
      })
    },

    onSecondaryTap: function (event) {
      var itemIndex = event.currentTarget.dataset.index
      var items = (this.properties.queue && this.properties.queue.items) || []
      var item = items[itemIndex] || {}

      this.triggerEvent('secondarytap', {
        item: item,
      })
    },
  },
})
