import { Typography } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">@2021 All right reserved</Typography>
            </div>
            <div className="footer_right">
            <Typography className="footer_copyright">
                Design and developed by <a href="_blank">Ibnul Ashir</a>
            </Typography>
            </div>
        </div>
    );
};

export default Footer;