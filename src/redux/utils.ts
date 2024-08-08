export const serializeDate = (date: Date): string => date.toISOString();
export const deserializeDate = (dateString: string): Date =>
  new Date(dateString);

export const serializeUser = (user: any) => ({
  ...user,
  createdAt: serializeDate(user.createdAt),
  updatedAt: serializeDate(user.updatedAt),
});

export const deserializeUser = (user: any) => ({
  ...user,
  createdAt: deserializeDate(user.createdAt),
  updatedAt: deserializeDate(user.updatedAt),
});
