import React from 'react';
import { CustomMenuButton } from '../mui';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { communityModalState } from '@/pages/atoms/stateAtoms/communityModalAtom';

type CreateMenuProps = {
  
};

const CreateMenu:React.FC<CreateMenuProps> = () => {
  const router = useRouter()
    const [modal, setModal] = useRecoilState(communityModalState);

  return (
      <>
          <CustomMenuButton onClick={()=>{router.push("/createPost")}} text="Create Post" leftIcon={<AddOutlinedIcon />} />

          <CustomMenuButton onClick={()=>{setModal({open:true})}} text="Create Community" leftIcon={<AddOutlinedIcon />} />
      </>
  );
}
export default CreateMenu;