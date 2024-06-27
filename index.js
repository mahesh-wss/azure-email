const {
  CommunicationServiceManagementClient,
} = require("@azure/arm-communication");
const { DefaultAzureCredential } = require("@azure/identity");

const credential = new DefaultAzureCredential();
const subscriptionId = "9a74ed0c-3271-421d-a734-66b192d281a6";

const mgmtClient = new CommunicationServiceManagementClient(
  credential,
  subscriptionId
);

const resourceGroupName = "Epiko-Regal-ResourceGroup";
const emailServiceName = "epiko-regal-mail-service";
const domainName = "epiko.io";

const parameters = {
  displayName: "EPIKO ID",
  username: "no-reply",
};

await mgmtClient.senderUsernames.createOrUpdate(
  resourceGroupName,
  emailServiceName,
  domainName,
  "no-reply",
  parameters
);
