package fsega.project.carpartsshop.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@MappedSuperclass
public class BaseEntity implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
}
