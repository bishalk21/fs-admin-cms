import AdminUserSchema from "./adminUserSchema.js";

export const addNewAdminUser = (user) => {
  return AdminUserSchema(user).save();
};

export const updateAdminUser = (filter, update) => {
  return AdminUserSchema.findOneAndUpdate(filter, update, { new: true });
};
