# Queue Image Downloader

It can be useful to download thousands of images without incurring timeouts or other errors
## The queue come from [async](https://link-url-here.org) https://github.com/caolan/async

## Options

- **dir** (*required*) - The destination directory
- **Concurrency** - Number for determining the maximum number of tasks that can be run in parallel.

More options will be added in the future

## Usage

Download to a directory and save with the original filename

```js
const Downloader = require("./index");

const options = {
    dir: "C:/Users/utente/Desktop/Download", // Create new Directory called Download
    concurrency: 2, // Default value
};

const urls = ['https://pad.mymovies.it/filmclub/2017/02/120/imm.jpg', 'https://pad.mymovies.it/filmclub/2017/02/120/immpg1.jpg', 'https://upload.wikimedia.org/wikipedia/en/f/f2/Turbo_Kid_poster.jpg'] // the names of the images will be imm.jpg, immpg1.jpg, Turbo_Kid_poster.jpg

// Instantiate Downloader class 
initDownload = new Downloader(options);
// Load the URLS
initDownload.loadUrls(urls);
// Launch the download
initDownload.downloadImgFromUrl();

```
## Readme credits

for the readme I was inspired by [image-downloader](https://github.com/demsking/image-downloader)

## License

Under the MIT license. See [LICENSE](https://gitlab.com/demsking/image-downloader/blob/master/LICENSE) file for more details.