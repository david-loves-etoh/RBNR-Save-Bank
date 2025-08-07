/* eslint-disable max-len */
import Category from "./classes/Category";
import Save from "./classes/Save";

export const template = new Category({
    name: "Template",
    theme: "normal",
    desc: "Template",
    saves: [
        new Save({
            name: "Template",
            desc: "Template",
            author: "Me",
            data: ""
        })
    ]
});
