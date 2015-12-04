recordPlay.disabled = true;
recordDownload.disabled = true;
stopVideo.disabled = true;

recordVideo.onclick = function () {
    recordVideo.disabled = true;
    stopVideo.disabled = false;
    webVideo.record();
}

stopVideo.onclick = function () {
    recordVideo.disabled = false;
    recordPlay.disabled = false;
    recordDownload.disabled = false;
    stopVideo.disabled = true;
    webVideo.stop();
}

recordPlay.onclick = function () {
    webVideo.recordPlay();
}

recordDownload.onclick = function () {
    webVideo.recordDownload();
}