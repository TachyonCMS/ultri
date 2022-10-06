# useFlows.js

## Storage Options

There are five supported storage types.
 1. FileSystem API (file)
 2. AppSync (app)
 3. RestAPI (rest)
 4. Offline-first (offline)
 5. Electron Local File API (electron)

All are accessed through the `useFlows` composable by defining the `strategy` as one of `file|app|rest|offline|electron`.
We expose the same idiomatic persistence basics of the most constrained backend, AWS DataStore.

* saveFlow(flow)
* const deleteFlow(flowId)
* queryFlow(flowId, options = null)
* queryFlows(options)
* saveNugget(nugget)
* deleteNugget(nuggetId)
* queryNugget(nuggetId, options = null)
* queryNuggets(options = null)

Basic business logic and validation is performed in `useFlows`, additional backend specific validation and is performed in each strategy.


### saveFlow(flow)


### const deleteFlow(flowId)


### queryFlow(flowId, options = null)


### queryFlows(options)


### saveNugget(nugget)


### deleteNugget(nuggetId)


### queryNugget(nuggetId, options = null)


### queryNuggets(options = null)
