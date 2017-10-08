'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人介绍'
    }, _this.data = {
      size: 'mini',
      count: 0,
      items: [{ name: 'USA', value: '帅气' }, { name: 'CHN', value: '男神' }, { name: 'BRA', value: '完美' }, { name: 'JPN', value: '学霸' }, { name: 'ENG', value: '王者' }, { name: 'TUR', value: '10K' }]
    }, _this.methods = {
      add: function add() {
        var self = this;

        self.count++;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：提交成功', e.detail.value);
    }
  }, {
    key: 'formReset',
    value: function formReset() {
      console.log('form发生了reset事件');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNpemUiLCJjb3VudCIsIml0ZW1zIiwibmFtZSIsInZhbHVlIiwibWV0aG9kcyIsImFkZCIsInNlbGYiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLE1BREQ7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGFBQU8sQ0FDUCxFQUFDQyxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQURPLEVBRVAsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFGTyxFQUdQLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBSE8sRUFJUCxFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQUpPLEVBS1AsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFMTyxFQU1QLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLEtBQXJCLEVBTk87QUFIRixLLFFBa0JQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDs7QUFFQUEsYUFBS04sS0FBTDtBQUNEO0FBTE8sSzs7Ozs7K0JBTkNPLEMsRUFBRztBQUNaQyxjQUFRQyxHQUFSLENBQVksNEJBQVosRUFBMENGLEVBQUVHLE1BQUYsQ0FBU1AsS0FBbkQ7QUFDRDs7O2dDQUNXO0FBQ1ZLLGNBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEOzs7NkJBUVEsQ0FBRTs7OztFQTdCc0IsZUFBS0UsSTs7a0JBQW5CaEIsSyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrku4vnu40nXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzaXplOiAnbWluaScsXG4gICAgICBjb3VudDogMCxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICB7bmFtZTogJ1VTQScsIHZhbHVlOiAn5biF5rCUJ30sXG4gICAgICB7bmFtZTogJ0NITicsIHZhbHVlOiAn55S356WeJ30sXG4gICAgICB7bmFtZTogJ0JSQScsIHZhbHVlOiAn5a6M576OJ30sXG4gICAgICB7bmFtZTogJ0pQTicsIHZhbHVlOiAn5a2m6Zy4J30sXG4gICAgICB7bmFtZTogJ0VORycsIHZhbHVlOiAn546L6ICFJ30sXG4gICAgICB7bmFtZTogJ1RVUicsIHZhbHVlOiAnMTBLJ31cbiAgICAgIF1cbiAgICB9XG4gICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8muaPkOS6pOaIkOWKnycsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH1cbiAgICBmb3JtUmVzZXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFkZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgc2VsZi5jb3VudCsrXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHt9XG4gIH1cbiJdfQ==