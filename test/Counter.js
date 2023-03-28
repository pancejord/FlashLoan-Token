//tests go here

const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counting', () => {


    beforeEach('Run these Before Tests', async () => {
        const Counter = await ethers.getContractFactory('Counter')
        let counter = await Counter.deploy('Counter', 3)
    })

    it('Stores Count', async () => {
        const count = await counter.count()
        expect(count.toNumber()).to.equal(3)
    })



    it('Decrements', async () => {
        await counter.decrement()
        const count = await counter.getCount()
        expect(await count.toNumber()).to.equal(2)


    })
})
