import * as fs from 'fs';
import AppError from '../errors/AppError';

const nodeFileSystem = () => {
  const self = {
    read: async <T>(path: string): Promise<T> => {
      const file = await fs.promises.readFile(path);

      return JSON.parse(file.toString()) as T;
    },
    write: async (path: string, file: unknown): Promise<boolean> => {
      try {
        await fs.promises.writeFile(path, JSON.stringify(file, null, 2));
        return true;
      } catch (error) {
        if (error instanceof Error) throw new AppError(error.message, 500);
        return false;
      }
    },
  };
  return self;
};

export default nodeFileSystem();
