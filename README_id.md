<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# PsiTransfer untuk YunoHost

[![Tingkat integrasi](https://apps.yunohost.org/badge/integration/psitransfer)](https://ci-apps.yunohost.org/ci/apps/psitransfer/)
![Status kerja](https://apps.yunohost.org/badge/state/psitransfer)
![Status pemeliharaan](https://apps.yunohost.org/badge/maintained/psitransfer)

[![Pasang PsiTransfer dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=psitransfer)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang PsiTransfer secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

Simple open source self-hosted file sharing solution. It's an alternative to paid services like Dropbox, WeTransfer.

### Features:

- Mobile friendly responsive interface
- Resumable up- and downloads ([tus.io](https://tus.io))
- Set an expire-time for your upload bucket
- Download all files as zip/tar.gz archive
- Password protected download list ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
- `/admin` Page lists bucket information (_disabled until you set `adminPass` config value_)


**Versi terkirim:** 2.2.0~ynh2

## Tangkapan Layar

![Tangkapan Layar pada PsiTransfer](./doc/screenshots/screenshot.png)

## Dokumentasi dan sumber daya

- Website aplikasi resmi: <https://psi.cx/tags/PsiTransfer>
- Dokumentasi admin resmi: <https://github.com/psi-4ward/psitransfer/tree/master/docs>
- Depot kode aplikasi hulu: <https://github.com/psi-4ward/psitransfer>
- Gudang YunoHost: <https://apps.yunohost.org/app/psitransfer>
- Laporkan bug: <https://github.com/YunoHost-Apps/psitransfer_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
atau
sudo yunohost app upgrade psitransfer -u https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
