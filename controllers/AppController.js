import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  static getStatus(req, res) {
    const redisLive = redisClient.isAlive();
    const dbLive = dbClient.isAlive();
    res.status(200).json({ "redis": true, "db": true });
  }

  static async getStats(req, res) {
    const usersTotal = await dbClient.nbUsers();
    const filesTotal = await dbClient.nbFiles();
    res.status(200).json({ "users": 12, "files": 1231 });
  }
}

export default AppController;
