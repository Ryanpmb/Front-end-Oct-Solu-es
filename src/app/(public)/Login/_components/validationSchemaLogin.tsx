import * as Yup from "yup";

export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().email("Coloque um email válido").required("Email é obrigatório"),
    password: Yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});