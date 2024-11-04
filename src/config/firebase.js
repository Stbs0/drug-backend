"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var firebase_admin_1 = require("firebase-admin");
var app_1 = require("firebase-admin/app");
var firestore_1 = require("firebase-admin/firestore");
var firebaseServiceAccount_json_1 = require("@config/firebaseServiceAccount.json");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebaseServiceAccount_json_1.default),
});
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(firebaseServiceAccount_json_1.default),
});
exports.db = (0, firestore_1.getFirestore)();
