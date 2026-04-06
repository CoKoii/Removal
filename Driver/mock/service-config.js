var rawServiceConfig = {
  city: '苏州',
  driver: {
    greeting: '早上好',
    name: '王建国',
    team: '昆山城建清运车队 · 北区线',
    vehiclePlate: '苏E·A2345',
    vehicleName: '重型自卸货车',
    serviceLabel: '司机工作台',
    dutyLabel: '当班中',
    avatarText: '王',
  },
  dashboard: {
    focusMission: {
      eyebrow: '当前任务',
      title: '紫竹苑一期 装修垃圾清运',
      orderNo: 'KS-20260406-0056',
      statusLabel: '运输中',
      statusHint: '下一步：签收前填写联单',
      materialLabel: '装修垃圾 · 32 袋',
      pickup: {
        label: '装运点',
        name: '昆山市紫竹路 88 号紫竹苑一期',
        detail: '联系人 李先生 · 138****2018',
      },
      dropoff: {
        label: '交付点',
        name: '昆山市建筑垃圾资源化利用中心',
        detail: '西门入场 · 交付码已同步',
      },
      meta: [
        {
          label: '车型',
          value: '重型自卸货车',
          extra: '准载 9 吨',
        },
        {
          label: '出发时间',
          value: '10:08',
          extra: '已离场 34 分钟',
        },
      ],
      progress: [
        { label: '接单', state: 'done' },
        { label: '到场核验', state: 'done' },
        { label: '运输中', state: 'active' },
        { label: '签收', state: 'pending' },
        { label: '入场', state: 'pending' },
      ],
      actions: [
        {
          key: 'navigate',
          label: '开始导航',
          short: '导',
          tone: 'primary',
        },
        {
          key: 'manifest',
          label: '填写联单',
          short: '联',
          tone: 'secondary',
        },
      ],
    },
    pendingQueue: {
      title: '待运输',
      subtitle: '已按线路排好 2 单，可直接衔接下一站',
      items: [
        {
          id: 'KS-20260406-0061',
          title: '花桥镇阳光花园小区',
          region: '花桥镇',
          vehicle: '勾臂车（8 吨）',
          load: '预计 15 袋',
          window: '今天 14:00 - 18:00',
          statusLabel: '待出发',
          tone: 'accent',
          primaryLabel: '查看详情',
          secondaryLabel: '联系调度',
        },
        {
          id: 'KS-20260406-0074',
          title: '昆山开发区锦绣花园',
          region: '开发区',
          vehicle: '勾臂车（5 吨）',
          load: '预计 10 袋',
          window: '今天 15:00 - 18:00',
          statusLabel: '排班中',
          tone: 'muted',
          primaryLabel: '准备出车',
          secondaryLabel: '回传照片',
        },
      ],
    },
    quickTools: {
      title: '司机常用操作',
      items: [
        {
          key: 'manifest',
          label: '电子联单',
          desc: '填写交付信息',
          short: '联',
          tone: 'accent',
        },
        {
          key: 'code',
          label: '交付码',
          desc: '快速出示扫码',
          short: '码',
          tone: 'warm',
        },
        {
          key: 'photo',
          label: '装车拍照',
          desc: '回传装车照片',
          short: '照',
          tone: 'soft',
        },
        {
          key: 'dispatch',
          label: '调度热线',
          desc: '一键联系调度',
          short: '调',
          tone: 'dark',
        },
      ],
    },
    workflow: {
      title: '司机作业链路',
      desc: '重点关注核验、联单与交付。',
      badge: '合规',
      steps: [
        {
          label: '到场核验',
          helper: '核对地址与垃圾类型',
        },
        {
          label: '拍照留档',
          helper: '记录到场与装车状态',
        },
        {
          label: '填写联单',
          helper: '同步重量与车牌信息',
        },
        {
          label: '到场签收',
          helper: '扫码确认并回传',
        },
        {
          label: '闭环归档',
          helper: '自动回写订单进度',
        },
      ],
    },
    feedback: {
      title: '线路异常或装运问题',
      desc: '联系调度后会同步回传到运单中心。',
    },
  },
  report: {
    entry: {
      title: '工程垃圾清运提报',
      subtitle: '工程垃圾、拆除垃圾 · 提交清运申请',
      actionLabel: '去提报',
    },
    header: {
      eyebrow: '清运提报',
      title: '工程垃圾 / 拆除垃圾',
      desc: '提交清运申请前，请先补齐项目、垃圾类型、处置场所、车辆与装车信息。',
    },
    projectPlaceholder: '搜索项目名称或地址名称',
    vehiclePlaceholder: '搜索车牌号或车型',
    weightPlaceholder: '请输入预估重量',
    notePlaceholder: '补充项目现场、联系人或清运说明',
    agreementTitle: '我承诺',
    agreementText: '所填项目、垃圾类型、运输车辆及装车图片真实有效，并按规定送往所选处置场所。',
    submitLabel: '提交清运提报',
    projects: [
      {
        name: '城北安置房二期',
        address: '昆山市马鞍山西路 188 号',
      },
      {
        name: '紫竹苑旧改项目',
        address: '昆山市紫竹路 88 号',
      },
      {
        name: '花桥商务城更新工程',
        address: '昆山市花桥镇光明路 66 号',
      },
      {
        name: '前进路市政改造工程',
        address: '昆山市前进东路 300 号',
      },
    ],
    wasteTypes: [
      {
        key: 'engineering',
        iconText: '工',
        label: '工程垃圾',
        desc: '装修、修缮等施工过程中产生的砖石、砂浆、木料等建筑废弃物。',
      },
      {
        key: 'demolition',
        iconText: '拆',
        label: '拆除垃圾',
        desc: '拆改、拆除作业产生的混凝土块、砖块、金属等废弃物。',
      },
    ],
    disposalSites: [
      {
        key: 'resource-center',
        name: '昆山市建筑垃圾资源化利用中心',
        address: '玉山镇工业园区',
      },
      {
        key: 'huaqiao-center',
        name: '昆山市建筑垃圾资源化利用花桥处置分中心',
        address: '花桥镇工业区',
      },
    ],
    vehicles: [
      {
        plate: '苏E·A2345',
        model: '重型自卸货车',
        capacity: '准载 9 吨',
      },
      {
        plate: '苏E·B1732',
        model: '勾臂车',
        capacity: '准载 8 吨',
      },
      {
        plate: '苏E·C5208',
        model: '勾臂车',
        capacity: '准载 5 吨',
      },
    ],
  },
  orders: {
    tabs: [
      { key: 'all', label: '全部' },
      { key: 'ready', label: '待出发' },
      { key: 'transit', label: '运输中' },
      { key: 'done', label: '已完成' },
    ],
    summaryMap: {
      all: '共 5 单，已按当日线路聚合。',
      ready: '优先处理花桥线与开发区线。',
      transit: '优先展示导航、联单和交付动作。',
      done: '可回查联单与资源中心签收结果。',
    },
    list: [
      {
        id: 'KS-20260406-0056',
        title: '紫竹苑一期 装修垃圾清运',
        routeTag: '北区线',
        statusKey: 'transit',
        statusLabel: '运输中',
        tone: 'active',
        schedule: '今天 10:08 出发',
        pickup: '昆山市紫竹路 88 号紫竹苑一期',
        dropoff: '昆山市建筑垃圾资源化利用中心',
        vehicle: '重型自卸货车（9 吨）',
        load: '32 袋',
        manifest: '联单待填写',
        primaryActionLabel: '继续处理',
        secondaryActionLabel: '联系业主',
      },
      {
        id: 'KS-20260406-0061',
        title: '花桥镇阳光花园小区',
        routeTag: '花桥线',
        statusKey: 'ready',
        statusLabel: '待出发',
        tone: 'accent',
        schedule: '今天 14:00 - 18:00',
        pickup: '花桥镇阳光路 166 号',
        dropoff: '花桥临时消纳点',
        vehicle: '勾臂车（8 吨）',
        load: '15 袋',
        manifest: '等待装车拍照',
        primaryActionLabel: '查看详情',
        secondaryActionLabel: '联系调度',
      },
      {
        id: 'KS-20260406-0074',
        title: '昆山开发区锦绣花园',
        routeTag: '开发区线',
        statusKey: 'ready',
        statusLabel: '排班中',
        tone: 'muted',
        schedule: '今天 15:00 - 18:00',
        pickup: '开发区前进东路 300 号',
        dropoff: '昆山开发区资源中心',
        vehicle: '勾臂车（5 吨）',
        load: '10 袋',
        manifest: '待到场核验',
        primaryActionLabel: '准备出车',
        secondaryActionLabel: '回传照片',
      },
      {
        id: 'KS-20260405-0120',
        title: '玉山镇桂园小区',
        routeTag: '玉山线',
        statusKey: 'done',
        statusLabel: '已完成',
        tone: 'done',
        schedule: '昨天 17:26 完成',
        pickup: '玉山镇桂园路 112 号',
        dropoff: '昆山市建筑垃圾资源化利用中心',
        vehicle: '重型自卸货车（9 吨）',
        load: '1.8 吨',
        manifest: '电子联单已归档',
        primaryActionLabel: '查看联单',
        secondaryActionLabel: '再次派车',
      },
      {
        id: 'KS-20260405-0114',
        title: '开发区金鹰国际',
        routeTag: '开发区线',
        statusKey: 'done',
        statusLabel: '已完成',
        tone: 'done',
        schedule: '昨天 11:08 完成',
        pickup: '创业路 66 号金鹰国际',
        dropoff: '昆山开发区资源中心',
        vehicle: '重型自卸货车（9 吨）',
        load: '1.9 吨',
        manifest: '签收结果已回传',
        primaryActionLabel: '查看联单',
        secondaryActionLabel: '联系资源中心',
      },
    ],
  },
  mine: {
    profile: {
      role: '五星司机',
      dutyLabel: '当班中',
      scoreLabel: '安全驾驶',
      scoreValue: '128 天',
      metrics: [
        {
          label: '本周联单',
          value: '16',
        },
        {
          label: '准点率',
          value: '98%',
        },
        {
          label: '服务评分',
          value: '4.9',
        },
      ],
    },
    vehicleCard: {
      title: '今日车况',
      desc: '出车检查完成，轮胎与液压状态正常。',
      badge: '已自检',
      plate: '苏E·A2345',
      vehicleName: '重型自卸货车',
      capacity: '准载 9 吨',
      actionLabel: '查看自检记录',
    },
    menuGroups: [
      {
        title: '车辆与资质',
        items: [
          {
            key: 'vehicle',
            label: '车辆信息',
            desc: '查看车牌与承运范围',
            short: '车',
            tone: 'accent',
          },
          {
            key: 'license',
            label: '司机证件',
            desc: '驾驶证与从业资格',
            short: '证',
            tone: 'soft',
          },
          {
            key: 'manifest-setting',
            label: '联单设置',
            desc: '默认承运与交付偏好',
            short: '单',
            tone: 'warm',
          },
        ],
      },
      {
        title: '工作支持',
        items: [
          {
            key: 'statement',
            label: '结算记录',
            desc: '查看本周结算',
            short: '结',
            tone: 'dark',
          },
          {
            key: 'training',
            label: '培训中心',
            desc: '查看装运规范',
            short: '训',
            tone: 'accent',
          },
          {
            key: 'feedback',
            label: '意见反馈',
            desc: '提交异常与建议',
            short: '反',
            tone: 'soft',
          },
        ],
      },
    ],
    supportCard: {
      title: '司机支持',
      desc: '调度热线 0512-6677 8899',
      actionLabel: '一键拨打',
    },
  },
}

