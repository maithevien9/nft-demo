import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : 'dev';

  const Hero = await ethers.getContractFactory('Hero');
  const hero = await Hero.deploy();
  Config.setConfig(network + '.Hero', hero.address);
  console.log('Hero address:', hero.address);

  // const Enouvo = await ethers.getContractFactory('Enouvo');
  // const enouvo = await Enouvo.deploy();
  // Config.setConfig(network + '.Enouvo', enouvo.address);
  // console.log('Enouvo address:', enouvo.address);

  // const HeroMarketplace = await ethers.getContractFactory('HeroMarketplace');
  // const heroMarketplace = await HeroMarketplace.deploy(
  //   '0x3ad9e06a48f559087D1606487a0843d6FA0B2E1B',
  //   '0x79E8BC3f281c400dBD5951240A6D9b3ac154f9D2'
  // );
  // Config.setConfig(network + '.HeroMarketplace', heroMarketplace.address);
  // console.log('HeroMarketplace address:', heroMarketplace.address);

  await Config.updateConfig();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
