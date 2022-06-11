const async = require("async");
const https = require("https");
const fs = require("fs");
const logger = require('node-color-log');

module.exports = class Downloader {
  constructor({ dir, concurrency = 2 }) {
    if (!dir) throw new Error("Please define a directory");
    this.dir = dir;
    //this.urls = urls;
    this.concurrency = concurrency;
    this.q = async.queue((url, callback) => {
      this.downloadImgFromUrl(url.url, this.dir, () => {
        callback();
      });
    }, this.concurrency);

    this.q.drain(() => {
      logger.color('green').success("All images have been downloaded");
    });

    this.q.error((err, img) => {
      logger.color('red').error("Error during images download => ", err);
    });
  }

  loadUrls = (urls) => {
    urls.forEach((url) => {
      this.q.push({ url });
    });
  };

  downloadImgFromUrl = (url, dir, callback) => {
    if (url) {
      const fileName = url?.split("/").pop();
      logger.color('blue').log("dowloading... ", fileName);
      fs.mkdir(`${dir}`, { recursive: true }, (err) => {
        if (err) throw new Error("Error during creating new directory ", err);
      });
      const file = fs.createWriteStream(`${dir}/${fileName}`);
      const request = https.get(url, (response) => {
        response.pipe(file);
        callback();
      });
    }
  };
};
