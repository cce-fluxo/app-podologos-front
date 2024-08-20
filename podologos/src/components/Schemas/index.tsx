import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

export const CadastroSchema = Yup.object().shape({
  first_name: Yup.string().required('Nome é obrigatório'),
  last_name: Yup.string()
    .min(3, 'Mínimo de 3 letras')
    .required('Sobrenome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  phone_number: Yup.string()
    // .matches(
    //   /\([1-9]{2}\) (?:[2-9]|9[1-9])[0-9]{4}\-[0-9]{4}$/,
    //   "Entre com um celular válido"
    // )
    .required('celular é obrigatório'),
  cep: Yup.string()
    .required('CEP é obrigatório')
    .matches(/^[0-9]{5}-[0-9]{3}$/, 'CEP inválido')
    .required('CEP é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
    .required('Confirmação de senha é obrigatória'),
});

export const EmailSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
});

export const NovaSenhaSchema = Yup.object().shape({
  password: Yup.string()
    .required('Senha obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem corresponder')
    .required('Confirmação de senha obrigatória'),
});

export const codigoValidationSchema = Yup.object().shape({
  codigo: Yup
    .string()
    .required('Code is Required'),
})

// export const SignupSchema = Yup.object().shape({
//   name: Yup.string().min(3, "3 letters minimum").required("Required field"),
//   surname: Yup.string().min(3, "3 letters minimum").required("Required field"),
//   email: Yup.string().email("Invalid email").required("Required field"),
//   password: Yup.string()
//     .min(8, "8 character minimum")
//     .required("Required field")
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//       "It is necessary to have a number, a special character and an uppercase letter"
//     ),

//   selectContactMethod: Yup.string().required("Required field"),
//   selectUniversity: Yup.string().required("Required field"),
//   selectCourse: Yup.string().required("Required field"),
// });
