<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# PsiTransfer pour YunoHost

[![Niveau d’intégration](https://dash.yunohost.org/integration/psitransfer.svg)](https://dash.yunohost.org/appci/app/psitransfer) ![Statut du fonctionnement](https://ci-apps.yunohost.org/ci/badges/psitransfer.status.svg) ![Statut de maintenance](https://ci-apps.yunohost.org/ci/badges/psitransfer.maintain.svg)

[![Installer PsiTransfer avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=psitransfer)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer PsiTransfer rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

Solution simple de partage de fichiers auto-hébergée open source. PsiTransfer est une alternative aux services payants comme Dropbox, WeTransfer.

### Caractéristiques :

- Interface réactive adaptée aux mobiles
- Mises à jour et téléchargements pouvant être repris ([tus.io](https://tus.io))
- Définissez une heure d'expiration pour votre bucket de téléchargement
- Téléchargez tous les fichiers sous forme d'archive zip/tar.gz
- Liste de téléchargement protégée par mot de passe ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
- La page `/admin` répertorie les informations sur le compartiment (_disabled jusqu'à ce que vous définissiez la valeur de configuration `adminPass`_)


**Version incluse :** 2.2.0~ynh1

## Captures d’écran

![Capture d’écran de PsiTransfer](./doc/screenshots/screenshot.png)

## Documentations et ressources

- Site officiel de l’app : <https://psi.cx/tags/PsiTransfer>
- Documentation officielle de l’admin : <https://github.com/psi-4ward/psitransfer/tree/master/docs>
- Dépôt de code officiel de l’app : <https://github.com/psi-4ward/psitransfer>
- YunoHost Store : <https://apps.yunohost.org/app/psitransfer>
- Signaler un bug : <https://github.com/YunoHost-Apps/psitransfer_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
ou
sudo yunohost app upgrade psitransfer -u https://github.com/YunoHost-Apps/psitransfer_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
