const Election = artifacts.require('./Election.sol')

contract('Election', accounts => {

    it('후보자 두 명 등록하면 candidatesCount는 2명 이다.', () => {
        return Election.deployed()
            .then(instance => {
                // 두명의 후보자를 등록합니다.
                instance.addCandidate('romeoh')
                instance.addCandidate('doraemong')
                
                // candidatesCount를 반환한다.
                return instance.candidatesCount()
            })
            .then(count => {
                // count는 2 다.
                assert.equal(count, 0);
            })
    })

    it('후보자 정보를 검증한다.', () => {
        return Election.deployed()
            .then(instance => {
                electionInstance = instance
                // 두명의 후보자를 등록합니다.
                electionInstance.addCandidate('romeoh')
                electionInstance.addCandidate('doraemong')
                
                // 첫번째 후보자를 반환한다.
                return electionInstance.candidates(1)
            })
            .then(candidate => {
                assert.equal(candidate[0], 1, '첫번째 후보자 기호는 1번이다.')
                assert.equal(candidate[1], 'romeoh', '첫번째 후보자 이름은 romeoh다.')
                assert.equal(candidate[2], 0, '첫번째 후보자 득표는 0 이다.')
                
                // 두번째 후보자를 반환한다.
                return electionInstance.candidates(2)
            })
            .then(candidate => {
                assert.equal(candidate[0], 2, '두번째 후보자 기호는 2번이다.')
                assert.equal(candidate[1], 'doraemong', '두번째 후보자 이름은 doraemong이다.')
                assert.equal(candidate[2], 0, '두번째 후보자 득표는 0 이다.')
            })
    })
})