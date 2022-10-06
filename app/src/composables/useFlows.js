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
   *
   * We expose a simple paradigm of save, delete and query, not CRUD.
   */

  const saveFlow = async (flow) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].saveFlow(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_save_flow");
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

  const queryFlow = async (flowId, options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].queryFlow(flowId, options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_query_flow");
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
   *
   * We expose a simple paradigm of save, delete and query, not CRUD.
   */

  const saveNugget = async (nugget) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].saveNugget(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_save_nugget");
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

  const queryNugget = async (nuggetId, options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].queryNugget(nuggetId, options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_query_nugget");
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
   *
   * We expose a simple paradigm of save, delete and query, not CRUD.
   * Note: Am "asset" here is reference to an S3 file, these operations update the database.
   */

  const saveAsset = async (asset) => {
    try {
      // @todo Validate busines logic so strategies only deal with correctness.
      strategies[strategy].saveAsset(options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_save_asset");
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

  const queryAsset = async (assetId, options = null) => {
    try {
      // @todo Validate options
      strategies[strategy].queryAsset(assetId, options);
    } catch (e) {
      logger.error(e);
      throw Error("error_failed_to_query_asset");
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
    saveFlow,
    deleteFlow,
    queryFlow,
    queryFlows,
    // Nugget Functionality
    saveNugget,
    deleteNugget,
    queryNugget,
    queryNuggets,
    // Asset Functionality
    saveAsset,
    deleteAsset,
    queryAsset,
    queryAssets,
    // File handling
    uploadFile,
    downloadFile,
    removeFile,
  };
}
