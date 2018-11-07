var begin = $('#begin');
var beginPage = $('#beginPage');
var form = $('#form');
var main = $('#main');
var boy = $('#boy');
var girl = $('#girl');
var academy = $('#select');
var selectBox = $('#selectBox');
var selectbg = $('#selectbg');
var button = $('#button');
var sex = $('#sex');
var input = $('input');
begin.click(function(event) {
	beginPage.fadeOut('100');
	form.fadeIn('100');
});
boy.click(function(event) {
	sex.attr('data-sex', '男');
	girl.css('background','none');
	$(this).css('background','#FF7A40');
});
girl.click(function(event) {
	sex.attr('data-sex', '女');
	boy.css('background','none');
	$(this).css('background','#FF7A40');
});
academy.click(function(event) {
	academy.css("box-shadow", "none");
	selectbg.fadeIn();
	selectBox.slideDown("slow");
});
selectBox.click(function(event) {
	academy.html(event.target.innerHTML)
});
selectbg.click(function(event) {
	selectBox.slideUp("slow");
	$(this).fadeOut();
});
input.focus(function(event) {
	$(this).css('box-shadow','none')
});
var flag = true;
button.click(function(event) {
	input.map(function(index, elem) {
		if(!elem.value) {
			$(elem).css("box-shadow", "0 0 10px 0 #FF7A40");
			flag = false;
		}
	});
	if (!academy.html()) {
		academy.css("box-shadow", "0 0 10px 0 #FF7A40");
		flag = false;
	}
	if (flag) {
		$.ajax({
			url: 'http:www.dasd.com/api/apply',
			type: 'post',
			dataType: 'json',
			data: {
				name: input[0].value,
				sex: sex.attr('data-sex'),
				stu_id: input[1].value,
				academy: academy.html(),
				tel: input[2].value
			},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}
});