import { atom } from "recoil";

import { ICustomConfirmState } from "components/customConfirm/types";

export const defaultCustomConfirmState: ICustomConfirmState = {
  title: "",
  text: "",
  isOpen: false,
  confirmAction: () => {},
  cancelAction: () => {},
};

export const customConfirmAtom = atom<ICustomConfirmState>({
  key: "customConfirmAtom",
  default: defaultCustomConfirmState,
});
