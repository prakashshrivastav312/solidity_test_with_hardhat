// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.19;

contract SMC4{
    string  public name = "UMT Token";
    string  public symbol = "UMT";
    string  public standard = "UMT token 1.0";
    uint8 public decimals=0;
    address payable public user;
    uint public tokenMultiplier;
     uint public totalToken;
    uint256 public totalSupply;
    uint256 _initialSupply= 5000;
    uint256 _tokenMultiplier=2;


    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

   

    mapping(address => uint256) public balanceOf;
   
    constructor () public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        tokenMultiplier=_tokenMultiplier;
    }
  

    function tokenTabulate(uint userActionScore, address payable _user) public {
    
      
       
       user=_user;
       totalToken=userActionScore*tokenMultiplier;

       
 
        transfer(user, totalToken);
         
   }


   function getRewardedToken() public view returns (uint) {
        return totalToken;
     }

      function getUserAddress() public view returns (address) {
        return user;
     }
    

    function transfer(address _to, uint256 _value)  public returns(uint){
        require(balanceOf[msg.sender] >= _value);

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return _value;
    }

   
}
