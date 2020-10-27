package spring.eventsapi.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "files")
public class FileImage {
    
  @Id
  @GeneratedValue
  private int id;

  private String name;

  private String type;

  @Lob
  private byte[] data;


    public FileImage() {
    }


    public FileImage(String name, String type, byte[] data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return this.data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
    

    @Override
    public String toString() {
        return Integer.toString(getId());
    }

}
