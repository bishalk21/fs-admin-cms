import AdminUserSchema from "./adminUserSchema.js";

export const addNewAdminUser = (user) => {
  return AdminUserSchema(user).save();
};

export const getAllAdminUsers = () => {
  return AdminUserSchema.find();
};

export const updateAdminUser = (filter, update) => {
  return AdminUserSchema.findOneAndUpdate(filter, update, { new: true });
};

// find a user
export const findOneUser = (filter) => {
  return AdminUserSchema.findOne(filter);
};
