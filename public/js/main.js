function darkMode() {
    $('#navbar').toggleClass('lightMode');
    $('.footer').toggleClass('lightMode');
    $('#mainLogo').toggleClass('lightMode');
    $('#navOptions').toggleClass('lightMode');
    $('#darkModeOption').toggleClass('lightMode');
    $('#projectLink').toggleClass('projectLinkInvert');
    $('#header').toggleClass('lightMode');
    $('.headerIcon').toggleClass('lightIconHover');
    $('.navA').toggleClass('lightModeA');
    $('#headerBackground').toggleClass('lightBackground');
    $('.projectPart').toggleClass('lightModeOffWhite');
    $('.projectCard').toggleClass('lightModeCards');

    $(".projectSection").toggleClass(function (index, currentclass) {
        if (index % 2 == 0) {
            return "projectSectionBackgroundEvenLight";
        } else {
            return "projectSectionBackgroundOddLight";
        }
    });

    $('.projectTextParts').toggleClass('projectSectionTextLight');
}