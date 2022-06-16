const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("UM-SMC-4", function () {
  let contract;


  beforeEach(async function () {
    const TokenTabulate = await ethers.getContractFactory("SMC4");
    const tokenTabulate = await TokenTabulate.deploy();
    contract = await tokenTabulate.deployed();

    // [owner] = await ethers.getSigners();
  });

  // it("Should return the new greeting once it's changed", async function () {
  //   expect(await contract.greet()).to.equal("Hello, world!");
  //   const setGreetingTx = await contract.setGreeting("Hola, mundo!");
  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();
  // });

  
  beforeEach(async function () {
    await contract.tokenTabulate(31,"0x2b006F8AAdfc6C98488bc18141fDab15E7a6051f");
   });

  it('Rewarded Token should be 62', async function () {
    expect((await contract.getRewardedToken()).toString()).to.equal('62');


  });
  it('User Address should be 0x2b006F8AAdfc6C98488bc18141fDab15E7a6051f', async function () {
   
    expect((await contract.getUserAddress()).toString()).to.equal('0x2b006F8AAdfc6C98488bc18141fDab15E7a6051f');

  });


  it('Rewarded Token should be 60 and User Address should be 0x260635Be5C137857f66D3c3d8eaFDe2Ac1160746', async function () {
    await contract.tokenTabulate(30,"0x260635Be5C137857f66D3c3d8eaFDe2Ac1160746");
    expect((await contract.getRewardedToken()).toString()).to.equal('62');
    expect((await contract.getUserAddress()).toString()).to.equal('0x2b006F8AAdfc6C98488bc18141fDab15E7a6052f');
  });

  it('Rewarded Token should be 80 and User Address should be 0xF93ef14e012C0CCAD370b8085128347485bdAe35', async function () {
    await contract.tokenTabulate(40,"0xF93ef14e012C0CCAD370b8085128347485bdAe35");
    expect((await contract.getRewardedToken()).toString()).to.equal('80');
    expect((await contract.getUserAddress()).toString()).to.equal('0xF93ef14e012C0CCAD370b8085128347485bdAe35');
  });

 

});
