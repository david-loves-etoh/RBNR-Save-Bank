/* eslint-disable max-len */
import Category from "./classes/Category";
import Save from "./classes/Save";

export const TEMPLATE = new Category({
    name: "Template",
    theme: "normal",
    desc: "Template Category",
    saves: [
        new Save({
            name: "Template",
            desc: "Template Save File",
            author: "Endless_e308",
            data: ""
        })
    ]
});
