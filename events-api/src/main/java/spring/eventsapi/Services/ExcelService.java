package spring.eventsapi.Services;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.eventsapi.Models.Reservation;
import spring.eventsapi.Repositories.ReservationRepository;
import spring.eventsapi.helper.ExcelHelper;

@Service
public class ExcelService {
  @Autowired
  ReservationRepository repository;

  public ByteArrayInputStream load() {
    List<Reservation> reservations =  new ArrayList<>();
    repository.findAll().forEach(reservations::add);

    ByteArrayInputStream in = ExcelHelper.reservationsToExcel(reservations);
    return in;
  }

}