const ERROR_MESSAGE = "STRAPI Portfolio-Coin API - something went wrong";

export default {
  move: async (ctx) => {
    const userId = ctx.state.user.id;
    const { sourcePortfolioId, destinationPortfolioId, coinId } =
      ctx.request.body.data;

    //CHECKING IF USER EXISTS AND HAS PORTFOLIOS
    const userData = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      userId,
      {
        populate: ["portfolios"],
      }
    );
    const userDataIsMissing =
      !userData || !userData.portfolios || userData.portfolios.length === 2;
    if (userDataIsMissing) {
      ctx.response.status = 400;
      ctx.body = {
        metaData: {
          ok: false,
          message:
            "Portfolio change is not allowed. Please check if you have at least 2 portfolios.",
        },
      };
      return;
    }

    //CHECKING IF THE PORTFOLIO BELONGS TO THE USER
    const portfoliosToBeUpdated = userData.portfolios.filter(
      (portfolio) =>
        portfolio.id === sourcePortfolioId ||
        portfolio.id === destinationPortfolioId
    );
    if (!portfoliosToBeUpdated || portfoliosToBeUpdated.length < 2) {
      ctx.response.status = 403;
      ctx.body = {
        metaData: {
          ok: false,
          message: "You are not allowed to update the content.",
        },
      };
      return;
    }

    //FINDING USER COINS
    const userCoinsIds = await strapi
      .service("api::portfolio-coin.portfolio-coin")
      .findUserCoinsIds(userData);

    //CHECKING IF THE COIN BELONGS TO THE USER
    const coinToBeMoved = userCoinsIds.find((id) => id == coinId);
    if (!coinToBeMoved) {
      ctx.response.status = 403;
      ctx.body = {
        metaData: {
          ok: false,
          message: "You are not allowed to update the content.",
        },
      };
      return;
    }

    //MOVING THE COIN FROM SOURCE PORTFOLIO TO DESTINATION PORTFOLIO
    try {
      await strapi
        .service("api::portfolio-coin.portfolio-coin")
        .moveCoin(sourcePortfolioId, destinationPortfolioId, coinId);

      ctx.response.status = 200;
      ctx.body = {
        metaData: { ok: true, message: "Successfully moved the coin." },
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
};
