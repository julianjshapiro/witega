document.addEventListener('DOMContentLoaded', function() { 
    const markdownElements = document.querySelectorAll('markdown');

    markdownElements.forEach(function(element) {
        const markdownText = element.innerText;

        if (markdownText.trim()) {
            const parsedMarkdown = marked.parse(markdownText, {
                gfm: true
            });

            element.innerHTML = parsedMarkdown;
        }
    });
    const sources = document.getElementById('sources');
    if (sources) {
        const sourcesText = sources.innerText;
        const parsedSources = marked.parse(sourcesText, {
            gfm: true,
            breaks: true
        });
        sources.innerHTML = parsedSources;
    }
});