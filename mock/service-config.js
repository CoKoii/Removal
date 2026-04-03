var serviceConfig = {
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

function cloneData() {
  return JSON.parse(JSON.stringify(serviceConfig))
}

module.exports = {
  serviceConfig: serviceConfig,
  cloneData: cloneData,
}
