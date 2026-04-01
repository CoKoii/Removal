Component({
  properties: {
    cards: {
      type: Array,
      value: [],
    },
  },

  methods: {
    onCardTap: function (event) {
      var key = event.currentTarget.dataset.key || ''
      var title = event.currentTarget.dataset.title || ''

      this.triggerEvent('cardtap', {
        key: key,
        title: title,
      })
    },
  },
})