function cloneValue(value) {
  return JSON.parse(JSON.stringify(value))
}

function pickValue(value, fallback) {
  return value === undefined || value === null || value === '' ? fallback : value
}

function normalizeTextList(list) {
  return (Array.isArray(list) ? list : []).map(function (item) {
    return pickValue(item, '')
  })
}

function normalizeDriver(driver) {
  var data = driver || {}

  return {
    greeting: pickValue(data.greeting, ''),
    name: pickValue(data.name, ''),
    team: pickValue(data.team, ''),
    vehiclePlate: pickValue(data.vehiclePlate, ''),
    vehicleName: pickValue(data.vehicleName, ''),
    serviceLabel: pickValue(data.serviceLabel, ''),
    dutyLabel: pickValue(data.dutyLabel, ''),
    avatarText: pickValue(data.avatarText, ''),
    tags: normalizeTextList(data.tags),
  }
}

function normalizeLocation(location) {
  var data = location || {}

  return {
    label: pickValue(data.label, ''),
    name: pickValue(data.name, ''),
    detail: pickValue(data.detail, ''),
  }
}

function normalizeMetaItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'meta-' + itemIndex),
    label: pickValue(data.label, ''),
    value: pickValue(data.value, ''),
    extra: pickValue(data.extra, ''),
  }
}

function normalizeProgressItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'progress-' + itemIndex),
    label: pickValue(data.label, ''),
    state: pickValue(data.state, 'pending'),
  }
}

function normalizeActionItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'action-' + itemIndex),
    label: pickValue(data.label, ''),
    short: pickValue(data.short, ''),
    tone: pickValue(data.tone, 'soft'),
  }
}

function normalizeFocusMission(mission) {
  var data = mission || {}

  return {
    eyebrow: pickValue(data.eyebrow, ''),
    title: pickValue(data.title, ''),
    orderNo: pickValue(data.orderNo, ''),
    statusLabel: pickValue(data.statusLabel, ''),
    statusHint: pickValue(data.statusHint, ''),
    confirmLabel: pickValue(data.confirmLabel, ''),
    materialLabel: pickValue(data.materialLabel, ''),
    pickup: normalizeLocation(data.pickup),
    dropoff: normalizeLocation(data.dropoff),
    meta: (Array.isArray(data.meta) ? data.meta : []).map(normalizeMetaItem),
    progress: (Array.isArray(data.progress) ? data.progress : []).map(normalizeProgressItem),
    actions: (Array.isArray(data.actions) ? data.actions : []).map(normalizeActionItem),
  }
}

function normalizeQueueItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'queue-' + itemIndex),
    id: pickValue(data.id, ''),
    title: pickValue(data.title, ''),
    region: pickValue(data.region, ''),
    vehicle: pickValue(data.vehicle, ''),
    load: pickValue(data.load, ''),
    window: pickValue(data.window, ''),
    statusLabel: pickValue(data.statusLabel, ''),
    tone: pickValue(data.tone, 'muted'),
    primaryLabel: pickValue(data.primaryLabel, ''),
    secondaryLabel: pickValue(data.secondaryLabel, ''),
  }
}

function normalizeToolItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'tool-' + itemIndex),
    label: pickValue(data.label, ''),
    desc: pickValue(data.desc, ''),
    short: pickValue(data.short, ''),
    tone: pickValue(data.tone, 'soft'),
  }
}

function normalizeWorkflowStep(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'workflow-' + itemIndex),
    label: pickValue(data.label, ''),
    helper: pickValue(data.helper, ''),
  }
}

function normalizeWorkflow(flow) {
  var data = flow || {}

  return {
    title: pickValue(data.title, ''),
    desc: pickValue(data.desc, ''),
    badge: pickValue(data.badge, ''),
    steps: (Array.isArray(data.steps) ? data.steps : []).map(normalizeWorkflowStep),
  }
}

function normalizeReportEntry(entry) {
  var data = entry || {}

  return {
    title: pickValue(data.title, ''),
    subtitle: pickValue(data.subtitle, ''),
    actionLabel: pickValue(data.actionLabel, ''),
  }
}

function normalizeProjectItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'project-' + itemIndex),
    name: pickValue(data.name, ''),
    address: pickValue(data.address, ''),
  }
}

function normalizeWasteType(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'waste-' + itemIndex),
    iconText: pickValue(data.iconText, ''),
    label: pickValue(data.label, ''),
    desc: pickValue(data.desc, ''),
  }
}

function normalizeDisposalSite(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'site-' + itemIndex),
    name: pickValue(data.name, ''),
    address: pickValue(data.address, ''),
  }
}

function normalizeVehicleItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'vehicle-' + itemIndex),
    plate: pickValue(data.plate, ''),
    model: pickValue(data.model, ''),
    capacity: pickValue(data.capacity, ''),
  }
}

