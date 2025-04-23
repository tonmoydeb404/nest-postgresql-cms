import { Global, Module } from '@nestjs/common';
import { HashService } from 'src/common/services/hash.service';
import { PrismaService } from './prisma.service';
import { AssetRepository } from './repository/asset.repository';
import { BlogArticleRepository } from './repository/blog/article.repository';
import { BlogCategoryRepository } from './repository/blog/category.repository';
import { BlogCommentRepository } from './repository/blog/comment.repository';
import { BlogReactionRepository } from './repository/blog/reaction.repository';
import { CustomerCompanyRepository } from './repository/customer/company.repository';
import { CustomerReviewRepository } from './repository/customer/review.repository';
import { EmployeeRepository } from './repository/employee.repository';
import { ProfileRepository } from './repository/profile.repository';
import { ProjectRepository } from './repository/project.repository';
import { ServiceRepository } from './repository/service.repository';
import { UserRepository } from './repository/user/index.repository';
import { UserRolePermissionRepository } from './repository/user/role-permission.repository';
import { UserRoleRepository } from './repository/user/role.repository';

const repositories = [
  UserRepository,
  UserRolePermissionRepository,
  UserRoleRepository,
  EmployeeRepository,
  BlogArticleRepository,
  BlogCategoryRepository,
  BlogCommentRepository,
  BlogReactionRepository,
  CustomerCompanyRepository,
  CustomerReviewRepository,
  ProjectRepository,
  ServiceRepository,
  AssetRepository,
  ProfileRepository,
];

@Global()
@Module({
  providers: [PrismaService, ...repositories, HashService],
  exports: [PrismaService, ...repositories],
})
export class PrismaModule {}
