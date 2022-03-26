Simple open source self-hosted file sharing solution.
It's an alternative to paid services like Dropbox, WeTransfer.

* No accounts, no logins
* Mobile friendly responsive interface
* Supports many and very big files (Streams ftw)
* Resumable up- and downloads ([tus.io](https://tus.io))
* Set an expire-time for your upload bucket
* One-time downloads
* Download all files as zip/tar.gz archive
* Modal-style file preview
* Requires Node >=7.4 or use `--harmony-async-await` flag
* Password protected download list ([AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard))
* `/admin` Page lists bucket information, [Screenshot](https://raw.githubusercontent.com/psi-4ward/psitransfer/master/docs/PsiTransfer-Admin.png) (_disabled until you set `adminPass` config value_)
* Lightweight [Vue](https://vuejs.org) based frontend apps. Gzipped (on by default) less than 100k
* Explicit named bucket IDs with query param `sid=<myBucketID>`
