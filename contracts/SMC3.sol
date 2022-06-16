// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./SMC1.sol";

contract SMC3{

    address public owner;
    
    uint public user_action_score;
    
    struct actionPointTable{
        uint likeP;
        uint shareP;
        uint postP;
        uint commentP;
        uint completeviewP;
        uint multiviewP;
        uint downloadP;
    }
    actionPointTable actions;
    constructor (){
        owner=msg.sender;
        actions=actionPointTable(1,2,10,2,2, 2,2);



    }

    function userActionBatching(uint _like, uint _share,uint _post, uint _comment, uint _complete_view, uint _multiple_view, uint _download) public{
        
        user_action_score=(_like * actions.likeP) + (_share * actions.shareP) + (_post * actions.postP) + (_comment * actions.commentP) + (_complete_view* actions.completeviewP) + (_multiple_view * actions.multiviewP) + (_download * actions.downloadP) ;

    }
    function getUserActionScore() public view returns (uint) {
        return user_action_score;
     }




}