function normalizeReport(report) {
  var data = report || {}

  return {
    entry: normalizeReportEntry(data.entry),
    header: {
      eyebrow: pickValue(data.header && data.header.eyebrow, ''),
      title: pickValue(data.header && data.header.title, ''),
      desc: pickValue(data.header && data.header.desc, ''),
    },
    projectPlaceholder: pickValue(data.projectPlaceholder, ''),
    vehiclePlaceholder: pickValue(data.vehiclePlaceholder, ''),
    weightPlaceholder: pickValue(data.weightPlaceholder, ''),
    notePlaceholder: pickValue(data.notePlaceholder, ''),
    agreementTitle: pickValue(data.agreementTitle, ''),
    agreementText: pickValue(data.agreementText, ''),
    submitLabel: pickValue(data.submitLabel, ''),
    projects: (Array.isArray(data.projects) ? data.projects : []).map(normalizeProjectItem),
    wasteTypes: (Array.isArray(data.wasteTypes) ? data.wasteTypes : []).map(normalizeWasteType),
    disposalSites: (Array.isArray(data.disposalSites) ? data.disposalSites : []).map(normalizeDisposalSite),
    vehicles: (Array.isArray(data.vehicles) ? data.vehicles : []).map(normalizeVehicleItem),
  }
}

function normalizeDashboard(dashboard) {
  var data = dashboard || {}

  return {
    focusMission: normalizeFocusMission(data.focusMission),
    pendingQueue: {
      title: pickValue(data.pendingQueue && data.pendingQueue.title, ''),
      subtitle: pickValue(data.pendingQueue && data.pendingQueue.subtitle, ''),
      items: (Array.isArray(data.pendingQueue && data.pendingQueue.items) ? data.pendingQueue.items : []).map(
        normalizeQueueItem,
      ),
    },
    quickTools: {
      title: pickValue(data.quickTools && data.quickTools.title, ''),
      items: (Array.isArray(data.quickTools && data.quickTools.items) ? data.quickTools.items : []).map(
        normalizeToolItem,
      ),
    },
    workflow: normalizeWorkflow(data.workflow),
    feedback: {
      title: pickValue(data.feedback && data.feedback.title, ''),
      desc: pickValue(data.feedback && data.feedback.desc, ''),
    },
  }
}

function normalizeOrderTab(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'tab-' + itemIndex),
    label: pickValue(data.label, ''),
  }
}

function normalizeOrder(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'order-' + itemIndex),
    id: pickValue(data.id, ''),
    title: pickValue(data.title, ''),
    routeTag: pickValue(data.routeTag, ''),
    statusKey: pickValue(data.statusKey, 'all'),
    statusLabel: pickValue(data.statusLabel, ''),
    tone: pickValue(data.tone, 'muted'),
    schedule: pickValue(data.schedule, ''),
    pickup: pickValue(data.pickup, ''),
    dropoff: pickValue(data.dropoff, ''),
    vehicle: pickValue(data.vehicle, ''),
    load: pickValue(data.load, ''),
    manifest: pickValue(data.manifest, ''),
    primaryActionLabel: pickValue(data.primaryActionLabel, ''),
    secondaryActionLabel: pickValue(data.secondaryActionLabel, ''),
  }
}

function normalizeOrders(orders) {
  var data = orders || {}

  return {
    tabs: (Array.isArray(data.tabs) ? data.tabs : []).map(normalizeOrderTab),
    summaryMap: data.summaryMap || {},
    list: (Array.isArray(data.list) ? data.list : []).map(normalizeOrder),
  }
}

function normalizeMetric(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'metric-' + itemIndex),
    label: pickValue(data.label, ''),
    value: pickValue(data.value, ''),
  }
}

function normalizeVehicleCard(card) {
  var data = card || {}

  return {
    title: pickValue(data.title, ''),
    desc: pickValue(data.desc, ''),
    badge: pickValue(data.badge, ''),
    plate: pickValue(data.plate, ''),
    vehicleName: pickValue(data.vehicleName, ''),
    capacity: pickValue(data.capacity, ''),
    actionLabel: pickValue(data.actionLabel, ''),
  }
}

function normalizeMenuItem(item, itemIndex) {
  var data = item || {}

  return {
    key: pickValue(data.key, 'menu-' + itemIndex),
    label: pickValue(data.label, ''),
    desc: pickValue(data.desc, ''),
    short: pickValue(data.short, ''),
    tone: pickValue(data.tone, 'soft'),
  }
}

