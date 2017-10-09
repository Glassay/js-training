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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbS5qcyJdLCJuYW1lcyI6WyJDYW0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBpYyIsInBvc3RlciIsIm5hbWUiLCJhdXRob3IiLCJzcmMiLCJtZXRob2RzIiwiYXVkaW9QbGF5IiwiYXVkaW9DdHgiLCJwbGF5IiwiYXVkaW9QYXVzZSIsInBhdXNlIiwiYXVkaW8xNCIsInNlZWsiLCJhdWRpb1N0YXJ0Iiwic2hvb3QiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwic2V0RGF0YSIsImUiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsc0ZBRkg7QUFHTEMsWUFBTSxNQUhEO0FBSUxDLGNBQVEsSUFKSDtBQUtMQyxXQUFLO0FBTEEsSyxRQU9QQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLGFBQUtDLFFBQUwsQ0FBY0MsSUFBZDtBQUNELE9BSE87QUFJUkMsZ0JBSlEsd0JBSUs7QUFDWCxhQUFLRixRQUFMLENBQWNHLEtBQWQ7QUFDRCxPQU5PO0FBT1JDLGFBUFEscUJBT0U7QUFDUixhQUFLSixRQUFMLENBQWNLLElBQWQsQ0FBbUIsRUFBbkI7QUFDRCxPQVRPO0FBVVJDLGdCQVZRLHdCQVVLO0FBQ1gsYUFBS04sUUFBTCxDQUFjSyxJQUFkLENBQW1CLENBQW5CO0FBQ0QsT0FaTztBQWFSRSxXQWJRLG1CQWFBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUSxFQUNMO0FBQ1ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSyxFQUV1QjtBQUN0Q0Msc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHLEVBR2tCO0FBQ2pDQyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCTixpQkFBS2YsR0FBTCxHQUFXcUIsSUFBSUMsYUFBSixDQUFrQixDQUFsQixDQUFYO0FBQ0FQLGlCQUFLUSxPQUFMLENBQWE7QUFDWHZCLG1CQUFLcUIsSUFBSUMsYUFBSixDQUFrQixDQUFsQjtBQURNLGFBQWI7QUFHRDtBQVRjLFNBQWpCO0FBV0Q7QUExQk8sSzs7Ozs7NkJBNEJELENBQUU7Ozs0QkFFSEUsQyxFQUFHO0FBQ1Q7QUFDQSxXQUFLakIsUUFBTCxHQUFnQixlQUFLa0Isa0JBQUwsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDRDs7OztFQTVDOEIsZUFBS0MsSTs7a0JBQWpCOUIsRyIsImZpbGUiOiJjYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FQSSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHBpYzogJycsXG4gICAgcG9zdGVyOiAnaHR0cDovL3kuZ3RpbWcuY24vbXVzaWMvcGhvdG9fbmV3L1QwMDJSMzAweDMwME0wMDAwMDNyc0tGNDRHeWFTay5qcGc/bWF4X2FnZT0yNTkyMDAwJyxcbiAgICBuYW1lOiAn5q2k5pe25q2k5Yi7JyxcbiAgICBhdXRob3I6ICforrjlt40nLFxuICAgIHNyYzogJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhdWRpb1BsYXkoKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKVxuICAgIH0sXG4gICAgYXVkaW9QYXVzZSgpIHtcbiAgICAgIHRoaXMuYXVkaW9DdHgucGF1c2UoKVxuICAgIH0sXG4gICAgYXVkaW8xNCgpIHtcbiAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygxNClcbiAgICB9LFxuICAgIGF1ZGlvU3RhcnQoKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnNlZWsoMClcbiAgICB9LFxuICAgIHNob290KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDlcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBzZWxmLnBpYyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHBpYzogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7fVxuXG4gIG9uUmVhZHkoZSkge1xuICAgIC8vIOS9v+eUqCB3eC5jcmVhdGVBdWRpb0NvbnRleHQg6I635Y+WIGF1ZGlvIOS4iuS4i+aWhyBjb250ZXh0XG4gICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcbiAgfVxufVxuIl19