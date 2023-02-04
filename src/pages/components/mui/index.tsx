import Paper from "@mui/material/Paper";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {
    Avatar,
    
    Box,
    
    Button,
    ButtonBase,
    ButtonBaseProps,
    ButtonProps,
    FormControlLabel,
    FormControlLabelProps,
    InputLabel,
    Link,
    Menu,
    MenuItem,
    MenuProps,
    TextField,
    TextFieldProps,
    Typography,
    useMediaQuery,
} from "@mui/material";

import Badge from "@mui/material/Badge";
import Switch, { SwitchProps } from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));
export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "3rem",
    color: theme.palette.mode === "light" ? "grey" : "",
    backgroundColor:
        theme.palette.mode === "light"
            ? alpha(theme.palette.common.black, 0.05)
            : alpha(theme.palette.common.white, 0.05),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    outline: "1px solid grey",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({

    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),

        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        flexGrow: 1,
       
        [theme.breakpoints.up("sm")]: {
            // width: "100%",
            "&:focus": {},
        },
    },
}));





export const CustomMenu = styled((props: MenuProps) => (
    <Menu elevation={0} {...props} />
))(({ theme }) => ({}));

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor:
                    theme.palette.mode === "dark" ? "#2e55ca" : "#3445c4",
                opacity: 1,
                border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));

export const CustomCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.primary,
}));



