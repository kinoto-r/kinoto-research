(() => {
    const logPrefix = "[KINOTO] ";

    window.addEventListener("error", (event) => {
        console.error(`${logPrefix}Unhandled error:`, event.error || event.message, {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
        });
    });

    window.addEventListener("unhandledrejection", (event) => {
        console.error(`${logPrefix}Unhandled promise rejection:`, event.reason);
    });

    document.addEventListener("DOMContentLoaded", () => {
        console.info(`${logPrefix}Main script loaded.`);
                const logo = document.querySelector(".site-logo a");
        const footerCopy = document.querySelector(".footer-copy");

        if (!logo) {
            console.error(`${logPrefix}Header logo anchor not found.`);
        } else {
            console.info(`${logPrefix}Header logo anchor found.`);
        }

        if (!footerCopy) {
            console.error(`${logPrefix}Footer copy element not found.`);
        } else {
            const style = window.getComputedStyle(footerCopy);
            console.info(`${logPrefix}Footer copy text-align:`, style.textAlign);
        }
    });
})();
