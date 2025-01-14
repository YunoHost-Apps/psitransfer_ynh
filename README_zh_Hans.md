<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 上的 PsiTransfer

[![集成程度](https://apps.yunohost.org/badge/integration/psitransfer)](https://ci-apps.yunohost.org/ci/apps/psitransfer/)
![工作状态](https://apps.yunohost.org/badge/state/psitransfer)
![维护状态](https://apps.yunohost.org/badge/maintained/psitransfer)

[![使用 YunoHost 安装 PsiTransfer](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=psitransfer)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 PsiTransfer。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

Simple open source self-hosted file sharing solution. It's an alternative to paid services like Dropbox, WeTransfer.

### Features:

- Mobile friendly responsive interface
- Resumable up- and downloads ([tus.io](https://tus.io))
- Set an expire-time for your upload bucket
- Download all files as zip/tar.gz archive
- Password protected download list ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
- `/admin` Page lists bucket information (_disabled until you set `adminPass` config value_)


**分发版本：** 2.2.0~ynh2

## 截图

![PsiTransfer 的截图](./doc/screenshots/screenshot.png)

## 文档与资源

- 官方应用网站： <https://psi.cx/tags/PsiTransfer>
- 官方管理文档： <https://github.com/psi-4ward/psitransfer/tree/master/docs>
- 上游应用代码库： <https://github.com/psi-4ward/psitransfer>
- YunoHost 商店： <https://apps.yunohost.org/app/psitransfer>
- 报告 bug： <https://github.com/YunoHost-Apps/psitransfer_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
或
sudo yunohost app upgrade psitransfer -u https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
