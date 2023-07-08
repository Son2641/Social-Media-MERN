import express from 'express';
import {
  searchUsers,
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Read
// router.get('/search/:query', verifyToken, searchUsers);
router.get('/:id', getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

// Update
router.patch('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;
