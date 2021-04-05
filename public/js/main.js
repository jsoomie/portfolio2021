$(document).ready(() => {
    const sections = $(".section");
    let currentIndex = 0;
    let isAnimating = false;

    const stopAnimation = () => {
        setTimeout(() => {
            isAnimating = false;
        }, 400);
    };

    document.addEventListener(
        "wheel",
        (event) => {
            if (isAnimating) {
                event.preventDefault();
                return;
            }

            const direction = event.deltaY;

            if (direction > 0) {
                if (currentIndex + 1 >= sections.length) return;
                currentIndex++;
                const nextSection = $(sections[currentIndex]);
                var offsetTop = nextSection.offset().top;
                event.preventDefault();
                isAnimating = true;
                $("html, body").animate(
                    { scrollTop: offsetTop },
                    250,
                    stopAnimation
                );
            } else {
                if (currentIndex - 1 < 0) return;
                currentIndex--;
                const previousSection = $(sections[currentIndex]);
                const offsetTop = previousSection.offset().top;
                event.preventDefault();
                isAnimating = true;
                $("html, body").animate(
                    { scrollTop: offsetTop },
                    250,
                    stopAnimation
                );
            }
        },
        { passive: false }
    );
});
