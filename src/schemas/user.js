import Joi from "joi";

export const signinSchema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Email không hợp lệ",
      "string.empty": "Email không được để trống",
      "any.required": "Trường email là bắt buộc",
    }),
    password: Joi.string().required().min(6).messages({
      "string.empty": "Password không được để trống",
      "string.min": "Password phải có ít nhất {#limit} ký tự",
      "any.required": "Trường password là bắt buộc",
    }),
  });