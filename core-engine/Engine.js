

function validateURL(url) {
    // Empty URL check
    if (!url || url.trim() === "") {
        return false;
    }

    // Space remove
    url = url.trim();

    
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    return url;
}


if (typeof window !== "undefined") {
    window.HIND_ENGINE = {
        validateURL
    };
}
