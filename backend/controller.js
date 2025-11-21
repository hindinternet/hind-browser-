// Backend Controller
module.exports = {
    handleRequest: (req, res) => {
        console.log("Controller received a request");
        return {
            status: "ok",
            message: "Request handled by controller"
        };
    }
};
