import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorCard(props) {
  const doctor = props.doctor;
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <Link to={`/doctors/${doctor.slug}`}>
        <div class="single-doctor">
          <div class="icon color-3">
            <img alt={doctor.name} src={doctor.image} />
          </div>
          <div class="content">
            <h3>{doctor.name}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
