var serviceData = require('../../mock/service-config')
var app = getApp()

function includesKeyword(value, keyword) {
  return String(value || '').toLowerCase().indexOf(String(keyword || '').toLowerCase()) > -1
}

function filterProjects(projects, keyword) {
  if (!keyword) {
    return projects
  }

  return (projects || []).filter(function (item) {
    return includesKeyword(item.name, keyword) || includesKeyword(item.address, keyword)
  })
}

function filterVehicles(vehicles, keyword) {
  if (!keyword) {
    return vehicles
  }

  return (vehicles || []).filter(function (item) {
    return includesKeyword(item.plate, keyword) || includesKeyword(item.model, keyword)
  })
}

function buildSubmitState(data, patch) {
  var next = Object.assign({}, data, patch)

  return !!(
    next.selectedProjectKey &&
    next.selectedWasteTypeKey &&
    next.selectedSiteKey &&
    next.selectedVehicleKey &&
    next.uploadImage &&
    next.agreed
  )
}

function setDataWithSubmit(page, patch) {
  var nextPatch = Object.assign({}, patch, {
    canSubmit: buildSubmitState(page.data, patch),
  })

  page.setData(nextPatch)
}

var pageData = Object.assign(
  {
    safeBottom: app.globalData.defaultSafeBottom,
  },
  serviceData.createReportPageState(),
)

Page({
  data: pageData,

  onLoad: function () {
    this.setData({
      safeBottom: app.getSafeBottom(),
    })
  },

  onProjectInput: function (event) {
    var keyword = (event.detail && event.detail.value) || ''

    setDataWithSubmit(this, {
      projectQuery: keyword,
      projectResults: filterProjects(this.data.report.projects, keyword),
      selectedProject: null,
      selectedProjectKey: '',
    })
  },

  onProjectSelect: function (event) {
    var item = (this.data.projectResults || [])[event.currentTarget.dataset.index] || null

    if (!item) {
      return
    }

    setDataWithSubmit(this, {
      selectedProject: item,
      selectedProjectKey: item.key,
      projectQuery: item.name,
      projectResults: filterProjects(this.data.report.projects, item.name),
    })
  },

  onWasteTypeTap: function (event) {
    setDataWithSubmit(this, {
      selectedWasteTypeKey: event.currentTarget.dataset.key || '',
    })
  },

  onSiteTap: function (event) {
    setDataWithSubmit(this, {
      selectedSiteKey: event.currentTarget.dataset.key || '',
    })
  },

  onVehicleInput: function (event) {
    var keyword = (event.detail && event.detail.value) || ''

    setDataWithSubmit(this, {
      vehicleQuery: keyword,
      vehicleResults: filterVehicles(this.data.report.vehicles, keyword),
      selectedVehicle: null,
      selectedVehicleKey: '',
    })
  },

  onVehicleSelect: function (event) {
    var item = (this.data.vehicleResults || [])[event.currentTarget.dataset.index] || null

    if (!item) {
      return
    }

    setDataWithSubmit(this, {
      selectedVehicle: item,
      selectedVehicleKey: item.key,
      vehicleQuery: item.plate + ' ' + item.model,
      vehicleResults: filterVehicles(this.data.report.vehicles, item.plate),
    })
  },

  onWeightInput: function (event) {
    setDataWithSubmit(this, {
      weight: (event.detail && event.detail.value) || '',
    })
  },

  onNoteInput: function (event) {
    setDataWithSubmit(this, {
      note: (event.detail && event.detail.value) || '',
    })
  },

  onAgreementTap: function () {
    setDataWithSubmit(this, {
      agreed: !this.data.agreed,
    })
  },

  onChooseImage: function () {
    var self = this

    if (typeof wx.chooseMedia === 'function') {
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          var file = (res.tempFiles || [])[0] || {}

          setDataWithSubmit(self, {
            uploadImage: file.tempFilePath || '',
          })
        },
      })

      return
    }

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        setDataWithSubmit(self, {
          uploadImage: (res.tempFilePaths || [])[0] || '',
        })
      },
    })
  },

  onRemoveImage: function () {
    setDataWithSubmit(this, {
      uploadImage: '',
    })
  },

  onSubmitTap: function () {
    if (!this.data.selectedProjectKey) {
      app.showToast('请选择工程项目')
      return
    }

    if (!this.data.selectedWasteTypeKey) {
      app.showToast('请选择垃圾类型')
      return
    }

    if (!this.data.selectedSiteKey) {
      app.showToast('请选择处置场所')
      return
    }

    if (!this.data.selectedVehicleKey) {
      app.showToast('请选择车辆')
      return
    }

    if (!this.data.uploadImage) {
      app.showToast('请上传装车图片')
      return
    }

    if (!this.data.agreed) {
      app.showToast('请勾选我承诺')
      return
    }

    app.showToast('已提交清运提报')

    setTimeout(function () {
      wx.navigateBack({
        delta: 1,
      })
    }, 700)
  },
})
