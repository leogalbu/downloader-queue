const Downloader = require("./index");

const options = {
    dir: "C:/Users/utente/Desktop/Download",
    concurrency: 2,
};
  
const urls = ['https://pad.mymovies.it/filmclub/2017/02/120/imm.jpg', 'https://pad.mymovies.it/filmclub/2017/02/120/immpg1.jpg', 'https://upload.wikimedia.org/wikipedia/en/f/f2/Turbo_Kid_poster.jpg']
  
initDownload = new Downloader(options);
initDownload.loadUrls(urls);
initDownload.downloadImgFromUrl();
