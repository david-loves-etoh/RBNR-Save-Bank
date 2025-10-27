import { CHAPTER_3 } from "./chapter-3";
import { CHAPTER_3_1 } from "./chapter-3_1";
import { CHAPTER_3_2 } from "./chapter-3_2";
import { CHAPTER_4 } from "./chapter-4";
import { CHAPTER_5 } from "./chapter-5";
import { CHAPTER_5_1 } from "./chapter-5_1";
import { CHAPTER_6 } from "./chapter-6";
import { CHAPTER_6_1 } from "./chapter-6_1";
import CategoryGrouped from "./classes/CategoryGrouped";
import File from "./classes/File";

const saves = [
    CHAPTER_3,
    CHAPTER_3_1,
    CHAPTER_3_2,
    CHAPTER_4,
    CHAPTER_5,
    CHAPTER_5_1,
    CHAPTER_6,
    CHAPTER_6_1
];

const downloadAllSaves = File.downloadAllSaves;

export {
    saves,
    CategoryGrouped,
    downloadAllSaves
};