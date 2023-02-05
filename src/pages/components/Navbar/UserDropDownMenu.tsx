import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { CustomMenuButton, CustomMenuSwitchButton, CustomSwitchButton } from "../mui";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { Divider } from "@mui/material";
import { ThemeModeContext } from "@/pages/context/ThemeModeContext";
import { auth } from "@/pages/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";

type UserDropDownMenuProps = {};

const UserDropDownMenu: React.FC<UserDropDownMenuProps> = () => {
    
    const themeMode = React.useContext(ThemeModeContext);
       const [signOut, loading, error] = useSignOut(auth);
    return (
        <>
            <CustomMenuButton
                disabled
                text="My Stuff"
                leftIcon={<AccountCircleOutlinedIcon />}
            />
            <Divider sx={{ my: "14px" }} />

            <CustomMenuSwitchButton text="Online Status" />

            <CustomMenuButton text="Profile" leftIcon={<h1></h1>} />
            <CustomMenuButton text="Create Avatar" leftIcon={<h1></h1>} />
            <CustomMenuButton text="User Settings" leftIcon={<h1></h1>} />
            <Divider sx={{ my: "14px" }} />
            <CustomMenuButton
                disabled
                text="View Options"
                leftIcon={<SettingsSuggestOutlinedIcon />}
            />

            <CustomMenuSwitchButton
                onClick={themeMode.toggleThemeMode}
                text="Dark Mode"
                checked={themeMode.isDarkMode}
            />
            <CustomMenuButton
                text="Create a Community"
                leftIcon={
                    <Typography ml="4px" fontSize="18px">
                        /r
                    </Typography>
                }
            />
            <CustomMenuButton
                text="Advertise on Reddit"
                leftIcon={<CampaignOutlinedIcon />}
            />
            <CustomMenuButton leftIcon={<CopyrightOutlinedIcon />}>
                <Box textAlign="center" flexDirection={"column"}>
                    <Typography>Coins</Typography>
                    <Typography component={"small"} fontSize="12px">
                        0 coins
                    </Typography>
                </Box>
            </CustomMenuButton>
            <CustomMenuButton
                text="Premium"
                leftIcon={<LocalPoliceOutlinedIcon />}
            />
            <CustomMenuButton text="Talk" leftIcon={<AdjustOutlinedIcon />} />
            <CustomMenuButton
                text="Explore"
                leftIcon={<ExploreRoundedIcon />}
                rightIcon={<ExpandMoreOutlinedIcon />}
            />

            <CustomMenuButton
                text="Help Center"
                leftIcon={<HelpOutlineRoundedIcon />}
            />
            <CustomMenuButton
                text="More"
                leftIcon={<ErrorOutlineOutlinedIcon />}
                rightIcon={<ExpandMoreOutlinedIcon />}
            />

            <CustomMenuButton
                text="Terms & Policy"
                leftIcon={<SpeakerNotesOutlinedIcon />}
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <Divider sx={{ my: "14px" }} />
            <CustomMenuButton
                text="LogOut"
                onClick={signOut}
                leftIcon={<LoginOutlinedIcon />}
            />

            <Typography component={"div"} sx={{ p: "4px", ml: "18px" }}>
                <Typography fontSize="12px" component={"small"}>
                    © 2023 Reddit Clone, Inc. All rights reserved made by
                    oussama bennabi
                </Typography>
            </Typography>
        </>
    );
};

export default UserDropDownMenu;
