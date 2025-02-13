import React, { useState } from "react";
import { Job } from "../types/JobTypes";
import JobCard from "./JobCard";
import "./../styles/JobRecommender.css"; // Importing CSS

const jobList: Job[] = [
  { id: 1, title: "Frontend Developer", category: "Web Development", skills: ["React", "TypeScript"], company: "Tech Corp" },
  { id: 2, title: "Data Scientist", category: "Data Science", skills: ["Python", "SQL"], company: "AI Labs" },
  { id: 3, title: "Backend Developer", category: "Web Development", skills: ["Node.js", "MongoDB"], company: "CloudSoft" },
  { id: 4, title: "Machine Learning Engineer", category: "Data Science", skills: ["TensorFlow", "Python"], company: "DeepMind" },
];

const JobRecommender: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [userSkills, setUserSkills] = useState<string[]>([]);

  // Filter jobs based on search query and category
  const filteredJobs = jobList.filter(job =>
    (job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase())) &&
    (category ? job.category === category : true)
  );

  // Recommend jobs based on user skills (basic matching)
  const recommendedJobs = jobList.filter(job =>
    userSkills.some(skill => job.skills.includes(skill))
  );

  return (
    <div className="container">
      <h1 className="title">Job Recommender</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Data Science">Data Science</option>
      </select>

      <div>
        <h2 className="subtitle">Enter Your Skills (comma separated):</h2>
        <input
          type="text"
          className="input"
          placeholder="e.g., React, Python"
          onBlur={(e) => setUserSkills(e.target.value.split(",").map(skill => skill.trim()))}
        />
      </div>

      <h2 className="subtitle">Recommended Jobs (Based on Skills)</h2>
      <div className="job-list">
        {recommendedJobs.length > 0 ? recommendedJobs.map(job => (
          <JobCard key={job.id} job={job} />
        )) : <p>No recommendations found.</p>}
      </div>

      <h2 className="subtitle">All Jobs</h2>
      <div className="job-list">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobRecommender;
