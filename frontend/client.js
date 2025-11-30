// HIND Browser Client Layer
// Yeh file frontend aur core-engine ko connect karegi

function processURL() {
    let input = document.getElementById("urlInput").value;

    // Core Engine validation
    let finalURL = HIND_ENGINE.validateURL(input);

    if (!finalURL) {
        alert("Invalid URL!");
        return;
    }

    // Page load
    document.getElementById("browserFrame").src = finalURL;
}




