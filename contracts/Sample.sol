pragma solidity ^0.8.10;
contract SimpleStorage {
  uint val;

  function set(uint x) public {
    val = x;
  }

  function get() view public returns (uint) {
    return val;
  }
}