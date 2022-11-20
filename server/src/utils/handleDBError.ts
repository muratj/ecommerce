const handleDBError = (error: any) => {
  error.type = 'db';
  error.status = 400;
  error.message = error.parent.detail;
  return error;
};

export default handleDBError;
