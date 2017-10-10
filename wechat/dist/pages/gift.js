'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gift = function (_wepy$page) {
  _inherits(Gift, _wepy$page);

  function Gift() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Gift);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gift.__proto__ || Object.getPrototypeOf(Gift)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      pic1: '../image/man.png',
      pic2: '../image/like.png',
      pic3: '../image/done.png',
      me: '../image/背包.png',
      her: '../image/皮卡丘-2.png',
      they: '../image/小拉达.png',
      gra: '../image/卡比兽.png',
      grap: '../image/伊布.png',
      clo: '../image/杰尼龟.png',
      boy: '../image/喵猫.png',
      bro: '../image/迷你龙.png',
      baba: '../image/可达鸭.png',
      t1: '自己',
      t2: '老婆/女票',
      t3: '姐妹/闺蜜',
      t4: '妈妈',
      t5: '长辈',
      t6: '同事',
      color1: 'darkorange',
      color2: 'dark',
      color11: 'red',
      color22: 'white'
    }, _this.methods = {
      she: function she() {
        var self = this;
        self.me = '../image/背包.png';
        self.her = '../image/皮卡丘-2.png';
        self.they = '../image/小拉达.png';
        self.gra = '../image/卡比兽.png';
        self.grap = '../image/伊布.png';
        self.clo = '../image/杰尼龟.png';
        self.t1 = '自己';
        self.t2 = '老婆/女票';
        self.t3 = '姐妹/闺蜜';
        self.t4 = '妈妈';
        self.t5 = '长辈';
        self.t6 = '同事';
        self.color1 = 'darkorange';
        self.color2 = 'dark';
        self.color11 = 'red';
        self.color22 = 'white';
      },
      he: function he() {
        var self = this;
        self.me = '../image/背包.png';
        self.her = '../image/喵猫.png';
        self.they = '../image/迷你龙.png';
        self.gra = '../image/可达鸭.png';
        self.grap = '../image/伊布.png';
        self.clo = '../image/杰尼龟.png';
        self.t1 = '自己';
        self.t2 = '老公/男票';
        self.t3 = '兄弟/基友';
        self.t4 = '爸爸';
        self.t5 = '长辈';
        self.t6 = '同事';
        self.color2 = 'darkorange';
        self.color1 = 'dark';
        self.color11 = 'white';
        self.color22 = 'red';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Gift;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Gift , 'pages/gift'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiR2lmdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGljMSIsInBpYzIiLCJwaWMzIiwibWUiLCJoZXIiLCJ0aGV5IiwiZ3JhIiwiZ3JhcCIsImNsbyIsImJveSIsImJybyIsImJhYmEiLCJ0MSIsInQyIiwidDMiLCJ0NCIsInQ1IiwidDYiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjExIiwiY29sb3IyMiIsIm1ldGhvZHMiLCJzaGUiLCJzZWxmIiwiaGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sa0JBREQ7QUFFTEMsWUFBTSxtQkFGRDtBQUdMQyxZQUFNLG1CQUhEO0FBSUxDLFVBQUksaUJBSkM7QUFLTEMsV0FBSyxvQkFMQTtBQU1MQyxZQUFNLGtCQU5EO0FBT0xDLFdBQUssa0JBUEE7QUFRTEMsWUFBTSxpQkFSRDtBQVNMQyxXQUFLLGtCQVRBO0FBVUxDLFdBQUssaUJBVkE7QUFXTEMsV0FBSyxrQkFYQTtBQVlMQyxZQUFNLGtCQVpEO0FBYUxDLFVBQUksSUFiQztBQWNMQyxVQUFJLE9BZEM7QUFlTEMsVUFBSSxPQWZDO0FBZ0JMQyxVQUFJLElBaEJDO0FBaUJMQyxVQUFJLElBakJDO0FBa0JMQyxVQUFJLElBbEJDO0FBbUJMQyxjQUFRLFlBbkJIO0FBb0JMQyxjQUFRLE1BcEJIO0FBcUJMQyxlQUFTLEtBckJKO0FBc0JMQyxlQUFTO0FBdEJKLEssUUF3QlBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtyQixFQUFMLEdBQVUsaUJBQVY7QUFDQXFCLGFBQUtwQixHQUFMLEdBQVcsb0JBQVg7QUFDQW9CLGFBQUtuQixJQUFMLEdBQVksa0JBQVo7QUFDQW1CLGFBQUtsQixHQUFMLEdBQVcsa0JBQVg7QUFDQWtCLGFBQUtqQixJQUFMLEdBQVksaUJBQVo7QUFDQWlCLGFBQUtoQixHQUFMLEdBQVcsa0JBQVg7QUFDQWdCLGFBQUtaLEVBQUwsR0FBVSxJQUFWO0FBQ0FZLGFBQUtYLEVBQUwsR0FBVSxPQUFWO0FBQ0FXLGFBQUtWLEVBQUwsR0FBVSxPQUFWO0FBQ0FVLGFBQUtULEVBQUwsR0FBVSxJQUFWO0FBQ0FTLGFBQUtSLEVBQUwsR0FBVSxJQUFWO0FBQ0FRLGFBQUtQLEVBQUwsR0FBVSxJQUFWO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxZQUFkO0FBQ0FNLGFBQUtMLE1BQUwsR0FBYyxNQUFkO0FBQ0FLLGFBQUtKLE9BQUwsR0FBZSxLQUFmO0FBQ0FJLGFBQUtILE9BQUwsR0FBZSxPQUFmO0FBQ0QsT0FuQk87QUFvQlJJLFFBcEJRLGdCQW9CSDtBQUNILFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLckIsRUFBTCxHQUFVLGlCQUFWO0FBQ0FxQixhQUFLcEIsR0FBTCxHQUFXLGlCQUFYO0FBQ0FvQixhQUFLbkIsSUFBTCxHQUFZLGtCQUFaO0FBQ0FtQixhQUFLbEIsR0FBTCxHQUFXLGtCQUFYO0FBQ0FrQixhQUFLakIsSUFBTCxHQUFZLGlCQUFaO0FBQ0FpQixhQUFLaEIsR0FBTCxHQUFXLGtCQUFYO0FBQ0FnQixhQUFLWixFQUFMLEdBQVUsSUFBVjtBQUNBWSxhQUFLWCxFQUFMLEdBQVUsT0FBVjtBQUNBVyxhQUFLVixFQUFMLEdBQVUsT0FBVjtBQUNBVSxhQUFLVCxFQUFMLEdBQVUsSUFBVjtBQUNBUyxhQUFLUixFQUFMLEdBQVUsSUFBVjtBQUNBUSxhQUFLUCxFQUFMLEdBQVUsSUFBVjtBQUNBTyxhQUFLTCxNQUFMLEdBQWMsWUFBZDtBQUNBSyxhQUFLTixNQUFMLEdBQWMsTUFBZDtBQUNBTSxhQUFLSixPQUFMLEdBQWUsT0FBZjtBQUNBSSxhQUFLSCxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBdENPLEs7Ozs7RUE1QnNCLGVBQUtLLEk7O2tCQUFsQjlCLEkiLCJmaWxlIjoiZ2lmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgcGljMTogJy4uL2ltYWdlL21hbi5wbmcnLFxuICAgICAgcGljMjogJy4uL2ltYWdlL2xpa2UucG5nJyxcbiAgICAgIHBpYzM6ICcuLi9pbWFnZS9kb25lLnBuZycsXG4gICAgICBtZTogJy4uL2ltYWdlL+iDjOWMhS5wbmcnLFxuICAgICAgaGVyOiAnLi4vaW1hZ2Uv55qu5Y2h5LiYLTIucG5nJyxcbiAgICAgIHRoZXk6ICcuLi9pbWFnZS/lsI/mi4novr4ucG5nJyxcbiAgICAgIGdyYTogJy4uL2ltYWdlL+WNoeavlOWFvS5wbmcnLFxuICAgICAgZ3JhcDogJy4uL2ltYWdlL+S8iuW4gy5wbmcnLFxuICAgICAgY2xvOiAnLi4vaW1hZ2Uv5p2w5bC86b6fLnBuZycsXG4gICAgICBib3k6ICcuLi9pbWFnZS/llrXnjKsucG5nJyxcbiAgICAgIGJybzogJy4uL2ltYWdlL+i/t+S9oOm+mS5wbmcnLFxuICAgICAgYmFiYTogJy4uL2ltYWdlL+WPr+i+vum4rS5wbmcnLFxuICAgICAgdDE6ICfoh6rlt7EnLFxuICAgICAgdDI6ICfogIHlqYYv5aWz56WoJyxcbiAgICAgIHQzOiAn5aeQ5aa5L+mXuuicnCcsXG4gICAgICB0NDogJ+WmiOWmiCcsXG4gICAgICB0NTogJ+mVv+i+iCcsXG4gICAgICB0NjogJ+WQjOS6iycsXG4gICAgICBjb2xvcjE6ICdkYXJrb3JhbmdlJyxcbiAgICAgIGNvbG9yMjogJ2RhcmsnLFxuICAgICAgY29sb3IxMTogJ3JlZCcsXG4gICAgICBjb2xvcjIyOiAnd2hpdGUnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaGUoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLm1lID0gJy4uL2ltYWdlL+iDjOWMhS5wbmcnXG4gICAgICAgIHNlbGYuaGVyID0gJy4uL2ltYWdlL+earuWNoeS4mC0yLnBuZydcbiAgICAgICAgc2VsZi50aGV5ID0gJy4uL2ltYWdlL+Wwj+aLiei+vi5wbmcnXG4gICAgICAgIHNlbGYuZ3JhID0gJy4uL2ltYWdlL+WNoeavlOWFvS5wbmcnXG4gICAgICAgIHNlbGYuZ3JhcCA9ICcuLi9pbWFnZS/kvIrluIMucG5nJ1xuICAgICAgICBzZWxmLmNsbyA9ICcuLi9pbWFnZS/mnbDlsLzpvp8ucG5nJ1xuICAgICAgICBzZWxmLnQxID0gJ+iHquW3sSdcbiAgICAgICAgc2VsZi50MiA9ICfogIHlqYYv5aWz56WoJ1xuICAgICAgICBzZWxmLnQzID0gJ+WnkOWmuS/pl7ronJwnXG4gICAgICAgIHNlbGYudDQgPSAn5aaI5aaIJ1xuICAgICAgICBzZWxmLnQ1ID0gJ+mVv+i+iCdcbiAgICAgICAgc2VsZi50NiA9ICflkIzkuosnXG4gICAgICAgIHNlbGYuY29sb3IxID0gJ2RhcmtvcmFuZ2UnXG4gICAgICAgIHNlbGYuY29sb3IyID0gJ2RhcmsnXG4gICAgICAgIHNlbGYuY29sb3IxMSA9ICdyZWQnXG4gICAgICAgIHNlbGYuY29sb3IyMiA9ICd3aGl0ZSdcbiAgICAgIH0sXG4gICAgICBoZSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYubWUgPSAnLi4vaW1hZ2Uv6IOM5YyFLnBuZydcbiAgICAgICAgc2VsZi5oZXIgPSAnLi4vaW1hZ2Uv5Za154yrLnBuZydcbiAgICAgICAgc2VsZi50aGV5ID0gJy4uL2ltYWdlL+i/t+S9oOm+mS5wbmcnXG4gICAgICAgIHNlbGYuZ3JhID0gJy4uL2ltYWdlL+WPr+i+vum4rS5wbmcnXG4gICAgICAgIHNlbGYuZ3JhcCA9ICcuLi9pbWFnZS/kvIrluIMucG5nJ1xuICAgICAgICBzZWxmLmNsbyA9ICcuLi9pbWFnZS/mnbDlsLzpvp8ucG5nJ1xuICAgICAgICBzZWxmLnQxID0gJ+iHquW3sSdcbiAgICAgICAgc2VsZi50MiA9ICfogIHlhawv55S356WoJ1xuICAgICAgICBzZWxmLnQzID0gJ+WFhOW8ny/ln7rlj4snXG4gICAgICAgIHNlbGYudDQgPSAn54i454i4J1xuICAgICAgICBzZWxmLnQ1ID0gJ+mVv+i+iCdcbiAgICAgICAgc2VsZi50NiA9ICflkIzkuosnXG4gICAgICAgIHNlbGYuY29sb3IyID0gJ2RhcmtvcmFuZ2UnXG4gICAgICAgIHNlbGYuY29sb3IxID0gJ2RhcmsnXG4gICAgICAgIHNlbGYuY29sb3IxMSA9ICd3aGl0ZSdcbiAgICAgICAgc2VsZi5jb2xvcjIyID0gJ3JlZCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==