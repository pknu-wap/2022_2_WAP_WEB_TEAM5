import { atom } from "recoil";

export const CoverState = atom({
  key: "counter",
  default: [],
});

export const folderClickIdState = atom({
  key: "folderClick",
  default: 0,
});

export const CompanyListState = atom({
  key: "CompanyListSt",
  default: [],
});

// export const
export const fileClickIdState = atom({
  key: "fileClick",
  default: 0,
});

export const MemoState = atom({
  key: "MemoSta",
  default: "",
});
