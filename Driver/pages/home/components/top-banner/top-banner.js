Component({
  properties: {
    city: {
      type: String,
      value: '',
    },
    driver: {
      type: Object,
      value: {
        tags: [],
      },
    },
    safeTop: {
      type: Number,
      value: 0,
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
})
