var showMagazineBlock = function() {
    $('#magazines').show();
    $('#spray-painting').hide();
    $('#about-me').hide();
    $('#photography').hide();
    $('#graphic-design').hide();
    $('#print-making').hide();
    $('#drawing').hide();
};

var showSprayPaintingBlock = function() {
    $('#magazines').hide();
    $('#spray-painting').show();
    $('#about-me').hide();
    $('#photography').hide();
    $('#graphic-design').hide();
    $('#print-making').hide();
    $('#drawing').hide();
};

var showAboutMeBlock = function() {
    $('#magazines').hide();
    $('#spray-painting').hide();
    $('#about-me').show();
    $('#photography').hide();
    $('#graphic-design').hide();
    $('#print-making').hide();
    $('#drawing').hide();
}

var showPhotographyBlock = function() {
    $('#magazines').hide();
    $('#spray-painting').hide();
    $('#about-me').hide();
    $('#photography').show();
    $('#graphic-design').hide();
    $('#print-making').hide();
    $('#drawing').hide();
}

var showGraphicDesignBlock = function () {
    $('#magazines').hide();
    $('#spray-painting').hide();
    $('#about-me').hide();
    $('#photography').hide();
    $('#graphic-design').show();
    $('#print-making').hide();
    $('#drawing').hide();
}

var showPringMakingBlock = function() {
    $('#magazines').hide();
    $('#spray-painting').hide();
    $('#about-me').hide();
    $('#photography').hide();
    $('#graphic-design').hide();
    $('#print-making').show();
    $('#drawing').hide();
}

var showDrawingBlock = function() {
    $('#magazines').hide();
    $('#spray-painting').hide();
    $('#about-me').hide();
    $('#photography').hide();
    $('#graphic-design').hide();
    $('#print-making').hide();
    $('#drawing').show();
}

var showNavPage = function() {
    $('.main-section-wrapper').hide();
    $('.navigation-bar').show();
    $('.content-area').show();
}

var showMainPage = function() {
    $('.main-section-wrapper').show();
    $('.navigation-bar').hide();
    $('.content-area').hide();
}

$('#magazine-title-nav').click(showMagazineBlock);
$('#spray-painting-title-nav').click(showSprayPaintingBlock);
$('#about-me-title-nav').click(showAboutMeBlock);
$('#photography-title-nav').click(showPhotographyBlock);
$('#graphic-design-title-nav').click(showGraphicDesignBlock);
$('#print-making-title-nav').click(showPringMakingBlock);
$('#drawing-title-nav').click(showDrawingBlock);

$('#magazine-title').click(function() {
    showNavPage();
    showMagazineBlock();
});

$('#spray-painting-title').click(function() {
    showNavPage();
    showSprayPaintingBlock();
});

$('#about-me-title').click(function() {
    showNavPage();
    showAboutMeBlock();
});

$('#photography-title').click(function() {
    showNavPage();
    showPhotographyBlock();
});

$('#graphic-design-title').click(function() {
    showNavPage();
    showGraphicDesignBlock();
});

$('#print-making-title').click(function() {
    showNavPage();
    showPringMakingBlock();
});

$('#drawing-title').click(function() {
    showNavPage();
    showDrawingBlock();
});

$('.header-logo').click(function() {
    showMainPage();
})