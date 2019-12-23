const Leaderboard = artifacts.require('Leaderboard')

module.exports = async (deployer, accounts) => {
  await deployer.deploy(Leaderboard)
};
