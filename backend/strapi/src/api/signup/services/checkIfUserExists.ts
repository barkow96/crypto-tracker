type CheckIfUserExistsType = (email: string) => Promise<boolean>;
type ExistingUserType<T> = T[];

export const checkIfUserExists: CheckIfUserExistsType = async (email) => {
  const existingUser: ExistingUserType<any> = await strapi.db
    .query("plugin::users-permissions.user")
    .findOne({ where: { email } });

  const userAlreadyExists = existingUser ? true : false;
  return userAlreadyExists;
};
