import { factories } from "@strapi/strapi";

const ERROR_MESSAGE = "STRAPI Portfolio-Transaction API - something went wrong";

type CreateRequest = {
  data?: {
    portfolioId: number;
    coinName: string;
    date: string;
    type: "BUY" | "SELL";
    price: number;
    quantity: number;
  };
};

type ResponseData = {
  createdTransaction: {
    id: number;
    type: "BUY" | "SELL";
    date: string;
    price: number;
    quantity: number;
  };
  createdCoin?: {
    id: number;
    symbol: string;
    quantity: number;
    avgBuyPrice: number;
  };
};

export default factories.createCoreController(
  "api::portfolio-transaction.portfolio-transaction",
  ({ strapi }) => ({
    async create(ctx) {
      const userId = ctx.state.user.id;
      const requestBody: CreateRequest = ctx.request.body;
      const data = requestBody.data;

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
              "Portfolio change is not allowed. Please check if you own requested portfolio.",
          },
        };
        return;
      }

      //CHECKING IF THE PORTFOLIO BELONGS TO THE USER
      const portfolioToBeUpdated = userData.portfolios.find(
        (portfolio) => portfolio.id.toString() === data.portfolioId.toString()
      );
      if (!portfolioToBeUpdated) {
        ctx.response.status = 403;
        ctx.body = {
          metaData: {
            ok: false,
            message: "You are not allowed to update the content.",
          },
        };
        return;
      }

      //CHECKING IF THE COIN ALREADY BELONGS TO THE UPDATED PORTFOLIO
      const idOfCoinToBeUpdated = await strapi
        .service("api::portfolio-transaction.portfolio-transaction")
        .findCoinToBeUpdated(data.portfolioId, data.coinName);

      //CREATING TRANSACTION AND CREATING / UPDATING COIN
      try {
        let responseData: ResponseData;
        //SCENARIO 1: IF THE COIN ALREADY BELONGS TO THE PORTFOLIO - ADD TRANSACTION AND UPDATE THE COIN
        if (idOfCoinToBeUpdated) {
          responseData = await strapi
            .service("api::portfolio-transaction.portfolio-transaction")
            .createTransactionAndUpdateCoin(
              idOfCoinToBeUpdated,
              data.quantity,
              data.price,
              data.date,
              data.type
            );
        }
        //SCENARIO 2: IF THE COIN DOESN'T BELONG TO THE PORTFOLIO - ADD TRANSACTION AND ADD THE COIN
        if (!idOfCoinToBeUpdated) {
          responseData = await strapi
            .service("api::portfolio-transaction.portfolio-transaction")
            .createTransactionAndCreateCoin(
              data.portfolioId,
              data.coinName,
              data.quantity,
              data.price,
              data.date,
              data.type
            );
        }

        ctx.response.status = 200;
        ctx.body = {
          data: responseData,
          metaData: {
            ok: true,
            message: "Successfully created the transaction.",
          },
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
