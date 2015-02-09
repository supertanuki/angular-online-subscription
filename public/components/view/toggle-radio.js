$(function(){
	$(document).on('click', function (e) {
		var $label = $(e.target)
		if (!$label.hasClass('toggle-radio')) {
			$label = $label.closest('.toggle-radio')
		}
		
		e.stopPropagation()
		e.preventDefault()
		
		var $input = $label.find('input[type=radio]')
		$name = $input.prop('name')		
		
		$("label.toggle-radio").each(function() {
			$radio = $(this).find('input[name='+$name+']')
			if ($radio.prop('checked') && $input.prop('id') != $radio.prop('id')) {
				$(this).removeClass('active')
			}
		})
		
		// check or uncheck this radio
		$label.toggleClass('active')
		$input.prop('checked', $label.hasClass('active')).trigger('change')
	})
})