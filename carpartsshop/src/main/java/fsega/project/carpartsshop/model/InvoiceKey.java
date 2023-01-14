package fsega.project.carpartsshop.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class InvoiceKey implements Serializable {
    private Long customerId;
    private Long carPartId;
}
