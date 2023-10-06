import { Router } from 'express';
import { PageController } from './pages.controller';
import { basicWrapperPage } from '../shared/utils/base-page.wrapper';

const PageRouter = Router();

PageRouter.get('/', basicWrapperPage(PageController.landing));

export default PageRouter;
