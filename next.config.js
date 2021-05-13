const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "slavo3",
        mongodb_password: "Smimicom24011bg",
        mongodb_contact_cluster: "mimicom24",
        mongodb_database: "foonomaddb-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "slavo3",
      mongodb_password: "Smimicom24011bg",
      mongodb_contact_cluster: "mimicom24",
      mongodb_database: "foonomaddb",
    },
  };
};
