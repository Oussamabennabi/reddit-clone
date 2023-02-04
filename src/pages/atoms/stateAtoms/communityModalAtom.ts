import { atom } from "recoil";

type CommunityModalState = {
    open: boolean;
};


const defaultModalState: CommunityModalState = {
    open: false,
};

export const communityModalState = atom<CommunityModalState>({
    key: "communityModalState",
    default: defaultModalState,
});
