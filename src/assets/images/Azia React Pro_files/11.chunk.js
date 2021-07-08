(this["webpackJsonpdemo"] = this["webpackJsonpdemo"] || []).push([[11],{

/***/ "./src/app/FixedIncome/FixedIncome.js":
/*!********************************************!*\
  !*** ./src/app/FixedIncome/FixedIncome.js ***!
  \********************************************/
/*! exports provided: Dashboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
var _jsxFileName = "/Users/mac/Desktop/STAGE PFE/Azia-Admin-React-master/template/src/app/FixedIncome/FixedIncome.js";


class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.websiteAudienceChartData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
      datasets: [{
        label: 'This week',
        data: [36.57, 38.9, 42.3, 41.8, 37.4, 32.5, 28.1, 24.7, 23.4, 20.4, 16.5, 12.1, 9.2, 5.1, 9.6, 10.8, 13.2, 18.2, 13.9, 18.7, 13.7, 11.3, 13.7, 15.8, 12.9, 17.5, 21.9, 18.2, 14.3, 18.2, 14.8, 13.01, 14.5, 15.4, 16.6, 19.4, 14.5, 17.7, 13.8, 9.4, 11.9, 9.7, 6.1, 1.4, 2.3, 2.3, 4.5, 3.7, 5.7, 5.08, 1.9, 8.2, 7.9, 5.02, 2.8, 6.8, 6.2, 9.8, 9.3, 11.9, 10, 9, 6, 4.5, 2.7, 4.3, 3.6, 4.2, 2, 1.4, 3.7, 1.5, 5.7, 4.9, 1, 4.7, 6.3, 4.2, 5.1, 5.2, 3.8, 8.2, 7.2, 6.5, 1.7, 11.4, 10.5, 3.8, 4.7, 8.5, 10.2, 11, 15.6, 19.7, 18.1, 13.5, 12, 7.5, 3.7, 9.7, 9.2, 13.4, 18.4, 22.4, 18.7, 15.2, 14.5, 14.4, 12, 13.7, 13.3, 15.4, 15.8, 17.7, 14.3, 10.6, 12.7, 14.7, 18.6, 22.9, 18, 22.8, 23.8, 27.1, 24.7, 20, 22.7, 20.9, 16.6, 15.1, 13.1, 10.7, 11.4, 13.1, 10.1, 9.2, 9.2, 10.3, 15.2, 12.5, 14, 18.2, 16.3, 17.7, 18.9, 15.3, 18.1, 16.3, 14.8, 10],
        borderWidth: 2,
        fill: true,
        backgroundColor: ['rgba(255, 255, 255, 1)'],
        borderColor: ['rgb(0, 123, 255)']
      }, {
        label: 'Current week',
        data: [53, 50.3, 49.4, 47.7, 49, 50.6, 48.7, 48.8, 53.5, 52.9, 49, 50.2, 48.3, 44.8, 40.7, 41.2, 45.6, 44.6, 41.3, 38.2, 39.6, 41, 39.4, 35.6, 38.5, 38.5, 40.6, 38.7, 42.9, 46.3, 43.5, 40.6, 36.5, 31.7, 28.9, 29.6, 29.5, 33.1, 37, 35.8, 37.6, 39.6, 39, 34.1, 37.4, 39.2, 38.4, 37.7, 40.1, 35.8, 31.5, 31.8, 30.5, 25.7, 28.2, 28.4, 30, 32.1, 32.9, 37.6, 35.2, 39.1, 41.3, 41.4, 43.7, 39.4, 39.2, 43.8, 42.4, 43.6, 38.7, 43.5, 41.8, 44.8, 46.1, 47.6, 49, 46.4, 51.2, 50.1, 53.6, 56, 52.7, 56.6, 60.2, 58.3, 56.5, 55.7, 54.7, 54.2, 58.6, 57, 60.5, 57.6, 56.1, 55.1, 54.3, 52.3, 54.5, 54.1, 51.9, 51.1, 46.3, 48.3, 45.8, 48.2, 43.3, 45.8, 43.4, 41.3, 40.9, 38.4, 40.1, 44.8, 44, 41.4, 37.8, 39.2, 35.2, 32.1, 35.6, 38, 37.9, 38.7, 37.4, 37.5, 33.1, 35, 33.1, 31.8, 29.1, 31.9, 34.3, 32.9, 33.1, 37.1, 32.6, 36.9, 35.9, 38.1, 42.5, 41.5, 45.5, 46.3, 45.7, 45.4, 42.5, 44.4, 39.7, 44.7],
        borderWidth: 2,
        fill: true,
        backgroundColor: ['rgba(86, 11, 208, .05)'],
        borderColor: ['rgb(86, 11, 208)']
      }]
    };
    this.websiteAudienceChartOptions = {
      scales: {
        yAxes: [{
          display: true,
          gridLines: {
            drawBorder: false,
            display: true,
            drawTicks: false,
            color: '#eef0fa',
            zeroLineColor: 'rgba(90, 113, 208, 0)'
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 22,
            padding: 10
          }
        }],
        xAxes: [{
          display: false,
          position: 'bottom',
          gridLines: {
            drawBorder: false,
            display: false,
            drawTicks: false
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            fontColor: '#a7afb7',
            padding: 10
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      },
      tooltips: {
        backgroundColor: 'rgba(2, 171, 254, 1)'
      }
    };
    this.bounceRateChartData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51'],
      datasets: [{
        data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8, 12.9, 13.8, 10.2, 5.8, 7.6, 8.8, 5.6, 5.6, 6.3, 4.2, 3.6, 5.4, 6.5, 8.1, 10.9, 7.6, 9.7, 10.9, 9.5, 5.4, 4.9, 0.7, 2.3, 5.5, 10, 10.6, 8.3, 8.4, 8.5, 5.8],
        borderWidth: 2,
        fill: true,
        backgroundColor: ['rgba(0, 204, 212, .2)'],
        borderColor: ['rgb(0, 204, 212)']
      }]
    };
    this.bounceRateChartOptions = {
      scales: {
        yAxes: [{
          display: false,
          gridLines: {
            drawBorder: false,
            display: true,
            drawTicks: false
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            max: 40,
            stepSize: 10
          }
        }],
        xAxes: [{
          display: false,
          position: 'bottom',
          gridLines: {
            drawBorder: false,
            display: false,
            drawTicks: false
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            fontColor: '#a7afb7',
            padding: 10
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      },
      tooltips: {
        backgroundColor: 'rgba(2, 171, 254, 1)'
      }
    };
    this.totalUsersChartData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
      datasets: [{
        data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8],
        borderWidth: 1,
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff'
      }]
    };
    this.totalUsersChartOptions = {
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        }],
        xAxes: [{
          display: false,
          barThickness: 5.5,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    };
    this.allSessionsChartData = {
      labels: [0, 1, 2, 3, 4, 5, 6, 7],
      datasets: [{
        label: '# of Votes',
        data: [2, 4, 10, 20, 45, 40, 35, 18],
        borderWidth: 1,
        fill: false,
        backgroundColor: '#560bd0'
      }, {
        label: '# of Rate',
        data: [3, 6, 15, 35, 50, 45, 35, 25],
        borderWidth: 1,
        fill: false,
        backgroundColor: '#cad0e8'
      }]
    };
    this.allSessionsChartOptions = {
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            max: 80
          },
          gridLines: {
            drawBorder: false
          }
        }],
        xAxes: [{
          barPercentage: 0.6,
          gridLines: {
            color: 'rgba(0,0,0,0.08)',
            drawBorder: false
          },
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    };
    this.sessionsChannelChartData = {
      labels: ['Search', 'Email', 'Referral', 'Social', 'Other'],
      datasets: [{
        data: [25, 20, 30, 15, 10],
        backgroundColor: ['#6f42c1', '#007bff', '#17a2b8', '#00cccc', '#adb2bd']
      }]
    };
    this.sessionsChannelChartOptions = {
      cutoutPercentage: 50,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
    this.acquisitionChart1Data = {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [{
        data: [4, 2.5, 5, 3, 5],
        borderWidth: 1,
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#fff'
      }]
    };
    this.acquisitionChart1Options = {
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        }],
        xAxes: [{
          display: false,
          barThickness: 5.5,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    };
    this.acquisitionChart2Data = {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [{
        data: [5, 2, 3, 5, 1.5],
        borderWidth: 1,
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#fff'
      }]
    };
    this.acquisitionChart2Options = {
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        }],
        xAxes: [{
          display: false,
          barThickness: 5.5,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    };
    this.sessionsChart1Data = {
      labels: ['Search', 'Email'],
      datasets: [{
        data: [40, 60],
        backgroundColor: ['#007bff', '#cad0e8'],
        borderColor: ['#007bff', '#cad0e8']
      }]
    };
    this.sessionsChart1Options = {
      cutoutPercentage: 78,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
    this.sessionsChart2Data = {
      labels: ['Search', 'Email'],
      datasets: [{
        data: [25, 75],
        backgroundColor: ['#00cccc', '#cad0e8'],
        borderColor: ['#00cccc', '#cad0e8']
      }]
    };
    this.sessionsChart2Options = {
      cutoutPercentage: 78,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
  }

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle('hide');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1042
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container p-md-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "az-content-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1044
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "az-dashboard-one-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1045
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1046
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "az-dashboard-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047
      },
      __self: this
    }, "Hi, welcome back Fixecincome!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "az-dashboard-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1048
      },
      __self: this
    }, "Your web analytics dashboard.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "az-content-header-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1052
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1053
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1054
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1055
      },
      __self: this
    }, "Start Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1056
      },
      __self: this
    }, "Oct 10, 2018"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1061
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1062
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1063
      },
      __self: this
    }, "End Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1064
      },
      __self: this
    }, "Oct 23, 2018"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1070
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071
      },
      __self: this
    }, "Event Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }, "All Categories"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#/",
      className: "btn btn-purple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1077
      },
      __self: this
    }, "Export"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "az-dashboard-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1084
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1085
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link active",
      "data-toggle": "tab",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1086
      },
      __self: this
    }, "Overview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      "data-toggle": "tab",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1089
      },
      __self: this
    }, "Audiences"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      "data-toggle": "tab",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1092
      },
      __self: this
    }, "Demographics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      "data-toggle": "tab",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1095
      },
      __self: this
    }, "More")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-save",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1102
      },
      __self: this
    }), " Save Report"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-file-pdf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1105
      },
      __self: this
    }), " Export to PDF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-envelope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1108
      },
      __self: this
    }), "Send to Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "#/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-ellipsis-h",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1111
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row row-sm mg-b-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-dashboard-pageviews",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1120
      },
      __self: this
    }, "FOREX"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1121
      },
      __self: this
    }, "This report is based on 100% of sessions.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1126
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-dashboard-pageviews",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1135
      },
      __self: this
    }, "FIXED INCOME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1136
      },
      __self: this
    }, "This report is based on 100% of sessions.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1141
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-dashboard-pageviews",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1150
      },
      __self: this
    }, "EQUITY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1151
      },
      __self: this
    }, "This report is based on 100% of sessions.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1156
      },
      __self: this
    })))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);
//# sourceMappingURL=11.chunk.js.map