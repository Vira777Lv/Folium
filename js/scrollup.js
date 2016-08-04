	"use strict"
	window.onload = function scrollUp()
	{ // после загрузки страницы
			var scrollUp = document.getElementById('scrollup'); // найти элемент
			console.log("scrollup")

			scrollUp.onmouseover = function() { // добавить прозрачность
				scrollUp.style.opacity=0.8;
				scrollUp.style.filter  = 'alpha(opacity=30)';
			};

			scrollUp.onmouseout = function() { //убрать прозрачность
				scrollUp.style.opacity = 0.9;
				scrollUp.style.filter  = 'alpha(opacity=50)';
			};

			scrollUp.onclick = function() { //обработка клика
				window.scrollTo(0,0);
				console.log("button work")
			};

		// show button

			window.onscroll = function () { // при скролле показывать и прятать блок
				if ( window.pageYOffset > 0 ) {
					scrollUp.style.display = 'block';
				} else {
					scrollUp.style.display = 'none';
				}
				console.log("onscroll")
			};
	};

