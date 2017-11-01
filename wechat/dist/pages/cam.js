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

var Cam = function (_wepy$page) {
  _inherits(Cam, _wepy$page);

  function Cam() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cam);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cam.__proto__ || Object.getPrototypeOf(Cam)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'API'
    }, _this.data = {
      pic1: '../image/image1.png',
      pic: '',
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    }, _this.methods = {
      audioPlay: function audioPlay() {
        this.audioCtx.play();
      },
      audioPause: function audioPause() {
        this.audioCtx.pause();
      },
      audio14: function audio14() {
        this.audioCtx.seek(14);
      },
      audioStart: function audioStart() {
        this.audioCtx.seek(0);
      },
      shoot: function shoot() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            self.pic = res.tempFilePaths[0];
            self.setData({
              pic: res.tempFilePaths[0]
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cam, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return Cam;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Cam , 'pages/cam'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbS5qcyJdLCJuYW1lcyI6WyJDYW0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBpYzEiLCJwaWMiLCJwb3N0ZXIiLCJuYW1lIiwiYXV0aG9yIiwic3JjIiwibWV0aG9kcyIsImF1ZGlvUGxheSIsImF1ZGlvQ3R4IiwicGxheSIsImF1ZGlvUGF1c2UiLCJwYXVzZSIsImF1ZGlvMTQiLCJzZWVrIiwiYXVkaW9TdGFydCIsInNob290Iiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJlIiwiY3JlYXRlQXVkaW9Db250ZXh0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0scUJBREQ7QUFFTEMsV0FBSyxFQUZBO0FBR0xDLGNBQVEsc0ZBSEg7QUFJTEMsWUFBTSxNQUpEO0FBS0xDLGNBQVEsSUFMSDtBQU1MQyxXQUFLO0FBTkEsSyxRQVFQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLGFBQUtDLFFBQUwsQ0FBY0MsSUFBZDtBQUNELE9BSE87QUFJUkMsZ0JBSlEsd0JBSUs7QUFDWCxhQUFLRixRQUFMLENBQWNHLEtBQWQ7QUFDRCxPQU5PO0FBT1JDLGFBUFEscUJBT0U7QUFDUixhQUFLSixRQUFMLENBQWNLLElBQWQsQ0FBbUIsRUFBbkI7QUFDRCxPQVRPO0FBVVJDLGdCQVZRLHdCQVVLO0FBQ1gsYUFBS04sUUFBTCxDQUFjSyxJQUFkLENBQW1CLENBQW5CO0FBQ0QsT0FaTztBQWFSRSxXQWJRLG1CQWFBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUSxFQUNMO0FBQ1ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSyxFQUV1QjtBQUN0Q0Msc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHLEVBR2tCO0FBQ2pDQyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCTixpQkFBS2YsR0FBTCxHQUFXcUIsSUFBSUMsYUFBSixDQUFrQixDQUFsQixDQUFYO0FBQ0FQLGlCQUFLUSxPQUFMLENBQWE7QUFDWHZCLG1CQUFLcUIsSUFBSUMsYUFBSixDQUFrQixDQUFsQjtBQURNLGFBQWI7QUFHRDtBQVRjLFNBQWpCO0FBV0Q7QUExQk8sSzs7Ozs7NkJBNEJELENBQUU7Ozs0QkFFSEUsQyxFQUFHO0FBQ1Q7QUFDQSxXQUFLakIsUUFBTCxHQUFnQixlQUFLa0Isa0JBQUwsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDRDs7OztFQTdDOEIsZUFBS0MsSTs7a0JBQWpCL0IsRyIsImZpbGUiOiJjYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FQSSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHBpYzE6ICcuLi9pbWFnZS9pbWFnZTEucG5nJyxcbiAgICBwaWM6ICcnLFxuICAgIHBvc3RlcjogJ2h0dHA6Ly95Lmd0aW1nLmNuL211c2ljL3Bob3RvX25ldy9UMDAyUjMwMHgzMDBNMDAwMDAzcnNLRjQ0R3lhU2suanBnP21heF9hZ2U9MjU5MjAwMCcsXG4gICAgbmFtZTogJ+atpOaXtuatpOWIuycsXG4gICAgYXV0aG9yOiAn6K645beNJyxcbiAgICBzcmM6ICdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2J1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXVkaW9QbGF5KCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KClcbiAgICB9LFxuICAgIGF1ZGlvUGF1c2UoKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgICB9LFxuICAgIGF1ZGlvMTQoKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnNlZWsoMTQpXG4gICAgfSxcbiAgICBhdWRpb1N0YXJ0KCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDApXG4gICAgfSxcbiAgICBzaG9vdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgc2VsZi5waWMgPSByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBwaWM6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge31cblxuICBvblJlYWR5KGUpIHtcbiAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gIH1cbn1cbiJdfQ==