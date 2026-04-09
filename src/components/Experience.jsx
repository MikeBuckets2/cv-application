import { useState } from 'react';
import '../styles/Section.css';

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateTo: '',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="section-card">
      <h2>Work Experience</h2>

      {isEditing ? (
        <div>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
            />
          </div>
          <div className="form-group">
            <label>Position Title</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Software Developer"
            />
          </div>
          <div className="form-group">
            <label>Main Responsibilities</label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              placeholder="Describe your main responsibilities..."
            />
          </div>
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
              placeholder="Jan 2020"
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input
              type="text"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
              placeholder="Present"
            />
          </div>
          <div className="button-group">
            <button className="btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="display-field"><span>Company: </span>{formData.company}</p>
          <p className="display-field"><span>Position: </span>{formData.position}</p>
          <p className="display-field"><span>Responsibilities: </span>{formData.responsibilities}</p>
          <p className="display-field"><span>Dates: </span>{formData.dateFrom} – {formData.dateTo}</p>
          <div className="button-group">
            <button className="btn-edit" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;