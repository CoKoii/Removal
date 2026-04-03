var rawServiceConfig = {
  city: '苏州',
  service: {
    label: '装修垃圾清运',
    vehicleTypes: [
      {
        variant: 'dump',
        name: '重型自卸货车',
        desc: '适合大批量装修垃圾，可提供装车服务',
        models: [
          {
            name: '7吨车',
            volume: '约16m³',
            size: '5.6m×2.2m×1.3m',
            capacity: '约80袋',
            price: 940,
            unit: '元/车',
          },
          {
            name: '8吨车',
            volume: '约18m³',
            size: '6.0m×2.2m×1.4m',
            capacity: '约90袋',
            price: 1050,
            unit: '元/车',
          },
          {
            name: '9吨车',
            volume: '约20m³',
            size: '6.5m×2.3m×1.4m',
            capacity: '约100袋',
            price: 1160,
            unit: '元/车',
          },
        ],
      },
      {
        variant: 'hook',
        name: '勾臂车',
        desc: '箱体可放置，不含装车服务',
        models: [
          {
            name: '5吨箱',
            volume: '约12m³',
            size: '3.8m×1.8m×1.8m',
            capacity: '约60袋',
            price: 600,
            unit: '元/车',
          },
          {
            name: '8吨箱',
            volume: '约18m³',
            size: '4.5m×2.0m×2.0m',
            capacity: '约90袋',
            price: 920,
            unit: '元/车',
          },
        ],
      },
    ],
    orderCard: {
      pickupBadge: '装',
      dropoffBadge: '卸',
      pickupTitle: '苏州大学应用技术学院学生公寓-...',
      discountText: '2选1',
      dropoffOptions: ['昆山资源利用中心', '花桥分处置中心'],
    },
    quickActions: [
      { key: 'business', label: '企业用车', icon: 'enterprise' },
      { key: 'logistics', label: '发物流', icon: 'logistics' },
      { key: 'bulky', label: '搬大件', icon: 'bulky' },
      { key: 'driver', label: '司机加入', icon: 'driver' },
      { key: 'fuel', label: '加油充电', icon: 'fuel' },
    ],
    promoCards: [
      { key: 'cross-logistics', title: '跨城货物', highlight: '物流', theme: 'blue' },
      { key: 'task-center', title: '任务中心', highlight: '领券赚红包', theme: 'red' },
    ],
  },
  payment: {
    defaultOptionKey: 'direct',
    options: [
      {
        key: 'carpool',
        title: '拼送',
        desc: '/件小拼送更划算',
        price: '6.23',
        deferredPrice: '8.31',
        badge: '',
        promoText: '',
      },
      {
        key: 'direct',
        title: '1对1直送',
        desc: '专人直送 更快更安全',
        price: '6.22',
        deferredPrice: '8.30',
        badge: '',
        promoText: '限时 -2.08元',
      },
      {
        key: 'express',
        title: '特快',
        desc: '急用车 更快接单',
        price: '9.55',
        deferredPrice: '11.63',
        badge: '1对1直送',
        promoText: '',
      },
    ],
    toggles: [
      { key: 'invoice', label: '开票', checked: false },
      { key: 'receipt', label: '回单', checked: false },
    ],
    fieldGroups: [
      [
        { key: 'remark', label: '订单备注', value: '', placeholder: '' },
        { key: 'phone', label: '联系电话', value: '13390945900', placeholder: '' },
      ],
      [
        { key: 'code', label: '取件/收件码', value: '未开启', placeholder: '' },
        { key: 'insurance', label: '物品保价', value: '贵重物品建议保价', placeholder: '' },
      ],
      [{ key: 'favoriteRider', label: '收藏骑手', value: '', placeholder: '' }],
    ],
    scheduleLabel: '选预约',
  },
}

var defaultOrderCard = {
  pickupBadge: '装',
  dropoffBadge: '卸',
  pickupTitle: '',
  discountText: '',
  dropoffOptions: [],
}

var defaultPaymentOption = {
  key: '',
  title: '',
  desc: '',
  price: '0.00',
  deferredPrice: '0.00',
  badge: '',
  promoText: '',
}

function cloneValue(value) {
  return JSON.parse(JSON.stringify(value))
}

function pickValue(value, fallback) {
  return value === undefined || value === null || value === '' ? fallback : value
}

function normalizeIndex(index, length, fallback) {
  var parsedIndex = parseInt(index, 10)

  if (!length) {
    return fallback
  }

  if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= length) {
    return fallback
  }

  return parsedIndex
}

