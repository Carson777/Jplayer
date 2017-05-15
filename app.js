var vm = new Vue({
	el: '#app',
  data: {
  	button: 'play',
    started: 'false',
    play: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-play-128.png',
    pause: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-128.png',
    url: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-play-128.png',
    progressBar: {
    	width: '0px',
      backgroundColor: 'red'
    },
    time: time,
    duration: duration,
    timeRemaining: timeRemaining
  },
  methods: {
    foo: function () {
    	if (this.started === 'false'){
    		var that = this;
    		setInterval(function () {
    			that.time = time;
    			that.timeRemaining = timeRemaining;
                if ( timeRemaining === '00:00' ){
                    that.time = '00:00'
                    that.timeRemaining = duration
                    that.button = 'play'
                    that.url = that.play
                }
    		}, 1000);
    	}
    	if (this.button === 'play'){
    		this.button = 'pause';
    		this.url = this.pause;
    	} else if (this.button === 'pause'){
    		this.button = 'play';
    		this.url = this.play;
    	}
    	this.started = true;
    },
    setJpVar: function () {
    	this.time = time;
    	this.timeRemaining = timeRemaining;
    }
  }
});
var setUp = function(){
	console.log('setup')
	if(timeRemaining === '00:00'){
		setTimeout(function(){ setUp() }, 50);
	} else {
		vm.setJpVar();
	}
}
setUp();