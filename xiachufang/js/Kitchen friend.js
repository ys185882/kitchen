$(".follow").on("click",function(){
if($(this).text()=="关注"){
	$(this).css({
		"background":"#ccc7c2 ",
	})
	$(this).text("已关注")
	if($(this).text("已关注")){
		$(this).on("mouseover",function(){

		$(this).text("取消关注")
	})
	$(this).on("mouseout",function(){
		$(this).text("已关注")
	})
	}
}else{
	$(this).css({
		"background":" #dd3915",
	})
	$(this).text("关注")
		$(this).off("mouseover")
		$(this).off("mouseout")
}
})
$(".lists~li").hide()
$(".lists").on("click",function(){
	console.log(1)
	$(this).siblings().stop().toggle(500)
	if($(this).children().hasClass("glyphicon-chevron-up")){
		$(this).children().toggleClass("glyphicon-chevron-up")
		$(this).children().addClass("glyphicon-chevron-down")
	}
	else{
		$(this).children().toggleClass("glyphicon-chevron-down")
		$(this).children().addClass("glyphicon-chevron-up")
	}

})