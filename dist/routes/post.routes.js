"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const post_controller_1 = require("../controllers/post.controller");
router.route('/')
    .get(post_controller_1.getPosts);
exports.default = router;
