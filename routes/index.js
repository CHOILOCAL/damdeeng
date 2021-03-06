//  API ROOT ROUTER 
// API 호출 -> ROOT ROUTER -> 담당 ROUTER

import express from 'express';
import account from '../db/account';
import review from '../db/review';

const router = express.Router();

// 회원계정 관리 라우터
router.use('/account', account);

// 리뷰 라우터
router.use('/review', review);

export default router;