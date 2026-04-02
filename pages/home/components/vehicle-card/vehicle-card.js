function normalizeIndex(index, length, fallback) {
  var parsedIndex = parseInt(index, 10)

  if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= length) {
    return fallback
  }

  return parsedIndex
}

function buildEmptySelection() {
  return {
    activeTypeIndex: -1,
    activeModelIndex: -1,
    selectedType: null,
    selectedModels: [],
    selectedModel: null,
    heroVariant: 'dump',
  }
}

function buildSelection(vehicleTypes, typeIndex, modelIndex) {
  var types = Array.isArray(vehicleTypes) ? vehicleTypes : []

  if (!types.length) {
    return buildEmptySelection()
  }

  var nextTypeIndex = normalizeIndex(typeIndex, types.length, 0)
  var selectedType = types[nextTypeIndex]
  var selectedModels = Array.isArray(selectedType.models) ? selectedType.models : []
  var nextModelIndex = normalizeIndex(modelIndex, selectedModels.length, -1)
  var selectedModel = nextModelIndex > -1 ? selectedModels[nextModelIndex] : null

  return {
    activeTypeIndex: nextTypeIndex,
    activeModelIndex: nextModelIndex,
    selectedType: selectedType,
    selectedModels: selectedModels,
    selectedModel: selectedModel,
    heroVariant: selectedType.variant || 'dump',
  }
}

Component({
  properties: {
    vehicleTypes: {
      type: Array,
      value: [],
    },
  },

  data: buildEmptySelection(),

  observers: {
    vehicleTypes: function (vehicleTypes) {
      this.setData(buildSelection(vehicleTypes, 0, -1))
    },
  },

  methods: {
    applySelection: function (typeIndex, modelIndex) {
      this.setData(buildSelection(this.properties.vehicleTypes, typeIndex, modelIndex))
    },

    onTypeTap: function (event) {
      var typeIndex = event.currentTarget.dataset.index

      this.applySelection(typeIndex, -1)
    },

    onModelTap: function (event) {
      var modelIndex = event.currentTarget.dataset.index

      this.applySelection(this.data.activeTypeIndex, modelIndex)
    },
  },
})
