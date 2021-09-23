import "./Profile.css";
import "../../App.css"
import myImage from "../../assets/images/IMG_4603.JPG";
import { Typography } from "@mui/material";
import React from "react";
import resumeData from "../../utils/resumeData";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import { Download, PersonalVideoOutlined } from "@mui/icons-material";
import BasicButton from "../Button/Button";

const CustomTimelineItem = ({ title, text, link }) => {
  // return (
  //     <h1>{title}</h1>
  // );
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span >{title}: </span>{text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonalVideoOutlined />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => {
            console.log(key)
            return (<CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />)
          })}
        </CustomTimeline>
      </div>
      <div className="button_container">
      <BasicButton text="Download CV" icon={<Download />} />
      </div>
    </div>
  );
};

export default Profile;
