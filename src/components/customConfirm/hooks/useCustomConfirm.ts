import { useEffect } from "react";
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
      init();
      return true;
    } catch (e) {
      init();
      return false;
    }
  };

  useEffect(() => {
    return () => {
      if (customConfirmState.cancelAction) customConfirmState.cancelAction();
    };
  }, [customConfirmState]);

  return {
    ...customConfirmState,
    isConfirmed,
  };
};
