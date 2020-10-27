package spring.eventsapi.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

import spring.eventsapi.Messages.ResponseFile;
import spring.eventsapi.Messages.ResponseMessage;
import spring.eventsapi.Models.FileImage;
import spring.eventsapi.Services.FileImageService;

@Controller
@CrossOrigin("http://localhost:4200")
public class FileImageController {
    
    @Autowired
    private FileImageService fileImageService;
  
    @PostMapping("/files")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
      String message = "";
      try {
        fileImageService.store(file);
  
        message = "Uploaded the file successfully: " + file.getOriginalFilename();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
      } catch (Exception e) {
        message = "Could not upload the file: " + file.getOriginalFilename() + "!";
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
      }
    }
  
    @GetMapping("/files")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
      List<ResponseFile> files = fileImageService.getAllFiles().map(dbFile -> {
        String fileDownloadUri = ServletUriComponentsBuilder
            .fromCurrentContextPath()
            .path("/files/")
            .path(dbFile.toString())
            .toUriString();
  
        return new ResponseFile(
            dbFile.getName(),
            fileDownloadUri,
            dbFile.getType(),
            dbFile.getData().length);
      }).collect(Collectors.toList());
  
      return ResponseEntity.status(HttpStatus.OK).body(files);
    }
  
    @GetMapping("/files/last")
    public ResponseEntity<byte[]> getLastFile() {
        FileImage file = fileImageService.getLastFile();
  
      return ResponseEntity.ok()
          .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
          .body(file.getData());
    }


    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable int id) {
        FileImage file = fileImageService.getFile(id);
  
      return ResponseEntity.ok()
          .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
          .body(file.getData());
    }
  }