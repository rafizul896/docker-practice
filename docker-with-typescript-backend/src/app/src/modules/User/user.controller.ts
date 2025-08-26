import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponcs";
import { UserServices } from "./user.service";
import status from "http-status";

const userRegister = catchAsync(async (req, res) => {
  console.log(req.body);
  const user = await UserServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User Created Successfully",
    data: user,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Users Retrieved Successfully",
    data: users,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const user = await UserServices.getSingleUserFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User Retrieved Successfully",
    data: user,
  });
});

export const UserControllers = {
  getSingleUser,
  userRegister,
  getAllUsers,
};
