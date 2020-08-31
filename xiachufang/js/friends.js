$(".xinlang").on("click",function(){
	$(".contents").html(`<p>你在新浪微博关注的人里，有 1 人也在下厨房</p>
			<div class="all">关注</div>`)
})
$(".douban").on("click",function(){
	$(".contents").html(`<p>绑定豆瓣网账号，发现同在下厨房的好友</p>`)
})
$(".tengxun").on("click",function(){
	$(".contents").html(`<p>厨房君正在努力地帮你找同样在下厨房的腾讯微博好友，请稍候... </p>`)
	
})