function parseSelectionIndex(index, fallback) {
  var parsedIndex = parseInt(index, 10)

  if (isNaN(parsedIndex)) {
    return fallback
  }

  return parsedIndex
}

function normalizeVehicleModel(model) {
  var data = model || {}

  return {
    name: pickValue(data.name, ''),
    volume: pickValue(data.volume, ''),
    size: pickValue(data.size, ''),
    capacity: pickValue(data.capacity, ''),
    price: pickValue(data.price, 0),
    unit: pickValue(data.unit, '元/车'),
  }
}

function normalizeVehicleType(type, typeIndex) {
  var data = type || {}

  return {
    key: pickValue(data.key, 'vehicle-type-' + typeIndex),
    variant: pickValue(data.variant, 'dump'),
    name: pickValue(data.name, ''),
    desc: pickValue(data.desc, ''),
    models: (Array.isArray(data.models) ? data.models : []).map(normalizeVehicleModel),
  }
}

function normalizeOrderCard(orderCard) {
  var data = orderCard || {}

  return {
    pickupBadge: pickValue(data.pickupBadge, defaultOrderCard.pickupBadge),
    dropoffBadge: pickValue(data.dropoffBadge, defaultOrderCard.dropoffBadge),
    pickupTitle: pickValue(data.pickupTitle, defaultOrderCard.pickupTitle),
    discountText: pickValue(data.discountText, defaultOrderCard.discountText),
    dropoffOptions: (Array.isArray(data.dropoffOptions) ? data.dropoffOptions : []).map(function (item) {
      return pickValue(item, '')
    }),
  }
}

function normalizeQuickAction(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'quick-action-' + itemIndex),
    label: pickValue(data.label, ''),
    icon: pickValue(data.icon, ''),
  }
}

function normalizePromoCard(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'promo-card-' + itemIndex),
    title: pickValue(data.title, ''),
    highlight: pickValue(data.highlight, ''),
    theme: pickValue(data.theme, 'blue'),
  }
}

function normalizeServiceConfig(service) {
  var data = service || {}

  return {
    label: pickValue(data.label, ''),
    vehicleTypes: (Array.isArray(data.vehicleTypes) ? data.vehicleTypes : []).map(normalizeVehicleType),
    orderCard: normalizeOrderCard(data.orderCard),
    quickActions: (Array.isArray(data.quickActions) ? data.quickActions : []).map(normalizeQuickAction),
    promoCards: (Array.isArray(data.promoCards) ? data.promoCards : []).map(normalizePromoCard),
  }
}

function normalizePaymentOption(item, itemIndex) {
  var data = item || {}
  var price = pickValue(data.price, defaultPaymentOption.price)

  return {
    key: pickValue(data.key, 'payment-option-' + itemIndex),
    title: pickValue(data.title, defaultPaymentOption.title),
    desc: pickValue(data.desc, defaultPaymentOption.desc),
    price: price,
    deferredPrice: pickValue(data.deferredPrice, price),
    badge: pickValue(data.badge, defaultPaymentOption.badge),
    promoText: pickValue(data.promoText, defaultPaymentOption.promoText),
  }
}

function normalizeToggleItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'toggle-' + itemIndex),
    label: pickValue(data.label, ''),
    checked: !!data.checked,
  }
}

function normalizeFieldRow(item, groupIndex, itemIndex) {
  var data = item || {}
  var key = pickValue(data.key, 'row-' + groupIndex + '-' + itemIndex)

  return {
    key: key,
    rowKey: key,
    label: pickValue(data.label, ''),
    value: pickValue(data.value, ''),
    placeholder: pickValue(data.placeholder, ''),
  }
}

function normalizeFieldGroup(group, groupIndex) {
  return {
    groupKey: 'group-' + groupIndex,
    items: (Array.isArray(group) ? group : []).map(function (item, itemIndex) {
      return normalizeFieldRow(item, groupIndex, itemIndex)
    }),
  }
}

function normalizePaymentConfig(payment) {
  var data = payment || {}
  var options = (Array.isArray(data.options) ? data.options : []).map(normalizePaymentOption)
  var defaultOptionKey = pickValue(data.defaultOptionKey, '')

  return {
    defaultOptionKey: defaultOptionKey,
    options: options,
    toggles: (Array.isArray(data.toggles) ? data.toggles : []).map(normalizeToggleItem),
    fieldGroups: (Array.isArray(data.fieldGroups) ? data.fieldGroups : []).map(normalizeFieldGroup),
    scheduleLabel: pickValue(data.scheduleLabel, '选预约'),
  }
}

