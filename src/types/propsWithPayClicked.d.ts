export type propsWithPayClicked<T> = T & {
  setPayClicked: dispatch<setStateAction<boolean>>;
};
