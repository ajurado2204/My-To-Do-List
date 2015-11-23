$(document).ready(initializer());

function initializer(){
	
	$(document).on("click", '.mydelete',function(){
		$(this).closest('tr').hide();
	});

	$('#addbutton').click(function() {
		if($('textarea.form-control').val() === ""){
			alert("Please enter your task");
		}else{
			var thingsToDo = $('textarea.form-control').val();
			console.log(thingsToDo);
			$('table').find('tbody').after(
				'<tr><td>'+thingsToDo+'</td><td><input type="checkbox" class="check"> Checkbox</td><td><a href="#" class="btn btn-primary btn-sm mydelete">Delete</a></td></tr>');
		}
	});

		$(document).on("click", '.check',function(){
			$(this).closest('tr').children(":first-child").css(
        'text-decoration',
        this.checked ? 'line-through' : 'none'
    	).next().text("");
		});

}
