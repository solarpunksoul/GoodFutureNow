window.addEventListener('load', function () {
	function getIdeas() {
		fetch('/ideas').then(function (ideas) {
			return ideas.json();
		}).then(function (ideas) {
			for (var i = 0; i < ideas.length; i++) {
				var ideaElement = document.createElement('article'),
					titleElement = document.createElement('h2'),
					descriptionElement = document.createElement('p');

				titleElement.appendChild(document.createTextNode(ideas[i].title));
				descriptionElement.appendChild(document.createTextNode(ideas[i].description));
				ideaElement.appendChild(titleElement);
				ideaElement.appendChild(descriptionElement);
				document.getElementsByClassName('ideas')[0].appendChild(ideaElement);
			}
		});
	}

	getIdeas();
});