function buildVehicleSelectionState(service, typeIndex, modelIndex, fallbackModelIndex) {
  var vehicleTypes = (service && service.vehicleTypes) || []

  if (!vehicleTypes.length) {
    return {
      activeVehicleTypeIndex: -1,
      activeVehicleModelIndex: -1,
    }
  }

  var nextTypeIndex = normalizeIndex(typeIndex, vehicleTypes.length, 0)
  var selectedModels = vehicleTypes[nextTypeIndex].models || []
  var nextModelFallback = selectedModels.length ? fallbackModelIndex : -1

  return {
    activeVehicleTypeIndex: nextTypeIndex,
    activeVehicleModelIndex: selectedModels.length
      ? normalizeIndex(modelIndex, selectedModels.length, nextModelFallback)
      : -1,
  }
}

function getSelectedPaymentOption(options, selectedKey) {
  var optionList = Array.isArray(options) ? options : []
  var matchedOption = null

  optionList.some(function (item) {
    if (item.key === selectedKey) {
      matchedOption = item

      return true
    }

    return false
  })

  return matchedOption || optionList[0] || cloneValue(defaultPaymentOption)
}

function buildPaymentOptionState(options, selectedKey) {
  var selectedOption = getSelectedPaymentOption(options, selectedKey)

  return {
    selectedOptionKey: selectedOption.key,
    instantPrice: selectedOption.price,
    deferredPrice: selectedOption.deferredPrice,
  }
}

function decodeRouteLabel(encodedLabel) {
  return encodedLabel ? decodeURIComponent(encodedLabel) : ''
}

function cloneData() {
  return cloneValue(rawServiceConfig)
}

function createHomePageState() {
  var source = cloneData()
  var service = normalizeServiceConfig(source.service)

  return Object.assign(
    {
      city: pickValue(source.city, ''),
      service: service,
      selectedDropoffLabel: '',
    },
    buildVehicleSelectionState(service, 0, -1, -1)
  )
}

function createPaymentPageState(routeOptions) {
  var source = cloneData()
  var service = normalizeServiceConfig(source.service)
  var payment = normalizePaymentConfig(source.payment)
  var options = routeOptions || {}

  return Object.assign(
    {
      service: service,
      paymentOptions: payment.options,
      toggleItems: payment.toggles,
      fieldGroups: payment.fieldGroups,
      selectedDropoffLabel: decodeRouteLabel(options.dropoffLabel),
      scheduleLabel: payment.scheduleLabel,
    },
    buildVehicleSelectionState(service, options.typeIndex, options.modelIndex, 0),
    buildPaymentOptionState(payment.options, payment.defaultOptionKey)
  )
}

function buildVehicleSelectionPatch(detail) {
  var selection = detail || {}

  return {
    activeVehicleTypeIndex: parseSelectionIndex(selection.typeIndex, 0),
    activeVehicleModelIndex: parseSelectionIndex(selection.modelIndex, -1),
  }
}

function buildDropoffPatch(detail) {
  return {
    selectedDropoffLabel: (detail && detail.label) || '',
  }
}

function buildPaymentOptionPatch(options, selectedKey) {
  return buildPaymentOptionState(options, selectedKey)
}

function buildToggleItemsPatch(toggleItems, changedKey) {
  return {
    toggleItems: (Array.isArray(toggleItems) ? toggleItems : []).map(function (item) {
      if (item.key !== changedKey) {
        return item
      }

      return Object.assign({}, item, {
        checked: !item.checked,
      })
    }),
  }
}

function buildPaymentUrl(pageState, dropoffDetail) {
  var detail = dropoffDetail || {}

  return (
    '/pages/payment/payment?dropoffLabel=' +
    encodeURIComponent(detail.label || '') +
    '&typeIndex=' +
    parseSelectionIndex(pageState && pageState.activeVehicleTypeIndex, 0) +
    '&modelIndex=' +
    parseSelectionIndex(pageState && pageState.activeVehicleModelIndex, -1)
  )
}

module.exports = {
  serviceConfig: rawServiceConfig,
  cloneData: cloneData,
  createHomePageState: createHomePageState,
  createPaymentPageState: createPaymentPageState,
  buildVehicleSelectionPatch: buildVehicleSelectionPatch,
  buildDropoffPatch: buildDropoffPatch,
  buildPaymentOptionPatch: buildPaymentOptionPatch,
  buildToggleItemsPatch: buildToggleItemsPatch,
  buildPaymentUrl: buildPaymentUrl,
}
