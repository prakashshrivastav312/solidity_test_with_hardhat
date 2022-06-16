const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("UM-SMC-3", function () {
  let contract;


  beforeEach(async function () {
    const User_Action_Score = await ethers.getContractFactory("SMC3");
    const user_action_score = await User_Action_Score.deploy();
    contract = await user_action_score.deployed();

 
  });


  
  beforeEach(async function () {
    await contract.userActionBatching(0,0,0,0,0,0,0);
   });

  it('Initial User action score should be 0', async function () {
    expect((await contract.getUserActionScore()).toString()).to.equal('0');
  });


  it('User action score is 65', async function () {
  await contract.userActionBatching(5,3,1,3,6,10,3);
  expect((await contract.getUserActionScore()).toString()).to.equal('65');
  });

  it('User action score is 59', async function () {
    await contract.userActionBatching(5,3,1,0,6,10,3);
    expect((await contract.getUserActionScore()).toString()).to.equal('59');
  });

  it('User action score is 61', async function () {
    await contract.userActionBatching(5,3,1,1,6,10,3);
    expect((await contract.getUserActionScore()).toString()).to.equal('60');
  });
  
  
  it('User action score is 63', async function () {
    await contract.userActionBatching(5,3,1,2,6,10,3);
    expect((await contract.getUserActionScore()).toString()).to.equal('63');
  });
  

});
