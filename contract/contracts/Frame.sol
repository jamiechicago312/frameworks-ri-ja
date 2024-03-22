// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ERC1155URIStorage} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract Frame is ERC1155URIStorage {
    uint256 public constant DEFAULT_FEES = 0.01 ether;

    mapping(uint256 => address) public authors;
    mapping(uint256 => uint256) public fees;
    // mapping(uint256 => string) public tokenURIs;
    mapping(uint256 => uint256) public balanceByTokenId;

    constructor() ERC1155("") {}

    // function uri(
    //     uint256 _tokenId
    // ) public view override returns (string memory) {
    //     return tokenURIs[_tokenId];
    // }

    function setToken(
        uint256 _tokenId,
        address _author,
        string calldata _uri
    ) external {
        authors[_tokenId] = _author;
        // tokenURIs[_tokenId] = _uri;
        _setURI(_tokenId, _uri);
        fees[_tokenId] = DEFAULT_FEES;
    }

    function setFees(
        uint256 _tokenId,
        uint256 _fee
    ) external onlyAuthor(_tokenId) {
        fees[_tokenId] = _fee;
    }

    function mint(uint256 _tokenId, bytes memory _data) external payable {
        require(authors[_tokenId] != address(0), "Frame: Token not exists");
        require(fees[_tokenId] <= msg.value, "Frame: Insufficient fee");
        _mint(msg.sender, _tokenId, 1, _data);
        balanceByTokenId[_tokenId] += msg.value;
    }

    function withdraw(uint256 _tokenId) external onlyAuthor(_tokenId) {
        uint256 treasure = balanceByTokenId[_tokenId];
        balanceByTokenId[_tokenId] = 0;
        (bool success, ) = authors[_tokenId].call{value: treasure}("");
        require(success, "Failed to withdraw");
    }

    modifier onlyAuthor(uint256 _tokenId) {
        require(
            authors[_tokenId] == msg.sender,
            "Frame: Only author can call this function"
        );
        _;
    }
}
