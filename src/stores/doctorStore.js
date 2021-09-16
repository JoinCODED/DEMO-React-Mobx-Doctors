import { makeObservable, observable, action } from 'mobx';
import slugify from 'react-slugify';
import doctorsData from '../doctorsData';
class DoctorStore {
  doctors = doctorsData;

  constructor() {
    makeObservable(this, {
      doctors: observable,
      createDoctor: action,
    });
  }

  createDoctor = (doctor) => {
    doctor.id = this.doctors[this.doctors.length - 1].id + 1;
    doctor.slug = slugify(doctor.name);
    this.doctors.push(doctor);
  };
}

const doctorStore = new DoctorStore();
export default doctorStore;
