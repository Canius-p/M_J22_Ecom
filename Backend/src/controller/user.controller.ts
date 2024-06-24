import { Request, Response } from 'express';
import User from '../model/user.model';
class authController {
  public static async registerUser(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: 'username or password is required' });
      return;
    }
    await User.create({ username, password });
    res.status(200).json({ message: 'user created successfully' });
  }
}

export default authController;
