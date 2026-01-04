import { ITSALLOVER } from "./ITSALLOVER";
import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    ITSALLOVER
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};