document.addEventListener('DOMContentLoaded', () => {
    const source = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
    const video: any = document.querySelector('video');
    
    // For more options see: https://github.com/sampotts/plyr/#options
    // captions.update is required for captions to work with hls.js
    const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
    video.src = source;
    

    // if (!Hls.isSupported()) {
    // } else {
    //   // For more Hls.js options, see https://github.com/dailymotion/hls.js
    //   const hls = new Hls();
    //   hls.loadSource(source);
    //   hls.attachMedia(video);
    //   window.hls = hls;
      
    //   // Handle changing captions
    //   player.on('languagechange', () => {
    //     // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
    //     setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
    //   });
    // }
    
    // Expose player so it can be used from the console
    // window.player = player;
  });



  <h1>
    Hello
</h1>


<div class="container">
	<video controls crossorigin playsinline poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"></video>
</div>

<script src="https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js"></script>
<script src="https://cdn.plyr.io/3.7.3/plyr.js"></script>
<link rel="stylesheet" href="https://cdn.plyr.io/3.7.3/plyr.css" />
