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
// $(".Collection").on("click",function(){
// 	if($(this).text("收藏")){
// 		$(this).css({
// 		"background":"#909dbe"
// 		})
// 		$(this).text("已收藏")
// 	}
// 	else{
// 		console.log(1)
// 		$(this).css({
// 		"background":"#dd3915"
// 		})
// 		$(this).text("收藏")
// 	}
// })
$(".Collection").on("click",function(){
if($(this).text()=="收藏"&&$(".btn").on("click")){
	$(this).css({
		"background":"#ccc7c2 ",
	})
	$(this).text("已收藏")
	
}else{
	$(this).css({
		"background":" #dd3915",
	})
	$(this).text("收藏")
}
})
$(".btn").on("click",function(){

	console.log(1)
	$(".modal-content").html(`<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">把味噌风卷心菜加入到你的菜单专辑</h4>
        <p>成功加入菜单<a href="">我的收藏！</a></p>
<div class="ulli">这个菜谱被其他人加入到以下菜单：
<ul>
	<li><a href="">0001</a></li>
	<li><a href="">0002</a></li>
	<li><a href="">0003</a></li>
	<li><a href="">0004</a></li>
	<li><a href="">0005</a></li>
</ul>
</div>
        `)
})
// $(".report p").on("click",function(){

// })
$(".jubao").on("click",function(){
	alert("你的举报已递交，我们会尽快核实处理！")
})