import { TEMPLATE } from "./template";
import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    TEMPLATE
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};