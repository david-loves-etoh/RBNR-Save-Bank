import { CHAPTER_3 } from "./chapter-3";
import { CHAPTER_3_1 } from "./chapter-3_1";
import { CHAPTER_3_2 } from "./chapter-3_2";
import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    CHAPTER_3,
    CHAPTER_3_1,
    CHAPTER_3_2
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};