<!--
N.B.: Questo README è stato automaticamente generato da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON DEVE essere modificato manualmente.
-->

# PsiTransfer per YunoHost

[![Livello di integrazione](https://dash.yunohost.org/integration/psitransfer.svg)](https://dash.yunohost.org/appci/app/psitransfer) ![Stato di funzionamento](https://ci-apps.yunohost.org/ci/badges/psitransfer.status.svg) ![Stato di manutenzione](https://ci-apps.yunohost.org/ci/badges/psitransfer.maintain.svg)

[![Installa PsiTransfer con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=psitransfer)

*[Leggi questo README in altre lingue.](./ALL_README.md)*

> *Questo pacchetto ti permette di installare PsiTransfer su un server YunoHost in modo semplice e veloce.*  
> *Se non hai YunoHost, consulta [la guida](https://yunohost.org/install) per imparare a installarlo.*

## Panoramica

Simple open source self-hosted file sharing solution. It's an alternative to paid services like Dropbox, WeTransfer.

### Features:

- Mobile friendly responsive interface
- Resumable up- and downloads ([tus.io](https://tus.io))
- Set an expire-time for your upload bucket
- Download all files as zip/tar.gz archive
- Password protected download list ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
- `/admin` Page lists bucket information (_disabled until you set `adminPass` config value_)


**Versione pubblicata:** 2.1.2~ynh3

## Screenshot

![Screenshot di PsiTransfer](./doc/screenshots/screenshot.png)

## Documentazione e risorse

- Sito web ufficiale dell’app: <https://psi.cx/tags/PsiTransfer>
- Documentazione ufficiale per gli amministratori: <https://github.com/psi-4ward/psitransfer/tree/master/docs>
- Repository upstream del codice dell’app: <https://github.com/psi-4ward/psitransfer>
- Store di YunoHost: <https://apps.yunohost.org/app/psitransfer>
- Segnala un problema: <https://github.com/YunoHost-Apps/psitransfer_ynh/issues>

## Informazioni per sviluppatori

Si prega di inviare la tua pull request alla [branch di `testing`](https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing).

Per provare la branch di `testing`, si prega di procedere in questo modo:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
o
sudo yunohost app upgrade psitransfer -u https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
```

**Maggiori informazioni riguardo il pacchetto di quest’app:** <https://yunohost.org/packaging_apps>
