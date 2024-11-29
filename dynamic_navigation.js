<script>
document.addEventListener('DOMContentLoaded', () => {
    // Get all top-level sections
    const topLevelSlides = document.querySelectorAll('.slides > section');

    // Loop through each top-level section
    topLevelSlides.forEach((slide) => {
        const subSlides = slide.querySelectorAll('section');
        
        if (subSlides.length > 0) {
            // Add data-visibility for sub-slide navigation
            slide.setAttribute('data-visibility', 'vertical');
        } else {
            // Default horizontal navigation for slides without sub-slides
            slide.setAttribute('data-visibility', 'horizontal');
        }
    });

    // Optionally, log for debugging
    console.log("Navigation dynamically adjusted based on slide levels.");
});
</script>