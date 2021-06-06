const SocialNetwork = artifacts.require("./SocialNetwork.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('SocialNetwork', (accounts) => {
    let socialNetwork;

    before(async () => {
        socialNetwork = await SocialNetwork.deployed()
    })

    describe('deployment', async () => {
        // test if deploys successfull
        it('deploys successfully', async () => {
            const address = await socialNetwork.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async () => {
            const name = await socialNetwork.name()
            assert.equal(name, "Social Network")
        })
    })

    // Tests for POST
    describe('posts', async () => {

        it("create posts", async () => {
            //todo
        })

        it("list posts", async () => {
            //todo
        })

        it("allow users to tip posts", async () => {
            //todo
        })
    })

})