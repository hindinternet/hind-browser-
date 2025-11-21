// Storage Module
module.exports = {
    save: (key, value) => {
        console.log(`Saving: ${key}`, value);
        return { success: true };
    },

    get: (key) => {
        console.log(`Getting: ${key}`);
        return { success: true, data: null };
    },

    remove: (key) => {
        console.log(`Removing: ${key}`);
        return { success: true };
    }
};
