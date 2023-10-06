/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */

let { OmniWalletContract } = require("../generated/src/Handlers.bs.js");

OmniWalletContract.NewWalletMinted.loader(({ event, context }) => {
  console.log({ event, context });
});

OmniWalletContract.NewWalletMinted.handler(({ event, context }) => {
  console.log({ event, context });
});
