import './Timeline.css'
import * as React from 'react';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Typography } from '@mui/material';

const CustomTimeline = ({title, icon, children}) => {
  return (
    <Timeline className="timeline">
        {/* item header */}
      <TimelineItem className="timeline_firstname">
        <TimelineSeparator>
          <TimelineDot className="timeline_dotheader" >
            {icon}
          </TimelineDot>
          <TimelineConnector /> 
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
      
    </Timeline>
  );
}

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className="separator_padding">
    <TimelineDot className="timeline_dot" variant='outlined' />
    <TimelineConnector />
  </TimelineSeparator>
)

export default CustomTimeline;