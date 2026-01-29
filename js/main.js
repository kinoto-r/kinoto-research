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
    });
})();
