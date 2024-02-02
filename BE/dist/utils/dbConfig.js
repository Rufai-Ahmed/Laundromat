"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const mongoose_1 = require("mongoose");
const URL = "mongodb+srv://chidubem123:chidubem123@cluster0.cnqrjok.mongodb.net/spinCONNECTDB?retryWrites=true&w=majority";
const dbConfig = () => {
    try {
        return (0, mongoose_1.connect)(URL)
            .then(() => {
            console.log("Database Connected👌👌👌");
        })
            .catch(() => console.error());
    }
    catch (error) {
        return error;
    }
};
exports.dbConfig = dbConfig;
