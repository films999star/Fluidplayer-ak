var myFP =      fluidPlayer('sample-video', {
                           layoutControls: {                           
                                                                                        title: '𝔽𝕚𝕝𝕞𝕤999',
                             primaryColor: '#0cfa28',
                                                                                             timelinePreview: {
                                    file: '/images/valerian-thumbnails.vtt',                                   type: 'VTT'   
                              
  },
                                autoPlay: false,
                                allowTheatre: false,
		                             playPauseAnimation: true,
		                             playbackRateEnabled: true,
                               playButtonShowing: true,
                               allowDownload: true,
                                                            fillToContainer: true,
                                                                                      
 posterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdhxbWZM8q8jXMQ2v1mnf9k7qIfDTvwYGAA&usqp=CAU',
                          
        logo: {
                imageUrl:'',

                position:'top left',

                clickUrl:  null,

                opacity: 1

            },

            controlBar: {

                autoHide: true,

                autoHideTimeout: 3,

                animated: true,

            },

            timelinePreview:'{}',

            htmlOnPauseBlock: {

            html:'<b>Paused</b>',

                height:'80',

                width:'100',

            },

            playerInitCallback:     (function() {})                                                           

        }

    }

);                               
