import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../reservation.service";
import {Reservation} from "../../models/reservation";
import {ActivatedRoute, Router} from "@angular/router";
import {checkOutAfterCheckInValidator, futureDateValidator, roomNumberValidator} from "./custom-form-validators";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', [Validators.required, futureDateValidator()]],
      checkOutDate: ['', [Validators.required, checkOutAfterCheckInValidator('checkInDate')]],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required, roomNumberValidator()]],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservation(id)
        .subscribe((reservation) => {
          console.log(reservation)
          if (reservation) {
            console.log(reservation)
            this.reservationForm.patchValue(reservation);
          }})
    }
  }

  onsubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        reservation.id = id;
        this.reservationService.updateReservation(id, reservation)
          .subscribe(() => {
            console.log("Update request Processed")
          });
      } else {
        this.reservationService.addReservation(reservation)
          .subscribe(() => {
            console.log("Create request Processed")
          });
      }

      this.router.navigate(['/list']);
    }
  }


}
