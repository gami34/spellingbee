export const dataFormatter = (type, values) => {
  if (type === "single")
    return {
      category: values.category,
      school_email: values.school_email,
      lga: values.lga,
      school_mobile_suffix: values.school_mobile_prefix + values.school_mobile_suffix,
      mobile_prefix: values.mobile_prefix,
      school_address: values.school_address,
      school_name: values.school_name,
      school_head: values.school_head,
      state: values.state,
      ward: values.ward,
      students: [
        {
          student_name: values.student_name,
          student_age: values.student_age,
          parent_name: values.parent_name,
          parent_email: values.parent_email,
          parent_number: values.parent_mobile_prefix + values.parent_mobile_suffix,
          parent_address: values.parent_address,
        },
      ],
    };
};
