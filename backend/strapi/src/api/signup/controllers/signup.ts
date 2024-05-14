const ERROR_MESSAGE = "Something went wrong with Strapi endpoint...";

export default {
  signup: async (ctx) => {
    const { email, password1, password2 } = ctx.request.body.data;

    //SERVER-SIDE DATA VALIDATION
    const areCredentialsValid = await strapi
      .service("api::signup.signup")
      .validateCredentials(email, password1, password2);

    if (!areCredentialsValid) {
      ctx.response.status = 422;
      ctx.body = { message: "Incorrect format of signup data!" };
      return;
    }

    //CHECKING IF USER ALREADY EXISTS
    const doesUserAlreadyExist = await strapi
      .service("api::signup.signup")
      .checkIfUserExists(email);

    if (doesUserAlreadyExist) {
      ctx.response.status = 403;
      ctx.body = { message: "This email is already in use!" };
      return;
    }

    //TRYING TO SEND THE CREDENTIALS TO POSTGRESQL
    try {
      await strapi
        .service("api::signup.signup")
        .insertNewUser(email, password1);
      ctx.response.status = 201;
      ctx.body = { message: "User has been created!" };
    } catch (error) {
      ctx.response.status = 500;
      ctx.body = {
        message: ERROR_MESSAGE,
        error: error ? error : "Error message missing",
      };

      return;
    }
  },
};
