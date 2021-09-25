import './Resume.css';
import React from 'react';
import { Grid, Icon, Paper, Typography } from '@mui/material';
import resumeData from '../../utils/resumeData';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import { TimelineContent, TimelineDot, TimelineItem } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';

const Resume = () => {
    return (
        <>
            {/* about me */}
            <Grid container className="section pb_10 pt_25 pl_30" >
                <Grid item className="section_title mb_30">
                    <span></span>
                    <Typography variant="h5" className="section_title_text">About Me</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" className="section_about_text">{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* education */}
            <Grid container className="section pb_10 pt_25 pl_30" >
                <Grid item className="section_title mb_30">
                        <span></span>
                    <Typography variant="h5" className="section_title_text">Resume</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                                {
                                    resumeData.experiences.map(experience => {
                                        return(
                                            <TimelineItem>
                                                <CustomTimelineSeparator />
                                            <TimelineContent>
                                                <Typography className="titmeline_title">
                                                    {experience.title}
                                                </Typography>
                                                <Typography variant="body2" className="timeline_date">
                                                    {experience.date}
                                                </Typography>
                                                <Typography className="timeline_description">
                                                    {experience.description}
                                                </Typography>
                                            </TimelineContent>
                                            </TimelineItem>
                                        )                                        
                                    })
                                }
                            </CustomTimeline>
                        </Grid>
                        <Grid item sm={12} md={6}>
                        <CustomTimeline title="Education" icon={<SchoolIcon />}>
                                {
                                    resumeData.education.map(education => {
                                        return(
                                            <TimelineItem>
                                                <CustomTimelineSeparator />
                                            <TimelineContent>
                                                <Typography className="titmeline_title">
                                                    {education.title}
                                                </Typography>
                                                <Typography variant="body2" className="timeline_date">
                                                    {education.date}
                                                </Typography>
                                                <Typography className="timeline_description">
                                                    {education.description}
                                                </Typography>
                                            </TimelineContent>
                                            </TimelineItem>
                                        )                                        
                                    })
                                }
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            {/* services */}
            <Grid container className="section pb_10 pt_25 pl_30" >
                <Grid item className="section_title mb_30">
                    <span></span>
                    <Typography variant="h5" className="section_title_text">My Services</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent='space-around'>
                        {
                            resumeData.services.map(service => (
                                <Grid item xs={12} sm={6} mb={3} lg={3}>
                                    <div className="service">
                                        <div className="service_icon">{service.icon}</div>
                                        <Typography className="service_title" variant="h6"> {service.title}</Typography>
                                        <Typography className="service_description" variant="body2">{service.description}</Typography>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
            
            {/* skills */}
            <Grid container className="section pb_10 pt_25 pl_30" >
                <Grid item className="all_skills" spacing={4} justifyContent="space-between">
                    {resumeData.skills.map(skill => (
                        <Grid item xs={12} sm={12} md={3} className="skill_bottom">
                            <Paper elevstion={0} className="skill pb_10" >
                                <Typography variant="h6" className="skill_title">
                                    {skill.title}
                                </Typography>
                                {
                                    skill.description.map(element => (
                                        <Typography variant="body2" className="skill_description">
                                            <TimelineDot variant="outlined" className="timeline_dot">                              
                                            </TimelineDot>
                                            <span>{element}</span>
                                        </Typography>
                                    ))
                                }
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* contact */}
            <Grid container="" >

            </Grid>
        </>
    );
};

export default Resume;