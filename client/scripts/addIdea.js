window.addEventListener('load', function () {
	function addIdea(event) {
		var title = document.getElementsByTagName('input')[0],
			description = document.getElementsByTagName('textarea')[0],
			titleValue = title.value,
			descriptionValue = description.value;

		event.preventDefault();

		if (titleValue.length > 0 && descriptionValue.length > 0) {
			title.classList.remove('warning');
			description.classList.remove('warning');

			fetch('/ideas', {
				method: 'POST',
				body: JSON.stringify({
					title: titleValue,
					description: descriptionValue
				})
			}).then(function () {
				window.location.href = window.location.href.replace('addIdea', 'index');
			});
		} else {
			titleValue.length === 0 ? title.classList.add('warning') : title.classList.remove('warning');
			descriptionValue.length === 0 ? description.classList.add('warning') : description.classList.remove('warning');
		}
	}

	document.getElementsByTagName('form')[0].addEventListener('submit', addIdea);
});