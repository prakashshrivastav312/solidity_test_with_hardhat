const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("UM-SMC-1", function () {
  let contract;
 

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("SMC1");
    const greeter = await Greeter.deploy();
    contract = await greeter.deployed();

  
  });


  
  beforeEach(async function () {
    await contract.createPost(0);
   });

  it('Initial Media Post Id should be 0', async function () {
    expect((await contract.getmediapostid()).toString()).to.equal('0');
  });

  it('Media Post Id', async function () {
    await contract.createPost(3);
    expect((await contract.getmediapostid()).toString()).to.equal('3');
  });

  it('Media Post Id', async function () {
      await contract.createPost(4);
      expect((await contract.getmediapostid()).toString()).to.equal('4');
  });
  
  it('Media Post Id', async function () {
    await contract.createPost(5);
    expect((await contract.getmediapostid()).toString()).to.equal('53');
  });

  it('Media Post Id', async function () {
    await contract.createPost(6);
    expect((await contract.getmediapostid()).toString()).to.equal('6');
  });

  it('Media Post Id', async function () {
  await contract.createPost(7);
  expect((await contract.getmediapostid()).toString()).to.equal('7');
  });

 

});
