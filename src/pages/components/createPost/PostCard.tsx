import React from "react";


//  MUI
import { Box } from "@mui/system";
import { CustomAvatar, CustomCard, CustomIcon, CustomIconWithText, PrimaryButton } from "../mui";
import PublishIcon from "@mui/icons-material/Publish";
import DownloadIcon from "@mui/icons-material/Download";
import { Link, Typography, useTheme } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShareIcon from "@mui/icons-material/Share";
import EjectOutlinedIcon from "@mui/icons-material/EjectOutlined";
type PostCardProps = {
    post: any;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const theme = useTheme()
    return (
        <CustomCard
            as={"article"}
            sx={{
                display: "flex",
                mb: "1rem",
                cursor: "pointer",

                maxHeight: "630px",
                outline: "1px solid #5c5c5c",
                pb: "0rem",
                borderRadius: ".3rem",
                "&:hover": {
                    outlineColor: "#949494",
                },
            }}
        >
            {" "}
            {/* likes */}
            <Box
                display={"flex"}
                justifyContent="flex-start"
                alignContent={"center"}
                flexDirection="column"
                pt=".6rem"
                width={"40px"}
                maxWidth={"40px"}
                pr=".6rem"
                pl=".6rem"
                sx={{
                    borderRight: "1px solid #949494",
                    backgroundColor: `${
                        theme.palette.mode === "dark"
                            ? "background.paper"
                            : "#eeeeee"
                    }`,
                }}
            >
                <CustomIcon
                    tooltipPlacment="top"
                    btnPadding="3px"
                    tooltipTitle="up vote"
                >
                    <PublishIcon />
                </CustomIcon>
                <Typography component={"small"} fontSize="12px">
                    {post.likes}
                </Typography>
                <CustomIcon
                    btnPadding="3px"
                    tooltipPlacment="bottom"
                    tooltipTitle="down vote"
                >
                    <DownloadIcon />
                </CustomIcon>
            </Box>
            {/* Content */}
            <Box
                width="100%"
                display="flex"
                justifyContent={"flex-start"}
                flexDirection={"column"}
            >
                {/* top */}
                <Box
                    pl=".6rem"
                    pr=".6rem"
                    pt=".6rem"
                    display={"flex"}
                    alignItems="center"
                    gap=".4rem"
                >
                    <CustomAvatar imgSrc="#" />
                    <Typography
                        fontWeight={"bold"}
                        fontSize="14px"
                        component={"small"}
                    >
                        {post.communityName}
                    </Typography>
                    <Typography
                        color="GrayText"
                        fontSize="13px"
                        component={"small"}
                    >
                        posted by{" "}
                        <Link
                            href="#"
                            sx={{
                                color: "GrayText",
                                textDecorationColor: "#9c9c9c",
                            }}
                        >
                            {post.poster}
                        </Link>
                    </Typography>

                    <Typography
                        fontSize="13px"
                        color="GrayText"
                        component={"small"}
                    >
                        {post.createdAt}
                    </Typography>
                    <PrimaryButton>Join</PrimaryButton>
                </Box>
                {/* content */}
                {/* TITLE */}
                <Typography
                    variant="h3"
                    component="h3"
                    mt={"10px"}
                    pl=".6rem"
                    pb="4px"
                    textAlign="left"
                    fontSize="18px"
                    fontWeight={"bold"}
                    borderBottom="1px solid #949494"
                >
                    {/* {post.title} */}
                    Can we start a thread about how unrealistic some scenes in
                    Fast and Furious are. Me and my buddy are cracking up right
                    now.
                </Typography>
                <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    height="456px"
                >
                    <Box
                        sx={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                        }}
                        component="img"
                        src="https://images.unsplash.com/photo-1670070633288-72a46e449866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
                    />
                </Box>

                {/* reactions */}
                <ReactionsContainer />
            </Box>
        </CustomCard>
    );
};
export default PostCard;

const ReactionsContainer = () => {
  return (
      <Box
          sx={{ borderTop: "1px solid #949494" }}
          display="flex"
          p=".6rem"
          gap=".2rem"
          alignItems={"center"}
      >
          <CustomIconWithText
              tooltipPlacment="bottom"
              tooltipTitle="Comment"
              text="Comment"
          >
              <ModeCommentOutlinedIcon />
          </CustomIconWithText>

          <CustomIconWithText
              tooltipPlacment="bottom"
              tooltipTitle="Award"
              text="Award"
          >
              <CardGiftcardIcon />
          </CustomIconWithText>
          <CustomIconWithText
              tooltipPlacment="bottom"
              tooltipTitle="Share"
              text="Share"
          >
              <ShareIcon />
          </CustomIconWithText>

          <CustomIconWithText
              tooltipPlacment="bottom"
              tooltipTitle="Tip"
              text="Tip"
          >
              <EjectOutlinedIcon />
          </CustomIconWithText>

          <CustomIcon tooltipPlacment="bottom" tooltipTitle="More">
              <MoreHorizOutlinedIcon />
          </CustomIcon>
      </Box>
  );
}
