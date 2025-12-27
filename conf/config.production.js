module.exports = {
  "accessLog": 'dev',
  "retentions": {
    "one-time": "one time download",
    "60": "1 Minute",
    "300": "5 Minutes",
    "3600": "1 Hour",
    "21600": "6 Hours",
    "86400": "1 Day",
    "259200": "3 Days",
    "604800": "1 Week",
    "1209600": "2 Weeks"
  },
  "defaultRetention": "3600",
  "adminPass": "__PASSWORD__",
  "uploadPass": "__PASSWORD__",
  "baseUrl": '__PATH__',
  "uploadDir": '__DATA_DIR__',
  "port": __PORT__,
  "uploadAppPath": '/',
  "mailFrom": "PsiTransfer <psitransfer@__DOMAIN__>"
  // "sslKeyFile": './tmp/cert.key',
  // "sslCertFile": './tmp/cert.pem',
  // admin password, set to false to disable /admin page
  // to enable /admin page set your password like this:
  // "adminPass": "YourSecurePassword",
  "adminPass": false,
  // upload password, set to false to disable
  "uploadPass": false,
  // make the bucket-password field mandatory
  "requireBucketPassword": false,
  "defaultRetention": "604800",
  // expire every file after maxAge (eg never downloaded one-time files)
  "maxAge": 3600 * 24 * 75, // 75 days
  // maximum file-size for previews in byte
  "maxPreviewSize": Math.pow(2, 20) * 2, // 2MB
  "mailTemplate": 'mailto:?subject=File Transfer&body=You can download the files here: %%URL%%',
  // see https://github.com/expressjs/morgan
  // set to false to disable logging
  "accessLog": ':date[iso] :method :url :status :response-time :remote-addr',
  // event webhooks
  // invokes an HTTP POST to a url whenever a file is downloaded
  // for more info, see the webhooks section of docs/configuration.md
  "fileDownloadedWebhook": null,
  "fileUploadedWebhook": null,
  // Fallback language
  "defaultLanguage": "en",
  // Limit upload size
  "maxFileSize": null, // Math.pow(2, 30) * 2, // 2GB
  "maxBucketSize": null, // Math.pow(2, 30) * 2, // 10GB
  "plugins": ['file-downloaded-webhook', 'file-uploaded-webhook'],
  // Disable the QR code button for download url sharing, set to true to disable
  "disableQrCode": false,
};
