import React from "react";
import { 
    UserInformationContainer, 
    UserName, 
    UserDescription, 
    AvatarStyled, 
    RatingStyled 
} from './UserInformation.style';

const UserInformation = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={"https://github.com/GabrielFraga962.png"} />
      <UserName>Elisabeth Mary</UserName>
      <RatingStyled />
      <UserDescription />
    </UserInformationContainer>
  );
};

export default UserInformation;
