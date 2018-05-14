"use strict"

Vue.use(VueMaterial.default)

var example = {
  data: function data() {
    return {
      active: "first",
      first: false,
      second: false,
      third: false,
      fourth:false,
      fifth:false,
      sixth:false,
      seventh:false,
      eighth:false,
      secondStepError: null,
      showDialog:false
    }
  },
  methods: {
      setDone:function(id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      openTheSnackBar: function(id){
        this[id]=true;

      }
}}

var app = new Vue(example)

app.$mount("#app")