import { Paper } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <>
            <Paper sx={{
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3
        
            }}>
                <GoogleIcon fontSize={"medium"} />
                <WhatsAppIcon fontSize={"medium"} />
                <FacebookIcon fontSize={"medium"} />
                <InstagramIcon fontSize={"medium"} />
                <TwitterIcon fontSize={"medium"} />

            </Paper>
        </>
    )
}

export default Footer