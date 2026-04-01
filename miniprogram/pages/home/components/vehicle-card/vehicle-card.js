Component({
  properties: {
    heroWord: {
      type: String,
      value: '跑腿',
    },
    heroBadge: {
      type: String,
      value: '20公斤',
    },
    groups: {
      type: Array,
      value: [],
    },
    activeGroupKey: {
      type: String,
      value: '',
    },
    rows: {
      type: Array,
      value: [],
    },
    moreTransportLabel: {
      type: String,
      value: '',
    },
    transportTags: {
      type: Array,
      value: [],
    },
  },

  methods: {
    onGroupTap: function (event) {
      var key = event.currentTarget.dataset.key || ''
      this.triggerEvent('groupchange', { key: key })
    },

    onTagTap: function (event) {
      var key = event.currentTarget.dataset.key || ''
      this.triggerEvent('tagtap', { key: key })
    },
  },
})
