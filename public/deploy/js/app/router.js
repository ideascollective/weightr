define(["backbone","postal","container.view","./modules/landing/landing.controller"],function(e,t,n,r){var i=e.Router.extend({routes:{index:"loadIndex","*path":"defaultAction"},viewManager:new n({el:"body",template:'<section class="wrapper"></section>'}),initialize:function(){t.channel("application").subscribe("navigate",_.bind(this.onNavigate,this)),e.history.start()},onNavigate:function(e){e in this.routes&&this.navigate(e,!0)},loadIndex:function(){r.load(this.viewManager)},defaultAction:function(){this.navigate("index",!0)}});return i});