import httpStatus from 'http-status';
import { AuthServices } from './auth.service';
import AppError from '../../errors/AppError';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUserFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    data: result,
  });
});

const logoutUser = catchAsync(async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid request');
  }

  const result = await AuthServices.logoutUser(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'User logged out successfully',
    data: result,
  });
});

const refreshAccessToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.body;

  const result = await AuthServices.refreshAccessToken(refreshToken);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Access token refreshed successfully',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  logoutUser,
  refreshAccessToken,
};
