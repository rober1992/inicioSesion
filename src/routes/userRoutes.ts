import {Router} from 'express';
import { Request, Response } from 'express';
import { UserModel } from '../models/userModels';
import passport from '../middlewares/auth';


const router = Router();


router.get('/', async (req, res) => {
    res.render('loginForm');
});

router.post('/signup', (req, res, next) => {
    passport.authenticate('signup', function (err, user, info) {
      console.log(err, user, info);
      if (err) {
        return next(err);
      }
      if (!user) return res.status(401).json({ data: info });
  
      res.render('main', { username : req.body.username})
    })(req, res, next);
});

router.get('/signUpPage', (req: Request, res: Response) => {
    res.render('signup');
})

router.post('/login', passport.authenticate('login'), (req : Request, res : Response) => {
    res.render('main', {username : req.body.username});
});

router.post('/logout', (req: Request, res: Response) => {
    req.session.destroy((err) => {
        res.redirect('/api');
    });
})
export default router;