function normalizeMenuGroup(group, groupIndex) {
  var data = group || {}

  return {
    key: pickValue(data.key, 'group-' + groupIndex),
    title: pickValue(data.title, ''),
    items: (Array.isArray(data.items) ? data.items : []).map(normalizeMenuItem),
  }
}

function normalizeMine(mine) {
  var data = mine || {}

  return {
    profile: {
      role: pickValue(data.profile && data.profile.role, ''),
      dutyLabel: pickValue(data.profile && data.profile.dutyLabel, ''),
      scoreLabel: pickValue(data.profile && data.profile.scoreLabel, ''),
      scoreValue: pickValue(data.profile && data.profile.scoreValue, ''),
      metrics: (Array.isArray(data.profile && data.profile.metrics) ? data.profile.metrics : []).map(normalizeMetric),
    },
    vehicleCard: normalizeVehicleCard(data.vehicleCard),
    menuGroups: (Array.isArray(data.menuGroups) ? data.menuGroups : []).map(normalizeMenuGroup),
    supportCard: {
      title: pickValue(data.supportCard && data.supportCard.title, ''),
      desc: pickValue(data.supportCard && data.supportCard.desc, ''),
      actionLabel: pickValue(data.supportCard && data.supportCard.actionLabel, ''),
    },
  }
}

function cloneData() {
  return cloneValue(rawServiceConfig)
}

function normalizeTabKey(tabKey, tabs) {
  var list = Array.isArray(tabs) ? tabs : []
  var fallback = list.length ? list[0].key : 'all'
  var hasMatch = list.some(function (item) {
    return item.key === tabKey
  })

  return hasMatch ? tabKey : fallback
}

function buildOrderViewState(orders, activeTabKey) {
  var tabs = orders.tabs || []
  var nextTabKey = normalizeTabKey(activeTabKey, tabs)
  var visibleOrders =
    nextTabKey === 'all'
      ? orders.list
      : orders.list.filter(function (item) {
          return item.statusKey === nextTabKey
        })
  var activeTab = tabs.filter(function (item) {
    return item.key === nextTabKey
  })[0] || { label: '' }
  var summaryMap = orders.summaryMap || {}

  return {
    activeOrderTab: nextTabKey,
    activeOrderTabLabel: activeTab.label || '',
    orderSummary: pickValue(summaryMap[nextTabKey], ''),
    visibleOrders: visibleOrders,
  }
}

function createHomePageState() {
  var source = cloneData()
  var report = normalizeReport(source.report)

  return {
    city: pickValue(source.city, ''),
    driver: normalizeDriver(source.driver),
    dashboard: normalizeDashboard(source.dashboard),
    reportEntry: report.entry,
  }
}

function createOrderPageState(activeTabKey) {
  var source = cloneData()
  var orders = normalizeOrders(source.orders)

  return Object.assign(
    {
      city: pickValue(source.city, ''),
      driver: normalizeDriver(source.driver),
      orderTabs: orders.tabs,
    },
    buildOrderViewState(orders, activeTabKey),
  )
}

function buildOrderTabPatch(activeTabKey) {
  var source = cloneData()

  return buildOrderViewState(normalizeOrders(source.orders), activeTabKey)
}

function createMinePageState() {
  var source = cloneData()

  return {
    city: pickValue(source.city, ''),
    driver: normalizeDriver(source.driver),
    mine: normalizeMine(source.mine),
  }
}

function createReportPageState() {
  var source = cloneData()
  var report = normalizeReport(source.report)

  return {
    city: pickValue(source.city, ''),
    driver: normalizeDriver(source.driver),
    report: report,
    projectQuery: '',
    vehicleQuery: '',
    projectResults: report.projects,
    vehicleResults: report.vehicles,
    selectedProject: null,
    selectedProjectKey: '',
    selectedWasteTypeKey: '',
    selectedSiteKey: '',
    selectedVehicle: null,
    selectedVehicleKey: '',
    weight: '',
    note: '',
    uploadImage: '',
    agreed: false,
    canSubmit: false,
  }
}

module.exports = {
  serviceConfig: rawServiceConfig,
  cloneData: cloneData,
  createHomePageState: createHomePageState,
  createOrderPageState: createOrderPageState,
  buildOrderTabPatch: buildOrderTabPatch,
  createMinePageState: createMinePageState,
  createReportPageState: createReportPageState,
}
