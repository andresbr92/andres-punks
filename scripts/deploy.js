const deploy = async () => {
  // ethers is available in the global scope from ethers library
  const [deployer] = await ethers.getSigners();

  console.log('Deployer:', deployer.address);

  //getContractFactory take the information from the compilation cache
  const AndresPunks = await ethers.getContractFactory('AndresPunks');
  const deployed = await AndresPunks.deploy();

  console.log('AndresPunks Deployed:', deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
