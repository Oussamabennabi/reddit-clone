import { atom } from "recoil";

type LeftSidebarState = {
    shown: boolean;
};


const defaultModalState: LeftSidebarState = {
    shown: false,
};

export const leftSidebarState = atom<LeftSidebarState>({
    key: "leftSidebarState",
    default: defaultModalState,
});
