package fsega.project.carpartsshop.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Car extends BaseEntity{
    private String make;
    private String model;
    private String fuelType;
    private Integer year;
}
