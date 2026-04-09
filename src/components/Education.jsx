import { useState } from 'react';
import '../styles/Section.css';

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    school: '',
    titleOfStudy: '',
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
      <h2>Education</h2>

      {isEditing ? (
        <div>
          <div className="form-group">
            <label>School Name</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="University of Example"
            />
          </div>
          <div className="form-group">
            <label>Title of Study</label>
            <input
              type="text"
              name="titleOfStudy"
              value={formData.titleOfStudy}
              onChange={handleChange}
              placeholder="B.S. Computer Science"
            />
          </div>
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
              placeholder="Aug 2018"
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input
              type="text"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
              placeholder="May 2022"
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
          <p className="display-field"><span>School: </span>{formData.school}</p>
          <p className="display-field"><span>Degree: </span>{formData.titleOfStudy}</p>
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

export default Education;