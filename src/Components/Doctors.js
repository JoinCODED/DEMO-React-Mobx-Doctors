import React from 'react';
import DoctorCard from './DoctorCard';

export default function Doctors(props) {
  const doctors = props.doctors.map((doctor) => (
    <DoctorCard key={doctor.id} doctor={doctor} />
  ));
  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Awesome doctors
              </h1>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">{doctors}</div>
      </div>
    </section>
  );
}
