pragma solidity ^0.5.0;

contract SocialNetwork {
	string public name;
    uint public postCount = 0;
    mapping(uint => Post) public posts;

	struct Post {
        uint id; // only positive value
        string content;
        address author; // address ( kinda wallet address )
        uint tipAmount;
	}

	event PostCreated(
	    uint id,
	    string content,
	    address author,
	    uint tipAmount
	);

	constructor () public {
		name = "Social Network";
	}

	function createPost(string memory _content) public {
	    // Require valid content
	    require(bytes(_content).length > 0);
	    // increment the count
	    postCount++;
	    //create the post
        posts[postCount] = Post(postCount, _content, msg.sender, 0);
        // Trigger event
        emit PostCreated(postCount, _content, msg.sender, 0);

	}
}