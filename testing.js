const Downloader = require("./index");

const options = {
    dir: "C:/Users/utente/Desktop/Download",
    concurrency: 2,
  };
  
const urls = ['https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg']
  
initDownload = new Downloader(options);
initDownload.loadUrls(urls);
initDownload.downloadImgFromUrl();
