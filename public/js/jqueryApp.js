// carousel
$(function() {
    carousel('.box-slider-prod-wrap .owl-carousel', 1);
    carousel('.category-slider-owlCarousel', 1);

    function carousel(carouselName, mainItem) {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
});
// category slider prod
$(function() {
    carousel('.carousel-slider .owl-carousel', 1);

    function carousel(carouselName, mainItem) {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
});
// category slider prod
$(function() {
    carousel('.blog-carouse-slider .owl-carousel', 5);

    function carousel(carouselName, mainItem) {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                414: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: mainItem
                }
            }
        })
    }
});
// category slider prod
$(function() {
    carousel('.slider-cate-prod', 6);

    function carousel(carouselName, mainItem) {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: mainItem
                }
            }
        })
    }
});

// category product relative
$(function() {
    carousel('.prod-rela-carousel .owl-carousel', 5);

    function carousel(carouselName, mainItem) {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: mainItem
                }
            }
        })
    }
});

// category banner alider
$(function() {
    carousel('.carousel-category-slider-wrap .owl-carousel', 1);

    function carousel(carouselName, mainItem) {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
            }
        })
    }
});

// product category slider
$(function() {
    carousel('.carousel-product-by-category .owl-carousel', 4);

    function carousel(carouselName, mainItem) {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: mainItem - 1
                },
                1200: {
                    items: mainItem
                }
            }
        })
    }
});

// slider banner
$(function() {
    let indexSlideInCurrent = $(".banner-slider-fullWidth .slide-item.slide-in").index();
    let listSlides = $(".banner-slider-fullWidth .slide-item");
    let lengthSlides = listSlides.length;

    function slideIn(_n) {
        _n.classList.add('slide-in');
    }

    function slideOut(_n) {
        _n.classList.add('slide-out');
    }

    function slideAction(index) {
        resetSlide();
        slideOut(listSlides[index]);
        indexSlideInCurrent++;
        if (indexSlideInCurrent > lengthSlides - 1) {
            indexSlideInCurrent = 0;
        }
        index = indexSlideInCurrent;
        slideIn(listSlides[index]);
    }

    function slideInit() {
        setTimeout(() => {
            slideAction(indexSlideInCurrent);
            slideInit();
        }, 4000);
    }

    function resetSlide() {
        for (let i = 0; i < listSlides.length; i++) {
            listSlides[i].classList.remove('slide-in');
            listSlides[i].classList.remove('slide-out');
        }
    }
    slideInit();
});

// =========########### HEADER ##########==========//
$(function() {
    menuReponMobile();
    menuReponChildOpenSubMenu();

    function menuReponMobile() {
        let btnOpen = $("#btnOpen-menu-respon");
        let menuRespon = $("#capri-app");
        btnOpen.click(function() {
            event.preventDefault();
            menuRespon.toggleClass('open-res');
        });
    }

    function menuReponChildOpenSubMenu() {
        let btnOpen = $(".menu-mobile-list .list-menu li a.has-menu-child");
        btnOpen.click(function() {
            event.preventDefault();
            $(this).parent().toggleClass('open');
        });
    }
});