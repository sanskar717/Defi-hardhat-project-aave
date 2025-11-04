// const { toUtf8CodePoints } = require("ethers/lib/utils")
// const { validate } = require("solhint/lib/config/config-validator")
const { getNamedAccounts, ethers } = require("hardhat") // note the change here

const AMOUNT = ethers.utils.parseEther("1")

async function getWeth() {
    const { deployer } = await getNamedAccounts() // use getNamedAccounts

    const IWeth = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer
    )

    const tx = await IWeth.deposit({ value: AMOUNT })
    await tx.wait(1)
    const wethBalance = await IWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} Weth`)
}

module.exports = { getWeth, AMOUNT }
