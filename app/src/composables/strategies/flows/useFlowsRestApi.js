import { Logger } from "aws-amplify";
const logger = new Logger("FlowsRestApiLogger");

export default function useFlowsRestApi() {
  /**
   * FLOW FUNCTIONALITY
   *
   * We expose a simple paradigm of save, delete and query, not CRUD.
   */

  const saveFlow = async (flow) => {
    try {
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_save_flow");
    }
  };

  const deleteFlow = async (flowId) => {
    try {
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_delete_flow");
    }
  };

  const queryFlow = async (flowId, options = null) => {
    try {
      // @todo Validate options
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_query_flow");
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
   *
   * We expose a simple paradigm of save, delete and query, not CRUD.
   */

  const saveNugget = async (nugget) => {
    try {
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_save_nugget");
    }
  };

  const deleteNugget = async (nuggetId) => {
    try {
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_delete_nugget");
    }
  };

  const queryNugget = async (nuggetId, options = null) => {
    try {
      // @todo Validate options
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_query_nugget");
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
    saveFlow,
    deleteFlow,
    queryFlow,
    queryFlows,
    // Nugget Functionality
    saveNugget,
    deleteNugget,
    queryNugget,
    queryNuggets
  };
}
