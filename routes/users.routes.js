import { Router } from 'express';
import { getUsers, 
         putUsers, 
         postUsers, 
         patchUsers, 
         deleteUsers } from '../controllers/users.controller.js';

export const router = Router();

router.get('/', getUsers);

router.put('/:id', putUsers);

router.post('/', postUsers);

router.delete('/', deleteUsers);

router.patch('/', patchUsers);