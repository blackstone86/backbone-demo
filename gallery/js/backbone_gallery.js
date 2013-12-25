/***************
 @Photo 数据源
***************/
var photoWallData = [
  { src_l: 'data/large_photo/p480x361_1.jpg', src_s: 'data/small_photo/p150x112_1.jpg', description:'photo_1: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_2.jpg', src_s: 'data/small_photo/p150x112_2.jpg', description:'photo_2: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_3.jpg', src_s: 'data/small_photo/p150x112_3.jpg', description:'photo_3: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_4.jpg', src_s: 'data/small_photo/p150x112_4.jpg', description:'photo_4: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_5.jpg', src_s: 'data/small_photo/p150x112_5.jpg', description:'photo_5: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_6.jpg', src_s: 'data/small_photo/p150x112_6.jpg', description:'photo_6: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_7.jpg', src_s: 'data/small_photo/p150x112_7.jpg', description:'photo_7: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_8.jpg', src_s: 'data/small_photo/p150x112_8.jpg', description:'photo_8: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_9.jpg', src_s: 'data/small_photo/p150x112_9.jpg', description:'photo_9: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_10.jpg', src_s: 'data/small_photo/p150x112_10.jpg', description:'photo_10: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_11.jpg', src_s: 'data/small_photo/p150x112_11.jpg', description:'photo_11: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }
  ,{ src_l: 'data/large_photo/p480x361_12.jpg', src_s: 'data/small_photo/p150x112_12.jpg', description:'photo_12: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' } 
  ,{ src_l: 'data/large_photo/p480x361_13.jpg', src_s: 'data/small_photo/p150x112_13.jpg', description:'photo_13: 假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字' }     
]

/****************************
 @base_backbone_photoWall.js
 @图片墙组件
 @依赖项：
  1.base.js
  2.underscore.js
  3.backbone.js 
****************************/

/***************
 @引入第三方库
***************/
Backbone.$ = $; 

/***************
 @全局Backbone
***************/
var app = app || {};

/***************
 @配置项
***************/
app.setting = {
  // 每页最多显示图片数
  page_max_photos: 6
    // 动画时间，单位s
  ,durationTime: .5
};

/***************
 @Photo 模型
***************/
(function () {
  'use strict';

  app.Photo = Backbone.Model.extend({
    defaults: {
      // 大图路径
      src_l: ''
      // 小图路径
      ,src_s: ''
      // 图片描述
      ,description: ''
      // 是否当前显示
      ,isCurr: false
      // 索引(基于0)
      ,idx: 0
    }
    // 切换isCurr状态
    ,toggle: function(){
      this.set({
        isCurr: !this.get('isCurr')
      });
    }
  });
})();

/***************
 @Photo 集合
***************/
(function () {
  'use strict';

  var Photos = Backbone.Collection.extend({
    model: app.Photo

    ,initialize: function () {
      // 封装模型信息
      var models = photoWallData.map(function(photo, index, list){
        photo.isCurr = false; 
        photo.idx = index;
        return photo;
      });
      // 导入数据
      this.add(models);
    } 
  });
  
  app.photos = new Photos();
})();

/*************************************
 @Photo 大图区视图(兼顾文字说明区域)
**************************************/
(function ($) {
  'use strict';

  app.FocusView = Backbone.View.extend({
    
    tagName:  'li'

    ,template: _.template($('#large-photo-template').html())

    ,events: {}

    ,initialize: function () {
      this.listenTo(this.model, 'change:isCurr', this.showCurr);
    }

    ,render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

    ,showCurr: function(model, value){
      if( value == true ){
        this.$el.css('z-index', 1);
        this.$el.animate(
          { opacity: 1 }
          , app.setting.durationTime * 1e3
        );  
      }else{
        this.$el.css('z-index', 0);
        var $el = this.$el;
        setTimeout(function(){
          $el.css('z-index', -1);
          $el.css('opacity', 0);
        }, app.setting.durationTime * 1e3);
      }
    }
  });
})(jQuery);

/***************
 @Photo 页视图
***************/
(function ($) {
  'use strict';

  app.PageView = Backbone.View.extend({
    
    tagName:  'a'

    ,template: _.template($('#small-photo-template').html())

    ,initialize: function () {
      this.listenTo(this.model, 'change:isCurr', this.signCurr);
    }

    ,events: {
      'click #photo_page i': 'showCurr'
    }

    ,render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

    ,findCurrModel: function(){
      var currModel = null;
      currModel = app.photos.find(function(photo){
        if( photo.get('isCurr') == true ){
          return true;
        }
      });
      return currModel;
    }

    ,showCurr: function(){
      var currModel = this.findCurrModel();
      currModel.toggle();

      this.model.toggle();
    }

    ,signCurr: function(model, value){
      if( value ){
        this.$el.addClass('on');
      }else{
        this.$el.removeClass('on');
      }
    }
  });
})(jQuery);


/***************
 @App 视图
***************/
(function ($) {
  'use strict';

  app.AppView = Backbone.View.extend({

    el: '#photo_wall'
    // 集合长度
    ,photos: app.photos.length

    ,events: {
      // 大图区上一页事件 
      'click .curr .icon_prev': 'prev'
      // 大图区下一页事件 
      ,'click .curr .icon_next': 'next'
      // 翻页区tab事件
      ,'click #tab_box a': 'turnPage'       
    }

    // 翻页区模版
    ,tabs_template: _.template($('#photo-tabs-template').html())

    ,initialize: function () {
      this.$focus_view = this.$('#focus_view');
      this.$photo_page = this.$('#photo_page');
      this.$tab_box = this.$('#tab_box');
      this.$description = this.$('.txt_box .detail');
      this.$currLis = this.$('.photos_box .curr li');
      this.listenTo(app.photos, 'change:isCurr', this.showDescription);

      this.render();

      // 默认第一个为选中项
      var first_model = app.photos.at(0);
      first_model.set("isCurr", true);      
    }

    // 显示图片信息
    ,showDescription: function(model, value){
      if( value ){
        this.$description.html( model.get('description') );
      }
    }

    ,turnPage: function(event){
      var newPageIdx = $(event.target).index();
      this.turnToPage(newPageIdx);

      var currModel = this.findCurrModel()
        ,currPageIdx = this.getPageIdx(currModel.get('idx'))
        ,newCurrModel = null;

      if( newPageIdx != currPageIdx ){
        newCurrModel = app.photos.at( newPageIdx * app.setting.page_max_photos );
        currModel.toggle();
        newCurrModel.toggle();
      }
    }

    ,turnToPage: function(pageIdx){
      var tab_box_a = this.$('#tab_box a');
      tab_box_a.removeClass('on');
      tab_box_a.eq(pageIdx).addClass('on');

      this.$photo_page.animate(
        { left: -pageIdx * 500 }
        ,app.setting.durationTime * 1e3
      );
    }

    ,getFragment: function(View, models){
      var fragment = document.createDocumentFragment();
      models.each(function(photo){
        var view = new View({ model: photo });
        fragment.appendChild(view.render().el);
      });
      return fragment;
    }

    ,render: function () {
      if ( this.photos ) {
        // 渲染大图区
        var focus_view_fragment = this.getFragment(app.FocusView, app.photos);
        this.$focus_view.html(focus_view_fragment);

        // 渲染页  
        var page_max_photos = app.setting.page_max_photos
          ,pages_fragment = document.createDocumentFragment();
        for( var i = 0, len = Math.ceil( this.photos / page_max_photos ); i < len; i++ ){
          // 筛选页models数组
          var page_photos = app.photos.filter(function(photo){
            var photo_idx = photo.get('idx')
              ,min_idx = i * page_max_photos
              ,max_idx = min_idx + page_max_photos - 1;
            if( photo_idx >= min_idx && photo_idx <= max_idx ){
              return true;
            }
          });
          // 将页models数组转化成backbone集合
          var page_models = new Backbone.Collection();
          page_models.reset(page_photos);

          var page_fragment = this.getFragment(app.PageView, page_models)
            ,li = document.createElement('li');
          li.appendChild(page_fragment);
          pages_fragment.appendChild(li);
        }
        this.$photo_page.html(pages_fragment);

        // 渲染翻页区  
        this.$tab_box.html(this.tabs_template({
          tabs_len: Math.ceil( this.photos / app.setting.page_max_photos )
        }));
      };
    }

    ,findCurrModel: function(){
      var currModel = null;
      currModel = app.photos.find(function(photo){
        if( photo.get('isCurr') == true ){
          return true;
        }
      });
      return currModel;
    }

    ,getPageIdx: function(idx){
      var page_max_photos = app.setting.page_max_photos
      if( idx < page_max_photos ){
        return 0;
      }else{
        return Math.floor( idx / page_max_photos );
      };
    }

    //大图区上一页
    ,prev: function(){
      if( this.$currLis.is(':animated') ) return; 
      var newCurrModel = null
        ,currModel = this.findCurrModel()
        ,currIdx = currModel.get('idx')
        ,currPageIdx = this.getPageIdx(currIdx);
      // 较早前显示项切换isCurr状态为false
      currModel.toggle(); 

      if( currIdx >= 0 ){
        if( currIdx == 0 ){
          currIdx = this.photos - 1;
        }else{
          currIdx--;
        }
        newCurrModel = app.photos.at(currIdx);
        // 新显示项切换isCurr状态为true
        newCurrModel.toggle(currModel);

        var newPageIdx = this.getPageIdx(currIdx);
        if( currPageIdx != newPageIdx ){
          this.turnToPage(newPageIdx);
        }
      }
    }
    //大图区下一页
    ,next: function(){
      if( this.$currLis.is(':animated') ) return; 
      var newCurrModel = null
        ,currModel = this.findCurrModel()
        ,currIdx = currModel.get('idx')
        ,currPageIdx = this.getPageIdx(currIdx);
      // 较早前显示项切换isCurr状态为false
      currModel.toggle(); 

      if( currIdx >= 0 ){
        if( currIdx >= this.photos - 1 ){
          currIdx = 0;
        }else{
          currIdx++;
        }
        newCurrModel = app.photos.at(currIdx);
        // 新显示项切换isCurr状态为true
        newCurrModel.toggle();

        var newPageIdx = this.getPageIdx(currIdx);
        if( currPageIdx != newPageIdx ){
          this.turnToPage(newPageIdx);
        }       
      }
    }
  });
})(jQuery);

/***************
 @App 启动
***************/
window.onload = function(){
  'use strict';

  new app.AppView();
}
