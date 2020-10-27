package spring.eventsapi.Services;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import spring.eventsapi.Models.FileImage;
import spring.eventsapi.Repositories.FileImageRepository;

@Service
public class FileImageService {
    
    @Autowired
    private FileImageRepository fileImageRepository;

    public FileImage store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileImage fileImage = new FileImage(fileName, file.getContentType(), file.getBytes());
    
        return fileImageRepository.save(fileImage);
      }

      public FileImage getFile(int id) {
        return fileImageRepository.findById(id).get();
      }
      
      public Stream<FileImage> getAllFiles() {
        return fileImageRepository.findAll().stream();
      }

      public FileImage getLastFile() {
        return fileImageRepository.findTopByOrderByIdDesc();
      }

      public int getLastFileId() {
        return fileImageRepository.findTopByOrderByIdDesc().getId();
      }
}
