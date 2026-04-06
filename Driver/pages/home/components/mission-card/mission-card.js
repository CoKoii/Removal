Component({
  properties: {
    mission: {
      type: Object,
      value: {
        pickup: {},
        dropoff: {},
        meta: [],
        progress: [],
        actions: [],
      },
    },
  },

  methods: {
    onActionTap: function (event) {
      var actionIndex = event.currentTarget.dataset.index
      var actions = (this.properties.mission && this.properties.mission.actions) || []
      var action = actions[actionIndex] || {}

      this.triggerEvent('actiontap', action)
    },
  },
})
