var begin = $('#begin');
var beginPage = $('#beginPage');
var form = $('#form');
var success = $('#success');
var main = $('#main');
var boy = $('#boy');
var girl = $('#girl');
var academy = $('#select');
var selectBox = $('#selectBox');
var selectbg = $('#selectbg');
var button = $('#button');
var sex = $('#sex');
var input = $('input');
var buttonWord = $('#buttonWord');
var loading = $('#loading');
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
var isloading = false;
button.click(function(event) {
	var flag = true;
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
	if (input[2].value.length != 11) {
		$(input[2]).css("box-shadow", "0 0 10px 0 #FF7A40");
		flag = false;
	} 
	if (flag && !isloading) {
		$.ajax({
			url: '/api/apply',
			type: 'post',
			dataType: 'json',
			data: {
				name: input[0].value,
				sex: sex.attr('data-sex'),
				stu_id: input[1].value,
				academy: academy.html(),
				tel: input[2].value
			},
			//timeout: 10000,
			beforeSend:function() {
				isloading = true;
				loading.show();
				buttonWord.hide();
			}
		})
		.done(function(data) {
			if (data.success == 1) {
				form.fadeOut(100);
				$('#name').html(data.name + '同学：')
				success.fadeIn(100);
			}
			else if (data.success == 0){
				alert('该姓名和学号已报名，请勿重复操作！')
			}
			else {
				alert('系统正忙，请稍后重试')
			}
		})
		.fail(function() {
			alert('系统正忙，请稍后重试')
		})
		.always(function() {
			isloading = false;
			loading.hide();
			buttonWord.show();
		});
		
	}
});