const SocialNetwork = artifacts.require("./SocialNetwork.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('SocialNetwork', ([deployer, author, tipper]) => {
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
        let result, postCount;
        it("create posts", async () => {
            result = await socialNetwork.createPost('This is first entry', {from: author });
            postCount = socialNetwork.postCount();
            // on success
            assert.notEqual(postCount, 0);
            const event = result.logs[0].args;
            //assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
            assert.equal(event.content, 'This is first entry', 'content is correct');
            assert.equal(event.tipAmount, '0', 'tip amount is correct')
            assert.equal(event.author, author, 'author is correct')

            // FAILURE: Post must have content
            await socialNetwork.createPost('', { from: author }).should.be.rejected;
        });

        // it("list posts", async () => {
        //     //todo
        // })
        //
        // it("allow users to tip posts", async () => {
        //     //todo
        // })
    });

});