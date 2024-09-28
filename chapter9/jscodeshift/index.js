const j = require("jscodeshift");
const fs = require("fs");

const source = fs.readFileSync("input.js", "utf8");

const transform = (file, api) => {
    const j = api.jscodeshift;
    const root = j(file.source);

    root.find(j.JSXElement, {
        openingElement: {
            name: {
                name: "MyComponent",
            },
        },
    }).forEach((path) => {
        path.node.openingElement.attributes.forEach((attr) => {
            if (attr.type === "JSXAttribute" && attr.name.name === "oldProp") {
                attr.name.name = "newProp";
            }
        });
    });

    return root.toSource();
};

const output = transform({ source }, { jscodeshift: j });

fs.writeFileSync("output.js", output, "utf8");
