// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract SMC1{
    
     address public media_object_creater_id;
     uint256 public useraction_time; 
     address public user_aa;
     uint public posting_time;
     uint public media_object_id;
     mapping(address=>string) public user; 
     
     uint id=0; 
     struct User_Actions{
         string media_object_post;
         uint like;
         uint share;
         uint comment;
         uint complete_view;
         uint multiple_view;
         uint download;



     }
    
     mapping(uint=>User_Actions) public user_action_done;   

     function createPost(uint256 _a)   public {
           user_aa=msg.sender;
           id+=_a;
           media_object_id=id ; 
           user_action_done[id]=User_Actions("Bike",0,0,0,0,0,0) ;
           media_object_creater_id=user_aa;
           posting_time=block.timestamp;
           
           

     }

     function getmediapostid() public view returns (uint) {
        return media_object_id;
     }



     

    
      
     
     
     
     function userAction(uint _media_object_id,  string memory _media_object_post, uint _like, uint _share, uint _comment, uint _complete_view, uint _multiple_view, uint _download) public{
         
       
         useraction_time=block.timestamp;
         
         id=_media_object_id;
         user_action_done[id]=User_Actions(_media_object_post,_like,_share,_comment,_complete_view,_multiple_view,_download );
       
        
         
     }
    
    
}
