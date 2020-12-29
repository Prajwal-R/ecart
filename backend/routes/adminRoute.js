import express from 'express';
import Admin from '../models/adminModel';
import { getToken, isAuth } from '../util';
const router = express.Router();

router.put('/:id', isAuth, async (req, res) => {
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId);
    if (admin) {
      admin.name = req.body.name || admin.name;
      admin.email = req.body.email || admin.email;
      admin.password = req.body.password || admin.password;
      const updatedadmin = await Admin.save();
      res.send({
        _id: updatedadmin.id,
        name: updatedadmin.name,
        email: updatedadmin.email,
        isAdmin: updatedadmin.isAdmin,
        token: getToken(updatedadmin),
      });
    } else {
      res.status(404).send({ message: 'Admin Not Found' });
    }
  });
  
  router.post('/signin', async (req, res) => {
    const signinadmin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinadmin) {
      res.send({
        _id: signinadmin.id,
        name: signinadmin.name,
        email: signinadmin.email,
        isAdmin: signinadmin.isAdmin,
        token: getToken(signinadmin),
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
  });
  
router.get('/createadmin', async (req, res) => {
    try {
      const admin1 = new Admin({
        name: 'Prajwal ',
        email: 'prajwalbhat30@gmail.com',
        password: '12345',
        isAdmin: true,
      });
      const admin2 = new Admin({
        name: 'Rashmi ',
        email: 'rashmishet28@gmail.com',
        password: '12345',
        isAdmin: true,
      });
      const newUser1 = await admin1.save();
      const newUser2 = await admin2.save();
      res.send(newUser1,newUser2);
    } catch (error) {
      res.send({ message: error.message });
    }
  });

  export default router;