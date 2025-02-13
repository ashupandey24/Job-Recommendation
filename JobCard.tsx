import React from "react";
import { Job } from "../types/JobTypes";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
    </div>
  );
};

export default JobCard;
