var rawServiceConfig = {
  city: "苏州",
  service: {
    label: "装修垃圾",
    vehicleTypes: [
      {
        variant: "dump",
        name: "重型自卸货车",
        desc: "适合大批量装修垃圾，可提供装车服务",
        models: [
          {
            name: "7吨车",
            volume: "约16m³",
            capacity: "约100袋",
            price: 940,
            unit: "元/车",
          },
          {
            name: "8吨车",
            volume: "约18m³",
            capacity: "约90袋",
            price: 1050,
            unit: "元/车",
          },
          {
            name: "9吨车",
            volume: "约20m³",
            capacity: "约100袋",
            price: 1160,
            unit: "元/车",
          },
        ],
      },
      {
        variant: "hook",
        name: "勾臂车",
        desc: "箱体可放置，不含装车服务",
        models: [
          {
            name: "5吨箱",
            volume: "约12m³",
            capacity: "约90袋",
            price: 600,
            unit: "元/车",
          },
          {
            name: "8吨箱",
            volume: "约18m³",
            capacity: "约90袋",
            price: 920,
            unit: "元/车",
          },
        ],
      },
    ],
    orderCard: {
      pickupBadge: "装",
      dropoffBadge: "卸",
      pickupTitle: "苏州大学应用技术学院学生公寓-...",
      discountText: "立即预约",
      dropoffOptions: ["昆山资源利用中心", "花桥分处置中心"],
    },
    quickActions: [
      { key: "business", label: "企业用车", icon: "enterprise" },
      { key: "logistics", label: "发物流", icon: "logistics" },
      { key: "bulky", label: "搬大件", icon: "bulky" },
      { key: "driver", label: "司机加入", icon: "driver" },
      { key: "fuel", label: "加油充电", icon: "fuel" },
    ],
    processFlow: {
      title: "清运流程",
      steps: ["在线预约", "派单接单", "上门装卸", "交付确认", "合规处置"],
      feedbackText: "问题反馈",
      highlights: ["城管局认证合规", "全程电子联单", "合规清运率100%", "信用A+"],
    },
  },
  payment: {
    fieldGroups: [
      [
        { key: "remark", label: "订单备注", value: "", placeholder: "" },
        {
          key: "phone",
          label: "联系电话",
          value: "13390945900",
          placeholder: "",
        },
      ],
      [
        { key: "code", label: "取件/收件码", value: "未开启", placeholder: "" },
        {
          key: "insurance",
          label: "物品保价",
          value: "贵重物品建议保价",
          placeholder: "",
        },
      ],
      [{ key: "favoriteRider", label: "收藏骑手", value: "", placeholder: "" }],
    ],
    scheduleLabel: "选预约",
  },
};

var defaultOrderCard = {
  pickupBadge: "装",
  dropoffBadge: "卸",
  pickupTitle: "",
  discountText: "",
  dropoffOptions: [],
};

function cloneValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function pickValue(value, fallback) {
  return value === undefined || value === null || value === ""
    ? fallback
    : value;
}

function normalizeIndex(index, length, fallback) {
  var parsedIndex = parseInt(index, 10);

  if (!length) {
    return fallback;
  }

  if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= length) {
    return fallback;
  }

  return parsedIndex;
}

function parseSelectionIndex(index, fallback) {
  var parsedIndex = parseInt(index, 10);

  if (isNaN(parsedIndex)) {
    return fallback;
  }

  return parsedIndex;
}

function normalizeVehicleModel(model) {
  var data = model || {};

  return {
    name: pickValue(data.name, ""),
    volume: pickValue(data.volume, ""),
    capacity: pickValue(data.capacity, ""),
    price: pickValue(data.price, 0),
    unit: pickValue(data.unit, "元/车"),
  };
}

function normalizeVehicleType(type, typeIndex) {
  var data = type || {};

  return {
    key: pickValue(data.key, "vehicle-type-" + typeIndex),
    variant: pickValue(data.variant, "dump"),
    name: pickValue(data.name, ""),
    desc: pickValue(data.desc, ""),
    models: (Array.isArray(data.models) ? data.models : []).map(
      normalizeVehicleModel,
    ),
  };
}

function normalizeOrderCard(orderCard) {
  var data = orderCard || {};

  return {
    pickupBadge: pickValue(data.pickupBadge, defaultOrderCard.pickupBadge),
    dropoffBadge: pickValue(data.dropoffBadge, defaultOrderCard.dropoffBadge),
    pickupTitle: pickValue(data.pickupTitle, defaultOrderCard.pickupTitle),
    discountText: pickValue(data.discountText, defaultOrderCard.discountText),
    dropoffOptions: (Array.isArray(data.dropoffOptions)
      ? data.dropoffOptions
      : []
    ).map(function (item) {
      return pickValue(item, "");
    }),
  };
}

function normalizeQuickAction(item, itemIndex) {
  var data = item || {};

  return {
    key: pickValue(data.key, "quick-action-" + itemIndex),
    label: pickValue(data.label, ""),
    icon: pickValue(data.icon, ""),
  };
}

function normalizeProcessFlow(flow) {
  var data = flow || {};

  return {
    title: pickValue(data.title, ""),
    steps: (Array.isArray(data.steps) ? data.steps : []).map(function (item) {
      return pickValue(item, "");
    }),
    feedbackText: pickValue(data.feedbackText, ""),
    highlights: (Array.isArray(data.highlights) ? data.highlights : []).map(function (item) {
      return pickValue(item, "");
    }),
  };
}

