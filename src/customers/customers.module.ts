import { Module } from '@nestjs/common';
import { CustomerCompaniesController } from './controllers/customer-companies.controller';
import { CustomerReviewsController } from './controllers/customer-reviews.controller';
import { CustomerCompaniesService } from './services/customer-companies.service';
import { CustomerReviewsService } from './services/customer-reviews.service';

@Module({
  imports: [],
  controllers: [CustomerCompaniesController, CustomerReviewsController],
  providers: [CustomerReviewsService, CustomerCompaniesService],
})
export class CustomersModule {}
