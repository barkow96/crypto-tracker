type InsertNewUserType = (email: string, password: string) => void;
type RoleType = {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  nb_users: number;
};

export const insertNewUser: InsertNewUserType = async (email, password) => {
  //CREATING NEW USER RECORD TO BE INSERTED INTO USERS COLLECTION
  const roleService = strapi.plugins["users-permissions"].services.role;
  const allRoles: RoleType[] = await roleService.find();
  const authenticatedRole = allRoles.find(
    (role) => role.name === "Authenticated"
  );
  const newUser = {
    username: email,
    email: email,
    password: password,
    confirmed: true,
    role: [authenticatedRole.id],
  };

  //INSERTING NEWS USER INTO USERS COLLECTION
  const userService = strapi.plugins["users-permissions"].services.user;
  await userService.add(newUser);
};
