var defaultCapsuleLayout = {
  headerSafeTop: 56,
  capsuleHeight: 32,
  capsuleSpaceWidth: 116,
}

var defaultSafeBottom = 18

App({
  globalData: {
    defaultCapsuleLayout: defaultCapsuleLayout,
    defaultSafeBottom: defaultSafeBottom,
  },

  getCapsuleLayout: function (systemInfo) {
    var info = systemInfo || wx.getSystemInfoSync()
    var menuButtonRect =
      typeof wx.getMenuButtonBoundingClientRect === 'function'
        ? wx.getMenuButtonBoundingClientRect()
        : {}
    var statusBarHeight =
      info.statusBarHeight !== undefined && info.statusBarHeight !== null ? info.statusBarHeight : 20
    var headerSafeTop = menuButtonRect.top || statusBarHeight + 12
    var capsuleHeight = menuButtonRect.height || defaultCapsuleLayout.capsuleHeight
    var menuButtonLeft = menuButtonRect.left || info.windowWidth - defaultCapsuleLayout.capsuleSpaceWidth
    var capsuleSpaceWidth = Math.max(info.windowWidth - menuButtonLeft, 108)

    return {
      headerSafeTop: headerSafeTop,
      capsuleHeight: capsuleHeight,
      capsuleSpaceWidth: capsuleSpaceWidth,
    }
  },

  getPageChromeLayout: function () {
    var systemInfo = wx.getSystemInfoSync()
    var safeArea = systemInfo.safeArea || {}
    var safeBottom = safeArea.bottom
      ? Math.max(systemInfo.screenHeight - safeArea.bottom, defaultSafeBottom)
      : defaultSafeBottom

    return Object.assign({}, this.getCapsuleLayout(systemInfo), {
      safeBottom: safeBottom,
    })
  },

  showToast: function (title) {
    wx.showToast({
      title: title,
      icon: 'none',
    })
  },
})
