import {Component, OnInit} from '@angular/core';
import { Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  newAppointmentTitle: String = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];


  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppoint: Appointment = {
        id: 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppoint);
      this.resetFields();

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }


  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

  private resetFields() {
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();
  }
}
