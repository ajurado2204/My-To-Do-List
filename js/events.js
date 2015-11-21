$(document).ready(initializer());

function initializer(){
	
	$('.check').click(function(){
    $(this).closest('tr').children(":first-child").css(
        'text-decoration',
        this.checked ? 'line-through' : 'none'
    ).next().text("");
	});

	$('.btn.btn-primary.btn-sm').click(function(){
		$(this).closest('tr').hide();
	});


}