function normalizeServiceConfig(service) {
  var data = service || {};

  return {
    label: pickValue(data.label, ""),
    vehicleTypes: (Array.isArray(data.vehicleTypes)
      ? data.vehicleTypes
      : []
    ).map(normalizeVehicleType),
    orderCard: normalizeOrderCard(data.orderCard),
    quickActions: (Array.isArray(data.quickActions)
      ? data.quickActions
      : []
    ).map(normalizeQuickAction),
    processFlow: normalizeProcessFlow(data.processFlow),
  };
}

function normalizeFieldRow(item, groupIndex, itemIndex) {
  var data = item || {};
  var key = pickValue(data.key, "row-" + groupIndex + "-" + itemIndex);

  return {
    key: key,
    rowKey: key,
    label: pickValue(data.label, ""),
    value: pickValue(data.value, ""),
    placeholder: pickValue(data.placeholder, ""),
  };
}

function normalizeFieldGroup(group, groupIndex) {
  return {
    groupKey: "group-" + groupIndex,
    items: (Array.isArray(group) ? group : []).map(function (item, itemIndex) {
      return normalizeFieldRow(item, groupIndex, itemIndex);
    }),
  };
}

function normalizePaymentConfig(payment) {
  var data = payment || {};

  return {
    fieldGroups: (Array.isArray(data.fieldGroups) ? data.fieldGroups : []).map(
      normalizeFieldGroup,
    ),
    scheduleLabel: pickValue(data.scheduleLabel, "选预约"),
  };
}

function buildVehicleSelectionState(service, typeIndex) {
  var vehicleTypes = (service && service.vehicleTypes) || [];

  if (!vehicleTypes.length) {
    return {
      activeVehicleTypeIndex: -1,
      activeVehicleModelIndex: -1,
    };
  }

  var nextTypeIndex = normalizeIndex(typeIndex, vehicleTypes.length, 0);
  var selectedModels = vehicleTypes[nextTypeIndex].models || [];

  return {
    activeVehicleTypeIndex: nextTypeIndex,
    activeVehicleModelIndex: selectedModels.length ? 0 : -1,
  };
}

function buildPaymentPriceState(service, typeIndex) {
  var vehicleTypes = (service && service.vehicleTypes) || [];
  var selection = buildVehicleSelectionState(service, typeIndex);
  var selectedType = vehicleTypes[selection.activeVehicleTypeIndex] || {};
  var selectedModels = selectedType.models || [];
  var selectedModel =
    selection.activeVehicleModelIndex > -1
      ? selectedModels[selection.activeVehicleModelIndex]
      : null;
  var price = selectedModel ? String(selectedModel.price) : "0.00";

  return Object.assign({}, selection, {
    instantPrice: price,
    deferredPrice: price,
  });
}

function decodeRouteLabel(encodedLabel) {
  return encodedLabel ? decodeURIComponent(encodedLabel) : "";
}

function cloneData() {
  return cloneValue(rawServiceConfig);
}

function createHomePageState() {
  var source = cloneData();
  var service = normalizeServiceConfig(source.service);

  return Object.assign(
    {
      city: pickValue(source.city, ""),
      service: service,
      selectedDropoffLabel: "",
    },
    buildVehicleSelectionState(service, 0),
  );
}

function createPaymentPageState(routeOptions) {
  var source = cloneData();
  var service = normalizeServiceConfig(source.service);
  var payment = normalizePaymentConfig(source.payment);
  var options = routeOptions || {};

  return Object.assign(
    {
      service: service,
      fieldGroups: payment.fieldGroups,
      selectedDropoffLabel: decodeRouteLabel(options.dropoffLabel),
      scheduleLabel: payment.scheduleLabel,
    },
    buildPaymentPriceState(service, options.typeIndex),
  );
}

function buildVehicleSelectionPatch(detail) {
  var selection = detail || {};

  return {
    activeVehicleTypeIndex: parseSelectionIndex(selection.typeIndex, 0),
    activeVehicleModelIndex: parseSelectionIndex(selection.modelIndex, -1),
  };
}

function buildDropoffPatch(detail) {
  return {
    selectedDropoffLabel: (detail && detail.label) || "",
  };
}

function buildPaymentVehiclePatch(service, detail) {
  var selection = detail || {};

  return buildPaymentPriceState(service, selection.typeIndex);
}

function buildPaymentUrl(pageState, dropoffDetail) {
  var detail = dropoffDetail || {};

  return (
    "/pages/payment/payment?dropoffLabel=" +
    encodeURIComponent(detail.label || "") +
    "&typeIndex=" +
    parseSelectionIndex(pageState && pageState.activeVehicleTypeIndex, 0)
  );
}

module.exports = {
  serviceConfig: rawServiceConfig,
  cloneData: cloneData,
  createHomePageState: createHomePageState,
  createPaymentPageState: createPaymentPageState,
  buildVehicleSelectionPatch: buildVehicleSelectionPatch,
  buildDropoffPatch: buildDropoffPatch,
  buildPaymentVehiclePatch: buildPaymentVehiclePatch,
  buildPaymentUrl: buildPaymentUrl,
};
