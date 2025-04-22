import { Prisma } from 'generated/prisma';

const blogExtension = Prisma.defineExtension((client) => {
  return client.$extends({
    query: {
      // Handle BlogComment create and delete
      blogComment: {
        async create({ args }) {
          return await client.$transaction(async (tx) => {
            const result = await tx.blogComment.create(args);

            await tx.blogArticle.update({
              where: { id: result.articleId },
              data: { commentsCount: { increment: 1 } },
            });

            return result;
          });
        },
        async delete({ args }) {
          return await client.$transaction(async (tx) => {
            const result = await tx.blogComment.delete(args);

            await tx.blogArticle.update({
              where: { id: result.articleId },
              data: { commentsCount: { decrement: 1 } },
            });

            return result;
          });
        },
      },

      // Handle BlogReaction create and delete
      blogReaction: {
        async create({ args }) {
          return await client.$transaction(async (tx) => {
            const result = await tx.blogReaction.create(args);

            await tx.blogArticle.update({
              where: { id: result.articleId },
              data: { reactionCount: { increment: 1 } },
            });

            return result;
          });
        },
        async delete({ args }) {
          return await client.$transaction(async (tx) => {
            const result = await tx.blogReaction.delete(args);

            await tx.blogArticle.update({
              where: { id: result.articleId },
              data: { reactionCount: { decrement: 1 } },
            });

            return result;
          });
        },
      },
    },
  });
});

export default blogExtension;
