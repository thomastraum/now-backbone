(function ($) {

	var images_data = [{ "tags": "ficken", "name":"tumblr_max544ZWIF1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_max544ZWIF1qznlfio1_500.jpg","width":500,"height":623,"thumb_name":"tumblr_max544ZWIF1qznlfio1_500.thumb.jpg","thumb_width":361,"thumb_height":450,"id":"506d57dca23b78e74b000039","__v":0,"created_at":"2012-10-04T09:33:16.524Z"}
	,{"tags": "ficken", "name":"tumblr_mb34x3dT551qznlfio1_500.png","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb34x3dT551qznlfio1_500.png","width":460,"height":484,"thumb_name":"tumblr_mb34x3dT551qznlfio1_500.thumb.png","thumb_width":428,"thumb_height":450,"id":"506d57dca23b78e74b000038","__v":0,"created_at":"2012-10-04T09:33:16.400Z"}
	,{"tags": "design", "name":"tumblr_max51kDk0o1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_max51kDk0o1qznlfio1_500.jpg","width":391,"height":640,"thumb_name":"tumblr_max51kDk0o1qznlfio1_500.thumb.jpg","thumb_width":275,"thumb_height":450,"id":"506d57dca23b78e74b000037","__v":0,"created_at":"2012-10-04T09:33:16.355Z"}
	,{"tags": "landscape", "name":"tumblr_maxqscvcen1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_maxqscvcen1qznlfio1_500.jpg","width":487,"height":750,"thumb_name":"tumblr_maxqscvcen1qznlfio1_500.thumb.jpg","thumb_width":292,"thumb_height":450,"id":"506d57dca23b78e74b000036","__v":0,"created_at":"2012-10-04T09:33:16.337Z"}
	,{"tags": "office", "name":"tumblr_mapwh5LXtT1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mapwh5LXtT1qznlfio1_500.jpg","width":500,"height":707,"thumb_name":"tumblr_mapwh5LXtT1qznlfio1_500.thumb.jpg","thumb_width":318,"thumb_height":450,"id":"506d57dca23b78e74b000035","__v":0,"created_at":"2012-10-04T09:33:16.237Z"}
	,{"tags": "design", "name":"tumblr_mapwip7xQ71qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mapwip7xQ71qznlfio1_500.jpg","width":469,"height":750,"thumb_name":"tumblr_mapwip7xQ71qznlfio1_500.thumb.jpg","thumb_width":281,"thumb_height":450,"id":"506d57dca23b78e74b000034","__v":0,"created_at":"2012-10-04T09:33:16.227Z"}
	,{"tags": "landscape", "name":"tumblr_mb1er0S2Ui1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mb1er0S2Ui1qznlfio1_500.jpg","width":500,"height":436,"thumb_name":"tumblr_mb1er0S2Ui1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":392,"id":"506d57dba23b78e74b000033","__v":0,"created_at":"2012-10-04T09:33:15.972Z"}
	,{"tags": "ficken", "name":"tumblr_manvhinEqc1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_manvhinEqc1qznlfio1_500.jpg","width":500,"height":402,"thumb_name":"tumblr_manvhinEqc1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":362,"id":"506d57dba23b78e74b000032","__v":0,"created_at":"2012-10-04T09:33:15.865Z"}
	,{"tags": "ficken", "name":"tumblr_maz01rFSho1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_maz01rFSho1qznlfio1_500.jpg","width":500,"height":375,"thumb_name":"tumblr_maz01rFSho1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":338,"id":"506d57dba23b78e74b000031","__v":0,"created_at":"2012-10-04T09:33:15.858Z"}
	,{"tags": "ficken", "name":"tumblr_mb4f3uEqUO1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mb4f3uEqUO1qznlfio1_500.jpg","width":500,"height":498,"thumb_name":"tumblr_mb4f3uEqUO1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":448,"id":"506d57dba23b78e74b000030","__v":0,"created_at":"2012-10-04T09:33:15.852Z"}
	,{"tags": "design", "name":"tumblr_manuggX2aQ1qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_manuggX2aQ1qznlfio1_500.jpg","width":500,"height":452,"thumb_name":"tumblr_manuggX2aQ1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":407,"id":"506d57dba23b78e74b00002f","__v":0,"created_at":"2012-10-04T09:33:15.526Z"}
	,{"tags": "office", "name":"tumblr_mb3lshJKR21qznlfio1_500.gif","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb3lshJKR21qznlfio1_500.gif","width":500,"height":350,"thumb_name":"tumblr_mb3lshJKR21qznlfio1_500.thumb.gif","thumb_width":450,"thumb_height":315,"id":"506d57dba23b78e74b00002d","__v":0,"created_at":"2012-10-04T09:33:15.468Z"}
	,{"tags": "ficken", "name":"tumblr_maol84bTBH1qznlfio1_500.png","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_maol84bTBH1qznlfio1_500.png","width":500,"height":214,"thumb_name":"tumblr_maol84bTBH1qznlfio1_500.thumb.png","thumb_width":450,"thumb_height":193,"id":"506d57dba23b78e74b00002e","__v":0,"created_at":"2012-10-04T09:33:15.468Z"}
	,{"tags": "office", "name":"tumblr_max54gfNDb1qznlfio1_400.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_max54gfNDb1qznlfio1_400.jpg","width":391,"height":600,"thumb_name":"tumblr_max54gfNDb1qznlfio1_400.thumb.jpg","thumb_width":293,"thumb_height":450,"id":"506d57dba23b78e74b00002c","__v":0,"created_at":"2012-10-04T09:33:15.407Z"}
	,{"tags": "ficken", "name":"tumblr_mb3ltzCh131qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb3ltzCh131qznlfio1_500.jpg","width":500,"height":226,"thumb_name":"tumblr_mb3ltzCh131qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":203,"id":"506d57dba23b78e74b00002b","__v":0,"created_at":"2012-10-04T09:33:15.041Z"}
	,{"tags": "office", "name":"tumblr_mb34wii5X31qznlfio1_400.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb34wii5X31qznlfio1_400.jpg","width":400,"height":190,"thumb_name":"tumblr_mb34wii5X31qznlfio1_400.thumb.jpg","thumb_width":450,"thumb_height":214,"id":"506d57daa23b78e74b00002a","__v":0,"created_at":"2012-10-04T09:33:14.573Z"}
	,{"tags": "ficken", "name":"tumblr_mb3ltl5yX31qznlfio1_500.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb3ltl5yX31qznlfio1_500.jpg","width":500,"height":221,"thumb_name":"tumblr_mb3ltl5yX31qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":199,"id":"506d57d9a23b78e74b000029","__v":0,"created_at":"2012-10-04T09:33:13.910Z"}
	,{"tags": "ficken", "name":"tumblr_max2535RLe1qznlfio1_400.jpg","feedid":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_max2535RLe1qznlfio1_400.jpg","width":310,"height":110,"thumb_name":"tumblr_max2535RLe1qznlfio1_400.thumb.jpg","thumb_width":450,"thumb_height":160,"id":"506d57d9a23b78e74b000028","__v":0,"created_at":"2012-10-04T09:33:13.678Z"}
	];

//------------------------------------------------------------------------------

	var Image = Backbone.Model.extend({

		defaults: function() {
			return {
				order: images.nextOrder(),
		        done: false
			};
		},

		select: function(){
			this.set( {selected:true} );
		},

		deselect: function () {
			this.set( {selected:false}, {silent:true} );
		}
	
	});
	
//------------------------------------------------------------------------------

	var Images = Backbone.Collection.extend({

		model: Image,

		initialize : function(){

			// this.bind('change:selected', this.updateSelections, this);
		},

		updateSelections: function( selected_model ){
			// this.each( function (model) {
			// 	if (selected_model.get('order') != model.get('order') ) {
			// 		model.set( {selected:false}, {silent: true} );
			// 	}
			// });
		},

		nextOrder: function() {
			if (!this.length) return 1;
			return this.last().get('order') + 1;
		},

	    comparator: function(image) {
	    	return image.get('order');
	    }

	});

//------------------------------------------------------------------------------ VIEWS

	var ThumbView  = Backbone.View.extend({

		tagName: "div",
		className: "thumb-container",
		template: _.template($('#thumb-template').html()),

		 events: {
			"click" : "selectThumb",
		 },

		render: function () {
			this.$el.html(this.template( this.model.toJSON() ));          
			return this;
		},

		selectThumb: function(){
			this.model.select();
		}

	});

//------------------------------------------------------------------------------

	var ImageViewSingle = Backbone.View.extend({

		el:$("#image-view-single"),

		tagName: "div",
		className: "image-single",
		template: _.template($('#image-template').html()),

		events: {
			"click li#next" : "next",
			"click li#prev" : "prev",
			"click li#close" : "close"
		},

		initialize: function(){

			this.collection.on('change:selected', this.open, this);
			this.$el.hide();

			this.nextButton = this.$el.find("#next");
			this.prevButton = this.$el.find("#prev");
		},

		render: function ( model ) {
			this.$el.find('#image-container').html(this.template( model.toJSON() ));      
			this.showHideNav();    
			return this;
		},

		open: function(model) {

			console.log( "open" );
			this.collection.off( 'change:selected' );

			this.$el.show();
			this.activeModel = model;
			this.render(model);

			this.options.router.navigate( 'image/' + this.activeModel.id, false );
		},

		close : function() {

			console.log( "close" );

			this.$el.hide();
			this.trigger( 'ImageViewSingle:closed' );
			this.activeModel.deselect();
			this.collection.on('change:selected', this.open, this);
			// this.activeModel.set({selected: false});
		},

		next : function(  ){
			var next =  (this.activeModel.get('order')<this.collection.length ) ? this.activeModel.get('order') : this.collection.length;
			this.activeModel.deselect();

			this.activeModel = this.collection.at( next );
			this.render( this.activeModel );

			this.activeModel.select();

			// console.log( "router: " + this.options.router );

			this.options.router.navigate( 'image/' + this.activeModel.id, false );
		},

		prev : function(){

			var prev = this.activeModel.get('order')-2;
			this.activeModel.deselect();

			this.activeModel = this.collection.at( prev );
			this.render( this.activeModel );
			this.activeModel.select();

			this.options.router.navigate( 'image/' + this.activeModel.id, false );
		},

		showHideNav: function( ){

			var cursor = this.activeModel.get('order');

			if ( cursor == 1) {
				this.prevButton.hide();
			} else if ( cursor == this.collection.length) {
				this.nextButton.hide();
			} else if( !this.nextButton.is(":visible") ) {
				this.nextButton.show();
			} else if( !this.prevButton.is(":visible") ) {
				this.prevButton.show();
			}

		}

	});

//------------------------------------------------------------------------------

	var ThumbsView = Backbone.View.extend({

		el: $("#images"),

		events: {
			"click .thumb-container" : "hide"
		},

		initialize: function () {

			_.each(images_data, function(data){
				// console.log(data);
				images.add(data);
			});

			// close when selected 
			this.collection.on( 'change:selected', this.hide, this );

			// show images when single view is closed
			image_view_single.bind('ImageViewSingle:closed', this.show, this);

			this.render();

		},

		render: function( event ){

			_.each(this.collection.models, function (image_model) {
				this.renderThumb(image_model);
			}, this);
			// return this; //recommended as this enables calls to be chained.
		},

		renderThumb: function( image_model ){
			var thumb_view = new ThumbView({
				model: image_model,
				id: "thumb-" + image_model.id
			});
			this.$el.append(thumb_view.render().el);
		},

		show: function() {

			console.log('show thumbs_view');
			this.$el.show();

			// console.log( 'selected length', this.collection.where({selected: true}).length);
			var selected = this.collection.where({selected: true})[0];
			var scrolltop = this.$el.find( '#thumb-'+selected.id ).offset().top;
		    $('html, body').animate({scrollTop:scrolltop}, 'normal');

			this.collection.on( 'change:selected', this.hide, this );

			this.options.router.navigate( "/", false );

		},

		hide: function(image_model) {
			console.log( 'close thumbs_view');
			this.collection.off( 'change:selected', this.hide, this );
			this.$el.hide();
		}

	});

//------------------------------------------------------------------------------ ROUTER

	var ImagesRouter = Backbone.Router.extend({

	    routes: {
	        "image/:id": "imageUrlFilter"
	    },

	    imageUrlFilter: function (id) {

	    	console.log( "asdasda" +  images.get(id) );
	        images.get(id).select();
	    }
	});

	var images_router = new ImagesRouter();
	var images = new Images();
	var image_view_single = new ImageViewSingle({collection:images, router:images_router });
	var thumbs_view = new ThumbsView( {collection:images, router:images_router} );

	// Backbone.history.start({pushState: true});

	console.log( 'hi');

} (jQuery));

