import React from 'react';
import { useParams } from 'react-router-dom';
export default function DoctorDetails(props) {
  const doctorSlug = useParams().doctorSlug;
  const doctor = props.doctors.find((doctor) => doctor.slug === doctorSlug);
  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center ">
          <div class="col-lg-4 col-md-8 col-sm-10 ">
            <div class="single-doctor">
              <div class="icon color-3">
                <img alt={doctor.name} src={doctor.image} />
              </div>
              <div class="content">
                <h3>{doctor.name}</h3>
                <h4>{doctor.department}</h4>
                <h5>Price: {doctor.price}$</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
