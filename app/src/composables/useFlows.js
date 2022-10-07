import { Logger } from "aws-amplify";

import { ref } from "vue";

// Data storage strategy composables
import fileSystemStrategy from "./strategies/flows/useFlowsFileSystem.js";
import appSyncStrategy from "./strategies/flows/useFlowsAppSync.js";
import restApiStrategy from "./strategies/flows/useFlowsRestApi.js";
import dataStoreStrategy from "./strategies/flows/useFlowsDataStore.js";
import electronApiStrategy from "./strategies/flows/useFlowsElectronApi.js";

const logger = new Logger("FlowLogger");

// These all expose the same "interface"
const fileSystem = fileSystemStrategy();
const appSync = appSyncStrategy();
const restApi = restApiStrategy();
const dataStore = dataStoreStrategy();
const electronApi = electronApiStrategy();

// We can reference any of the strategies with strategies[strategy] for the primary strategy.
// - or - strategies['<explicitName>']
// This allows us to copy from one strategy to another.
const strategies = {
  file: fileSystem,
  app: appSync,
  rest: restApi,
  offline: dataStore, // map dataStore to a more descriptive name
  electron: electronApi
};

export default function useFlows() {
  /**
   * STRATEGY HANDLING
   */

  const strategy = ref(null);

  const getStrategy = () => {
    return strategy;
  };

  // Define the primary stategy
  const setStrategy = async (inputStrategy, options = null) => {
    // One of 'file', 'app', 'rest', 'dtsore', 'offline'
    strategy.value = inputStrategy;

    // As a convenience allow sending initialization options
    if (options) {
      await initStrategy(strategy.value, options);
    }
  };

  // This can be called outside of setStrategy initialize a second strategy for copying.
  const initStrategy = async (strategy, options) => {
    strategies[strategy].init(options);
  };

  /**
   * FLOW FUNCTIONALITY
   */

  const createFlow = async (flow) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].createFlow(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_create_flow");
    }
  };

  const readFlow = async (flowId, options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].readFlow(flowId, options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_read_flow");
    }
  };

  const updateFlow = async (flow) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].updateFlow(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_update_flow");
    }
  };

  const deleteFlow = async (flowId) => {
    try {
      strategies[strategy].deleteFlow(flowId);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_delete_flow");
    }
  };

  const queryFlows = async (options) => {
    try {
      // @todo Validate options
      strategies[strategy].queryFlows(options);
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
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].createNugget(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_create_nugget");
    }
  };

  const readNugget = async (nuggetId, options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].readNugget(nuggetId, options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_read_nugget");
    }
  };

  const updateNugget = async (nugget) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].updateNugget(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_update_nugget");
    }
  };

  const deleteNugget = async (nuggetId) => {
    try {
      strategies[strategy].deleteNugget(nuggetId);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_delete_nugget");
    }
  };

  const queryNuggets = async (options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].queryNuggets(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_query_nuggets");
    }
  };

  /**
   * ASSET FUNCTIONALITY
   * Note: Am "asset" here is reference to an S3 file, these operations update the database.
   */

  const createAsset = async (asset) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].createAsset(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_create_asset");
    }
  };

  const readAsset = async (assetId, options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].readAsset(assetId, options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_read_asset");
    }
  };

  const updateAsset = async (asset) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].updateAsset(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_update_asset");
    }
  };

  const deleteAsset = async (assetId) => {
    try {
      strategies[strategy].deleteAsset(assetId);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_delete_asset");
    }
  };

  const queryAssets = async (options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].queryAssets(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_query_assets");
    }
  };

  /**
   * FILE HANDLING
   *
   * Meta data is stored as ASSETS above.
   */
  const uploadFile = async() => {

  }

  // Used when the file is limited to authorized users.
  const downloadFile = async(assetUrl) => {

  }

  const removeFile = async(assetId) => {

  }

  return {
    // Strategy handling
    getStrategy,
    setStrategy,
    initStrategy,
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
    deleteNugget,
    queryNuggets,
    // Asset Functionality
    createAsset,
    readAsset,
    updateAsset,
    deleteAsset,
    queryAssets,
    // File handling
    uploadFile,
    downloadFile,
    removeFile,
  };
}
