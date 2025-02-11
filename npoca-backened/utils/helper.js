export const senderError = (res, error, status = 400) => {
  return res.status(status).send({
    success: false,
    message: error,
  });
};
