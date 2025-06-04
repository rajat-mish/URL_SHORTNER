export const tryCatchWrapper = (controllerFunc) => {
  return async (req, res, next) => {
    try {
      await controllerFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
