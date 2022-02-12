export const scholeNameFormRule = [
  {
    required: true,
    message: "School Name!",
  },
];
export const scholeHeadFormRule = [
  {
    required: true,
    message: "School Head!",
  },
];
export const schoolMobileFormRule = [
  {
    required: true,
    validator: async (_, value) => {
      if (!value) return Promise.reject(new Error("Phone number!"));
      const regex = /\d/g;
      const digitArray = value.match(regex);
      if (digitArray.length === value.length && ((digitArray.length === 10 && value[0] !== "0") || (digitArray.length === 11 && value[0] === "0"))) return Promise.resolve();
      return Promise.reject(new Error("Invalid phone number!"));
    },
  },
];
export const schoolAddressFormRule = [
  {
    required: true,
    message: "School Address!",
  },
];
export const schoolEmailFormRule = [
  {
    required: true,
    message: "Email!",
  },
  {
    type: "email",
    message: "email!",
  },
];
export const schoolStateFormRule = [
  {
    required: true,
    message: "state!",
  },
];
export const schoolLGAFormRule = [
  {
    required: true,
    message: "L.G.A!",
  },
];
export const schoolCategoryFormRule = [
  {
    required: true,
    message: "Category!",
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
      return Promise.reject(new Error("Invalid phone number!"));
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
    message: "Parent Email!",
  },
  {
    type: "email",
    message: "Invalid email!",
  },
];
