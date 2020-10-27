package spring.eventsapi.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.eventsapi.Models.FileImage;

@Repository
public interface FileImageRepository extends JpaRepository<FileImage, Integer> {
    
    public FileImage findTopByOrderByIdDesc();
}
