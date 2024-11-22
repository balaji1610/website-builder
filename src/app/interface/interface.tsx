export interface crendentialType {
  username: string;
  password: string;
}

export interface templateType {
  templateNo: number;
  title: string;
  template: string;
  lastUpdated: null | string;
  _id: string;
}

export interface userRecordType {
  username: string;
  password: string;
  createdAt: string;
  _id: string;
  templates: [templateType];
}

export interface resetUserIDType {
  _id: null | string;
}

export interface resetUsernameType {
  username: null | string;
}

export interface updatePasswordType {
  password: null | string;
  confirmpassword: null | string;
}

export interface loadingButtonType {
  isLoginLoading: boolean;
  isResetPasswordLoading: boolean;
  isSavePasswordLoading: boolean;
  isSaveAccountLoading: boolean;
  isSavePageLoading: boolean;
  isPublishLoading: boolean;
}

export interface userUpdatePasswordType
  extends resetUserIDType,
    updatePasswordType {}
