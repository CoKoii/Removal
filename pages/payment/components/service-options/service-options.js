Component({
  properties: {
    options: {
      type: Array,
      value: [],
    },
    toggles: {
      type: Array,
      value: [],
    },
    selectedKey: {
      type: String,
      value: '',
    },
  },

  methods: {
    onOptionTap: function (event) {
      this.triggerEvent('optionchange', {
        key: event.currentTarget.dataset.key,
      })
    },

    onToggleTap: function (event) {
      this.triggerEvent('togglechange', {
        key: event.currentTarget.dataset.key,
      })
    },
  },
})
