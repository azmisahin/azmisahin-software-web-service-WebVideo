
/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Web Application
    * azmisahin.com
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Copyright bilgi@azmisahin.com
    * Licence (https://github.com/azmisahin)
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
var base = {
    Host: document.location.hostname
    , Origin: document.location.origin
    , Protocol: 'http'
    , Base: ''    
    , Version: new Date().getTime()
};
head.load
    (
    'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'
    ,'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
    , base.Origin + '/' + 'recorderjs/recorder.js' + '?v=' + base.Version
    , base.Origin + '/' + 'web-video.js' + '?v=' + base.Version
    , base.Origin + '/' + 'app.js' + '?v=' + base.Version
    );