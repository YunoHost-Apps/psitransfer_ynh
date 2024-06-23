<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# PsiTransfer para Yunohost

[![Nivel de integración](https://dash.yunohost.org/integration/psitransfer.svg)](https://dash.yunohost.org/appci/app/psitransfer) ![Estado funcional](https://ci-apps.yunohost.org/ci/badges/psitransfer.status.svg) ![Estado En Mantención](https://ci-apps.yunohost.org/ci/badges/psitransfer.maintain.svg)

[![Instalar PsiTransfer con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=psitransfer)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarPsiTransfer rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

Simple open source self-hosted file sharing solution. It's an alternative to paid services like Dropbox, WeTransfer.

### Features:

- Mobile friendly responsive interface
- Resumable up- and downloads ([tus.io](https://tus.io))
- Set an expire-time for your upload bucket
- Download all files as zip/tar.gz archive
- Password protected download list ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
- `/admin` Page lists bucket information (_disabled until you set `adminPass` config value_)


**Versión actual:** 2.2.0~ynh1

## Capturas

![Captura de PsiTransfer](./doc/screenshots/screenshot.png)

## Documentaciones y recursos

- Sitio web oficial: <https://psi.cx/tags/PsiTransfer>
- Documentación administrador oficial: <https://github.com/psi-4ward/psitransfer/tree/master/docs>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/psi-4ward/psitransfer>
- Catálogo YunoHost: <https://apps.yunohost.org/app/psitransfer>
- Reportar un error: <https://github.com/YunoHost-Apps/psitransfer_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [`branch testing`](https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
o
sudo yunohost app upgrade psitransfer -u https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
