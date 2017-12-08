$(".advertising-slider").slick({
	responsive: [
		{
			breakpoint: 680,
			settings: {
				arrows: false
			}
		}]
});

$(".articles-slider").slick({
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 1020,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 880,
			settings: {
				slidesToShow: 2,
				arrows: false
			}
		},
		{
			breakpoint: 680,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}]
});

$(".sertification-slider").slick({
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 1020,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 880,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false
			}
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}]
});