import { http } from "../utils/http";

type Result = {
  data?: {
    totalResults: number;
    list: Array<any>;
  };
  code?: number;
  msg?: string;
};

/** 获取用户管理列表 */
export const getoperatorList = (data?: object) => {
  return http.request<Result>("post", "/getOpeartorList", { data });
};

/** 获取角色管理列表 */
export const getOrganzationList = (data?: object) => {
  return http.request<Result>("post", "/getOrganzationList", { data });
};

/** 获取部门管理列表 */
export const getDeptList = (data?: object) => {
  return http.request<Result>("post", "/dept", { data });
};
