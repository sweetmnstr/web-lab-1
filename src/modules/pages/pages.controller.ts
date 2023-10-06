import * as path from 'path';

export class PageController {
  public static async landing(): Promise<string> {
    return path.join(__dirname, '../../public/index.html');
  }
}
