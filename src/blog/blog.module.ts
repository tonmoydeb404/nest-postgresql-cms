import { Module } from '@nestjs/common';
import { BlogArticlesController } from './controllers/blog-articles.controller';
import { BlogCategoriesController } from './controllers/blog-categories.controller';
import { BlogCommentsController } from './controllers/blog-comments.controller';
import { BlogReactionsController } from './controllers/blog-reactions.controller';
import { BlogArticlesService } from './services/blog-articles.service';
import { BlogCategoriesService } from './services/blog-categories.service';
import { BlogCommentsService } from './services/blog-comments.service';
import { BlogReactionsService } from './services/blog-reactions.service';

@Module({
  controllers: [
    BlogArticlesController,
    BlogCategoriesController,
    BlogCommentsController,
    BlogReactionsController,
  ],
  providers: [
    BlogArticlesService,
    BlogCategoriesService,
    BlogCommentsService,
    BlogReactionsService,
  ],
})
export class BlogModule {}
