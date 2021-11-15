pragma solidity >=0.4.22 <0.9.0;

contract Election {
    
    // 후보자 모델
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // 후보자 기호 변수
    uint public candidatesCount;

    // 후보자 반환하기
    mapping(uint => Candidate) public candidates;

    // 후보자 등록하기
    function addCandidate (string memory _name) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    // constructor
    constructor() public {
    }
}