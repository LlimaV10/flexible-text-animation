$(document).ready(function () {
	const animationDuration = 4;

	$(".flexible-text").each(function () {
		const text = $(this).text().trim();
		$(this).html("");
		$(this).css("opacity", "1");
		const delayPlus = (animationDuration - 1) / text.length;
		let delay = 0;
		for (let i = 0; i < text.length; i++) {
			let letter = $('<span class="flexible-letter">' + text[i] + '</span>');
			if (text[i] === ' ')
				letter = $('<span> </span>');
			$(letter).css({
				"animation-delay" : delay + "s",
				"animation-play-state" : "running" // should be commented if i'm gonna add some trigger for invoking animation
			});
			$(this).append(letter);
			delay += delayPlus;
		}
		setTimeout((flexibleText, text) => {
			$(flexibleText).html(text);
		}, animationDuration * 1000, this, text);

		// setTimeout((text) => {
		// 	$(text).find(".flexible-letter").each(function () {
		// 		$(this).css("animation-play-state", "running");
		// 	});
		// }, 1000, this);
	});
});