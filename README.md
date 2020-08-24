<p align="center">
<img src="./docs/banner.png" alt="Artalk" width="100" height="100">
</p>

<div align="center">

一款 ~~简洁~~ 有趣的自托管评论系统

</div></br>

<div align="center">

[![](https://img.shields.io/npm/v/artalk.svg?style=flat-square)](https://www.npmjs.com/package/artalk) [![](https://img.shields.io/npm/dt/artalk.svg?style=flat-square)](https://www.npmjs.com/package/artalk) [![](https://img.shields.io/github/last-commit/monsterxcn/Artalk/master.svg?style=flat-square)](https://github.com/monsterxcn/Artalk/commits/master) [![](https://img.shields.io/github/license/monsterxcn/Artalk.svg?style=flat-square)](./LICENSE)

</div></br>


## 特性
- 轻量简洁 (~23kB gzipped)
- 有趣有爱
- 自托管
- Markdown
- 表情自定
- 滑稽表情包
- 管理员密码，防冒名
- 验证码，提交频率限制
- 通知中心，邮件提醒
- 仅管理员可评论
- 无限层级回复
- 滚动加载更多
- 评论折叠
- 一页多个评论
- TypeScript
- **花里胡哨，不再简洁**
- **暗色模式，不再将就**
- **各种表情，除了滑稽**
- **评论嵌套，任你设置**
- **版权一处，作者哭泣**

~~[查看 DEMO](https://artalk.js.org)~~  不够花哨？看 [我的](https://artalk.vercel.app)

## 食用

> 前端资源下载：[Artalk.js](https://github.com/monsterxcn/Artalk/raw/assets/Artalk.js) | [Artalk.css](https://github.com/monsterxcn/Artalk/raw/assets/Artalk.css)

1. 部署 Artalk 的后端，传送门：[PHP API](https://github.com/qwqcode/Artalk-API-PHP) / Go API / Node API / Python API
2. 前端页面配置 Artalk 如下：

```html
<!DOCTYPE html>
<html>
<head>
  <!-- ... -->
  <link href="dist/Artalk.css" rel="stylesheet">
</head>
<body>
  <div id="ArtalkComments"></div>
  <!-- ... -->
  <script src="dist/Artalk.js"></script>
  <script>
  new Artalk({
    el: '#ArtalkComments', // 元素选择
    placeholder: '来啊，快活啊 ( ゜- ゜)', // 占位符
    noComment: '快来成为第一个评论的人吧~', // 无评论时显示
    defaultAvatar: 'mp', // 参考 https://cn.gravatar.com/site/implement/images/#default-image
    maxNested: 3, // 指定评论显示的最大嵌套层数
    pageKey: '[页面唯一标识]',
    serverUrl: '[后端程序URL]',
    readMore: { // 阅读更多配置
      pageSize: 15, // 每次请求获取评论数
      autoLoad: true // 滚动到底部自动加载
    }
  });
  </script>
</body>
</html>
```

暗色模式的切换方式照抄了 [@ChrAlpha/hexo-theme-cards](https://github.com/ChrAlpha/hexo-theme-cards/blob/master/dist/js/darkmode.js)。前端更多栗子请参考 [/example/](./example/) 目录。前端更多配置项详见 [/types/artalk-config.d.ts](./types/artalk-config.d.ts)。

## 开发

```bash
git clone https://github.com/qwqcode/Artalk.git
cd Artalk
yarn install

# Dev
yarn run dev

# Build
yarn run build
```

Made with ♥ by QWQAQ + Monst.x

## 捐助原作者

如果您愿意给予开发者一点点支持与帮助，可以通过下面的方式向开发者捐助 (/ω＼)

| Alipay | Wechat | 
| :------: | :------: | 
| <img width="150" src="https://raw.githubusercontent.com/qwqcode/donate-qwqaq/master/docs/donate/alipay.png"> | <img width="150" src="https://raw.githubusercontent.com/qwqcode/donate-qwqaq/master/docs/donate/wechat.png"> | 

捐助者的名字将保存于 [捐助者名单](https://github.com/qwqcode/donate-qwqaq)

最后，代原作者再次对您致以最最最最最诚挚的感谢！

## License

[GPL-2.0](./LICENSE)
