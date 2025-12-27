module.exports = {
  "uploadDir": '__DATA_DIR__',
  // set to serve PsiTransfer from a sub-path
  "baseUrl": '__PATH__',
  // use to set custom upload url (subfolder to baseUrl)
  "uploadAppPath": '/',
  // set to false to disable HTTP
  "port": __PORT__,
  // HTTPS, set all 3 values to enable
  //"sslPort": 8443,
  //"sslKeyFile": false,
  //"sslCertFile": false,
  // Force redirect to https
  // can be true or a specific url like https://example.com:8443
  // keep empty to disable
  "forceHttps": '',
  // Use trust proxy to show real IP on logs when reverse proxy are used
  // see https://expressjs.com/en/guide/behind-proxies.html for options
  "trustProxy": '',
  // retention options in seconds:label
  "retentions": {
    "one-time": "one time download",
    "3600": "1 Hour",
    "21600": "6 Hours",
    "86400": "1 Day",
    "259200": "3 Days",
    "604800": "1 Week",
    "1209600": "2 Weeks",
    "2419200": "4 Weeks",
    "4838400": "8 Weeks"
  },
  // admin password, set to false to disable /admin page
  // to enable /admin page set your password like this:
  // "adminPass": "YourSecurePassword",
  "adminPass": "__PASSWORD__",
  // upload password, set to false to disable
  "uploadPass": "__PASSWORD__",
  // make the bucket-password field mandatory
  "requireBucketPassword": false,
  "defaultRetention": "604800",
  // expire every file after maxAge (eg never downloaded one-time files)
  "maxAge": 3600 * 24 * 75, // 75 days
  // maximum file-size for previews in byte
  "maxPreviewSize": Math.pow(2, 20) * 2, // 2MB
  "mailTemplate": 'mailto:?subject=File Transfer&body=Vous pouvez télécharger les fichiers ici : %%URL%%',
  "mailFrom": "PsiTransfer <psitransfer@__DOMAIN__>",
  // see https://github.com/expressjs/morgan
  // set to false to disable logging
  "accessLog": ':date[iso] :method :url :status :response-time :remote-addr',
  // event webhooks
  // invokes an HTTP POST to a url whenever a file is downloaded
  // for more info, see the webhooks section of docs/configuration.md
  "fileDownloadedWebhook": null,
  "fileUploadedWebhook": null,
  // Fallback language
  "defaultLanguage": "__LANGUAGE__",
  // Limit upload size
  "maxFileSize": null, // Math.pow(2, 30) * 2, // 2GB
  "maxBucketSize": null, // Math.pow(2, 30) * 2, // 10GB
  "plugins": ['file-downloaded-webhook', 'file-uploaded-webhook'],
  // Disable the QR code button for download url sharing, set to true to disable
  "disableQrCode": false,
};
