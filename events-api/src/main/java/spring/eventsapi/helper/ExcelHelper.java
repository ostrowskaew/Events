package spring.eventsapi.helper;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import spring.eventsapi.Models.Reservation;


public class ExcelHelper {
  public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  static String[] HEADERs = { "Name", "Surname", "ID/ passport", "ESN card", "Gender", "Phone number", "Nationality", "Payed" };
  static String SHEET = "Reservation";

  public static ByteArrayInputStream reservationsToExcel(List<Reservation> reservations) {

    try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
      Sheet sheet = workbook.createSheet(SHEET);

      // Header
      Row headerRow = sheet.createRow(0);

      for (int col = 0; col < HEADERs.length; col++) {
        Cell cell = headerRow.createCell(col);
        cell.setCellValue(HEADERs[col]);
      }

      int rowIdx = 1;
      for (Reservation reservation : reservations) {
        Row row = sheet.createRow(rowIdx++);

        row.createCell(0).setCellValue(reservation.getUser().getNameUser());
        row.createCell(1).setCellValue(reservation.getUser().getSurname());
        row.createCell(2).setCellValue(reservation.getUser().getIdPassport());
        row.createCell(3).setCellValue(reservation.getUser().getCardNum());
        row.createCell(4).setCellValue(reservation.getUser().getSex());
        row.createCell(5).setCellValue(reservation.getUser().getPhoneNum());
        row.createCell(6).setCellValue(reservation.getUser().getNationality().getCountry());
        row.createCell(7).setCellValue(reservation.getPayed());
      }

      workbook.write(out);
      return new ByteArrayInputStream(out.toByteArray());
    } catch (IOException e) {
      throw new RuntimeException("fail to import data to Excel file: " + e.getMessage());
    }
  }
}