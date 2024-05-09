<script>
document.addEventListener("DOMContentLoaded", function() {
    const faqParents = document.querySelectorAll('[faq=parent]');
    const faqItems = [];
    faqParents.forEach(parent => {
        const questions = parent.querySelectorAll('[faq=question]');
        const answers = parent.querySelectorAll('[faq=answer]');
        for (let i = 0; i < questions.length; i++) {
            faqItems.push({
                "@type": "Question",
                "name": questions[i].textContent,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answers[i].textContent
                }
            });
        }
    });
    if (faqItems.length > 0) {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(script);
    }
});
</script>