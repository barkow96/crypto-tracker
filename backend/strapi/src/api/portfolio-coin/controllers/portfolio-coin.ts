import { factories } from "@strapi/strapi";

const ERROR_MESSAGE = "STRAPI Portfolio-Coin API - something went wrong";

export default factories.createCoreController(
  "api::portfolio-coin.portfolio-coin",
  ({ strapi }) => ({
    async delete(ctx) {
      const coinId = ctx.params.id;
      const userId = ctx.state.user.id;

      //CHECKING IF USER EXISTS AND HAS PORTFOLIOS
      const userData = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        {
          populate: ["portfolios"],
        }
      );
      const userDataIsMissing =
        !userData || !userData.portfolios || userData.portfolios.length === 0;
      if (userDataIsMissing) {
        ctx.response.status = 400;
        ctx.body = {
          metaData: {
            ok: false,
            message:
              "Deletion is not allowed. Please check if you have any portfolios first.",
          },
        };
        return;
      }

      //FINDING USER COINS
      const userCoinsIds = await strapi
        .service("api::portfolio-coin.portfolio-coin")
        .findUserCoinsIds(userData);

      //CHECKING IF THE COIN BELONGS TO THE USER
      const coinToBeDeleted = userCoinsIds.find((id) => id == coinId);
      if (!coinToBeDeleted) {
        ctx.response.status = 403;
        ctx.body = {
          metaData: {
            ok: false,
            message: "You are not allowed to delete the content.",
          },
        };
        return;
      }

      //DELETING THE COIN
      try {
        await strapi.entityService.delete(
          "api::portfolio-coin.portfolio-coin",
          coinId
        );

        ctx.response.status = 200;
        ctx.body = {
          metaData: { ok: true, message: "Successfully deleted the coin." },
        };
      } catch (err) {
        ctx.response.status = 500;
        ctx.body = {
          metaData: {
            ok: false,
            message: ERROR_MESSAGE,
            error: err ? err : "Error message missing",
          },
        };
      }
    },
  })
);