export const Logo = () => {
    const theme = useTheme();
    const hideReddit = useMediaQuery("(min-width:1070px)");

    return (
        <Typography
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                height: "100%",
            }}
            component={"div"}
        >
            <Link sx={{ display: "flex", justifyContent: "center" }} href="/">
                <svg
                    width={"32px"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <g>
                        <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                        <path
                            fill="#FFF"
                            d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
                        ></path>
                    </g>
                </svg>
            </Link>
            {hideReddit && (
                <Link
                    sx={{ display: "flex", justifyContent: "center" }}
                    href={"/"}
                >
                    <svg
                        width={"56.8px"}
                        viewBox="0 0 57 18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            fill={`${
                                theme.palette.mode === "light"
                                    ? "#121111F"
                                    : "#D7DADC"
                            }`}
                        >
                            <path d="M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"></path>
                            <circle
                                fill="#FF4500"
                                cx="47.26"
                                cy="3.44"
                                r="2.12"
                            ></circle>
                            <path d="M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"></path>
                            <path d="M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
                            <path d="M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
                            <path d="M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"></path>
                            <path d="M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"></path>
                        </g>
                    </svg>
                </Link>
            )}
        </Typography>
    );
};

import Tooltip from "@mui/material/Tooltip";
import { ReactElement } from "react";

interface CustomIconProps extends ButtonBaseProps {
    tooltipPlacment?:| "top"| "right"| "bottom"| "left"| "bottom-end"| "bottom-start"| "left-end"| "left-start"| "right-end"| "right-start"| "top-end"| "top-start"| undefined;
    tooltipTitle?: string;
    children: ReactElement<any, any>;
    btnBgColor?: string;
    btnPadding?: string;
    text?:string
};

export const CustomIcon = ({
    tooltipPlacment,
    tooltipTitle,
    children,
    btnBgColor,
    btnPadding,
    sx,
    onClick,
}: CustomIconProps) => {
    return (
        <Tooltip arrow title={tooltipTitle} placement={tooltipPlacment}>
            <IconButton
                color="secondary"
                sx={{
                    backgroundColor: btnBgColor,
                    borderRadius: "0.4rem",
                    p: btnPadding,
                    ...sx,
                }}
                onClick={onClick}
            >
                {children}
            </IconButton>
        </Tooltip>
    );
};


export const CustomIconWithText = ({
    tooltipPlacment,
    children,
    tooltipTitle,
    text,
}: CustomIconProps) => {
    return (
        <CustomIcon
            tooltipPlacment={tooltipPlacment}
            tooltipTitle={tooltipTitle}
        >
            <>
                {children}
                <Typography
                    ml=".3rem"
                    component={"small"}
                    fontSize="12px"
                    fontWeight={"bold"}
                >
                    {text}
                </Typography>
            </>
        </CustomIcon>
    );
};



interface CustomExpandButtonProps extends ButtonBaseProps {
    leftIcon?: ReactElement<any, any>;
    rightIcon?: ReactElement<any, any>;
    width?: string;
    onClick?: (args?: any) => void;
};

export const CustomExpandButton = ({
    children,
    leftIcon,
    rightIcon,
    width,
    onClick,
}: CustomExpandButtonProps) => {
    return (
        <Button
            onClick={onClick}
            color="primary"
            sx={{
                width: width,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: ".4rem",
                marginLeft: ".6rem",
                textTransform: "none",
                outline: "1px solid #535353eb",
                px: ".3rem",
                "&:hover": {
                    outline: "1px solid #919191eb",
                    backgroundColor: "transparent",
                },
            }}
        >
            {leftIcon}
            {children}
            <Typography display={"flex"} ml="auto" component={"span"}>
                {rightIcon}
            </Typography>
        </Button>
    );
};

type CustomAvatarProps = {
    imgSrc: string;
    sx?:React.CSSProperties
};
export const CustomAvatar = ({ imgSrc,sx }: CustomAvatarProps) => {
    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
        >
            <Avatar
                sx={{
                    
                    bgcolor: "#60017a",
                    width: 24,
                    height: 24,
                    borderRadius: "4px",
                    ...sx
                }}
                alt="Remy Sharp"
            />
        </StyledBadge>
    );
};

type CustomMenuButtonProps = {
    text?: string;
    children?: ReactElement<any, any>;
    leftIcon?: ReactElement<any, any>;
    rightIcon?: ReactElement<any, any>;
    width?: string;
    onClick?: (args?: any) => void;
    disabled?: boolean | undefined;
};

export const CustomMenuButton = ({
    leftIcon,
    disabled,
    rightIcon,
    width,
    text,
    onClick,
    children,
    
}: CustomMenuButtonProps) => {
    return (
        <MenuItem disabled={disabled} sx={{ my: "4px" }} onClick={onClick}>
            <Typography
                component={"div"}
                sx={{
                    position: "absolute",
                    ml: "6px",
                    display: "felx",
                    pt: "6px",
                }}
            >
                {leftIcon}
            </Typography>
            <Typography component={"div"} fontSize="14px" ml="52px">
                {text ? text : children}
            </Typography>
            <Typography display={"flex"} ml="auto" component={"span"}>
                {rightIcon}
            </Typography>
        </MenuItem>
    );
};
interface CustomSwitchButtonProps extends FormControlLabelProps {
    checked?: boolean|undefined;
};

export const CustomSwitchButton = ({ checked,...props }: CustomSwitchButtonProps) => {
    const { control,sx, ...others } = props
    return (
        <FormControlLabel
            sx={{ m: 0 }}
            control={<IOSSwitch checked={checked} />}
            {...others}
        />
    );
};
type CustomMenuSwitchButtonProps = {
    text: String;
    onClick?: () => void;
    checked?: boolean;
};
export const CustomMenuSwitchButton = ({
    text,
    onClick,
    checked,
}: CustomMenuSwitchButtonProps) => {
    return (
        <MenuItem>
            <InputLabel
                sx={{
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    alignItems:"center"
                }}
            >
                <Typography
                    color="primary"
                    component={"div"}
                    fontSize="14px"
                    ml="52px"
                >
                    {text}
                </Typography>
                <Typography
                    onClick={onClick}
                    display={"flex"}
                    ml="auto"
                    component={"span"}
                >
                    <CustomSwitchButton checked={checked} />
                </Typography>
            </InputLabel>
        </MenuItem>
    );
};




export const SecondaryButton = styled((props: ButtonProps) => (
    <Button sx={{ p: "0.1rem" }} {...props}>
        {props.children}
    </Button>
))(({ theme }) => ({
    p: ".1rem",
    backgroundColor: `${
        theme.palette.mode === "dark" ? "transparent" : "transparent"
    } `,
    outline: "1px solid #FC471E",
    borderRadius: "20rem",
    color: `${theme.palette.mode === "dark" ? "grey" : "#424242"} `,
    textTransform: "none",
    fontWeight: "bold",
    "&:hover": {
        backgroundColor: `${theme.palette.mode === "dark" ? "#DD4A1517" : ""} `,
    },
}));

export const PrimaryButton = styled((props: ButtonProps) => (
    <Button sx={{ p: "0.1rem" }} {...props}>
        {props.children}
    </Button>
))(({ theme }) => ({
    backgroundColor: `${
        theme.palette.mode === "dark" ? "#FC471E" : "#FC471E"
    } `,
    borderRadius: "20rem",
    color: `${theme.palette.mode === "dark" ? "white" : "white"} `,
    textTransform: "none",
    "&:hover": {
        backgroundColor: `${
            theme.palette.mode === "dark" ? "#fd6341" : "#fd6341"
        } `,
    },
}));


type CustomCommunityAvatarProps = {
    imgSrc: string;
};
export const CustomCommunityAvatar = ({ imgSrc }: CustomCommunityAvatarProps) => {
    return (
            <Avatar
                sx={{
                    bgcolor: "#60017a",
                    width: 24,
                    height: 24,
                    borderRadius: "4px",
                }}
                alt="Remy Sharp"
                src={imgSrc}
        />
    );
};

interface TabPanelProps  {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
               
                    children
                
            )}
        </div>
    );
}

export function a11yProps(index: number) {
    return {
        id: `post-form-tab-${index}`,
        "aria-controls": `post-form-${index}`,
    };
}


export  const modalStyles = {
    modal: {
        display: "flex",
        paddingInline: "1rem",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
    },
    modalContainer: {
        // maxWidth: "512px",
        maxHeight: "94%",
        bgcolor: "background.paper",
        borderRadius: "1rem",
        pt:"1rem"
    },
    modalContent: {
        py: "3rem",
       
    },
};

export const CustomTextField = styled((props: TextFieldProps) => (
    <TextField InputLabelProps={{
                  style: {
                      color: "grey",
                  },
              }} sx={{p:"0.1rem"}} {...props}/>
))(({ theme }) => ({
    //  Styles Goes Here
}));


// Custom MUI Component Boilerplate
// export const NAME_CM = styled((props: CM_PROPS) => (
//     <CM
//         {...props}
//     />
// ))(({ theme }) => ({
//     //  Styles Goes Here
// }));