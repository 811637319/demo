//01 新闻滚动 
$(function(){
        var $this = $(".scrollNews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});

function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}

//02 模块展开和折叠 
$(function(){
	 $(".module_up_down").toggle(function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","images/zxtd_06.gif");
			});
		 },function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","images/zxtd_03.gif");
			});
	 })
})
//点击左右轮换图片效果
$(function(){
    var page = 1;                               //默认当前的页面是1
    var i = 6; 								    //每版4个图片
	var len = $(".list_content ul li").length;  //li的数量 
	var page_count = Math.ceil(len / i) ;       //总页数(只要不是整数，就往大的方向取最小的整数)
	var none_unit_width = $(".list").width();   //获取框架内容的宽度,不带单位
	var $parent = $(".list_content");           //获取li的宽度和(实际宽度)
    //向右 按钮
    $(".goRight").click(function(){ 
		if( !$parent.is(":animated") ){
			if(page == page_count ){//已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$parent.animate({left:0}, 800); //通过改变left值，跳转到第一个版面
				page = 1;
			}else{
				$parent.animate({ left:'-='+none_unit_width}, 800);  //通过改变left值，达到每次换一个版面
				page++;
			}
		}
   });
    //往左 按钮
    $(".goLeft").click(function(){
	    if( !$parent.is(":animated") ){
			if( page == 1 ){//已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$parent.animate({ left : '-='+none_unit_width*(page_count-1)}, 800); //通过改变left值，跳转到最后一个版面
				page = page_count;
			}else{
				$parent.animate({ left : '+='+none_unit_width }, 800);  //通过改变left值，达到每次换一个版面
				page--;
			}
		}
    });
});