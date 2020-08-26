var Top=$(".Top");
	Top.hide();
$(window).on("scroll",function(){
	if($(window).scrollTop()>=500){
		Top.show();
	}
	if($(window).scrollTop()<=500){
		Top.hide();
	}
})
Top.on("click",function(){
	$("html,body").animate({scrollTop:0},300);
})