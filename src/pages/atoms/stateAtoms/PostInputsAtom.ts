import { atom } from "recoil";

export type PostFormInputsState = {
    postTitleValue: string;
    postUrlValue: string;
    postMediaValue: Media;
    postMarkdownValue: string;
};


type MediaType = "image" | "video" | null


export type Media = {
    blob: File,
    type:MediaType
} | null;

const defaultModalState: PostFormInputsState = {
    postTitleValue: "",
    postUrlValue: "",
    postMediaValue: null,
    postMarkdownValue: "",
};

export const postFormInputsState = atom<PostFormInputsState>({
    key: "postFormInputsState",
    default: defaultModalState,
});
