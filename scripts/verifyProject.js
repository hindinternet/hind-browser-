const fs = require("fs");
const path = require("path");

const requiredStructure = {
    "api": ["routes", "controllers", "services", "middlewares", "README.md"],
    "assets": [],
    "backend": [],
    "config": [],
    "core-engine": [],
    "database": [],
    "frontend": [],
    "scripts": [],
    "security": [],
    "tests": []
};

console.log("\n🔍 PROJECT STRUCTURE CHECK STARTED...\n");

for (const folder in requiredStructure) {
    const folderPath = path.join(process.cwd(), folder);

    if (!fs.existsSync(folderPath)) {
        console.log(`❌ Missing Folder: ${folder}`);
        continue;
    }

    console.log(`✔ Folder OK: ${folder}`);

    const subFiles = requiredStructure[folder];

    subFiles.forEach(file => {
        const fullPath = path.join(folderPath, file);
        if (!fs.existsSync(fullPath)) {
            console.log(`   ❌ Missing: ${folder}/${file}`);
        } else {
            console.log(`   ✔ OK: ${folder}/${file}`);
        }
    });
}

console.log("\n✅ CHECK COMPLETE!\n");
