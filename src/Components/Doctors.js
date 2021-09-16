import React, { useState } from 'react';
import DoctorCard from './DoctorCard';
import { Button } from 'react-bootstrap';
import DoctorAddModal from './DoctorAddModal';
import doctorStore from '../stores/doctorStore';
import { observer } from 'mobx-react';
function Doctors(props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const doctors = doctorStore.doctors.map((doctor) => (
    <DoctorCard key={doctor.id} doctor={doctor} />
  ));
  return (
    <>
      <section id="doctors" class="doctor-section pt-140">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-5 col-xl-6 col-lg-7">
              <div class="section-title text-center mb-30">
                <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Awesome doctors
                </h1>
                <Button onClick={openModal}>Add a doctor</Button>
                <DoctorAddModal
                  createDoctor={props.createDoctor}
                  isOpen={isOpen}
                  closeModal={closeModal}
                />
              </div>
            </div>
          </div>

          <div class="row justify-content-center">{doctors}</div>
        </div>
      </section>
    </>
  );
}
export default observer(Doctors);
