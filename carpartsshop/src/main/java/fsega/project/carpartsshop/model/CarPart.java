package fsega.project.carpartsshop.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class CarPart extends BaseEntity{
    private String name;
    private Double price;
    private String description;
    private Integer stock;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Car car;
}
