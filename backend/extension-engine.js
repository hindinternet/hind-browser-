// extension-engine.js
// Core Extension Engine for HIND Browser

const loadedExtensions = {};

// Load an extension
function loadExtension(extensionId, extensionObject) {
    if (loadedExtensions[extensionId]) {
        return { success: false, message: "Extension already loaded" };
    }
    loadedExtensions[extensionId] = extensionObject;
    return { success: true, message: `Extension ${extensionId} loaded` };
}

// Unload an extension
function unloadExtension(extensionId) {
    if (!loadedExtensions[extensionId]) {
        return { success: false, message: "Extension not found" };
    }
    delete loadedExtensions[extensionId];
    return { success: true, message: `Extension ${extensionId} unloaded` };
}

// Execute a function from an extension
function executeExtensionFunction(extensionId, functionName, ...args) {
    const ext = loadedExtensions[extensionId];
    if (!ext) return { success: false, message: "Extension not loaded" };
    if (typeof ext[functionName] !== "function") {
        return { success: false, message: `Function ${functionName} not found` };
    }
    try {
        const result = ext[functionName](...args);
        return { success: true, result };
    } catch (err) {
        return { success: false, message: err.message };
    }
}

// List all loaded extensions
function listExtensions() {
    return Object.keys(loadedExtensions);
}

module.exports = {
    loadExtension,
    unloadExtension,
    executeExtensionFunction,
    listExtensions,
};
