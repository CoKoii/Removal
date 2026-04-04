function buildRouteSteps(flow) {
  var steps = flow && Array.isArray(flow.steps) ? flow.steps : [];

  return steps.slice(0, 5).map(function (label, index) {
    return {
      order: index + 1,
      label: label || "",
    };
  });
}

Component({
  properties: {
    flow: {
      type: Object,
      value: {
        title: '',
        steps: [],
        feedbackText: '',
        highlights: [],
      },
    },
  },

  data: {
    routeSteps: [],
  },

  observers: {
    flow: function (flow) {
      var routeSteps = buildRouteSteps(flow);

      this.setData({
        routeSteps: routeSteps,
      });
    },
  },
})
