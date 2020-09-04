import { prisma } from '../../../../generated/prisma-client';

export default {
    Query: {
        userById: (_, args) => prisma({ id: args.id })
    }
}