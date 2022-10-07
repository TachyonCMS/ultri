import { Logger } from "aws-amplify";
const logger = new Logger("FlowsRestApiLogger");

export default function useFlowsRestApi() {
   /**
   * FLOW FUNCTIONALITY
   */

    const createFlow = async (flow) => {
      try {
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_create_flow");
      }
    };

    const readFlow = async (flowId, options = null) => {
      try {
        // @todo Validate options
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_read_flow");
      }
    };

    const updateFlow = async (flow) => {
      try {
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_update_flow");
      }
    };

    const deleteFlow = async (flowId) => {
      try {
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_delete_flow");
      }
    };

    const queryFlows = async (options) => {
      try {
        // @todo Validate options
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_query_flows");
      }
    };

    /**
     * NUGGET FUNCTIONALITY
     */

    const createNugget = async (nugget) => {
      try {
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_create_nugget");
      }
    };

    const readNugget = async (nuggetId, options = null) => {
      try {
        // @todo Validate options
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_read_nugget");
      }
    };

    const updateNugget = async (nugget) => {
      try {
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_update_nugget");
      }
    };

    const deleteNugget = async (nuggetId) => {
      try {
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_delete_nugget");
      }
    };

    const queryNuggets = async (options = null) => {
      try {
        // @todo Validate options
      } catch (e) {
        logger.error(e);
        throw Error("error_failed_to_query_nuggets");
      }
    };

    return {
      // Init
      init,
      // Flow Functionality
      createFlow,
      readFlow,
      updateFlow,
      deleteFlow,
      queryFlows,
      // Nugget Functionality
      createNugget,
      readNugget,
      updateNugget,
      createNugget,
      queryNuggets
    };
  }

