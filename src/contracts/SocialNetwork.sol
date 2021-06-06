pragma solidity ^0.5.0;

contract SocialNetwork {
	string public name;

    mapping(uint => Post) public posts;

	struct Post {
        uint id; // only positive value
        string content;
        address author; // address ( kinda wallet address )
        uint tipAmount;
	}

	constructor () public {
		name = "Social Network";
	}

	function createPost(string memory _content) public {
        Post(_id, _content, 0, msg.sender);
	}
}