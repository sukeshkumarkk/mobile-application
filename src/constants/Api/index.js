// export const Apicontants = {
//   login: 'user/login',
//   departments: 'department/getAll',
//   locations: 'location/getAll',
//   register:'user/save'
// };

export const Apicontants = {
  user:{
    save:'user/save',
    login:"user/login",
    sentOtp:"user/sentOtp",
    validate:"user/validateOtp",
    getAllEmployee:"user/get-all-employees"
  },
  department:{
    getAll:'department/getAll'
  },
  location:{
    getAll:'location/getAll'
  },
  subLocation:{
    getAll:'sublocation/getAll'
  },
  service:{
    raise:"raiserequest/raiseRequest",
    getAll:"raiserequest/getAll",
    assign:"raiserequest/assign-request",
    assignedTask:"raiserequest/assigned-tasks"
  }
};
