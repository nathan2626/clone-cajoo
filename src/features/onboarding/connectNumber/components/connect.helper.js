export const connectValidate = connect => {
    // return true;
  return String(connect).match(/^((\+)33|0)[1-9](\d{2}){4}$/);
};

export default connectValidate;
