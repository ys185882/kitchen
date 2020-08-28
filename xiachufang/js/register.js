$(".registerform").validate({
		// debug:true,
	rules:{
		telnumber:{
			required:true
		},
		number:{
			required:true,
			rangelength:[4,4]
		}
	}
})