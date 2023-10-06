import { Request, Response, NextFunction } from 'express';

export function basicWrapperPage(
  controller: (req: Request) => Promise<string>,
) {
  return async function validateMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const path: string = await controller(req);
      res.sendFile(path);
    } catch (err) {
      next(err);
    }
  };
}
