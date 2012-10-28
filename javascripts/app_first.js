(function ($) {

	var contacts = [{ "tags": "ficken", "name":"tumblr_max544ZWIF1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_max544ZWIF1qznlfio1_500.jpg","width":500,"height":623,"thumb_name":"tumblr_max544ZWIF1qznlfio1_500.thumb.jpg","thumb_width":361,"thumb_height":450,"_id":"506d57dca23b78e74b000039","__v":0,"created_at":"2012-10-04T09:33:16.524Z"}
	,{"tags": "ficken", "name":"tumblr_mb34x3dT551qznlfio1_500.png","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb34x3dT551qznlfio1_500.png","width":460,"height":484,"thumb_name":"tumblr_mb34x3dT551qznlfio1_500.thumb.png","thumb_width":428,"thumb_height":450,"_id":"506d57dca23b78e74b000038","__v":0,"created_at":"2012-10-04T09:33:16.400Z"}
	,{"tags": "design", "name":"tumblr_max51kDk0o1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_max51kDk0o1qznlfio1_500.jpg","width":391,"height":640,"thumb_name":"tumblr_max51kDk0o1qznlfio1_500.thumb.jpg","thumb_width":275,"thumb_height":450,"_id":"506d57dca23b78e74b000037","__v":0,"created_at":"2012-10-04T09:33:16.355Z"}
	,{"tags": "landscape", "name":"tumblr_maxqscvcen1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_maxqscvcen1qznlfio1_500.jpg","width":487,"height":750,"thumb_name":"tumblr_maxqscvcen1qznlfio1_500.thumb.jpg","thumb_width":292,"thumb_height":450,"_id":"506d57dca23b78e74b000036","__v":0,"created_at":"2012-10-04T09:33:16.337Z"}
	,{"tags": "office", "name":"tumblr_mapwh5LXtT1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mapwh5LXtT1qznlfio1_500.jpg","width":500,"height":707,"thumb_name":"tumblr_mapwh5LXtT1qznlfio1_500.thumb.jpg","thumb_width":318,"thumb_height":450,"_id":"506d57dca23b78e74b000035","__v":0,"created_at":"2012-10-04T09:33:16.237Z"}
	,{"tags": "design", "name":"tumblr_mapwip7xQ71qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mapwip7xQ71qznlfio1_500.jpg","width":469,"height":750,"thumb_name":"tumblr_mapwip7xQ71qznlfio1_500.thumb.jpg","thumb_width":281,"thumb_height":450,"_id":"506d57dca23b78e74b000034","__v":0,"created_at":"2012-10-04T09:33:16.227Z"}
	,{"tags": "landscape", "name":"tumblr_mb1er0S2Ui1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mb1er0S2Ui1qznlfio1_500.jpg","width":500,"height":436,"thumb_name":"tumblr_mb1er0S2Ui1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":392,"_id":"506d57dba23b78e74b000033","__v":0,"created_at":"2012-10-04T09:33:15.972Z"}
	,{"tags": "ficken", "name":"tumblr_manvhinEqc1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_manvhinEqc1qznlfio1_500.jpg","width":500,"height":402,"thumb_name":"tumblr_manvhinEqc1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":362,"_id":"506d57dba23b78e74b000032","__v":0,"created_at":"2012-10-04T09:33:15.865Z"}
	,{"tags": "ficken", "name":"tumblr_maz01rFSho1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_maz01rFSho1qznlfio1_500.jpg","width":500,"height":375,"thumb_name":"tumblr_maz01rFSho1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":338,"_id":"506d57dba23b78e74b000031","__v":0,"created_at":"2012-10-04T09:33:15.858Z"}
	,{"tags": "ficken", "name":"tumblr_mb4f3uEqUO1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_mb4f3uEqUO1qznlfio1_500.jpg","width":500,"height":498,"thumb_name":"tumblr_mb4f3uEqUO1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":448,"_id":"506d57dba23b78e74b000030","__v":0,"created_at":"2012-10-04T09:33:15.852Z"}
	,{"tags": "design", "name":"tumblr_manuggX2aQ1qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_manuggX2aQ1qznlfio1_500.jpg","width":500,"height":452,"thumb_name":"tumblr_manuggX2aQ1qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":407,"_id":"506d57dba23b78e74b00002f","__v":0,"created_at":"2012-10-04T09:33:15.526Z"}
	,{"tags": "office", "name":"tumblr_mb3lshJKR21qznlfio1_500.gif","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb3lshJKR21qznlfio1_500.gif","width":500,"height":350,"thumb_name":"tumblr_mb3lshJKR21qznlfio1_500.thumb.gif","thumb_width":450,"thumb_height":315,"_id":"506d57dba23b78e74b00002d","__v":0,"created_at":"2012-10-04T09:33:15.468Z"}
	,{"tags": "ficken", "name":"tumblr_maol84bTBH1qznlfio1_500.png","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_maol84bTBH1qznlfio1_500.png","width":500,"height":214,"thumb_name":"tumblr_maol84bTBH1qznlfio1_500.thumb.png","thumb_width":450,"thumb_height":193,"_id":"506d57dba23b78e74b00002e","__v":0,"created_at":"2012-10-04T09:33:15.468Z"}
	,{"tags": "office", "name":"tumblr_max54gfNDb1qznlfio1_400.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_max54gfNDb1qznlfio1_400.jpg","width":391,"height":600,"thumb_name":"tumblr_max54gfNDb1qznlfio1_400.thumb.jpg","thumb_width":293,"thumb_height":450,"_id":"506d57dba23b78e74b00002c","__v":0,"created_at":"2012-10-04T09:33:15.407Z"}
	,{"tags": "ficken", "name":"tumblr_mb3ltzCh131qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb3ltzCh131qznlfio1_500.jpg","width":500,"height":226,"thumb_name":"tumblr_mb3ltzCh131qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":203,"_id":"506d57dba23b78e74b00002b","__v":0,"created_at":"2012-10-04T09:33:15.041Z"}
	,{"tags": "office", "name":"tumblr_mb34wii5X31qznlfio1_400.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb34wii5X31qznlfio1_400.jpg","width":400,"height":190,"thumb_name":"tumblr_mb34wii5X31qznlfio1_400.thumb.jpg","thumb_width":450,"thumb_height":214,"_id":"506d57daa23b78e74b00002a","__v":0,"created_at":"2012-10-04T09:33:14.573Z"}
	,{"tags": "ficken", "name":"tumblr_mb3ltl5yX31qznlfio1_500.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://25.media.tumblr.com/tumblr_mb3ltl5yX31qznlfio1_500.jpg","width":500,"height":221,"thumb_name":"tumblr_mb3ltl5yX31qznlfio1_500.thumb.jpg","thumb_width":450,"thumb_height":199,"_id":"506d57d9a23b78e74b000029","__v":0,"created_at":"2012-10-04T09:33:13.910Z"}
	,{"tags": "ficken", "name":"tumblr_max2535RLe1qznlfio1_400.jpg","feed_id":"506d57d8a23b78e74b000027","original_url":"http://24.media.tumblr.com/tumblr_max2535RLe1qznlfio1_400.jpg","width":310,"height":110,"thumb_name":"tumblr_max2535RLe1qznlfio1_400.thumb.jpg","thumb_width":450,"thumb_height":160,"_id":"506d57d9a23b78e74b000028","__v":0,"created_at":"2012-10-04T09:33:13.678Z"}
	];

//------------------------------------------------------------------------------

	var Thumb = Backbone.Model.extend({

		defaults: {
			photo: "thumbs/tumblr_manuggX2aQ1qznlfio1_500.thumb.jpg"
		}
	
	});
	
//------------------------------------------------------------------------------

	var Gallery = Backbone.Collection.extend({
		model: Thumb
	});

//------------------------------------------------------------------------------

	var ThumbView  = Backbone.View.extend({

		tagName: "article",
		className: "contact-container",
		template: _.template($('#thumb_template').html()),

		render: function () {
			// var tmpl = _.template(this.template);
			// this.$el.html(tmpl(this.model.toJSON()));
			this.$el.html(this.template( this.model.toJSON() ));          
			return this;
		}

	});

//------------------------------------------------------------------------------

	var GalleryView = Backbone.View.extend({

		el: $("#images"),

		initialize: function () {
			this.collection = new Gallery(contacts);

			this.on("change:filterType", this.filterByTag, this);
			this.collection.on("reset", this.render, this);

			this.$el.find("#tag-filter").append(this.createSelect());
			_.bindAll(this, 'render');

			this.render();
		},

		render: function () {
			// clear all 
			this.$el.find("div.thumb").remove();

			_.each(this.collection.models, function (item) {
				this.renderThumb(item);
			}, this);
		},

		renderThumb: function (item) {
			var thumb_view = new ThumbView({
				model: item
			});
			this.$el.append(thumb_view.render().el);
		},

		getTags: function () {
			return _.uniq(this.collection.pluck("tags"), false, function (tag) {
				return tag.toLowerCase();
			});
		},
		
		createSelect: function () {

			var filter = this.$el.find("#tag-filter")
				, select = $("<select/>", { html: "<option>All</option>" });

			_.each(this.getTags(), function (item) {
				var option = $("<option/>", {
					value: item.toLowerCase(),
					text: item.toLowerCase()
				}).appendTo(select);
			});

			return select;
		},

		events: {
		    "change #tag-filter select": "setFilter"
		},

		setFilter: function (e) {
			console.log( e );
		    this.filterType = e.currentTarget.value;
		    this.trigger("change:filterType");
		},

		filterByTag: function () {
		    if (this.filterType === "all") {
		        this.collection.reset(contacts);
		    } else {
		        this.collection.reset(contacts, { silent: true });
		        var filterType = this.filterType;
		        console.log( "filterType: " + filterType );

		        var filtered = _.filter(this.collection.models, function (item) {
		            return item.get("tags").toLowerCase() === filterType;
		        });
		        this.collection.reset(filtered);
		    }
		}

	});

	var gallery_view = new GalleryView();


} (jQuery));