export interface ICustomConfirmState {
  title?: string;
  text?: string;
  isOpen: boolean;
  confirmAction: (value?: unknown) => void;
  cancelAction: (value?: unknown) => void;
}
