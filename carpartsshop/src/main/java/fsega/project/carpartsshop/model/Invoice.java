package fsega.project.carpartsshop.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Invoice {
    @EmbeddedId
    private InvoiceKey invoiceKey;

    @MapsId("customerId")
    @ManyToOne(fetch = FetchType.EAGER)
    private Customer customer;

    @MapsId("carPartId")
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private CarPart carPart;

    private String details;
    private Date date;
}
