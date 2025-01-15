<!--
Ohart ongi: README hau automatikoki sortu da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>ri esker
EZ editatu eskuz.
-->

# PsiTransfer YunoHost-erako

[![Integrazio maila](https://apps.yunohost.org/badge/integration/psitransfer)](https://ci-apps.yunohost.org/ci/apps/psitransfer/)
![Funtzionamendu egoera](https://apps.yunohost.org/badge/state/psitransfer)
![Mantentze egoera](https://apps.yunohost.org/badge/maintained/psitransfer)

[![Instalatu PsiTransfer YunoHost-ekin](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=psitransfer)

*[Irakurri README hau beste hizkuntzatan.](./ALL_README.md)*

> *Pakete honek PsiTransfer YunoHost zerbitzari batean azkar eta zailtasunik gabe instalatzea ahalbidetzen dizu.*  
> *YunoHost ez baduzu, kontsultatu [gida](https://yunohost.org/install) nola instalatu ikasteko.*

## Aurreikuspena

Simple open source self-hosted file sharing solution. It's an alternative to paid services like Dropbox, WeTransfer.

### Features:

- Mobile friendly responsive interface
- Resumable up- and downloads ([tus.io](https://tus.io))
- Set an expire-time for your upload bucket
- Download all files as zip/tar.gz archive
- Password protected download list ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
- `/admin` Page lists bucket information (_disabled until you set `adminPass` config value_)


**Paketatutako bertsioa:** 2.2.0~ynh2

## Pantaila-argazkiak

![PsiTransfer(r)en pantaila-argazkia](./doc/screenshots/screenshot.png)

## Dokumentazioa eta baliabideak

- Aplikazioaren webgune ofiziala: <https://psi.cx/tags/PsiTransfer>
- Administratzaileen dokumentazio ofiziala: <https://github.com/psi-4ward/psitransfer/tree/master/docs>
- Jatorrizko aplikazioaren kode-gordailua: <https://github.com/psi-4ward/psitransfer>
- YunoHost Denda: <https://apps.yunohost.org/app/psitransfer>
- Eman errore baten berri: <https://github.com/YunoHost-Apps/psitransfer_ynh/issues>

## Garatzaileentzako informazioa

Bidali `pull request`a [`testing` abarrera](https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing).

`testing` abarra probatzeko, ondorengoa egin:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
edo
sudo yunohost app upgrade psitransfer -u https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
```

**Informazio gehiago aplikazioaren paketatzeari buruz:** <https://yunohost.org/packaging_apps>
