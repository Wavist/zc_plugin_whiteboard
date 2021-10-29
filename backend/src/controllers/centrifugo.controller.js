const axios = require("axios");
const { SOCKER_KEY, SOCKET_URL } = require("../config/index");
const CustomError = require("../utils/custom-error");

class CentrifugoController {
  static async publish(channel, data) {
    try {
      await axios.post(
        SOCKET_URL,
        {
          method: "publish",
          params: {
            channel,
            data,
          },
        },
        {
          headers: {
            Authorization: `apikey ${SOCKER_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      return true;
    } catch (error) {
      throw new CustomError(`Unable to publish to ${channel}: ${error}`, "500");
    }
  }

  static async publishToSideBar(organisationId, userId, data) {
    const channel = `${organisationId}_${userId}_sidebar`;

    try {
      await axios.post(
        SOCKET_URL,
        {
          method: "publish",
          params: {
            channel,
            data: {
              event: "sidebar_update",
              plugin_id: "whiteboard.zuri.chat",
              data,
            },
          },
        },
        {
          headers: {
            Authorization: `apikey ${SOCKER_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return true;
    } catch (error) {
      throw new CustomError(`Unable to publish to ${channel}: ${error}`, "500");
    }
  }
}

module.exports = CentrifugoController;
