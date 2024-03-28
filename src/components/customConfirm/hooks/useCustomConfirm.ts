import { useRecoilState } from "recoil";

import {
  customConfirmAtom,
  defaultCustomConfirmState,
} from "store/customConfirmAtoms";

import { ICustomConfirmState } from "components/customConfirm/types";

export const useCustomConfirm = () => {
  const [customConfirmState, setCustomConfirmState] =
    useRecoilState(customConfirmAtom);

  const isConfirmed = async ({
    title = "",
    text = "",
  }: Pick<ICustomConfirmState, "title" | "text">) => {
    const promise = new Promise((resolve, reject) => {
      setCustomConfirmState({
        title,
        text,
        isOpen: true,
        confirmAction: resolve,
        cancelAction: reject,
      });
    });

    const init = () => {
      setCustomConfirmState(defaultCustomConfirmState);
    };

    try {
      await promise;
      return true;
    } catch (e) {
      return false;
    } finally {
      init();
    }
  };

  return {
    ...customConfirmState,
    isConfirmed,
  };
};
