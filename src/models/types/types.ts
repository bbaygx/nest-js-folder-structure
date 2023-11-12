import { Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  id?: string | undefined;
  name: string;
  password: string;
}
