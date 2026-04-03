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

function buildSelection(vehicleTypes, typeIndex, modelIndex, mode) {
  var types = Array.isArray(vehicleTypes) ? vehicleTypes : []

  if (!types.length) {
    return buildEmptySelection()
  }

  var nextTypeIndex = normalizeIndex(typeIndex, types.length, 0)
  var selectedType = types[nextTypeIndex]
  var selectedModels = Array.isArray(selectedType.models) ? selectedType.models : []
  var nextModelIndex = selectedModels.length
    ? normalizeIndex(modelIndex, selectedModels.length, mode === 'payment' ? 0 : -1)
    : -1
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
    selectedTypeIndex: {
      type: Number,
      value: 0,
    },
    selectedModelIndex: {
      type: Number,
      value: -1,
    },
    mode: {
      type: String,
      value: 'home',
    },
    embedded: {
      type: Boolean,
      value: false,
    },
  },

  data: Object.assign(
    {
      paymentExpanded: false,
    },
    buildEmptySelection()
  ),

  observers: {
    'vehicleTypes, selectedTypeIndex, selectedModelIndex, mode': function (
      vehicleTypes,
      selectedTypeIndex,
      selectedModelIndex,
      mode
    ) {
      this.setData(buildSelection(vehicleTypes, selectedTypeIndex, selectedModelIndex, mode))
    },
  },

  methods: {
    applySelection: function (typeIndex, modelIndex) {
      var selection = buildSelection(this.properties.vehicleTypes, typeIndex, modelIndex, this.properties.mode)

      this.setData(selection)
      this.triggerEvent('selectionchange', {
        typeIndex: selection.activeTypeIndex,
        modelIndex: selection.activeModelIndex,
        typeName: selection.selectedType ? selection.selectedType.name : '',
        modelName: selection.selectedModel ? selection.selectedModel.name : '',
      })
    },

    onTypeTap: function (event) {
      var typeIndex = event.currentTarget.dataset.index

      this.applySelection(typeIndex, -1)
    },

    onModelTap: function (event) {
      var modelIndex = event.currentTarget.dataset.index

      this.applySelection(this.data.activeTypeIndex, modelIndex)
    },

    onPaymentExpandToggle: function () {
      this.setData({
        paymentExpanded: !this.data.paymentExpanded,
      })
    },
  },
})
