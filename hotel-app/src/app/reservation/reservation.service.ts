import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  // private apiUrl = "http://localhost:3001"

  private reservations: Reservation[] = [];


  constructor() {
    let savedReservations = localStorage.getItem("reservations")
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: String): Reservation {
    const reservation = this.reservations.find(result => result.id === id);
    if (!reservation) {
      throw new Error(`Reservation with id ${id} not found`);
    }
    return reservation;
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: String): void {
    let indexToDelete = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(indexToDelete, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: String, updatedReservation: Reservation): void {
    let indexToUpdate = this.reservations.findIndex(res => res.id === id);
    this.reservations[indexToUpdate] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

}
