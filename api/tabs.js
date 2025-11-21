// tabs.js
// Browser Tabs API

module.exports = {
  createTab: (req, res) => {
    res.json({ status: "ok", message: "New tab created" });
  },

  closeTab: (req, res) => {
    res.json({ status: "ok", message: "Tab closed" });
  },

  listTabs: (req, res) => {
    res.json({
      status: "ok",
      tabs: [
        { id: 1, title: "Home" },
        { id: 2, title: "New Tab" }
      ]
    });
  }
};
