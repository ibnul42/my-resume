import './Resume.css';
import React from 'react';
import { Grid, Typography } from '@mui/material';
import resumeData from '../../utils/resumeData';

const Resume = () => {
    return (
        <>
            {/* about me */}
            <Grid container className="section pb_45" >
                <Grid item className="section_title mb_30">
                    <span></span>
                    <Typography variant="h5" className="section_title_text">About Me</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" className="section_about_text">{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* education */}
            <Grid container="" >

            </Grid>
            {/* skills */}
            <Grid container="" >

            </Grid>
            {/* contact */}
            <Grid container="" >

            </Grid>
        </>
    );
};

export default Resume;