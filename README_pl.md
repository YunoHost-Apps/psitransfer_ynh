<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# PsiTransfer dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/psitransfer)](https://ci-apps.yunohost.org/ci/apps/psitransfer/)
![Status działania](https://apps.yunohost.org/badge/state/psitransfer)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/psitransfer)

[![Zainstaluj PsiTransfer z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=psitransfer)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację PsiTransfer na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

Simple open source self-hosted file sharing solution. It's an alternative to paid services like Dropbox, WeTransfer.

### Features:

- Mobile friendly responsive interface
- Resumable up- and downloads ([tus.io](https://tus.io))
- Set an expire-time for your upload bucket
- Download all files as zip/tar.gz archive
- Password protected download list ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
- `/admin` Page lists bucket information (_disabled until you set `adminPass` config value_)


**Dostarczona wersja:** 2.2.0~ynh2

## Zrzuty ekranu

![Zrzut ekranu z PsiTransfer](./doc/screenshots/screenshot.png)

## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <https://psi.cx/tags/PsiTransfer>
- Oficjalna dokumentacja dla administratora: <https://github.com/psi-4ward/psitransfer/tree/master/docs>
- Repozytorium z kodem źródłowym: <https://github.com/psi-4ward/psitransfer>
- Sklep YunoHost: <https://apps.yunohost.org/app/psitransfer>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/psitransfer_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
lub
sudo yunohost app upgrade psitransfer -u https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
