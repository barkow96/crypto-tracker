import { factories } from "@strapi/strapi";

const ERROR_MESSAGE = "Unsuccessful fetching of portfolios data";

export default factories.createCoreController(
  "api::portfolio.portfolio",
  ({ strapi }) => ({
    async find(ctx) {
      const userId = ctx.state.user.id;

      try {
        const userPortfolios = await strapi
          .service("api::portfolio.portfolio")
          .fetchUserPortfolios(userId);

        if (userPortfolios && userPortfolios.length >= 0) {
          ctx.response.status = 200;
          ctx.body = {
            data: { portfolios: userPortfolios },
            metaData: {},
          };
        } else {
          ctx.response.status = 400;
          ctx.body = {
            data: { portfolios: [] },
            metaData: { message: "You have no portfolios yet." },
          };
        }
      } catch (err) {
        ctx.response.status = 500;
        ctx.body = {
          message: ERROR_MESSAGE,
          error: err ? err : "Error message missing",
        };
      }
    },

    async update(ctx) {
      type UpdateRequest = { data?: { newName?: string; newIcon?: string } };
      type UpdatedData = { name?: string; icon?: string };

      const requestBody: UpdateRequest = ctx.request.body;
      const portfolioId = ctx.params.id;
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
            message:
              "Update is not allowed. Please check your portfolios first.",
          },
        };
        return;
      }

      //CHECKING IF THE PORTFOLIO BELONGS TO THE USER
      const portfolioToBeUpdated = userData.portfolios.find(
        (portfolio) => portfolio.id === parseInt(portfolioId)
      );
      if (!portfolioToBeUpdated) {
        ctx.response.status = 403;
        ctx.body = {
          metaData: {
            message: "You are not allowed to update the content.",
          },
        };
        return;
      }

      //CHECKING IF PROVIDED DATA IS IN CORRECT FORMAT
      const requestDataIsInvalid =
        !("data" in requestBody) ||
        (!("newName" in requestBody.data) && !("newIcon" in requestBody.data));
      if (requestDataIsInvalid) {
        ctx.response.status = 400;
        ctx.body = {
          metaData: {
            message: "Provided data is invalid or incomplete.",
          },
        };
        return;
      }

      //PREPARING DATA FOR UPDATE
      const updatedData: UpdatedData = {};
      if ("newName" in requestBody.data)
        updatedData.name = requestBody.data.newName;
      if ("newIcon" in requestBody.data)
        updatedData.icon = requestBody.data.newIcon;

      //UPDATING THE PORTFOLIO
      try {
        const updatedPortfolio = await strapi.entityService.update(
          "api::portfolio.portfolio",
          portfolioId,
          { data: updatedData }
        );

        ctx.response.status = 200;
        ctx.body = {
          data: { updatedPortfolio },
          metaData: {},
        };
      } catch (err) {
        ctx.response.status = 500;
        ctx.body = {
          message: ERROR_MESSAGE,
          error: err ? err : "Error message missing",
        };
      }
    },

    async create(ctx) {
      const userId = ctx.state.user.id;

      //CHECKING IF USER EXISTS
      const userData = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        {
          populate: ["portfolios"],
        }
      );
      if (!userData) {
        ctx.response.status = 400;
        ctx.body = {
          metaData: {
            message: "Such user does not exist.",
          },
        };
        return;
      }

      //CREATING NEW PORTFOLIO
      const createdPortfolio = await strapi.entityService.create(
        "api::portfolio.portfolio",
        {
          data: {
            name: "My new portfolio",
            icon: "StarIcon",
            value: 0,
            isActive: false,
            publishedAt: new Date().toISOString(),
          },
        }
      );

      //ADDING PORTFOLIO TO THE USER (RELATION FIELD)
      try {
        const portfolioIds = userData.portfolios.map(
          (portfolio) => portfolio.id
        );
        const updatedUser = await strapi.entityService.update(
          "plugin::users-permissions.user",
          userId,
          {
            data: {
              portfolios: { connect: [...portfolioIds, createdPortfolio.id] },
            },
          }
        );
        ctx.response.status = 200;
        ctx.body = {
          data: { createdPortfolio },
          metaData: {},
        };
      } catch (err) {
        ctx.response.status = 500;
        ctx.body = {
          message: ERROR_MESSAGE,
          error: err ? err : "Error message missing",
        };
      }
    },
  })
);
