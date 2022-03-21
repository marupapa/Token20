const ERC20MinerReward = artifacts.require("ERC20MinerReward");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ERC20MinerReward", function (/* accounts */) {
  it("should assert true", async function () {
    await ERC20MinerReward.deployed();
    return assert.isTrue(true);
  });
});
