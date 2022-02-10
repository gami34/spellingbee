export const scholeNameFormRule = [
  {
    required: true,
    message: "Please Select your School Name!",
  },
];
export const scholeHeadFormRule = [
  {
    required: true,
    message: "Please Select your School Head!",
  },
];
export const schoolMobileFormRule = [
  {
    required: true,
    validator: async (_, value) => {
      if (!value) return Promise.reject(new Error("Please input your phone number!"));
      const regex = /\d/g;
      const digitArray = value.match(regex);
      if (digitArray.length === value.length && ((digitArray.length === 10 && value[0] !== "0") || (digitArray.length === 11 && value[0] === "0"))) return Promise.resolve();
      return Promise.reject(new Error("Please input a valid phone number!"));
    },
  },
];
export const schoolAddressFormRule = [
  {
    required: true,
    message: "Please Enter your School Address!",
  },
];
export const schoolEmailFormRule = [
  {
    required: true,
    message: "Please input your Email!",
  },
  {
    type: "email",
    message: "Please input a valid email!",
  },
];
export const schoolStateFormRule = [
  {
    required: true,
    message: "Please Select your state!",
  },
];
export const schoolLGAFormRule = [
  {
    required: true,
    message: "Please Select your Local Government Area!",
  },
];
export const schoolCategoryFormRule = [
  {
    required: true,
    message: "Please Select your Category!",
  },
];
export const studentNameFormRule = [
  {
    required: true,
    message: "Student name!",
  },
];
export const studentAgeFormRule = [
  {
    required: true,
    message: "Student age!",
  },
];
export const parentNameFormRule = [
  {
    required: true,
    message: "Parent name!",
  },
];
export const parentMobileSuffixFormRule = [
  {
    required: true,
    validator: async (_, value) => {
      if (!value) return Promise.reject(new Error("phone number!"));
      const regex = /\d/g;
      const digitArray = value.match(regex);
      if (digitArray.length === value.length && ((digitArray.length === 10 && value[0] !== "0") || (digitArray.length === 11 && value[0] === "0"))) return Promise.resolve();
      return Promise.reject(new Error("valid phone number!"));
    },
  },
];
export const parentAddressFormRule = [
  {
    required: true,
    message: "Parent's address!",
  },
];
export const parentEmailFormRule = [
  {
    required: true,
    message: "Please input Parent Email!",
  },
  {
    type: "email",
    message: "Please input a valid email!",
  },
];
