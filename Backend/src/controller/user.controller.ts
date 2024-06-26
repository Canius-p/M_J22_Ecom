import { Request, Response } from 'express';
import User from '../database/models/user.model';
class authController {
  public static async registerUser(req: Request, res: Response): Promise<void> {
    const { userEmail, password } = req.body;
    if (!userEmail || !password) {
      res.status(400).json({ message: 'username or password is required' });
      return;
    }
    await User.create({ userEmail, password });
    res.status(200).json({ message: 'user created successfully' });
  }
}

export default authController;
